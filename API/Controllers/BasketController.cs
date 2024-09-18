using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        public StoreContext _context { get; }
        public BasketController(StoreContext storeContext)
        {
            _context = storeContext;
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();
            return MapBasketToDto(basket);
        }


        [HttpPost]
        public async Task<ActionResult<BasketDto>> AddItemToBasket(Guid productId, int quantity)
        {
            //get basket
            var basket = await RetrieveBasket();
            // if no basket create one
            if (basket == null) basket = CreateBasket();

            //get product
            var product = await _context.Products.FindAsync(productId);
            if (product == null) return NotFound();

            //add product to basket
            basket.AddItem(product, quantity);

            //save changes
            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetBasket", MapBasketToDto(basket));

            return BadRequest(new ProblemDetails
            {
                Title = "Failed to add item to basket",
                Detail = "Failed to add item to basket"
            });
        }



        [HttpDelete]
        public async Task<ActionResult> RemoveItemFromBasket(Guid productId, int quantity)
        {
            //get basket
            var basket = await RetrieveBasket();
            if (basket == null) return NotFound();

            basket.RemoveItem(productId, quantity);

            //save changes
            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem removing item from the basket" });
        }

        private async Task<Basket> RetrieveBasket()
        {
            var buyerId = Guid.TryParse(Request.Cookies["buyerId"], out var parsedBuyerId) ? parsedBuyerId : Guid.Empty;
            var basket = await _context.Baskets
                    .Include(x => x.Items)
                    .ThenInclude(x => x.Product)
                    .FirstOrDefaultAsync(x => x.BuyerId == buyerId);

            return basket;
        }

        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.Now.AddDays(30)
            };

            Response.Cookies.Append("buyerId", buyerId, cookieOptions);

            var basket = new Basket { BuyerId = Guid.Parse(buyerId) };
            _context.Baskets.Add(basket);
            return basket;
        }


        private BasketDto MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(x => new BasketItemDto
                {
                    ProductId = x.Product.Id,
                    Name = x.Product.Name,
                    Price = x.Product.Price,
                    PictureUrl = x.Product.PictureUrl,
                    Brand = x.Product.Brand,
                    Type = x.Product.Type,
                    Quantity = x.Quantity
                }).ToList()
            };
        }
    }
}
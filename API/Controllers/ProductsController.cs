using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController(StoreContext context) : BaseApiController
    {
        private readonly StoreContext _context = context;

        [HttpGet]
        [ResponseCache(NoStore = true)] // Без cache за актуални данни за stock
        public async Task<ActionResult<List<Product>>> GetProducts([FromQuery] ProductParams productParams)
        {
            var query = _context.Products
            .AsNoTracking() // Добави за по-бърза заявка
            .Sort(productParams.OrderBy)
            .Search(productParams.SearchTerm)
            .Filter(productParams.Brand, productParams.Type)
            .AsQueryable();

            var products = await PagedList<Product>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);

            Response.AddPaginationHeader(products.MetaData);

            return products;
        }

        [HttpGet("{id}")]
        [ResponseCache(NoStore = true)] // Без cache за индивидуални продукти
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {

            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpGet("recently-added")]
        [ResponseCache(NoStore = true)] // Без cache за актуални продукти
        public async Task<ActionResult<List<Product>>> GetRecentlyAddedProducts()
        {
           var result= await _context.Products
           .OrderBy(x => x.Id)
           .Take(4)
           .ToListAsync();
           if (result == null || result.Count == 0)
           {
               throw new Exception("No recently added products found.");
           }
           return result;
        }

        [HttpGet("filters")]
        [ResponseCache(Duration = 300)] // Cache за 5 минути - filters се менят рядко
        public async Task<IActionResult> GetFilters()
        {
            var brands = await _context.Products
            .Select(x => x.Brand)
            .Distinct()
            .ToListAsync();

            var types = await _context.Products
            .Select(x => x.Type)
            .Distinct()
            .ToListAsync();

            return Ok(new { brands, types });
        }
    }
}
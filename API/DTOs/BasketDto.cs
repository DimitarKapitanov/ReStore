using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class BasketDto
    {
        public Guid Id { get; set; }
        public Guid BuyerId { get; set; }
        public List<BasketItemDto> Items { get; set; }
    }
}
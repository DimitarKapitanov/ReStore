using System.ComponentModel.DataAnnotations.Schema;
using API.Data;

namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem : BaseDeletableModel<Guid>
    {
        public int Quantity { get; set; }
        public Guid ProductId { get; set; }
        public Product Product { get; set; }
        public Guid BasketId { get; set; }
        public Basket Basket { get; set; }
    }
}
using System;

namespace DataAccess.Models
{
    public sealed class ReceiptProducts
    {
        public Guid ReceiptId { get; set; }
        public Receipt Receipt { get; set; }
        public Guid ProductId { get; set; }
        public Product Product { get; set; }
    }
}

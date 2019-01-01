using System;
using System.Collections.Generic;

namespace DataAccess.Models
{
    public sealed class Receipt : EntityBase
    {
        public DateTime ShoppingDate { get; set; }
        public string Place { get; set; }
        public Currency Currency { get; set; }
        public List<ReceiptProducts> ProductItems { get; set; }
    }
}
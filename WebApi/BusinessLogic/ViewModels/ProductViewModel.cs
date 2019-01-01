using DataAccess.Models;
using System;

namespace BusinessLogic.ViewModels
{
    public sealed class ProductViewModel
    {
        private Product _product;

        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Ammount { get; set; }
        public MeasureUnit MeasureUnit { get; set; }
        public bool IsValid() => true;
    }
}

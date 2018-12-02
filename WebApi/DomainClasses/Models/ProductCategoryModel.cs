using System;

namespace Domain.Models
{
    public sealed class ProductCategoryModel
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public bool IsActive { get; private set; }

        private ProductCategoryModel()
        { }
    }
}

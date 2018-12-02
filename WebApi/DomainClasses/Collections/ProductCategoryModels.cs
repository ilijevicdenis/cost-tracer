using Domain.Models;
using System.Collections.Generic;

namespace Domain.Collections
{
    public sealed class ProductCategoryModels : CollectionBase<ProductCategoryModel>
    {
        public ProductCategoryModels(IEnumerable<ProductCategoryModel> items) : base(items)
        {
        }
    }
}

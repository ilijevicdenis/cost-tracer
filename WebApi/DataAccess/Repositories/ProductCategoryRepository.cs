using DataAccess.Interfaces;
using Domain.Collections;
using Domain.Models;
using System;
using System.Linq;

namespace DataAccess.Repositories
{
    public sealed class ProductCategoryRepository : IRepository<ProductCategoryModel>, IGetAll<ProductCategoryModels>
    {
        private readonly CostTracerContext _context;

        public ProductCategoryRepository(CostTracerContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public void Delete(ProductCategoryModel model)
        {
            try
            {
                _context.ProductCategoryContext.Remove(model);
                _context.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public ProductCategoryModels GetAll()
        {
            try
            {
                var items = _context.ProductCategoryContext.Where(item => item.IsActive).ToList();
                return new ProductCategoryModels(items);
            }
            catch
            {
                throw;
            }
        }

        public ProductCategoryModel GetById(Guid id)
        {
            try
            {
                return _context.ProductCategoryContext.Where(prodCat => prodCat.Id == id).FirstOrDefault();
            }
            catch
            {
                throw;
            }
        }

        public void Insert(ProductCategoryModel model)
        {
            try
            {
                _context.ProductCategoryContext.Add(model);
                _context.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void Update(ProductCategoryModel model)
        {
            try
            {
                _context.ProductCategoryContext.Update(model);
                _context.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
    }
}

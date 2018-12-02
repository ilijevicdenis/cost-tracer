using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public sealed class CostTracerContext : DbContext
    {
        internal  DbSet<CurrencyModel>  CurrencyContext { get; set; }
        internal DbSet<MeasureUnitModel> MeasureUniContext { get; set; }
        internal DbSet<ProductCategoryModel> ProductCategoryContext { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CurrencyModel>().ToTable("Currency");
            modelBuilder.Entity<MeasureUnitModel>().ToTable("MeasureUnit");
            modelBuilder.Entity<ProductCategoryModel>().ToTable("ProductCategory");
        }

        public CostTracerContext (DbContextOptions<CostTracerContext> options) : base(options)
        {
        }
    }
}

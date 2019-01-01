using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public sealed class CostTracerContext : DbContext
    {

        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<MeasureUnit> MeausureUnits { get; set; }
        public DbSet<Currency> Currencies { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ReceiptProducts> ReceiptProducts { get; set; }

        public CostTracerContext(DbContextOptions<CostTracerContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ReceiptProducts>().ToTable("ReceiptsProducts")
                .HasKey(rp => new { rp.ProductId, rp.ReceiptId });
        }
    }
}

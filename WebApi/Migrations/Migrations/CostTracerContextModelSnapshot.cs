﻿// <auto-generated />
using System;
using DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Migrations.Migrations
{
    [DbContext(typeof(CostTracerContext))]
    partial class CostTracerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DataAccess.Models.Currency", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsActive");

                    b.Property<string>("IsoName");

                    b.HasKey("Id");

                    b.ToTable("Currencies");
                });

            modelBuilder.Entity("DataAccess.Models.MeasureUnit", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("MeausureUnits");
                });

            modelBuilder.Entity("DataAccess.Models.Product", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Ammount");

                    b.Property<Guid?>("MesureUnitId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("MesureUnitId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("DataAccess.Models.Receipt", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CurrencyId");

                    b.Property<string>("Place");

                    b.Property<DateTime>("ShoppingDate");

                    b.HasKey("Id");

                    b.HasIndex("CurrencyId");

                    b.ToTable("Receipts");
                });

            modelBuilder.Entity("DataAccess.Models.ReceiptProducts", b =>
                {
                    b.Property<Guid>("ProductId");

                    b.Property<Guid>("ReceiptId");

                    b.HasKey("ProductId", "ReceiptId");

                    b.HasIndex("ReceiptId");

                    b.ToTable("ReceiptsProducts");
                });

            modelBuilder.Entity("DataAccess.Models.Product", b =>
                {
                    b.HasOne("DataAccess.Models.MeasureUnit", "MesureUnit")
                        .WithMany()
                        .HasForeignKey("MesureUnitId");
                });

            modelBuilder.Entity("DataAccess.Models.Receipt", b =>
                {
                    b.HasOne("DataAccess.Models.Currency", "Currency")
                        .WithMany()
                        .HasForeignKey("CurrencyId");
                });

            modelBuilder.Entity("DataAccess.Models.ReceiptProducts", b =>
                {
                    b.HasOne("DataAccess.Models.Product", "Product")
                        .WithMany("ReceiptItems")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DataAccess.Models.Receipt", "Receipt")
                        .WithMany("ProductItems")
                        .HasForeignKey("ReceiptId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}

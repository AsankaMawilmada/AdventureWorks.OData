using AdventureWorks.OData.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.OData.Persistence.Configurations
{
    public class SalesOrderDetailConfiguration : IEntityTypeConfiguration<SalesOrderDetail>
    {
        public void Configure(EntityTypeBuilder<SalesOrderDetail> builder)
        {
            builder.ToTable("SalesOrderDetail", "SalesLT");

            builder.HasKey(e => new { e.SalesOrderId, e.SalesOrderDetailId })
                    .HasName("PK_SalesOrderDetail_SalesOrderID_SalesOrderDetailID");

            builder.HasIndex(e => e.RowGuid, "AK_SalesOrderDetail_rowguid")
                .IsUnique();

            builder.HasIndex(e => e.ProductId, "IX_SalesOrderDetail_ProductID");

            builder.Property(e => e.SalesOrderId)
                .HasColumnName("SalesOrderID");

            builder.Property(e => e.SalesOrderDetailId)
                .ValueGeneratedOnAdd()
                .HasColumnName("SalesOrderDetailID");

            builder.Property(e => e.LineTotal)
                .HasColumnType("numeric(38, 6)")
                .HasComputedColumnSql("(isnull(([UnitPrice]*((1.0)-[UnitPriceDiscount]))*[OrderQty],(0.0)))", false);

            builder.Property(e => e.ModifiedDate)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())");

            builder.Property(e => e.OrderQty);

            builder.Property(e => e.ProductId)
                .HasColumnName("ProductID");

            builder.Property(e => e.RowGuid)
                .HasColumnName("rowguid")
                .HasDefaultValueSql("(newid())");

            builder.Property(e => e.UnitPrice)
                .HasColumnType("money");

            builder.Property(e => e.UnitPriceDiscount)
                .HasColumnType("money");

            builder
                .HasOne(d => d.Product)
                .WithMany(p => p.SalesOrderDetails)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            builder.HasOne(d => d.SalesOrder)
                .WithMany(p => p.SalesOrderDetails)
                .HasForeignKey(d => d.SalesOrderId);
        }
    }
}

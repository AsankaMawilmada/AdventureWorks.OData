using AdventureWorks.OData.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.OData.Persistence.Configurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
                builder.ToTable("Product", "SalesLT");

                builder.HasIndex(e => e.Name, "AK_Product_Name")
                    .IsUnique();

                builder.HasIndex(e => e.ProductNumber, "AK_Product_ProductNumber")
                    .IsUnique();

                builder.HasIndex(e => e.RowGuid, "AK_Product_rowguid")
                    .IsUnique();

                builder.Property(e => e.ProductId)
                    .HasColumnName("ProductID");

                builder.Property(e => e.Color)
                    .HasMaxLength(15);

                builder.Property(e => e.DiscontinuedDate)
                    .HasColumnType("datetime");

                builder.Property(e => e.ListPrice)
                    .HasColumnType("money");

                builder.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                builder.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                builder.Property(e => e.ProductCategoryId)
                    .HasColumnName("ProductCategoryID");

                builder.Property(e => e.ProductModelId)
                    .HasColumnName("ProductModelID");

                builder.Property(e => e.ProductNumber)
                    .IsRequired()
                    .HasMaxLength(25);

                builder.Property(e => e.RowGuid)
                    .HasColumnName("rowguid")
                    .HasDefaultValueSql("(newid())");

                builder.Property(e => e.SellEndDate)
                    .HasColumnType("datetime");

                builder.Property(e => e.SellStartDate)
                    .HasColumnType("datetime");

                builder.Property(e => e.Size)
                    .HasMaxLength(5);

                builder.Property(e => e.StandardCost)
                    .HasColumnType("money");

                builder.Property(e => e.ThumbNailPhoto);

                builder.Property(e => e.ThumbnailPhotoFileName)
                    .HasMaxLength(50);

                builder.Property(e => e.Weight)
                    .HasColumnType("decimal(8, 2)");

                //builder.HasOne(d => d.ProductCategory)
                //    .WithMany(p => p.Products)
                //    .HasForeignKey(d => d.ProductCategoryId);

                //builder.HasOne(d => d.ProductModel)
                //    .WithMany(p => p.Products)
                //    .HasForeignKey(d => d.ProductModelId);

        }
    }
}

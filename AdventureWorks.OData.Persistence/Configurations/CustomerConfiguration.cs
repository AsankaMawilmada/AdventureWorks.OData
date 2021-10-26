using AdventureWorks.OData.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.OData.Persistence.Configurations
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Customer", "SalesLT");

            builder.HasIndex(e => e.RowGuid, "AK_Customer_rowguid")
                .IsUnique();               

            builder.HasIndex(e => e.EmailAddress, "IX_Customer_EmailAddress");

            builder.Property(e => e.CustomerId)
                .HasColumnName("CustomerID");

            builder.Property(e => e.CompanyName)
                .HasMaxLength(128);

            builder.Property(e => e.EmailAddress)
                .HasMaxLength(50);

            builder.Property(e => e.FirstName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.LastName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.MiddleName)
                .HasMaxLength(50);

            builder.Property(e => e.ModifiedDate)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())");

            builder.Property(e => e.NameStyle);

            builder.Property(e => e.PasswordHash)
                .IsRequired()
                .HasMaxLength(128)
                .IsUnicode(false);

            builder.Property(e => e.PasswordSalt)
                .IsRequired()
                .HasMaxLength(10)
                .IsUnicode(false);

            builder.Property(e => e.Phone)
                .HasMaxLength(25);

            builder.Property(e => e.RowGuid)
                .HasColumnName("rowguid")
                .HasDefaultValueSql("(newid())");

            builder.Property(e => e.SalesPerson)
                .HasMaxLength(256);

            builder.Property(e => e.Suffix)
                .HasMaxLength(10);

            builder.Property(e => e.Title)
                .HasMaxLength(8);
        }
    }
}

using AdventureWorks.OData.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.OData.Persistence.Configurations
{
    public class CustomerAddressConfiguration : IEntityTypeConfiguration<CustomerAddress>
    {
        public void Configure(EntityTypeBuilder<CustomerAddress> builder)
        {
            builder.ToTable("CustomerAddress", "SalesLT");

            builder.HasKey(e => new { e.CustomerId, e.AddressId })
                .HasName("PK_CustomerAddress_CustomerID_AddressID");

            builder.HasIndex(e => e.Rowguid, "AK_CustomerAddress_rowguid")
                .IsUnique();

            builder.Property(e => e.CustomerId)
                .HasColumnName("CustomerID");

            builder.Property(e => e.AddressId)
                .HasColumnName("AddressID");

            builder.Property(e => e.AddressType)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.ModifiedDate)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())");

            builder.Property(e => e.Rowguid)
                .HasColumnName("rowguid")
                .HasDefaultValueSql("(newid())");

            builder.HasOne(d => d.Address)
                .WithMany(p => p.CustomerAddresses)
                .HasForeignKey(d => d.AddressId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            builder.HasOne(d => d.Customer)
                .WithMany(p => p.CustomerAddresses)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        }
    }
}

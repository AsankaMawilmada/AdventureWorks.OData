using AdventureWorks.OData.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.OData.Persistence.Configurations
{

    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.ToTable("Address", "SalesLT");

            builder.HasIndex(e => e.RowGuid, "AK_Address_rowguid")
                .IsUnique();

            builder.HasIndex(e => new { e.AddressLine1, e.AddressLine2, e.City, e.StateProvince, e.PostalCode, e.CountryRegion }, "IX_Address_AddressLine1_AddressLine2_City_StateProvince_PostalCode_CountryRegion");

            builder.HasIndex(e => e.StateProvince, "IX_Address_StateProvince");

            builder.Property(e => e.AddressId)
                .HasColumnName("AddressID");

            builder.Property(e => e.AddressLine1)
                .IsRequired()
                .HasMaxLength(60);

            builder.Property(e => e.AddressLine2)
                .HasMaxLength(60);

            builder.Property(e => e.City)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(e => e.CountryRegion)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.ModifiedDate)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())");

            builder.Property(e => e.PostalCode)
                .IsRequired()
                .HasMaxLength(15);

            builder.Property(e => e.RowGuid)
                .HasColumnName("rowguid")
                .HasDefaultValueSql("(newid())");

            builder.Property(e => e.StateProvince)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}

using AdventureWorks.OData.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.OData.Persistence.Configurations
{
    public class SalesOrderHeaderConfiguration : IEntityTypeConfiguration<SalesOrderHeader>
    {
        public void Configure(EntityTypeBuilder<SalesOrderHeader> builder)
        {
            builder.ToTable("SalesOrderHeader", "SalesLT");

            //builder.HasKey(e => e.SalesOrderId)
            //    .HasName("PK_SalesOrderHeader_SalesOrderID");

            builder.HasIndex(e => e.SalesOrderNumber, "AK_SalesOrderHeader_SalesOrderNumber")
                .IsUnique();

            builder.HasIndex(e => e.Rowguid, "AK_SalesOrderHeader_rowguid")
                .IsUnique();

            builder.HasIndex(e => e.CustomerId, "IX_SalesOrderHeader_CustomerID");

            //builder.Property(e => e.SalesOrderId)
            //    .HasColumnName("SalesOrderID");

            builder.Property(e => e.AccountNumber)
                .HasMaxLength(15);

            builder.Property(e => e.BillToAddressId)
                .HasColumnName("BillToAddressID");

            builder.Property(e => e.Comment);

            builder.Property(e => e.CreditCardApprovalCode)
                .HasMaxLength(15)
                .IsUnicode(false);

            builder.Property(e => e.CustomerId)
                .HasColumnName("CustomerID");

            builder.Property(e => e.DueDate)
                .HasColumnType("datetime");

            builder.Property(e => e.Freight)
                .HasColumnType("money")
                .HasDefaultValueSql("((0.00))");

            builder.Property(e => e.ModifiedDate)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())");

            builder.Property(e => e.OnlineOrderFlag)
                .IsRequired()
                .HasDefaultValueSql("((1))");

            builder.Property(e => e.OrderDate)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())");

            builder.Property(e => e.PurchaseOrderNumber)
                .HasMaxLength(25);

            builder.Property(e => e.RevisionNumber);

            builder.Property(e => e.Rowguid)
                .HasColumnName("rowguid")
                .HasDefaultValueSql("(newid())");

            builder.Property(e => e.SalesOrderNumber)
                .IsRequired()
                .HasMaxLength(25)
                .HasComputedColumnSql("(isnull(N'SO'+CONVERT([nvarchar](23),[SalesOrderID]),N'*** ERROR ***'))", false);

            builder.Property(e => e.ShipDate)
                .HasColumnType("datetime");

            builder.Property(e => e.ShipMethod)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.ShipToAddressId)
                .HasColumnName("ShipToAddressID");

            builder.Property(e => e.Status)
                .HasDefaultValueSql("((1))");
            //.HasComment("Order current status. 1 = In process; 2 = Approved; 3 = Backordered; 4 = Rejected; 5 = Shipped; 6 = Cancelled");

            builder.Property(e => e.SubTotal)
                .HasColumnType("money")
                .HasDefaultValueSql("((0.00))");

            builder.Property(e => e.TaxAmt)
                .HasColumnType("money")
                .HasDefaultValueSql("((0.00))");

            builder.Property(e => e.TotalDue)
                .HasColumnType("money")
                .HasComputedColumnSql("(isnull(([SubTotal]+[TaxAmt])+[Freight],(0)))", false);

            builder.HasOne(d => d.BillToAddress)
                .WithMany(p => p.SalesOrderHeaderBillToAddresses)
                .HasForeignKey(d => d.BillToAddressId)
                .HasConstraintName("FK_SalesOrderHeader_Address_BillTo_AddressID");

            builder.HasOne(d => d.Customer)
                .WithMany(p => p.SalesOrderHeaders)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            builder.HasOne(d => d.ShipToAddress)
                .WithMany(p => p.SalesOrderHeaderShipToAddresses)
                .HasForeignKey(d => d.ShipToAddressId)
                .HasConstraintName("FK_SalesOrderHeader_Address_ShipTo_AddressID");

        }
    }
}

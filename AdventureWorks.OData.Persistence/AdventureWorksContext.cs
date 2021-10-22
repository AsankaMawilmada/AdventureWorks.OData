using AdventureWorks.OData.Core.Entity;
using AdventureWorks.OData.Persistence.Configurations;
using Microsoft.EntityFrameworkCore;
using System;

namespace AdventureWorks.OData.Persistence
{
	public class AdventureWorksContext : DbContext
    {
        public AdventureWorksContext(DbContextOptions options) : base(options) { }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<SalesOrderDetail> SalesOrderDetails { get; set; }
        public virtual DbSet<SalesOrderHeader> SalesOrderHeaders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // below line to watch the ef core sql quiries generation
            // not at all recomonded for the production code
            optionsBuilder.LogTo(Console.WriteLine);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AddressConfiguration());
            modelBuilder.ApplyConfiguration(new CustomerConfiguration());
            modelBuilder.ApplyConfiguration(new CustomerAddressConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new SalesOrderDetailConfiguration());
            modelBuilder.ApplyConfiguration(new SalesOrderHeaderConfiguration());
        }
    }
}

using AdventureWorks.OData.Core.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureWorks.OData.Persistence
{
	public class AdventureWorksContext : DbContext
    {
        public AdventureWorksContext(DbContextOptions options) : base(options) { }
        public DbSet<Customer> Customers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // below line to watch the ef core sql quiries generation
            // not at all recomonded for the production code
            optionsBuilder.LogTo(Console.WriteLine);
        }
    }
}

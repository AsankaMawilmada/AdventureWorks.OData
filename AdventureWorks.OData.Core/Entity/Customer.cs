using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace AdventureWorks.OData.Core.Entity
{
	[Table(nameof(Customer), Schema = "SalesLT")]
    public class Customer
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int CustomerId { get; set; }

		[Required]
		public bool NameStyle { get; set; }

		[MaxLength(8)]
		public string Title { get; set; }

		[MaxLength(25), Required]
		public string FirstName { get; set; }

		[MaxLength(25)]
		public string MiddleName { get; set; }

		[MaxLength(25), Required]
		public string LastName { get; set; }

		[MaxLength(10)]
		public string Suffix { get; set; }

		[MaxLength(128)]
		public string CompanyName { get; set; }

		[MaxLength(256)]
		public string SalesPerson { get; set; }

		[MaxLength(50)]
		public string EmailAddress { get; set; }

		[MaxLength(25)]
		public string Phone { get; set; }

		[IgnoreDataMember]
		[MaxLength(128), Required]
		public string PasswordHash { get; set; }

		[IgnoreDataMember]
		[MaxLength(10), Required]
		public string PasswordSalt { get; set; }

		[Required]
		public Guid RowGuid { get; set; }

		[Required]
		public DateTime ModifiedDate { get; set; }
	}
}

using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureWorks.OData.Core.Entity
{
    [Table("SalesOrderHeader", Schema = "SalesLT")]
	public class SalesOrder
	{
		public int SalesOrderID { get; set; }
		public byte RevisionNumber { get; set; }
		public DateTime OrderDate { get; set; }
		public DateTime DueDate { get; set; }
		public DateTime ShipDate { get; set; }
		public byte Status { get; set; }
		public string SalesOrderNumber { get; set; }

		[ForeignKey("Customer")]
		public int CustomerID { get; set; }
		public Customer Customer { get; set; }

		public int ShipToAddressID { get; set; }
		public int BillToAddressID { get; set; }
		public string ShipMethod { get; set; }
		public string CreditCardApprovalCode { get; set; }
		public decimal SubTotal { get; set; }
		public decimal TaxAmt { get; set; }
		public decimal Freight { get; set; }
		public string Comment { get; set; }
		public Guid rowguid { get; set; }
		public DateTime ModifiedDate { get; set; }


	}
}

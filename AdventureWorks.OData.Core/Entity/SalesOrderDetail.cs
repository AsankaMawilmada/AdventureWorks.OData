using System;

namespace AdventureWorks.OData.Core.Entity
{
    public partial class SalesOrderDetail : EntityBase
    {
        public int SalesOrderId { get; set; }
        public int SalesOrderDetailId { get; set; }
        public short OrderQty { get; set; }
        public int ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal UnitPriceDiscount { get; set; }
        public decimal LineTotal { get; set; }

        public virtual Product Product { get; set; }
        public virtual SalesOrderHeader SalesOrder { get; set; }
    }
}

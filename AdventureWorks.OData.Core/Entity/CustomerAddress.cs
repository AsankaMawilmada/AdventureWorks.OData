using System;

namespace AdventureWorks.OData.Core.Entity
{
    public partial class CustomerAddress : EntityBase
    {
        public int CustomerId { get; set; }
        public int AddressId { get; set; }
        public string AddressType { get; set; }

        public virtual Address Address { get; set; }
        public virtual Customer Customer { get; set; }
    }
}

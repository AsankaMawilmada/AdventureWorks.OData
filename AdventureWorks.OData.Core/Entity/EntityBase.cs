using System;
using System.Runtime.Serialization;

namespace AdventureWorks.OData.Core.Entity
{
    public partial class EntityBase
    {
        public Guid RowGuid { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}

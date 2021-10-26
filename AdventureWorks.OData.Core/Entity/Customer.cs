using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace AdventureWorks.OData.Core.Entity
{
    public partial class Customer : EntityBase
    {
        public Customer()
        {
            CustomerAddresses = new HashSet<CustomerAddress>();
            SalesOrderHeaders = new HashSet<SalesOrderHeader>();
        }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CustomerId { get; set; }
        public bool NameStyle { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Suffix { get; set; }
        public string CompanyName { get; set; }
        public string SalesPerson { get; set; }
        public string EmailAddress { get; set; }
        public string Phone { get; set; }

        [IgnoreDataMember]
        public string PasswordHash { get; set; }
        [IgnoreDataMember]
        public string PasswordSalt { get; set; }

        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; }
        public virtual ICollection<SalesOrderHeader> SalesOrderHeaders { get; set; }
    }
}

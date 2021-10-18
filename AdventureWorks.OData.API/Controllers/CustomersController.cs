using AdventureWorks.OData.Core.Entity;
using AdventureWorks.OData.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Query;

namespace AdventureWorks.OData.API.Controllers
{
    [Route("api/Customers")]
    public class CustomersController : ControllerBase
    {
        private readonly AdventureWorksContext _myWorldDbContext;
        public CustomersController(AdventureWorksContext myWorldDbContext)
        {
            _myWorldDbContext = myWorldDbContext;
        }


        [EnableQuery(PageSize = 10)]
        [HttpGet("Get")]
        public IActionResult Get()
        {
            return Ok(_myWorldDbContext.Customers.AsQueryable());
        }

        [EnableQuery]
        public IActionResult Get2()
        {
            return Ok(_myWorldDbContext.Customers.AsQueryable());
        }

        [EnableQuery]
        public Customer Get(int key, string version)
        {
            return _myWorldDbContext.Customers.Find(key);
        }
    }   
}

using AdventureWorks.OData.Core.Entity;
using AdventureWorks.OData.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace AdventureWorks.OData.API.Controllers
{
    [Route("api/{Controller}")]
    public class CustomersController : ControllerBase
    {
        private readonly AdventureWorksContext _dbContext;
        public CustomersController(AdventureWorksContext dbContext)
        {
            _dbContext = dbContext;
        }

        [EnableQuery]
        [HttpGet("Paginated")]
        public IActionResult Get()
        {
            return Ok(_dbContext.Customers.AsQueryable());
        }

        [EnableQuery]
        [HttpGet("Single/{key}")]
        public Customer Get(int key, string version)
        {
            return _dbContext.Customers.Find(key);
        }
    }
}

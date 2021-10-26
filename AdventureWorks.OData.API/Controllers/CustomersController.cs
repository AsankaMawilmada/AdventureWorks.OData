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
        public IActionResult Get()
        {
            return Ok(_dbContext.Customers.AsQueryable());
        }

        [EnableQuery]
        public IActionResult Get(int key, string version)
        {
            return Ok(_dbContext.Customers.Find(key));
        }
    }
}

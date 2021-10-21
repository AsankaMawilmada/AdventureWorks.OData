using AdventureWorks.OData.Core.Entity;
using AdventureWorks.OData.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace AdventureWorks.OData.API.Controllers
{
    [Route("api/{Controller}")]
    public class SalesOrdersController : ControllerBase
    {
        private readonly AdventureWorksContext _dbContext;
        public SalesOrdersController(AdventureWorksContext dbContext)
        {
            _dbContext = dbContext;
        }


        [EnableQuery(MaxExpansionDepth = 2)]
        [HttpGet("Paginated")]
        public IActionResult Get()
        {
            return Ok(_dbContext.SalesOrders.AsQueryable());
        }

        [EnableQuery()]
        [HttpGet("Single/{key}")]
        public SalesOrder Get(int key, string version)
        {
            return _dbContext.SalesOrders.Find(key);
        }
    }

}

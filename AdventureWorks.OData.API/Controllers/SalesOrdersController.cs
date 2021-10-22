using AdventureWorks.OData.Core.Entity;
using AdventureWorks.OData.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace AdventureWorks.OData.API.Controllers
{
    [Route("api/{Controller}")]
    public class SalesOrderHeadersController : ControllerBase
    {
        private readonly AdventureWorksContext _dbContext;
        public SalesOrderHeadersController(AdventureWorksContext dbContext)
        {
            _dbContext = dbContext;
        }


        [EnableQuery(MaxExpansionDepth = 2)]
        [HttpGet("Paginated")]
        public IActionResult Get()
        {
            return Ok(_dbContext.SalesOrderHeaders.AsQueryable());
        }

        [EnableQuery()]
        [HttpGet("Single/{key}")]
        public SalesOrderHeader Get(int key, string version)
        {
            return _dbContext.SalesOrderHeaders.Find(key);
        }
    }

}

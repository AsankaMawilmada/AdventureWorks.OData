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
        public IActionResult Get()
        {
            return Ok(_dbContext.Customers.AsQueryable());
        }

        [EnableQuery]
        public IActionResult Get(int key, string version)
        {
            return Ok(_dbContext.Customers.Find(key));
        }


        public IActionResult Post([FromBody] Customer emp)
        {
            _dbContext.Customers.Add(emp);
            _dbContext.SaveChanges();
            return Created("", emp);
        }

        [HttpPut("({key})")]
        public IActionResult Put(int key, [FromBody] Customer emp)
        {
            emp.ModifiedDate = System.DateTime.Now;
            _dbContext.Customers.Update(emp);
            _dbContext.SaveChanges();
            return NoContent();
        }

        public IActionResult Delete(int key)
        {
            _dbContext.Customers.Remove(_dbContext.Customers.Find(key));
            _dbContext.SaveChanges();
            return NoContent();
        }
    }
}

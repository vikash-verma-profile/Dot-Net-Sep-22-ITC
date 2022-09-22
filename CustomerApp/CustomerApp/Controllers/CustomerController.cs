using CustomerApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        CustomerDbContext db = new CustomerDbContext();
        public string Get()
        {
            return "Vikash";
        }
        [Route("get-customers")]
        public IEnumerable<Customer> GetCustomer()
        {
            return db.Customers;
        }
        [HttpPost]
        public IActionResult Post(Customer customer)  
        {
            db.Customers.Add(customer);
            db.SaveChanges();
            return Ok(new { status = "success" });
        }
    }
}

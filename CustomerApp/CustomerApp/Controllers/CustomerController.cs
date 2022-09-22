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

        [HttpPut]
        public IActionResult Put(Customer customer)
        {
            db.Customers.Update(customer);
            db.SaveChanges();
            return Ok(new { status = "your record is updated successfully" });
        }


        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var customerData = db.Customers.Where(x => x.Id == id).FirstOrDefault();
            db.Customers.Remove(customerData);
            db.SaveChanges();
            return Ok(new { status = "your record is deleted successfully" });
        }
    }
}

using MassTransit;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        CustomerDBContext db;
        IBus bus;
        public OrderController(CustomerDBContext _db,IBus _bus)
        {
            db = _db;
            bus = _bus;
        }
        [HttpPost]
        public async Task<IActionResult> CreateOrder(TblOrder tblOrder)
        {
            if (tblOrder != null)
            {
                Uri uri = new Uri("rabbitmq://localhost/orderQueue");
                var endpoint = await bus.GetSendEndpoint(uri);
                await endpoint.Send(tblOrder);
                db.TblOrders.Add(tblOrder);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }
    }
}

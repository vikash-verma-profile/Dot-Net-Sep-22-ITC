using MassTransit;
using Shared.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogAPI.Consumers
{
    public class OrderConsumer : IConsumer<TblOrder>
    {
        CustomerDBContext db;
        public OrderConsumer(CustomerDBContext _db)
        {
            db = _db;
        }
        public Task Consume(ConsumeContext<TblOrder> context)
        {
            var data = context.Message;
            var productData = db.TblProducts.Where(x => x.Id == data.ProductId).FirstOrDefault();
            productData.Inventory = productData.Inventory - data.Inventory;
            db.TblProducts.Update(productData);
            db.SaveChanges();
            return Task.CompletedTask;
        }
    }
}

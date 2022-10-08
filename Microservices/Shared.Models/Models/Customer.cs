using System;
using System.Collections.Generic;

#nullable disable

namespace Shared.Models.Models
{
    public partial class Customer
    {
        public int Id { get; set; }
        public string CustomerCode { get; set; }
        public string CustomerName { get; set; }
        public int? CustomerAmount { get; set; }
    }
}

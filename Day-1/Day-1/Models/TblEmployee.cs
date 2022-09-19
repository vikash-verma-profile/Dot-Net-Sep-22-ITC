using System;
using System.Collections.Generic;

#nullable disable

namespace Day_1.Models
{
    public partial class TblEmployee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal? Salary { get; set; }
        public string Gender { get; set; }
    }
}

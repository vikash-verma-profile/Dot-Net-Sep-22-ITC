using System;
using System.Collections.Generic;

#nullable disable

namespace Day_1.Models
{
    public partial class TblSubDepartment
    {
        public int Id { get; set; }
        public string SubDepartment { get; set; }
        public int? DepartmentId { get; set; }
    }
}

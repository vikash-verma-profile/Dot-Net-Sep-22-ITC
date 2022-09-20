using Day_1.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Day_1
{

    //where clause
    class Class1
    {
        public static void Main()
        {
            TestDbContext db = new TestDbContext();
            //var data = db.TblEmployees.OrderBy(x=>x.Gender);
            var data = db.TblEmployees.Where(x=>x.Name.Contains("k"));

            Console.WriteLine("ID | NAME | SALARY | GENDER");
            foreach (var item in data)
            {
                Console.WriteLine(item.Id + " " + item.Name + " " + item.Salary + " " + item.Gender);
            }
        }
    }
}

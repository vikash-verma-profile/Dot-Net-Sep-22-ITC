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
        public static void Main2()
        {
            TestDbContext db = new TestDbContext();
            //var data = db.TblEmployees.OrderBy(x=>x.Gender);
            // var data = db.TblEmployees.Where(x=>x.Name.Contains("k"));
            var data = db.TblEmployees.
                Join(db.TblDepartments, x => x.DepartmentId, y => y.Id, (x, y) => new { x, y }).
                Join(db.TblSubDepartments,z=>z.y.Id,s=>s.DepartmentId,(z,s)=>new
                { Id = z.x.Id, Name = z.x.Name, Salary = z.x.Salary, 
                    Gender = z.x.Gender, Department = z.y.DepartmentName,SubDepartment=s.SubDepartment });




              //  new { Id=x.Id,Name=x.Name,Salary=x.Salary,Gender=x.Gender, Department=y.DepartmentName });
            Console.WriteLine("ID | NAME | SALARY | GENDER | Department | Sub Department");
            foreach (var item in data)
            {
                Console.WriteLine(item.Id + " " + item.Name + " " + item.Salary + " " + item.Gender + " " + item.Department+" "+item.SubDepartment);
            }
        }
    }
}

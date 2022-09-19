using Day_1.Models;
using System;
using System.Linq;

namespace Day_1
{
    class Program
    {
        static void Main(string[] args)
        {

            TestDbContext db = new TestDbContext();

            //reterive data from database
            // var data=db.TblEmployees;

            //Console.WriteLine("ID | NAME | SALARY | GENDER");
            //foreach (var item in data)
            //{
            //    Console.WriteLine(item.Id+" "+item.Name+" "+item.Salary+" "+item.Gender);
            //}

            //Add a record in db
            //TblEmployee emp = new TblEmployee();
            //emp.Name = "Raj Kumar";
            //emp.Salary = 900;
            //emp.Gender = "Male";
            //db.TblEmployees.Add(emp);
            //db.SaveChanges();
            //Console.WriteLine("Record is added successfully");

            //Update a record in db

            //var data = db.TblEmployees.Where(x=>x.Id==4).FirstOrDefault();
            //data.Name = "Suresh Kumar";
            //db.TblEmployees.Update(data);
            //db.SaveChanges();
            //Console.WriteLine("Record is updates successfully");

            //deletion of a record
            var data = db.TblEmployees.Where(x => x.Id == 4).FirstOrDefault();
            db.TblEmployees.Remove(data);
            db.SaveChanges();
            Console.WriteLine("Record is deleted successfully");
        }
    }
}

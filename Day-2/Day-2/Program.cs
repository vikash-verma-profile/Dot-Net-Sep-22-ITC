using System;
using System.Collections.Generic;
using System.Linq;

namespace Day_2
{
    public class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
    }
    class Program
    {
        static void Main1(string[] args)
        {
            IList<Student> studentList = new List<Student>()
            {
                new Student(){StudentID=1,StudentName="John",Age=18},
                new Student(){StudentID=2,StudentName="Ram",Age=15},
                new Student(){StudentID=3,StudentName="Mohan",Age=20},
                new Student(){StudentID=4,StudentName="Samy",Age=19},
            };

            var selectResult = from s in studentList select new { s.StudentName,s.StudentID };
            var selectResult2 = studentList.Select(x => new { x.StudentName,x.StudentID });

            foreach (var item in selectResult)
            {
                Console.Write(item.StudentID + " " + item.StudentName + "\t");
            }
            Console.WriteLine();
            Console.WriteLine("=============================");
            foreach (var item in selectResult2)
            {
                Console.Write(item.StudentID +" "+item.StudentName + "\t");
            }
        }
    }
}

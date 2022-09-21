using System;
using System.Collections.Generic;
using System.Linq;

namespace Day_2
{
    class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            IList<Student> studentList = new List<Student>()
            {
                new Student(){StudentID=1,StudentName="John"},
                new Student(){StudentID=2,StudentName="Ram"},
                new Student(){StudentID=3,StudentName="Mohan"},
                new Student(){StudentID=4,StudentName="Samy"},
            };

            var selectResult = from s in studentList select s.StudentName;
            var selectResult2 = studentList.Select(x => x.StudentName);

            foreach (var item in selectResult)
            {
                Console.Write(item+"\t");
            }
            Console.WriteLine();
            Console.WriteLine("=============================");
            foreach (var item in selectResult2)
            {
                Console.Write(item + "\t");
            }
        }
    }
}

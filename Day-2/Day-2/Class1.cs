using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Day_2
{
    //All
    class Class1
    {
        static void ReportTypeProperties<T>(T obj)
        {
            Console.WriteLine("type" + typeof(T).Name);
            Console.WriteLine("Actual type" + obj.GetType().Name);
        }
        public static void Main()
        {
            Console.WriteLine("=====All & ANY======");
            IList<Student> studentList = new List<Student>()
            {
                new Student(){StudentID=1,StudentName="John",Age=18},
                new Student(){StudentID=2,StudentName="Ram",Age=15},
                new Student(){StudentID=3,StudentName="Mohan",Age=20},
                new Student(){StudentID=4,StudentName="Samy",Age=19},
            };
            var dataALL = studentList.All(s => s.Age > 12 && s.Age < 20); 
            var dataAny = studentList.Any(s => s.Age > 12 && s.Age < 20);
            Console.WriteLine(dataALL);
            Console.WriteLine(dataAny);

            //ElementAt
            //ELementAtorDefault
            //Last,LastorDefault
            //Single,SingleorDefault
            //First,FirstorDefault

            //defaultifempty
            Console.WriteLine("=====Aggregate======");
            IList<string> strList = new List<string>() { "Vikash", "Jhon", "Raj" };
            var commasepartedstrings = strList.Aggregate((s1, s2) => s1 + "," + s2);
            Console.WriteLine(commasepartedstrings);
            Console.WriteLine("=====Concat======");
            IList<string> collection1 = new List<string> { "One", "Two", "Three" };
            IList<string> collection2 = new List<string> { "four", "five" };
            var collection3 = collection1.Concat(collection2);

            foreach (var item in collection3)
            {
                Console.Write(item+" ");
            }
            Console.WriteLine("=======DefaultIfEmpty==========");
            IList<string> emptyList = new List<string>();
            var list1 = emptyList.DefaultIfEmpty();
            var list2 = emptyList.DefaultIfEmpty("Vikash");

            Console.WriteLine(list1.Count());
            Console.WriteLine(list1.ElementAt(0));
            Console.WriteLine(list2.Count());
            Console.WriteLine(list2.ElementAt(0));
            Console.WriteLine("==========Except=======");
            //Except
            IList<string> strList1 = new List<string>() { "One", "Two", "Three", "four", "five" };
            IList<string> strList2 = new List<string>() { "four", "five","six","seven","eight" };

            var result = strList1.Except(strList2);

            foreach (var item in result)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("==========Intersect=======");
            var resultIntersect = strList1.Intersect(strList2);
            foreach (var item in resultIntersect)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("==========Union=======");
            var resultUnion = strList1.Union(strList2);
            foreach (var item in resultUnion)
            {
                Console.Write(item+" ");
            }
            Console.WriteLine();
            Console.WriteLine("==========SKIP=======");
            var resultSkip = strList1.Skip(2);
            foreach (var item in resultSkip)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("==========TAKE=======");
            var resultTake= strList1.Take(2);
            foreach (var item in resultTake)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("==========TAKE While=======");
            var resultTakeWhile = strList1.TakeWhile(s => s.Length < 4);
            foreach (var item in resultTakeWhile)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("==========Skip While=======");
            var resultSkipWhile = strList1.SkipWhile(s=>s.Length<4);
            foreach (var item in resultSkipWhile)
            {
                Console.Write(item + " ");
            }

            Console.WriteLine("==============Cast Method=======");

            Student[] studentList1 = 
            {
                new Student(){StudentID=1,StudentName="John",Age=18},
                new Student(){StudentID=2,StudentName="Ram",Age=15},
                new Student(){StudentID=3,StudentName="Mohan",Age=20},
                new Student(){StudentID=4,StudentName="Samy",Age=19},
            };
            ReportTypeProperties(studentList1);
            Console.WriteLine("==============post Cast Method=======");
            ReportTypeProperties(studentList1.Cast<Student>());

            var samplearry=strList1.ToArray<string>();
            var newList = samplearry.ToList<string>();

        }
    }
}

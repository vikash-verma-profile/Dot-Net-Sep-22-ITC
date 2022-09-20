using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Collections;

namespace Day_1
{

    class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
    }
    class Class2
    {
        public static void Main()
        {
            IList<int> intList = new List<int>() { 10, 20, 30, 45, 50, 87 };
            var largest = intList.Max();
            Console.WriteLine("maximum number is "+largest);

            //ofType

            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Student() { StudentID=1,StudentName="Vikash"});

            var stringResult = from s in mixedList.OfType<string>() select s;

            foreach (var item in stringResult)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("Output to get only integer values");
            var intResult = from s in mixedList.OfType<int>() select s;


            foreach (var item in intResult)
            {
                Console.WriteLine(item);
            }

        }
    }
}

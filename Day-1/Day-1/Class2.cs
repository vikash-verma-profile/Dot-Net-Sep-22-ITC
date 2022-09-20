using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Day_1
{
    class Class2
    {
        public static void Main()
        {
            IList<int> intList = new List<int>() { 10, 20, 30, 45, 50, 87 };
            var largest = intList.Max();
            Console.WriteLine("maximum number is "+largest);
        }
    }
}

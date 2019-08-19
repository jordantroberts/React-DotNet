using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestingReactDotNet.Controllers
{
    public class DateController : Controller
    {
        [HttpGet]
        public async Task<string> GetDate()
        {
            //DateTime dt = DateTime.Now;
            //string format = "MMM ddd d HH:mm yyyy"; 
            string info = $"Today is {DateTime.Now.ToString("dddd, dd MMMM yyyy")}";
            return info; 
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestingReactDotNet.Controllers
{
    [Route("api/[controller]")]
    public class DisplayNameController : Controller
    {
        [HttpGet, Route("Greeting")]
        public string Greeting(string you)
        {
            var greeting = "Hello, " + you;
            return greeting;
        }
    }
}


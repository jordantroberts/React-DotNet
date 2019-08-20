using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace TestingReactDotNet.Controllers
{
    [Route("api/[controller]")]
    public class HelloWorldController : Controller
    {
        [HttpGet, Route("Message")]
        public string Message()
        {
            var response = "Hello World";
            return response;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestingReactDotNet.Controllers
{
    [Route("api/[controller]")]
    public class MiddleLetterController : Controller
    {
        [HttpGet, Route("GetMiddle")]
        public string GetMiddle(string word)
        {
           if (word.Length % 2 == 0)
            {
                return word.Substring(word.Length / 2 - 1, 2); 
            }
           else
            {
                return word.Substring(word.Length / 2, 1); 
            }
        }
    }
}

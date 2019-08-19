using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TestingReactDotNet.Controllers {
    [Route ("api/[controller]")]
    public class DayTodayController : Controller {
        [HttpGet, Route ("GetDate")]
        public async Task<string> GetDate () {
            var info = $"Today is {DateTime.Now.ToString("dddd, dd MMMM yyyy")} and the time is {DateTime.Now.ToString("hh:mm tt")}";
            return info;
        }
    }
}
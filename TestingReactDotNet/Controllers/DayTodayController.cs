using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TestingReactDotNet.Controllers {

    public interface IDateTimeProvider
    {
        DateTime Now(); 
    }


    public class DateTimeProvider : IDateTimeProvider
    {
        public DateTime Now()
        {
            return DateTime.Now;
        }

    }

    [Route ("api/[controller]")]
    public class DayTodayController : Controller {

        private readonly IDateTimeProvider _dateTimeProvider;

        public DayTodayController(IDateTimeProvider dateTimeProvider)
        {
            _dateTimeProvider = dateTimeProvider;
        }

        [HttpGet, Route ("GetDate")]
        public  string GetDate () {

            var dateTime = _dateTimeProvider.Now();
            var info = $"Today is {dateTime.ToString("dddd, dd MMMM yyyy")} and the time is {dateTime.ToString("hh:mm tt")}";
            return info;

        }
    }
}

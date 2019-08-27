using System.Web.Mvc;
using Moq;
using NUnit.Framework;
using TestingReactDotNet.Controllers;

namespace TestingReactDotNetTests
{
    public class DayTodayTests
    {
        [Test]
        public void ReturnsDateAndTime()
        {
            var mockedDateTimeProvider = new Mock<IDateTimeProvider>();
            mockedDateTimeProvider.Setup(dtp => dtp.Now()).Returns(new System.DateTime(2019, 8, 27, 10, 0, 0));
            var controller = new DayTodayController(mockedDateTimeProvider.Object);

            string result = controller.GetDate();
            string expected = "Today is Tuesday, 27 August 2019 and the time is 10:00 AM";

            Assert.AreEqual(expected, result);

        }
    }
}


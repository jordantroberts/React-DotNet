
using System.Web.Mvc;
using NUnit.Framework;
using TestingReactDotNet.Controllers;

namespace TestingReactDotNetTests
{
    public class MiddleLetterTest
    {
        [Test]
        public void ReturnsMiddleLetterOfEvenWord()
        {
            var controller = new MiddleLetterController();
            string result = controller.GetMiddle("test");
            string expected = "es";
            Assert.AreEqual(expected, result); 
        }
    }
}



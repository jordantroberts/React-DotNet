using System.Web.Mvc;
using NUnit.Framework;
using TestingReactDotNet.Controllers;

namespace TestingReactDotNetTests
{
    public class HelloWorldTests
    {
        [Test]
        public void ReturnsStringHelloWorld()
        {
            var controller = new HelloWorldController();
            string result = controller.Message();
            string expected = "Hello World";
            Assert.AreEqual(expected, result); 

        }
    }
}


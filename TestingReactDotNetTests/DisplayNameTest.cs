using System.Web.Mvc;
using NUnit.Framework;
using TestingReactDotNet.Controllers;


namespace TestingReactDotNetTests
{
    public class DisplayNameTest
    {
        [Test]
        public void ReturnsHelloName()
        {
            var controller = new DisplayNameController();
           
            string result = controller.Greeting("Jordan");
            string expected = "Hello, Jordan";
            Assert.AreEqual(expected, result); 

        }
    }
}


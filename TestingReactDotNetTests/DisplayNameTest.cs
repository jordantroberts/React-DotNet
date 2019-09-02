using System.Web.Mvc;
using NUnit.Framework;
using TestingReactDotNet.Controllers;


namespace TestingReactDotNetTests
{
    [TestFixture]
    public class DisplayNameTest
    {
        [TestCase("Jordan", "Hello, Jordan")]
        [TestCase("Ben", "Hello, Ben")]
        [TestCase("Rhiannon", "Hello, Rhiannon")]

        public void ReturnsHelloName(string input, string expected)
        {
            var controller = new DisplayNameController();
           
            string actual = controller.Greeting(input);
            Assert.AreEqual(expected, actual); 

        }
    }
}




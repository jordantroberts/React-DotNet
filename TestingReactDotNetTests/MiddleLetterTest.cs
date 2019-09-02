
using System.Web.Mvc;
using NUnit.Framework;
using TestingReactDotNet.Controllers;

namespace TestingReactDotNetTests
{
    [TestFixture]
    public class MiddleLetterTest
    {
        [TestCase("test", "es")]
        [TestCase("tests", "s")]

        public void ReturnsMiddleLetterOfWord(string input, string expected)
        {
            var controller = new MiddleLetterController();
            string actual = controller.GetMiddle(input);
            Assert.AreEqual(expected, actual); 
        }
    }
}



     
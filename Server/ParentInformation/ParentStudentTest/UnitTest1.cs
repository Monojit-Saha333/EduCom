using NUnit.Framework;
using Moq;
using ParentInformation.Repositories;
using ParentInformation.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ParentStudentTest
{
   
    
    public class Tests
    {
        Mock<ParentInfoRepository> mock = new Mock<ParentInfoRepository>();
        private readonly ParentsController ParentsController1;
        public Tests()
        {
            ParentsController1 = new ParentsController(mock.Object);
        }
        [SetUp]
        public void Setup()
        {
        }
       

        [Fact]
        public async void GetPointsOfEmployee_ValidDetails_ChecksSame()
        {
            int employeeId = 978978;
            int points = 100;
            mock.Setup(p => p.GetParentByRegistrationIdAsync()).ReturnsAsync(points);
            ParentsController pointctr = new ParentsController(mock.Object);
            int result = await pointctr.GetParentByRegistrationIdAsync(employeeId);
            Assert.Equals(points, result);
        }
        /*public async Task RefreshPointsByEmployee_ShouldUpdatePoints_WhenRequested()
        {
            try
            {

                var answer = await ParentsController1.GetAllParents;
                var okResult = answer as ObjectResult;

                Assert.AreEqual(StatusCodes.Status200OK, okResult.StatusCode);
            }
            catch (System.NullReferenceException)
            {

            }

        }
        */

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }
    }
}
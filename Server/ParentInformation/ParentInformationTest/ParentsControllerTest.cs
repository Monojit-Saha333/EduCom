using AutoFixture;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using ParentInformation.Controllers;
using ParentInformation.DTOs;
using ParentInformation.Models;
using ParentInformation.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace ParentInformationTest
{
    public class ParentsControllerTest
    {
        private Mock<IParentInfoRepository> _ParentInforepositoryMock;
        private Fixture _fixture;
        private ParentsController _controller;
        public ParentsControllerTest()
        {
            _fixture = new Fixture();   
            _ParentInforepositoryMock= new Mock<IParentInfoRepository>();
        }
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public async Task GetParents_Return_Ok_When_Data_Available()
        {
            var parentList=_fixture.CreateMany<Parent>(3).ToList();
            _ParentInforepositoryMock.Setup(repo=>repo.GetAllParents()).Returns(parentList);
            _controller = new ParentsController(_ParentInforepositoryMock.Object);
            var output= _controller.GetParents();
            var obj = output as ObjectResult;
            Assert.AreEqual(200,obj.StatusCode);
        }
        [Test]

        public async Task GetParents_Returns_Not_Found()
        {
            var parentList = _fixture.CreateMany<Parent>(0).ToList();
            _ParentInforepositoryMock.Setup(repo => repo.GetAllParents()).Returns(parentList);
            _controller = new ParentsController(_ParentInforepositoryMock.Object);
            var output = _controller.GetParents();
            var obj = output as ObjectResult;
            Assert.AreEqual(404,obj.StatusCode);
        }
        [Test]

        public async Task createParent_Return_OK_when_Successfully_Posted()
        {
            var parentobj = _fixture.Create<Parent>();
            var parentobjDTO = _fixture.Create<ParentDTO>();
            _ParentInforepositoryMock.Setup(repo => repo.CreateParent(parentobj));
            _controller = new ParentsController(_ParentInforepositoryMock.Object);
            var output=_controller.Create(parentobjDTO);
            var obj=output as ObjectResult;
            Assert.AreEqual(200, obj.StatusCode);
        }
        [Test]

        public async Task UpdateParent_Return_OK()
        {

            var parentobj = _fixture.Create<Parent>();
            _ParentInforepositoryMock.Setup(repo => repo.UpdateParent(parentobj));
            _controller = new ParentsController(_ParentInforepositoryMock.Object);
            var output = _controller.UpdateParent(parentobj);
            var obj = output as ObjectResult;
            Assert.AreEqual(200, obj.StatusCode);
        }

        [Test]

        public void Delete_Return_OK()
        {
            var parentobj = _fixture.Create<Parent>();
            var parentregid = parentobj.RegistationId;
            _ParentInforepositoryMock.Setup(repo => repo.DeleteParentByID(parentregid));
            _controller = new ParentsController(_ParentInforepositoryMock.Object);
            var output = _controller.UpdateParent(parentobj);
            var obj = output as ObjectResult;
            Assert.AreEqual(200, obj.StatusCode);
        }

    }
}
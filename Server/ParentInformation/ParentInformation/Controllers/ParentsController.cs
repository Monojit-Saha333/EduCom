using Microsoft.AspNetCore.Mvc;
using ParentInformation.Models;
using ParentInformation.Repositories;
using System;
using System.Linq;

namespace ParentInformation.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class ParentsController : ControllerBase
    {
        private readonly IParentInfoRepository _parentInfoRepository;
        public ParentsController(IParentInfoRepository parentInfoRepository)
        {
            this._parentInfoRepository = parentInfoRepository; 
        }
        [HttpPost]
        public IActionResult Create(Parent parent)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            _parentInfoRepository.CreateParent(parent);
            var res=_parentInfoRepository.getResponse(parent);
            return Ok(res);
        }
        
        [HttpGet]
        public IActionResult GetParents()
        {
            var parents = _parentInfoRepository.GetAllParents();
            if (parents.Count()==0)
                return NotFound("no data found");
            return Ok(parents);
        }
        [HttpPut]
        public IActionResult UpdateParent(Parent parent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _parentInfoRepository.UpdateParent(parent);
            return Ok("Data updated ");

        }
        [HttpDelete]
        public IActionResult Remove(Guid id)
        {
            _parentInfoRepository.DeleteParentByID(id);
            return Ok("removed");
        }
    }
}

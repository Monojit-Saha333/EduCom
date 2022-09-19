using Microsoft.AspNetCore.Mvc;
using ParentInformation.Models;
using ParentInformation.Repositories;

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
        public IActionResult create(Parent parent)
        {
            _parentInfoRepository.CreateParent(parent);
            return Ok("success");
        }
        
        [HttpGet]
        public IActionResult GetParents()
        {
            var parents = _parentInfoRepository.GetAllParents();
            return Ok(parents);
        }

    }
}

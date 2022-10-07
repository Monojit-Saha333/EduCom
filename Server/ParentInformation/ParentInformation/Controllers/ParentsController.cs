using AutoMapper;
using Castle.Core.Logging;
using Microsoft.AspNetCore.Mvc;
using NLog;
using ParentInformation.DTOs;
using ParentInformation.Models;
using ParentInformation.Repositories;
using System;
using System.Linq;

namespace ParentInformation.Controllers
{
    [ApiController]
    [Route("/")]
    public class ParentsController : ControllerBase
    {
        private readonly IParentInfoRepository _parentInfoRepository;

        public IMapper _mapper { get; }
        public static Logger logger = LogManager.GetCurrentClassLogger();

        public ParentsController(IParentInfoRepository parentInfoRepository, IMapper mapper)
        {
            this._parentInfoRepository = parentInfoRepository;
            _mapper = mapper;
        }
        [HttpPost("RegisterParent")]
        public IActionResult Create(ParentDTO parentDTO)
        {
            logger.Info("Entered the ${nameOf(Create)} method");
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Parent parent = _mapper.Map<Parent>(parentDTO);
            _parentInfoRepository.CreateParent(parent);
            var res = _parentInfoRepository.getResponse(parent);
            return Ok(res);
        }

        [HttpGet("ParentsDetails")]
        public IActionResult GetParents()
        {
            logger.Info("Entered the GetParents Action Method");
            var parents = _parentInfoRepository.GetAllParents();
            if (parents.Count() == 0)
                return NotFound("no data found");
            return Ok(parents);
        }

        [HttpGet("Parents/{RegId}")]
        public IActionResult GetParentsByRegID(Guid RegId)
        {
            var parent = _parentInfoRepository.GetParentByRegistrationId(RegId);
            if (parent == null)
                return NotFound();
            return Ok(parent);
        }
        [HttpPut("UpdateParents")]
        public IActionResult UpdateParent(ParentUpdateDTO parentUpdateDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Parent parent = _mapper.Map<Parent>(parentUpdateDTO);
            _parentInfoRepository.UpdateParent(parent);
            return Ok("Data updated ");

        }
        [HttpDelete("DeleteParents")]
        public IActionResult Remove(Guid id)
        {
            _parentInfoRepository.DeleteParentByID(id);
            return Ok("removed");
        }
    }
}

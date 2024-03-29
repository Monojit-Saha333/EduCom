﻿using AutoMapper;
using Castle.Core.Logging;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NLog;
using ParentInfo.API.DTOs;
using ParentInfo.API.Repositories;
using ParentInfo.API.Models;
using System;
using System.Linq;

namespace ParentInfo.API.Controllers
{
    [ApiController]
    [Route("/")]
    public class ParentsController : ControllerBase
    {
        private readonly IParentInfoRepository _parentInfoRepository;
        // public readonly IMapper _mapper;
        public static Logger logger = LogManager.GetCurrentClassLogger();
        MapperConfiguration configparentDTO = new MapperConfiguration(cgf => cgf.CreateMap<ParentDTO, Parent>());
        MapperConfiguration parentUpdateDTOConfig = new MapperConfiguration(i => i.CreateMap<ParentUpdateDTO, Parent>());



        public ParentsController(IParentInfoRepository parentInfoRepository)
        {
            _parentInfoRepository = parentInfoRepository;

        }
        [HttpPost("RegisterParent")]
        [Authorize(Roles = "User")]
        public IActionResult Create(ParentDTO parentDTO)
        {
            logger.Info("Entered the {nameOf(Create)} method");
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var _mapper = new Mapper(configparentDTO);
            Parent parent = _mapper.Map<Parent>(parentDTO);
            _parentInfoRepository.CreateParent(parent);
            var res = _parentInfoRepository.getResponse(parent);
            return Ok(res);
        }

        [HttpGet("ParentsDetails")]
        [Authorize]
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
            Mapper mapper = new Mapper(parentUpdateDTOConfig);
            Parent parent = mapper.Map<Parent>(parentUpdateDTO);
            _parentInfoRepository.UpdateParent(parent);
            return Ok("Data updated ");

        }
        [HttpDelete("DeleteParents")]
     
        public IActionResult Remove(Guid id)
        {
            _parentInfoRepository.DeleteParentByID(id);
            return Ok("removed");
        }

        [HttpGet("GetParentsByUsername/{userName}")]
      
        public IActionResult GetParentByUserName(string userName)
        {
            var parentbyusername = _parentInfoRepository.GetParentByUsername(userName);
            if (parentbyusername == null)
                return NotFound(new { message = "user not found" });
            return Ok(parentbyusername);
        }

        [HttpPatch("/Update-status")]
        public IActionResult UpdateStatus(Guid id,string status)
        {
            if (id == null || status == null)
                return BadRequest();
            _parentInfoRepository.UpdateStatus(id, status);
            return Ok(" status updated");
        }
    }
}

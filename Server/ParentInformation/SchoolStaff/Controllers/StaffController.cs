using Microsoft.AspNetCore.Mvc;
using SchoolStaff.Repositories;
using SchoolStaffInformation.Repositories;
using System.Linq;
using SchoolStaff.Models;

namespace SchoolStaff.Controllers
{
    [ApiController]
    [Route("/")]
    public class StaffController : Controller
    { 
        private readonly ISchoolStaffRepository _schoolStaffRepository;
       public StaffController(ISchoolStaffRepository schoolStaffRepository)
        {
            this._schoolStaffRepository = schoolStaffRepository;
        }
        [HttpPost("RegisterStaff")]
        public IActionResult CreateSchoolStaff(Models.Staff staff)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            _schoolStaffRepository.CreateSchoolStaff(staff);
            
            return Ok("Created");
        }
        [HttpGet("StaffDetails)")]
        public IActionResult GetStaff()
        {
            var staffs=_schoolStaffRepository.GetAll();
            if (staffs.Count() == 0)
                return NotFound("no data found)");
            return Ok(staffs);
        }
        [HttpPut("UpdateStaff")]
        public IActionResult UpdateStaff(Models.Staff staff)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();

            }
            _schoolStaffRepository.UpdateStaff(staff);

            return Ok("Data Updated");

        }

        [HttpDelete("DeleteStaff")]
        public IActionResult Remove(int StaffId)
        {
            _schoolStaffRepository.DeleteStaff(StaffId);
            return Ok("Removed");
        }



       
    }
}

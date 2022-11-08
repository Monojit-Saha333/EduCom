using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using SchoolStaff.Models;

namespace SchoolStaff.Repositories
{
    public interface ISchoolStaffRepository
    {
        //create
        public void CreateSchoolStaff(Staff staff);

        //read
        public IEnumerable<Staff> GetAll();

   
       //update
        public void UpdateStaff(Staff staff);
        //delete
        public void DeleteStaff(Guid StaffId);

    }
}






using SchoolStaff.Models;
using SchoolStaff.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace SchoolStaffInformation.Repositories

{
    public class SchoolStaffRepository: ISchoolStaffRepository
    {
        private readonly SchoolStaffContext context;
        public SchoolStaffRepository(SchoolStaffContext dbcontext)
        {
            this.context = dbcontext;
        }

        public void CreateSchoolStaff(Staff staff)
        {
            context.schoolstaff.Add(staff);
            context.SaveChanges();
           
        }

       

        public void DeleteStaff(int StaffId)
        {
            var x = context.schoolstaff.SingleOrDefault(s => s.StaffId == StaffId);
            context.schoolstaff.Remove(x);
            context.SaveChanges();

        }

        public IEnumerable<Staff> GetAll()
        {
            var allstaff=context.schoolstaff;
            return allstaff;
        }

        public void UpdateStaff(Staff staff)
        {
            context.schoolstaff.Update(staff);
            context.SaveChanges(true);
        }
        //create command

    }
}

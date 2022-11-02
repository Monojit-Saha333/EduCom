using System.ComponentModel.DataAnnotations;

namespace SchoolStaff.Models
{
    public class Staff
    {
        [Key]
        public int StaffId { get; set; }
        public string StaffName { get; set; }
        
    }
}

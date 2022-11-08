using System;
using System.ComponentModel.DataAnnotations;

namespace SchoolStaff.Models
{
    public class Staff
    {
        [Key]
        public Guid StaffId { get; set; }
        [Required]
        public string StaffName { get; set; }
        [Required]
        [EmailAddress]
        public string StaffEmail { get; set; }
        [Phone]
        public string PhoneNumber { get; set; }

        
    }
}

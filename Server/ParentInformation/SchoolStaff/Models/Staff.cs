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
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Zipcode { get; set; }
    }
}

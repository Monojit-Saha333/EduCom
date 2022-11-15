using System;
using System.ComponentModel.DataAnnotations;

namespace ParentInfo.API.DTOs
{
    public class ParentUpdateDTO
    {
        [Required]
        public Guid RegistationId { get; set; }
        [Required]
        public String UserName { get; set; }

        [Required]
        public String StudentRegistrationId { get; set; }
        public string ParentName { get; set; }
        [Required]
        public string StudentName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string City { get; set; }

        [Required]
        public string Zipcode { get; set; }
        [EmailAddress]
        public string EmailAddress { get; set; }
        [Required]
        public string PrimaryContactPerson { get; set; }
        [Required]
        public string PrimaryContactPersonPhoneNumber { get; set; }
        [Required]
        public string SecondaryContactPerson { get; set; }
        [Required]
        public string SecondaryContactPersonPhoneNumber { get; set; }

        [Required]
        public int Age { get; set; }

    }
}

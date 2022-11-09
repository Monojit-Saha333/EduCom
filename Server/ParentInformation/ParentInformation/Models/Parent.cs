using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ParentInfo.API.Models
{
    public class Parent
    {

        public Parent()
        {
            RegistrationDate = DateTime.Now;
        }
        [Key]
        public Guid RegistationId { get; set; }

        [Required]
        public string UserName { get; set; }
        [Required]
        public string ParentName { get; set; }
        [Required]
        public string StudentRegistrationId { get; set; }
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
        public string status { get; set; }
        public DateTime RegistrationDate { get; private set; }


    }
}
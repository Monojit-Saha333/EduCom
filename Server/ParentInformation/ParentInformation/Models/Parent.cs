using System.ComponentModel.DataAnnotations;

namespace ParentInformation.Models
{
    public class Parent
    {

        [Required]
        [Key]
        public int RegistationId { get; set; }
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
        public long Zipcode { get; set; }
        [EmailAddress]
        public string EmailAddress { get; set; }
        [Required]
        public string PrimaryContactPerson { get; set; }
        [Required]
        public long PrimaryContactPersonPhoneNumber { get; set; }
        [Required]
        public string SecondaryContactPerson { get; set; }
        [Required]
        public long SecondaryContactPersonPhoneNumber { get; set; }
    }
}

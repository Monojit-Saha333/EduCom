using System;
using System.ComponentModel.DataAnnotations;

namespace ParentInformation.DTOs
{
    public class ParentUpdateDTO:ParentDTO
    {
        [Required]
       
        public Guid RegistationId { get; set; }
       
    }
}

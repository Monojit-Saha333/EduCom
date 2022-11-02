using System.ComponentModel.DataAnnotations;

namespace ParentInformation.DTOs
{
    public class userProperties
    {
        [Required]
        public string UserName { get; set; }
    }
}

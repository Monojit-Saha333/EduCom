using System.ComponentModel.DataAnnotations;

namespace ParentInfo.API.DTOs
{
    public class userProperties
    {
        [Required]
        public string UserName { get; set; }
    }
}

using System;
using System.ComponentModel.DataAnnotations;

namespace Notification.API.Models
{
    public class Notice
    {
        public Notice()
        {
            NotificationDate=DateTime.Now;
        }
        [Key]
        public Guid NoticeId{ get; set; }
        [Required]
        public DateTime NotificationDate { get; private set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public string NotificationPostedBy { get; set; }
    }
}

using System;
using System.ComponentModel.DataAnnotations;

namespace Notification.API.Models
{
    public class Notice
    {
        [Key]
        public Guid NoticeId{ get; set; }
        public DateTime NotificationDate { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public string NotificationPostedBy { get; set; }
    }
}

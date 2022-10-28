using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Notification.API.Models;
using Notification.API.Services;
using System;

namespace Notification.API.Controllers
{
    [ApiController]
  // [Route("[Controller]")]
    public class NotificationController : ControllerBase
    {
        public readonly INotificationRepository _notificationRepo;
        public NotificationController( INotificationRepository notificationRepository)
        {
            _notificationRepo = notificationRepository;
        }
        [HttpPost("createNotice")]
        public IActionResult createNotice(Notice notice)
        {
            if (notice == null)
                return BadRequest(notice);
           var noticeres= _notificationRepo.createNotice(notice);
            return Ok(noticeres);
        }
        [HttpGet("Notifications")]
        public IActionResult getAllNotifications()
        {
            var notifications=_notificationRepo.getNotifcation();
            if (notifications == null)
                return NotFound();
            return Ok(notifications);
        }
        [HttpGet("Notifications/{id}")]
        public IActionResult getNotificationById(System.Guid id)
        {
            var notification = _notificationRepo.getNoticeById(id);
            if (notification == null)
                return NotFound();
            return Ok(notification);
        }
        
        [HttpPut("updateNotice")]

        public IActionResult updateNotice(Notice notice)
        {
            _notificationRepo.updateNotice(notice);

            return Ok("Notification Updated");
        }
        [HttpDelete("delete")]
        public IActionResult delete(Guid id)
        {
            _notificationRepo.deleteNotice(id);
            return Ok("deleted");
        }





    }
}

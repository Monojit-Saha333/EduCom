using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Notification.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notification.API.Services
{
    public class NotificationRepository : INotificationRepository
    {
        public NotificationContext NotificationContext { get; }

        public NotificationRepository(NotificationContext notificationContext)
        {
            NotificationContext = notificationContext;

        }

        public NoticeResponse createResponse(Guid id, string _successMessage, string _errorMessage)
        {
            var noticeResponse = new NoticeResponse()
            {
                NoticeId = id,
                SuccessMessage = _successMessage,
            };
            return noticeResponse;
        }

        public NoticeResponse createNotice(Notice notice)
        {
          
                NotificationContext.Add(notice);
                NotificationContext.SaveChanges();
                return createResponse(notice.NoticeId, "Notice created", "");
        }

        public void deleteNotice(Guid id)
        {
            var notification = NotificationContext.notifications.Find(id);
            if (notification == null)
                throw new NotImplementedException();
            NotificationContext.Remove(notification);
            NotificationContext.SaveChanges();

        }

        public Notice getNoticeById(Guid Id)
        {
            Notice singleNotice=NotificationContext.notifications.Find(Id);
            if (singleNotice == null)
                return null;
            return singleNotice;
        }

        public List<Notice> getNotifcation()
        {
            var notices =NotificationContext.notifications.ToList<Notice>();
            if (notices == null)
                return null;
             return notices;
        }

        public void updateNotice(Notice notice)
        {
            var notification = NotificationContext.notifications;
            notification.Update(notice);
            NotificationContext.SaveChanges();
        }
    }

}
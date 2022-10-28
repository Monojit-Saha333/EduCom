using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Notification.API.Models;

namespace Notification.API.Services
{ 

    public interface INotificationRepository
    {
            public NoticeResponse createNotice(Notice notice);
            public List<Notice> getNotifcation();
            public Notice getNoticeById(Guid Id);
            public void updateNotice(Notice notice);
            public void deleteNotice(Guid id); 
    }

}
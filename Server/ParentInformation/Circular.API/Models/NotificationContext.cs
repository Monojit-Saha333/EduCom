using Microsoft.EntityFrameworkCore;

namespace Notification.API.Models
{
    public class NotificationContext : DbContext
    {
        public NotificationContext(DbContextOptions<NotificationContext> options) : base(options)
        {

        }

        public DbSet<Notice> notifications { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;

namespace ParentInformation.Models
{
    public class ParentContext:DbContext
    {
        public ParentContext(DbContextOptions<ParentContext> options ):base(options)
        {

        }
        public DbSet<Parent> parents { get; set; }  
    }
}

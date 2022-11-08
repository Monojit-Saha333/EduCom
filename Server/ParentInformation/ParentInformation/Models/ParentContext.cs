using Microsoft.EntityFrameworkCore;

namespace ParentInformation.Models
{
    public class ParentContext:DbContext
    {
        public ParentContext(DbContextOptions<ParentContext> options ):base(options)
        {
           
        }
        public DbSet<Parent> parent { get; set; }
        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Parent>().HasAlternateKey(parent => parent.UserName);               
        }



    }
}

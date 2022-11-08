using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SchoolStaff.Models
{
    public class SchoolStaffContext: DbContext
    {


        public SchoolStaffContext(DbContextOptions<SchoolStaffContext> options) : base(options)
        {

        }
        public DbSet<Staff> schoolstaff { get; set; }
        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Staff>().HasAlternateKey(schoolstaff => schoolstaff.Username);
        }
    }

 

}


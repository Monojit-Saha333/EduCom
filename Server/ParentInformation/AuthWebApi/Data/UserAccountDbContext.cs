
using JWTAuth.Models;
using Microsoft.EntityFrameworkCore;


namespace AuthWebApi.Data
{
    public class UserAccountDbContext:DbContext
    {
        public UserAccountDbContext(DbContextOptions<UserAccountDbContext> dbContextOptions):base(dbContextOptions)
        {

        }

        public DbSet<UserAccount>   userAccounts { get; set; }
    }
}

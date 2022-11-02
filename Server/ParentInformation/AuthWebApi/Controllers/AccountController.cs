using AuthWebApi.Data;

using JWTAuth;
using JWTAuth.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AuthWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public readonly JwtTokenHandler _jwtTokenHandler;
        private readonly UserAccountDbContext dbcontext;
        
        public AccountController(JwtTokenHandler jwtTokenHandler,UserAccountDbContext dbcontext)
        {
            _jwtTokenHandler=jwtTokenHandler;
            this.dbcontext = dbcontext;
             
        }
        [HttpPost("AddUser")]
        public IActionResult Register([FromBody] UserAccount userAccount)
        {
            
            var accountswithsamecredentials = dbcontext.userAccounts.FirstOrDefault(c => c.UserName == userAccount.UserName);
            if (accountswithsamecredentials != null)
                return Conflict(new { message = "User with this user name exist" });

            dbcontext.Add(userAccount);
            dbcontext.SaveChanges();


            return Ok(new {message="Account created"});
        }
        [HttpPost("login")]
        public ActionResult<AuthenticationResponse> Authenticate([FromBody] AuthenticationRequest authenticationRequest)
        {
            var userAccounts = dbcontext.userAccounts.ToList();
            var authenticationResponse = _jwtTokenHandler.GenerateJwtToken(authenticationRequest,userAccounts);
            if (authenticationResponse == null) return Unauthorized();
            return Ok(authenticationResponse);
        }
    }
}

using JWTAuth.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace JWTAuth
{
    public class JwtTokenHandler
    {
        public const string JWT_SECURITY_KEY= "IKHKGkgkJgKJgKJgKUGkLkjifJgIfIK";
        public const int JWT_TOKEN_VALIDITY = 20;
        //public const int JWT_TOKEN_EXPIRED = 30;
        private readonly List<UserAccount> _userAccountList;
        public JwtTokenHandler()
        {
            _userAccountList = new List<UserAccount>()
            {
                new UserAccount(){ 
                UserName="Admin",
                Password="Admin123",
                Role="Administrator"
                },
                new UserAccount()
                {
                    UserName="User01",
                    Password="User01",
                    Role="User"
                }
                };

            

        }

        public AuthenticationResponse GenerateJwtToken(AuthenticationRequest authenticationRequest,List<UserAccount> userAccounts)
        {
            if(string.IsNullOrWhiteSpace(authenticationRequest.UserName)|| string.IsNullOrWhiteSpace(authenticationRequest.Password))
                return null;

            /*validation*/

            UserAccount userAccount = userAccounts.Where(e => e.UserName == authenticationRequest.UserName && e.Password == authenticationRequest.Password).FirstOrDefault();
            if (userAccount == null) return null;
               
            var tokenExpiryTimeStamp=DateTime.Now.AddMinutes(JWT_TOKEN_VALIDITY);
            var tokenKey = Encoding.ASCII.GetBytes(JWT_SECURITY_KEY);
            var claimsIdentity = new ClaimsIdentity(new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Name,authenticationRequest.UserName),
                new Claim(ClaimTypes.Role,userAccount.Role)
            });
            var signingCredentials=new SigningCredentials(new SymmetricSecurityKey(tokenKey),SecurityAlgorithms.HmacSha256Signature);
            var securityTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                Expires = tokenExpiryTimeStamp,
                SigningCredentials = signingCredentials
            };

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();

            var securityToken = jwtSecurityTokenHandler.CreateToken(securityTokenDescriptor);
            var token=jwtSecurityTokenHandler.WriteToken(securityToken);

            return new AuthenticationResponse
            {
                UserName = userAccount.UserName,
                UserRole=userAccount.Role,
                ExpiresIn = (int)tokenExpiryTimeStamp.Subtract(DateTime.Now).TotalSeconds,
                JwtToken = token


            };
        }



    }
}

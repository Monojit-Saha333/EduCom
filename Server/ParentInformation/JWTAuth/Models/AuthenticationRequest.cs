using System;
using System.Collections.Generic;
using System.Text;

namespace JWTAuth.Models
{
    public  class AuthenticationRequest
    {
        public string UserName { get; set; }    
        public string Password { get; set; }
    }
}

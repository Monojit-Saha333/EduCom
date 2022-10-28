using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.IO;
using System.Text;
using System;
using System.Threading.Tasks;
using Notification.API.Models;

namespace Notification.API
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class CustomMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if (httpContext.Request.Method == "POST")
            {
                var requestbody = await new StreamReader(httpContext.Request.Body).ReadToEndAsync();
                var jsonrequest = JsonConvert.DeserializeObject<Notice>(requestbody);
                Notice newnotice = new Notice()
                {
                    Subject = jsonrequest.Subject,
                    Message = jsonrequest.Message,
                    NotificationPostedBy = jsonrequest.NotificationPostedBy,
                    NotificationDate = DateTime.Now
                };
                
                var seializeobject = JsonConvert.SerializeObject(newnotice);
                var requestdata = Encoding.UTF8.GetBytes(seializeobject);
                var stream = new MemoryStream(requestdata);
                httpContext.Request.Body = stream;
            }
            await _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class CustomMiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<CustomMiddleware>();
        }
    }
}

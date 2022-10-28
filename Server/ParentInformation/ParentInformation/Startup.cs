using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ParentInformation.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Swashbuckle;
using ParentInformation.Models;
using Microsoft.EntityFrameworkCore;
using FluentValidation.AspNetCore;
using System.Reflection;
using ParentInformation.Validation;
using ParentInformation.Validations;
using JWTAuth;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

namespace ParentInformation
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddAutoMapper(typeof(Startup));
            services.AddControllers()
         .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<ParentValidator>());
            services.AddControllers()
        .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<ParentUpdateValidator>());
            services.AddTransient<IParentInfoRepository, ParentInfoRepository>();
            services.AddCustomJwtAuthentication();
            services.AddDbContext<ParentContext>(options => options.UseSqlServer(Configuration.GetConnectionString("defaultconnection")));

            services.AddSwaggerGen(c =>
            {

                c.AddSecurityDefinition("bearerAuth", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Authorization header using the Bearer scheme."
                });
                c.AddSecurityRequirement(
                    new OpenApiSecurityRequirement
                {
                    {
                          new OpenApiSecurityScheme
                            {
                                Reference = new OpenApiReference
                                {
                                    Type = ReferenceType.SecurityScheme,
                                    Id = "bearerAuth"
                                }
                            },
                            new string[] {}
                    }
                });
            });



            var provider = services.BuildServiceProvider();
            var configuration = provider.GetRequiredService<IConfiguration>();
            services.AddCors(options =>
            {
                var frontendURL = configuration.GetValue<string>("frontend_url");
                options.AddDefaultPolicy(services =>
                {
                    services.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
                });
            });
        }






        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseMiddleware();
            app.UseHttpsRedirection();
            app.UseCors();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

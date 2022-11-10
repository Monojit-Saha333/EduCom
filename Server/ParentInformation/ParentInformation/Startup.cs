using FluentValidation.AspNetCore;
using JWTAuth;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ParentInfo.API.Models;
using ParentInfo.API.Repositories;
using ParentInfo.API.Validations;
using System;

namespace ParentInfo.API
{
    public class Startup
    {
        private string Connection;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Startup));
            services.AddControllers()
                    .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<ParentValidator>());
            services.AddControllers()
        .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<ParentUpdateValidator>());
            services.AddTransient<IParentInfoRepository, ParentInfoRepository>();
            services.AddCustomJwtAuthentication();
            services.AddDbContext<ParentContext>(options =>
            {
                var machinname = Environment.MachineName;
                if (machinname == "LAPTOP-OT3KHKEE")
                    Connection = "AnjaliPersonalConnection";
                else if (machinname == "LTIN253009")
                    Connection = "MonojitConnection";
                options.UseSqlServer(Configuration.GetConnectionString(Connection));
            });
           
            services.AddSwaggerGen(opt =>
            {
     
                opt.AddSecurityDefinition("bearerAuth", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Authorization header using the Bearer scheme."
                });

                opt.AddSecurityRequirement(
                    new OpenApiSecurityRequirement
                    {
                        {
                                 new OpenApiSecurityScheme
                                 {
                                     Reference = new OpenApiReference
                                     {
                                            Type=ReferenceType.SecurityScheme,
                                             Id="bearerAuth"
                                     }
                                  },
                                  new string[]{}
                        }
                    });
            });

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
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

using AdventureWorks.OData.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using AdventureWorks.OData.Core.Entity;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Microsoft.OData.UriParser;
using Microsoft.AspNetCore.Mvc;

namespace AdventureWorks.OData.API
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AdventureWorksContext>(options => options.UseSqlServer(_config.GetConnectionString("DefaultConnection")));

            services.AddCors();

            services.AddControllers()
                .AddOData(option => option.Select()
                                .Filter()
                                .Count()
                                .OrderBy()
                                .Expand()
                                .SetMaxTop(30)
                                .AddRouteComponents("api", GetEdmModel()));
            
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebApplication1", Version = "v1" });
            });            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebApplication1 v1"));
            }

            app.UseHttpsRedirection();

            app.UseCors(builder => builder
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithExposedHeaders("Content-Disposition"));

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        public static IEdmModel GetEdmModel()
        {
            ODataConventionModelBuilder modelBuilder = new ODataConventionModelBuilder();            
            modelBuilder.EntitySet<Customer>("Customers");
            //modelBuilder.EntitySet<Address>("Addresses");
            //modelBuilder.EntitySet<CustomerAddress>("CustomerAddresses");
            //modelBuilder.EntitySet<Product>("Products");
            //modelBuilder.EntitySet<SalesOrderDetail>("SalesOrderDetails");
            modelBuilder.EntitySet<SalesOrderHeader>("SalesOrderHeaders");

            modelBuilder.EnableLowerCamelCase();
  

            return modelBuilder.GetEdmModel();
        }
    }
}
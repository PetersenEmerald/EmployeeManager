using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Scheduler.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Scheduler.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class EmployeeController : ControllerBase
     {
          private static readonly string[] Summaries = new[]
          {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

          private readonly ILogger<EmployeeController> _logger;

          public EmployeeController(ILogger<EmployeeController> logger)
          {
               _logger = logger;
          }

          //[HttpGet]
          //public IEnumerable<WeatherForecast> Get()
          //{
          //     var rng = new Random();
          //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
          //     {
          //          Date = DateTime.Now.AddDays(index),
          //          TemperatureC = rng.Next(-20, 55),
          //          Summary = Summaries[rng.Next(Summaries.Length)]
          //     })
          //     .ToArray();
          //}

          [HttpGet]
          public IEnumerable<EmployeeModel> Get()
          {
               EmployeeModel employee = new EmployeeModel
               {
                    defaultPhoneNumber = "612-555-1234",
                    email = "johns@willdan.com",
                    employeeID = 0,
                    fax = "612-555-4321",
                    firstName = "John",
                    homeFax = null,
                    homePhoneNumber = null,
                    lastName = "Smith"
               };

               return (IEnumerable<EmployeeModel>)employee;
          }
     }
}

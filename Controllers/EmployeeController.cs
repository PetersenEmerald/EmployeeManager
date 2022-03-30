using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Assessment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assessment.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class EmployeeController : ControllerBase
     {
          private static readonly string[] Summaries = new[]
          {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

          private static readonly List<EmployeeModel> _employees = SetUpEmployeeData();

          private static int latestEmployeeID = 9;

          private readonly ILogger<EmployeeController> _logger;

          public EmployeeController(ILogger<EmployeeController> logger)
          {
               _logger = logger;
          }

          public static List<EmployeeModel> SetUpEmployeeData()
          {
               List<EmployeeModel> employees = new List<EmployeeModel>();
               EmployeeModel employee0 = new EmployeeModel
               {
                    cellNumber = null,
                    defaultPhoneNumber = "612-555-1234",
                    email = "johns@willdan.com",
                    employeeID = 0,
                    fax = "612-555-4321",
                    firstName = "John",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = true,
                    lastName = "Smith",
                    title = "AIA"
               };
               EmployeeModel employee1 = new EmployeeModel
               {
                    cellNumber = null,
                    defaultPhoneNumber = "612-555-1235",
                    email = "moniqueu@willdan.com",
                    employeeID = 1,
                    fax = "612-555-5321",
                    firstName = "Monique",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = false,
                    lastName = "Unique",
                    title = "CIC"
               };
               EmployeeModel employee2 = new EmployeeModel
               {
                    cellNumber = null,
                    defaultPhoneNumber = "612-555-1236",
                    email = "elmerd@willdan.com",
                    employeeID = 2,
                    fax = "612-555-6321",
                    firstName = "Elmer",
                    homeFax = null,
                    homePhoneNumber = "612-555-0102",
                    isActive = true,
                    lastName = "Dickett",
                    title = null
               };
               EmployeeModel employee3 = new EmployeeModel
               {
                    cellNumber = "612-555-9900",
                    defaultPhoneNumber = "612-555-1237",
                    email = "johns@willdan.com",
                    employeeID = 3,
                    fax = "612-555-7321",
                    firstName = "John",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = true,
                    lastName = "Doe",
                    title = "AIA"
               };
               EmployeeModel employee4 = new EmployeeModel
               {
                    cellNumber = null,
                    defaultPhoneNumber = "612-555-1238",
                    email = "josephw@willdan.com",
                    employeeID = 4,
                    fax = "612-555-8321",
                    firstName = "Joseph",
                    homeFax = "612-555-8765",
                    homePhoneNumber = "612-555-5678",
                    isActive = true,
                    lastName = "Webb",
                    title = "CPCU"
               };
               EmployeeModel employee5 = new EmployeeModel
               {
                    cellNumber = "612-555-1239",
                    defaultPhoneNumber = "612-555-1239",
                    email = "milesc@willdan.com",
                    employeeID = 5,
                    fax = null,
                    firstName = "Miles",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = true,
                    lastName = "Close",
                    title = "CPCU"
               };
               EmployeeModel employee6 = new EmployeeModel
               {
                    cellNumber = "612-555-8800",
                    defaultPhoneNumber = "612-555-1235",
                    email = "moniqueu@willdan.com",
                    employeeID = 6,
                    fax = "612-555-5321",
                    firstName = "Monique",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = true,
                    lastName = "Unique-Smith",
                    title = "CIC"
               };
               EmployeeModel employee7 = new EmployeeModel
               {
                    cellNumber = "612-555-7700",
                    defaultPhoneNumber = "612-555-5500",
                    email = "willd@willdan.com",
                    employeeID = 7,
                    fax = "612-555-0055",
                    firstName = "Will",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = false,
                    lastName = "DePart",
                    title = null
               };
               EmployeeModel employee8 = new EmployeeModel
               {
                    cellNumber = "612-555-6600",
                    defaultPhoneNumber = "612-555-6789",
                    email = "chadj@willdan.com",
                    employeeID = 8,
                    fax = "612-555-9876",
                    firstName = "Chad",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = true,
                    lastName = "Johnson",
                    title = null
               };
               EmployeeModel employee9 = new EmployeeModel
               {
                    cellNumber = "612-555-1100",
                    defaultPhoneNumber = "612-555-3456",
                    email = "michellea@willdan.com",
                    employeeID = 9,
                    fax = "612-555-6543",
                    firstName = "Michelle",
                    homeFax = null,
                    homePhoneNumber = null,
                    isActive = true,
                    lastName = "Anderson",
                    title = "CIC"
               };

               employees.Add(employee0);
               employees.Add(employee1);
               employees.Add(employee2);
               employees.Add(employee3);
               employees.Add(employee4);
               employees.Add(employee5);
               employees.Add(employee6);
               employees.Add(employee7);
               employees.Add(employee8);
               employees.Add(employee9);

               return employees;
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
          public List<EmployeeModel> GetEmployees()
          {
               return _employees;
          }

          [HttpPost]
          public List<EmployeeModel> CreateEmployee(EmployeeModel employee)
          {
               latestEmployeeID++;
               employee.employeeID = latestEmployeeID;

               _employees.Add(employee);

               return _employees;
          }

          [HttpPost]
          public List<EmployeeModel> UpdateEmployee(EmployeeModel employee)
          {
               _employees[employee.employeeID] = employee;
               int employeeIndex = _employees.FindIndex((emp) => emp.employeeID == employee.employeeID);
               _employees[employeeIndex] = employee;

               return _employees;
          }

          [HttpDelete("{employeeID}")]
          public List<EmployeeModel> DeleteEmployee(int employeeID)
          {
               int employeeIndex = _employees.FindIndex((emp) => emp.employeeID == employeeID);
               _employees.RemoveAt(employeeIndex);
               return _employees;
          }
     }
}

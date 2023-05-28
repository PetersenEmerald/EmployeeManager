using EmployeeViewer.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace EmployeeViewer.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class EmployeeController : ControllerBase
     {
          private static string fileName = "employees";
          private static int latestEmployeeID = 0;
          private static List<EmployeeModel> employees;

          [HttpGet]
          public List<EmployeeModel> GetEmployees()
          {
               employees = JsonConvert.DeserializeObject<List<EmployeeModel>>(DataManager.GetData(fileName));
               latestEmployeeID = employees[employees.Count - 1].employeeID;
               return employees;
          }

          [HttpPost]
          [Route("newEmployee")]
          public List<EmployeeModel> NewEmployee(EmployeeModel employee)
          {
               latestEmployeeID++;
               employee.employeeID = latestEmployeeID;
               employees.Add(employee);
               Save();

               latestEmployeeID = employee.employeeID;
               return employees;
          }

          [HttpPost]
          [Route("saveEmployee")]
          public List<EmployeeModel> SaveEmployee(EmployeeModel employee)
          {
               int employeeIndex = employees.FindIndex((emp) => emp.employeeID == employee.employeeID);
               if (employeeIndex != -1)
               {
                    employees[employeeIndex] = employee;
               }

               Save();
               return employees;
          }

          [HttpDelete("{employeeID}")]
          public List<EmployeeModel> DeleteEmployee(int employeeID)
          {
               int employeeIndex = employees.FindIndex((emp) => emp.employeeID == employeeID);
               if (employeeIndex != -1)
               {
                    employees.RemoveAt(employeeIndex);
               }

               Save();
               return employees;
          }

          private void Save() {
               DataManager.SaveData(fileName, employees);
          }
     }
}

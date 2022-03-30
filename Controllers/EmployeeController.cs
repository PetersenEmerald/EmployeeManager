using Microsoft.AspNetCore.Mvc;
using Assessment.Models;
using System.Collections.Generic;
using Assessment.Data;

namespace Assessment.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class EmployeeController : ControllerBase
     {
          private static readonly List<EmployeeModel> _employees = EmployeeData.SetUpEmployeeData();

          private static int latestEmployeeID = 9;          

          [HttpGet]
          public List<EmployeeModel> GetEmployees()
          {
               return _employees;
          }

          [HttpPost]
          [Route("newEmployee")]
          public List<EmployeeModel> NewEmployee(EmployeeModel employee)
          {
               latestEmployeeID++;
               employee.employeeID = latestEmployeeID;

               _employees.Add(employee);

               return _employees;
          }

          [HttpPost]
          [Route("editEmployee")]
          public List<EmployeeModel> EditEmployee(EmployeeModel employee)
          {
               _employees[employee.employeeID] = employee;
               int employeeIndex = _employees.FindIndex((emp) => emp.employeeID == employee.employeeID);
               if(employeeIndex != -1){
                    _employees[employeeIndex] = employee;
               }

               return _employees;
          }

          [HttpDelete("{employeeID}")]
          public List<EmployeeModel> DeleteEmployee(int employeeID)
          {
               int employeeIndex = _employees.FindIndex((emp) => emp.employeeID == employeeID);
               if(employeeIndex != -1){
                    _employees.RemoveAt(employeeIndex);
               }
               return _employees;
          }
     }
}

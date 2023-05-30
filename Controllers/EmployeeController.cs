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
          // private static string fileName = "employees";
          private static int latestEmployeeID = 0;
          private static List<EmployeeModel> employees;

          //[HttpGet]
          //public List<EmployeeModel> GetEmployees()
          //{
          //     employees = JsonConvert.DeserializeObject<List<EmployeeModel>>(DataManager.GetData(fileName));
          //     latestEmployeeID = employees[employees.Count - 1].employeeID;
          //     return employees;
          //}

          //[HttpPost]
          //[Route("newData")]
          //public List<object> NewData(object data, string fileName)
          //{
          //     latestEmployeeID++;
          //     //data.employeeID = latestEmployeeID;
          //     // employees.Add(data);
          //     DataManager.SaveData(data, fileName);

          //     // latestEmployeeID = data.employeeID;
          //     return data;
          //}

          //[HttpPost]
          //[Route("saveEmployee")]
          //public List<EmployeeModel> SaveData(object data, string fileName)
          //{
          //     //int employeeIndex = employees.FindIndex((emp) => emp.employeeID == employee.employeeID);
          //     //if (employeeIndex != -1)
          //     //{
          //     //     employees[employeeIndex] = employee;
          //     //}

          //     DataManager.SaveData(data, fileName);
          //     return data;
          //}

          //[HttpDelete("{employeeID}")]
          //public List<EmployeeModel> DeleteEmployee(int dataID, string fileName)
          //{
          //     //int employeeIndex = employees.FindIndex((emp) => emp.employeeID == employeeID);
          //     //if (employeeIndex != -1)
          //     //{
          //     //     employees.RemoveAt(employeeIndex);
          //     //}

          //     DataManager.SaveData(data, fileName);
          //     return data;
          //}

          //private void Save(object data, string file) {
          //     DataManager.SaveData(data, file);
          //}
     }
}

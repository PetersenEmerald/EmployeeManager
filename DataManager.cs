using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;

namespace EmployeeManager
{
     public class DataManager
     {
          public static string GetData(string fileName)
          {
               string formattedFileName = string.Format(@"{0}\Data\" + fileName + ".txt", Environment.CurrentDirectory);
               return System.IO.File.ReadAllText(formattedFileName);
          }

          public static void SaveData(string data, string fileName)
          {
               string formattedFileName = string.Format(@"{0}\Data\" + fileName + ".txt", Environment.CurrentDirectory);
               System.IO.File.WriteAllText(formattedFileName, data);
          }
     }
}

using Newtonsoft.Json;
using System;

namespace EmployeeViewer
{
     public class DataManager
     {
          public static string GetData(string fileName)
          {
               string formattedFileName = string.Format(@"{0}\Data\" + fileName + ".txt", Environment.CurrentDirectory);
               return System.IO.File.ReadAllText(formattedFileName);
          }

          public static void SaveData(string fileName, object data)
          {
               string json = JsonConvert.SerializeObject(data, Formatting.Indented);
               string formattedFileName = string.Format(@"{0}\Data\" + fileName + ".txt", Environment.CurrentDirectory);
               System.IO.File.WriteAllText(formattedFileName, json);
          }
     }
}

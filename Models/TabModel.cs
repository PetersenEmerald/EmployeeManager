using System.Collections.Generic;
using System.Dynamic;

namespace EmployeeViewer.Models
{
     public class TabModel
     {
          public int tabID { get; set; }
          public string displayName { get; set; }
          public string name { get; set; }
          public List<FieldModel> fields { get; set; }
          public List<ExpandoObject> data { get; set; }
     }

     public class DataModel
     {
          public int tabID { get; set; }
          public string values { get; set; }
     }
}

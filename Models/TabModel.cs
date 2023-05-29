using System.Collections.Generic;

namespace EmployeeViewer.Models
{
     public class TabModel
     {
          public int tabID { get; set; }
          public string displayName { get; set; }
          public string name { get; set; }
          public List<FieldModel> fields { get; set; }
          public object data { get; set; }
     }
}

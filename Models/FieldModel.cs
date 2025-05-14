namespace EmployeeManager.Models
{
     public class FieldModel
     {
          public int fieldID { get; set; }
          public int tabID { get; set; }          
          public string name { get; set; }
          public bool tableColumn { get; set; }
          public string type { get; set; }
          #nullable enable
               public string? columnType { get; set; }
               public string? displayName { get; set; }
               public FieldDataModel[]? fieldData { get; set; }
               public string? placeHolder { get; set; }
               public bool? required { get; set; }
               public int? priority { get; set; }               
               public string[]? validationRules { get; set; }
               public string? validationPattern { get; set; }
               public dynamic? value { get; set; }
          #nullable disable
     }

     public class FieldDataModel
     {
          public string displayName { get; set; }
          public int[] fieldDataDisplayID { get; set; }
          public int fieldValueID { get; set; }
          public string dataType { get; set; }
          public int tabID { get; set; }
     }

}


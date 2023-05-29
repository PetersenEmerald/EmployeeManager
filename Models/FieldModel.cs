namespace EmployeeViewer.Models
{
     public class FieldModel<T>
     {
          public int fieldID { get; set; }
          public int tabID { get; set; }
          public string displayName { get; set; }
          public FieldDataModel<T>[] fieldData { get; set; }
          public string name { get; set; }
          public string placeHolder { get; set; }
          public bool required { get; set; }
          public int priority { get; set; }
          public string type { get; set; }
          public string[] validationRules { get; set; }
          public string validationPattern { get; set; }
          public T value { get; set; }
     }

     public class FieldDataModel<T>
     {
          public string displayName { get; set; }
          public T value { get; set; }
     }

}


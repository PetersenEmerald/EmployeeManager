using System;

namespace EmployeeViewer.Models
{
     public class ProjectModel
     {
          public int contactEmployeeID { get; set; }

          public bool isActive { get; set; }

          public string projectName { get; set; }

          public DateTime projectDate { get; set; }

          public int projectID { get; set; }
     }
}

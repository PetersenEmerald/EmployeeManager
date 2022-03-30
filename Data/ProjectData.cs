using Assessment.Models;
using System;
using System.Collections.Generic;

namespace Assessment.Data
{
     public class ProjectData
     {
          public static List<ProjectModel> SetUpProjectData()
          {
               List<ProjectModel> projects = new List<ProjectModel>();
               ProjectModel project0 = new ProjectModel
               {
                    contactEmployeeID = 4,
                    projectName = "Alan Parsons Project",
                    projectDate = DateTime.Parse("1/23/1970"),
                    projectID = 0
               };
               ProjectModel project1 = new ProjectModel
               {
                    contactEmployeeID = 3,
                    projectName = "Take Out the Trash",
                    projectDate = DateTime.Parse("11/30/2010"),
                    projectID = 1
               };
               ProjectModel project2 = new ProjectModel
               {
                    contactEmployeeID = 8,
                    projectName = "G2002.0100",
                    projectDate = DateTime.Parse("2/2/2017"),
                    projectID = 2
               };
               ProjectModel project3 = new ProjectModel
               {
                    contactEmployeeID = 5,
                    projectName = "G2003.0100",
                    projectDate = DateTime.Parse("3/3/2018"),
                    projectID = 3
               };
               ProjectModel project4 = new ProjectModel
               {
                    contactEmployeeID = 9,
                    projectName = "G2004.0100",
                    projectDate = DateTime.Parse("4/4/2019"),
                    projectID = 4
               };
               ProjectModel project5 = new ProjectModel
               {
                    contactEmployeeID = 7,
                    projectName = "G2005.0100",
                    projectDate = DateTime.Parse("5/5/2020"),
                    projectID = 5
               };
               ProjectModel project6 = new ProjectModel
               {
                    contactEmployeeID = 2,
                    projectName = "S2000.0200",
                    projectDate = DateTime.Parse("6/6/2010"),
                    projectID = 6
               };

               projects.Add(project0);
               projects.Add(project1);
               projects.Add(project2);
               projects.Add(project3);
               projects.Add(project4);
               projects.Add(project5);
               projects.Add(project6);

               return projects;
          }
     }
}

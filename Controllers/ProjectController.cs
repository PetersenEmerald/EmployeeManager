using EmployeeViewer.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace EmployeeViewer.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class ProjectController : ControllerBase
     {
          private static string fileName = "projects";
          private static int latestProjectID = 0;
          private static List<ProjectModel> projects;

          [HttpGet]
          public List<ProjectModel> GetProjects()
          {
               projects = JsonConvert.DeserializeObject<List<ProjectModel>>(DataManager.GetData(fileName));
               latestProjectID = projects[projects.Count - 1].projectID;
               return projects;
          }

          [HttpPost]
          [Route("newProject")]
          public List<ProjectModel> NewProject(ProjectModel project)
          {
               latestProjectID++;
               project.projectID = latestProjectID;
               projects.Add(project);
               Save();

               latestProjectID = project.projectID;
               return projects;
          }

          [HttpPost]
          [Route("saveProject")]
          public List<ProjectModel> SaveProject(ProjectModel project)
          {
               int projectIndex = projects.FindIndex((proj) => proj.projectID == project.projectID);
               if (projectIndex != -1)
               {
                    projects[projectIndex] = project;
               }

               Save();
               return projects;
          }

          [HttpDelete("{projectID}")]
          public List<ProjectModel> DeleteEmployee(int projectID)
          {
               int projectIndex = projects.FindIndex((proj) => proj.projectID == projectID);
               if (projectIndex != -1)
               {
                    projects.RemoveAt(projectIndex);
               }

               Save();
               return projects;
          }

          private void Save()
          {
               // DataManager.SaveData(fileName, projects);
          }
     }
}

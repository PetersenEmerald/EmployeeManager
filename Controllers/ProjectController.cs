using Microsoft.AspNetCore.Mvc;
using EmployeeViewer.Data;
using EmployeeViewer.Models;
using System.Collections.Generic;

namespace EmployeeViewer.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class ProjectController : ControllerBase
     {
          private static readonly List<ProjectModel> _projects = ProjectData.SetUpProjectData();
          private static int latestProjectID = 6;

          [HttpGet]
          public List<ProjectModel> GetProjects()
          {
               return _projects;
          }

          [HttpPost]
          [Route("newProject")]
          public List<ProjectModel> NewProject(ProjectModel project)
          {
               latestProjectID++;
               project.projectID = latestProjectID;

               _projects.Add(project);

               return _projects;
          }

          [HttpPost]
          [Route("saveProject")]
          public List<ProjectModel> SaveProject(ProjectModel project)
          {
               int projectIndex = _projects.FindIndex((proj) => proj.projectID == project.projectID);
               if (projectIndex != -1)
               {
                    _projects[projectIndex] = project;
               }

               return _projects;
          }

          [HttpDelete("{projectID}")]
          public List<ProjectModel> DeleteEmployee(int projectID)
          {
               int projectIndex = _projects.FindIndex((proj) => proj.projectID == projectID);
               if (projectIndex != -1)
               {
                    _projects.RemoveAt(projectIndex);
               }
               return _projects;
          }
     }
}

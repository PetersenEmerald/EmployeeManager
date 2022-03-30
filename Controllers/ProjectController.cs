using Microsoft.AspNetCore.Mvc;
using Assessment.Models;
using System.Collections.Generic;
using Assessment.Data;
using System;

namespace Assessment.Controllers
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
          [Route("editProject")]
          public List<ProjectModel> EditProject(ProjectModel project)
          {
               int projectIndex = _projects.FindIndex((proj) => proj.projectID == project.projectID);
               if (projectIndex != -1)
               {
                    _projects[projectIndex] = project;
               }

               return _projects;
          }

          [HttpDelete]
          [Route("purgeProjects")]
          public List<ProjectModel> PurgeProjects()
          {
               DateTime today = DateTime.Today;
               for (int i = 0; i < _projects.Count; i++)
               {
                    if (Math.Abs(_projects[i].projectDate.Year - today.Year) >= 5)
                    {
                         _projects.RemoveAt(i);
                    }
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

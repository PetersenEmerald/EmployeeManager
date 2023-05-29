using EmployeeViewer.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace EmployeeViewer.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class ViewController : ControllerBase
     {
          [HttpGet]
          [Route("getTabs")]
          public List<TabModel> GetTabs()
          {
               return JsonConvert.DeserializeObject<List<TabModel>>(DataManager.GetData("tabs"));
          }

          [HttpGet]
          [Route("getFields")]
          public List<FieldModel> GetFields()
          {
               return JsonConvert.DeserializeObject<List<FieldModel>>(DataManager.GetData("fields"));
          }
     }
}

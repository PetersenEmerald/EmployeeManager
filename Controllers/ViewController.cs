using EmployeeViewer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeViewer.Controllers
{
     [ApiController]
     [Route("[controller]")]
     public class ViewController : ControllerBase
     {
          [HttpGet]
          [Route("getData")]
          public List<TabModel> GetData()
          {
               List<TabModel> tabs = JsonConvert.DeserializeObject<List<TabModel>>(DataManager.GetData("tabs"));
               List<FieldModel> fields = JsonConvert.DeserializeObject<List<FieldModel>>(DataManager.GetData("fields"));

               for (var i = 0; i < tabs.Count; i++)
               {
                    tabs[i].fields = new List<FieldModel>();
                    for (var j = 0; j < fields.Count; j++)
                    {
                         if (fields[j].tabID == tabs[i].tabID)
                         {
                              tabs[i].fields.Add(fields[j]);
                         }
                    }

                    tabs[i].fields = tabs[i].fields.OrderBy(field => field.priority).ToList();
               }
               return tabs;
          }
     }
}

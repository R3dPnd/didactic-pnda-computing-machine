using Microsoft.AspNetCore.Mvc;

namespace CityInfo.API.Controllers 
{
    [ApiController]
    public class CitiesController : ControllerBase
    {
        public JsonResult GetCities()
        {
            return new JsonResult(
                new List<object> {
                new {name = "Akron", id = -1},
                new {name = "Auburn", id = 0}
            });
        }
    }
}
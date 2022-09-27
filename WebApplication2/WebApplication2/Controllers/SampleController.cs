using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        SampleDBContext db = new SampleDBContext();

        [HttpGet]
        public IEnumerable<TblSample> Get()
        {
            return db.TblSamples;
        }
    }
}

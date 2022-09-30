using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UploadImage.Models;

namespace UploadImage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        ImageDBContext db;
        public LoginController(ImageDBContext _db)
        {
            db = _db;
        }
        [HttpPost]
        public IActionResult Login(TblLogin tblLogin)
        {
            return Ok();
        }
    }
}

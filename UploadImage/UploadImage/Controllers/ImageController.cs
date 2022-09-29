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
    public class ImageController : ControllerBase
    {
        ImageDBContext db;
        public ImageController(ImageDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<TblImage> Get()
        {
            return db.TblImages;
        }
    }
}

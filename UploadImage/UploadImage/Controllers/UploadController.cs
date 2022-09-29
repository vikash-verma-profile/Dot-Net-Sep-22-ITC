using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using UploadImage.Models;

namespace UploadImage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        ImageDBContext db;
        public UploadController(ImageDBContext _db)
        {
            db = _db;
        }
        [HttpPost,DisableRequestSizeLimit]
        public async Task<IActionResult> UploadImage()
        {
            try
            {
                var formcollection = await Request.ReadFormAsync();
                var file = formcollection.Files.First();
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory());
                if (file.Length > 0)
                {
                    var FileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var _fileName=Path.GetFileNameWithoutExtension(FileName);
                    FileName = _fileName + DateTime.Now.ToString("yyyyMMddHHmmss")+".jpg";
                    var fullPath = Path.Combine(pathToSave, FileName);
                    var dbPath = FileName;
                    using (var stream=new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    string connectionstring = "DefaultEndpointsProtocol=https;AccountName=storagebucket007;AccountKey=YnPXgEy5KU886ZR9PAXQyw4QukHzAt+lLgddJ+JvTOm44JN9E06HDz4vgftd3f7cpBYdIl5ynco2+AStTjotew==;EndpointSuffix=core.windows.net";
                    string containerName = "images";
                    BlobContainerClient container = new BlobContainerClient(connectionstring, containerName);
                    var blob = container.GetBlobClient(FileName);
                    var blobstream = System.IO.File.OpenRead(FileName);
                    await blob.UploadAsync(blobstream);
                    var URi = blob.Uri.AbsoluteUri;
                    var imageObj = new TblImage();
                    imageObj.ImageUrl = dbPath;
                    db.TblImages.Add(imageObj);
                    db.SaveChanges();
                    DeleteFile(fullPath);
                    return Ok(new { Message="Your Image is uploaded successfully"});
                }
                else
                {
                    return BadRequest();
                }
               
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }
        private void DeleteFile(string path)
        {
            if (System.IO.File.Exists(path))
            {
                System.IO.File.Delete(path);
            }
        }
    }

}

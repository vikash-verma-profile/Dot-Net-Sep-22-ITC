using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace UploadImage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
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
                    var fullPath = Path.Combine(pathToSave, FileName);
                    //var dbPath = Path.Combine();
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
    }
}

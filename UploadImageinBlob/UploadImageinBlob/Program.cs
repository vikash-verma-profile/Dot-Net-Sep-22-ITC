using Azure.Storage.Blobs;
using System;
using System.IO;
using System.Threading.Tasks;

namespace UploadImageinBlob
{
    class Program
    {
        static void Main(string[] args)
        {
            var FileName = @"C:\Users\LEVEL UP SOLUTIONS 1\Desktop\Dot-Net-Training-ITC\UploadImageinBlob\UploadImageinBlob\asd12.jpg";
            UploadImage(FileName).Wait();
        }

        public static async Task UploadImage(string FileName)
        {
            try
            {
                string connectionstring = "DefaultEndpointsProtocol=https;AccountName=storagebucket007;AccountKey=YnPXgEy5KU886ZR9PAXQyw4QukHzAt+lLgddJ+JvTOm44JN9E06HDz4vgftd3f7cpBYdIl5ynco2+AStTjotew==;EndpointSuffix=core.windows.net";
                string containerName = "images";
                BlobContainerClient container = new BlobContainerClient(connectionstring, containerName);
                var blob = container.GetBlobClient(FileName);
                var blobstream = System.IO.File.OpenRead(FileName);
                await blob.UploadAsync(blobstream);
                var URi = blob.Uri.AbsoluteUri;
                Console.WriteLine(URi);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            
        }
    }
}

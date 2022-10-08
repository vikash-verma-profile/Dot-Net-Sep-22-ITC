using System;
using System.Collections.Generic;

#nullable disable

namespace Shared.Models.Models
{
    public partial class TblDummyDatum
    {
        public int Id { get; set; }
        public string TextData { get; set; }
        public int? LoginId { get; set; }
    }
}

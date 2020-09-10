
namespace DAP.NCLHODSSPENDVIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHODSSPENDVIS.Amoslevel")]
    [BasedOnRow(typeof(Entities.AmoslevelRow), CheckNames = true)]
    public class AmoslevelColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdNum { get; set; }
        [EditLink]
        public String AccountId { get; set; }
        public String Descr { get; set; }
        public String FlexDim1Name { get; set; }
        public String FlexDim2Name { get; set; }
        public String FlexDim3Name { get; set; }
        public String FlexDim4Name { get; set; }
        public DateTime ModifiedDate { get; set; }
        public String ModifiedBy { get; set; }
    }
}
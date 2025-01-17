﻿
namespace DAP.SSISConfig.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SSISConfig.GpInterfaceLog")]
    [BasedOnRow(typeof(Entities.GpInterfaceLogRow), CheckNames = true)]
    public class GpInterfaceLogColumns
    {
        [EditLink]
        public String CompanyCd { get; set; }
        [EditLink]
        public String CruiseSegmentCd { get; set; }
        public String ExpRevType { get; set; }
        public String GpInterfaceInd { get; set; }
        public DateTime GpInterfacedDt { get; set; }
        public Int32 JournalNum { get; set; }
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 InterfaceLogId { get; set; }
    }
}
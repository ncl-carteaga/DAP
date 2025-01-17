﻿
namespace DAP.SSISConfig.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SSISConfig.GpInterfaceLog")]
    [BasedOnRow(typeof(Entities.GpInterfaceLogRow), CheckNames = true)]
    public class GpInterfaceLogForm
    {
        public String CompanyCd { get; set; }
        public String CruiseSegmentCd { get; set; }
        public String ExpRevType { get; set; }
        public String GpInterfaceInd { get; set; }
        public DateTime GpInterfacedDt { get; set; }
        public Int32 JournalNum { get; set; }
    }
}

namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.GuestPreventDeparture")]
    [BasedOnRow(typeof(Entities.GuestPreventDepartureRow), CheckNames = true)]
    public class GuestPreventDepartureForm
    {
        public String GuestFirstNam { get; set; }
        public String GuestLastNam { get; set; }
        public String NameTypeDesc { get; set; }
        public Int32 FromReportNbr { get; set; }
        public String InternalExternalCd { get; set; }
        public String TypeCd { get; set; }
        public String SirsNbrTxt { get; set; }
        public DateTime IncidentReportedDat { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String BoardingDenialReasonDesc { get; set; }
        public String CasinoIncidentNbrTxt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}
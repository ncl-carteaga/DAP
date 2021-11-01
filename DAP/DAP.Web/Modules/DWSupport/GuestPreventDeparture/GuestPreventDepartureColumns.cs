
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.GuestPreventDeparture")]
    [BasedOnRow(typeof(Entities.GuestPreventDepartureRow), CheckNames = true)]
    public class GuestPreventDepartureColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 GuestPreventDepartureKey { get; set; }
        [EditLink]
        public String GuestFirstNam { get; set; }
        [EditLink]
        public String GuestLastNam { get; set; }
        public String NameTypeDesc { get; set; }
        public Decimal FromReportNbr { get; set; }
        public String InternalExternalCd { get; set; }
        public String TypeCd { get; set; }
        public String SirsNbrTxt { get; set; }
        public DateTime IncidentReportedDat { get; set; }
        public String BoardingDenialReasonDesc { get; set; }
        public String CasinoIncidentNbrTxt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}
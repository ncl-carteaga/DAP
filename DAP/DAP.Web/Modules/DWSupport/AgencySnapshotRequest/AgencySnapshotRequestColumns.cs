
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.AgencySnapshotRequest")]
    [BasedOnRow(typeof(Entities.AgencySnapshotRequestRow), CheckNames = true)]
    public class AgencySnapshotRequestColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 AgencySnapshotReqId { get; set; }
        [EditLink]
        public String RequestedBy { get; set; }
        public DateTime RequestedByDate { get; set; }
        public String RequestedReason { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
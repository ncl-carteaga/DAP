
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.AgencySnapshotRequest")]
    [BasedOnRow(typeof(Entities.AgencySnapshotRequestRow), CheckNames = true)]
    public class AgencySnapshotRequestForm
    {
        public String RequestedBy { get; set; }
        public DateTime RequestedByDate { get; set; }
        public String RequestedReason { get; set; }
        [Visible(false)]
        public String CreatedBy { get; set; }
        [Visible(false)]
        public DateTime CreatedDate { get; set; }
        [Visible(false)]
        public String ModifiedBy { get; set; }
        [Visible(false)]
        public DateTime ModifiedDate { get; set; }
    }
}
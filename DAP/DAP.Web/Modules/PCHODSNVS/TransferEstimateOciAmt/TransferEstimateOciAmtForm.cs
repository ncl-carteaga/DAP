
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.TransferEstimateOciAmt")]
    [BasedOnRow(typeof(Entities.TransferEstimateOciAmtRow), CheckNames = true)]
    public class TransferEstimateOciAmtForm
    {
        public String CruiseSegmentCd { get; set; }
        public String SegmentMarketName { get; set; }
        public String ShipCd { get; set; }
        public String TransferCostPerPax { get; set; }
        [Visible(false)]
        public DateTime LoadDt { get; set; }
    }
}
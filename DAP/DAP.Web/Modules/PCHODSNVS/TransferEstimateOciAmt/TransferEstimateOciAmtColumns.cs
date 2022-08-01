
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.TransferEstimateOciAmt")]
    [BasedOnRow(typeof(Entities.TransferEstimateOciAmtRow), CheckNames = true)]
    public class TransferEstimateOciAmtColumns
    {
        [EditLink]
        public String CruiseSegmentCd { get; set; }
        public String SegmentMarketName { get; set; }
        public String ShipCd { get; set; }
        public Decimal TransferCostPerPax { get; set; }
        public DateTime LoadDt { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TransferId { get; set; }
    }
}
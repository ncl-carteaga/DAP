
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CmiSupp")]
    [BasedOnRow(typeof(Entities.CmiSuppRow), CheckNames = true)]
    public class CmiSuppForm
    {
        [Tab("Tab 1")]
        public Int32 Id { get; set; }
        public Int32 SailYear { get; set; }
        public DateTime EffectiveStartDate { get; set; }
        public DateTime EffectiveEndDate { get; set; }
        public String VoyageCD { get; set; }
        public String ShipCD { get; set; }
        [Tab("Tab 2")]
        public DateTime VoyageStartDate { get; set; }
        public DateTime VoyageEndDate { get; set; }
        public Int32 AgencyID { get; set; }
        public String Market { get; set; }
        public String CmiTypeCd { get; set; }
        public String CharterFlagCd { get; set; }
        [Tab("Tab 3")]
        public Decimal Ntr { get; set; }
        public Int32 PaxDays { get; set; }
        public Int32 BkCabinDays { get; set; }
        public Int32 CapacityDays { get; set; }
        public Int32 CabinCapacityDays { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByName { get; set; }
        [Visible(false)]
        public String ModifiedTs { get; set; }
        [Visible(false)]
        public String CreatedTs { get; set; }
    }
}
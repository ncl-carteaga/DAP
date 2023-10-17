
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CmiSupp")]
    [BasedOnRow(typeof(Entities.CmiSuppRow), CheckNames = true)]
    public class CmiSuppColumns
    {
        [EditLink]
        public Int32 Id { get; set; }
        public Int32 SailYear { get; set; }
        public DateTime EffectiveStartDate { get; set; }
        public DateTime EffectiveEndDate { get; set; }
        public String VoyageCD { get; set; }
        public String ShipCD { get; set; }
        public DateTime VoyageStartDate { get; set; }
        public DateTime VoyageEndDate { get; set; }
        public Int32 AgencyID { get; set; }
        public String Market { get; set; }
        public String CmiTypeCd { get; set; }
        public String CharterFlagCd { get; set; }
        public Decimal Ntr { get; set; }
        public Int32 PaxDays { get; set; }
        public Int32 BkCabinDays { get; set; }
        public Int32 CapacityDays { get; set; }
        public Int32 CabinCapacityDays { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByName { get; set; }
        public DateTime ModifiedTs { get; set; }
        public DateTime CreatedTs { get; set; }
    }
}
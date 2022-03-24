
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.SailingMasterSupp")]
    [BasedOnRow(typeof(Entities.SailingMasterSuppRow), CheckNames = true)]
    public class SailingMasterSuppForm
    {
        [Tab("Sail Info")]
        [HalfWidth]
        public Int32 SailId { get; set; }
        [FormCssClass("line-break-sm")]
        public String PackageTypeCd { get; set; }
        [HalfWidth(UntilNext = true), ReadOnly(true)]
        public DateTime SailDat { get; set; }
        [FormCssClass("line-break-sm"), ReadOnly(true)]
        public String ShipCd { get; set; }
        [ReadOnly(true)]
        public String ShipNbr { get; set; }
        public Int32 MandateWeeksQty { get; set; }
        public String ValidVoyageCd { get; set; }
        [FullWidth]
        public String ProductCd { get; set; }
        [FormCssClass("line-break-sm")]
        public String SlProductCd { get; set; }
        [HalfWidth(UntilNext = true)]

        public String FareFeedIncludeCd { get; set; }
        public String InactiveCd { get; set; }

        public String RmsSeasonCd { get; set; }
        public String MainVoyageCd { get; set; }
        public String InterportCd { get; set; }
        [ReadOnly(true)]
        public String CharterCd { get; set; }

        [Tab("RMS"), ReadOnly(true)]        
        public Int32 RmsForecastCd { get; set; }
        [ReadOnly(true)]
        public String RmsColorNameDesc { get; set; }
        [ReadOnly(true)]
        public Int32 RmsRefLinkSailId { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail1Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail2Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail3Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail4Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail5Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail6Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail7Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail8Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail9Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail10Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail11Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail12Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail13Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail14Id { get; set; }
        [ReadOnly(true)]
        public Int32 RmsParentSail15Id { get; set; }

        [Tab("MISC"), ReadOnly(true)]
        public String LatitudeCruiseCd { get; set; }
        [ReadOnly(true)]
        public String BackToBackCd { get; set; }
        [ReadOnly(true)]
        public Decimal AmenityPtsQty { get; set; }
        [ReadOnly(true)]
        public Int32 JonesActSailId { get; set; }
        [ReadOnly(true)]
        public Decimal FsGrpAmenityAmt { get; set; }
        [ReadOnly(true)]
        public String ObrTradeCd { get; set; }
        [ReadOnly(true)]
        public String ObrSubTradeCd { get; set; }
        [ReadOnly(true)]
        public String ObrSeasonCd { get; set; }
        [ReadOnly(true)]
        public Int32 ProxySailId { get; set; }
        [ReadOnly(true)]
        public DateTime OnSaleDat { get; set; }
        [ReadOnly(true)]
        public String SeasonYearCd { get; set; }
        [ReadOnly(true)]
        public String IsVoyageExceptionCd { get; set; }
        [ReadOnly(true)]
        public String VoyageExceptionDesc { get; set; }
        [ReadOnly(true)]
        public DateTime ItineraryChangedDat { get; set; }
        [ReadOnly(true)]
        public String IsHolidayCd { get; set; }
        [ReadOnly(true)]
        public Int32 ProxyBudgetSailId { get; set; }
        [ReadOnly(true)]
        public Int32 ProxyMetaWeightSailId { get; set; }
        [ReadOnly(true)]
        public String IsFreeOpenBarCd { get; set; }
        [ReadOnly(true)]
        public Int32 CasinoCabinCapacityQty { get; set; }
        [ReadOnly(true)]
        public String IsExtraordinaryCd { get; set; }


        //public DateTime CreatedTs { get; set; }
        //public String CreatedByNam { get; set; }
        //public String ModifiedByNam { get; set; }
        //public DateTime ModifiedTs { get; set; }
    }
}
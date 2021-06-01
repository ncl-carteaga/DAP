
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
        public Int32 SailId { get; set; }
        public String PackageTypeCd { get; set; }
        public String ValidVoyageCd { get; set; }
        public String ShipCd { get; set; }
        public DateTime SailDat { get; set; }
        public String ProductCd { get; set; }
        public String LatitudeCruiseCd { get; set; }
        public String FareFeedIncludeCd { get; set; }
        public String InactiveCd { get; set; }
        public String ShipNbr { get; set; }
        public Decimal AmenityPtsQty { get; set; }
        public Int32 RmsForecastCd { get; set; }
        public Int32 RmsParentSail1Id { get; set; }
        public Int32 RmsParentSail2Id { get; set; }
        public Int32 RmsParentSail3Id { get; set; }
        public String RmsSeasonCd { get; set; }
        public String RmsColorNameDesc { get; set; }
        public Int32 RmsRefLinkSailId { get; set; }
        public String BackToBackCd { get; set; }
        public String MainVoyageCd { get; set; }
        public String SlProductCd { get; set; }
        public Int32 MandateWeeksQty { get; set; }
        public String InterportCd { get; set; }
        public Int32 JonesActSailId { get; set; }
        public Int32 RmsParentSail4Id { get; set; }
        public Int32 RmsParentSail5Id { get; set; }
        public Int32 RmsParentSail6Id { get; set; }
        public Int32 RmsParentSail7Id { get; set; }
        public Int32 RmsParentSail8Id { get; set; }
        public Int32 RmsParentSail9Id { get; set; }
        public Int32 RmsParentSail10Id { get; set; }
        public Int32 RmsParentSail11Id { get; set; }
        public Int32 RmsParentSail12Id { get; set; }
        public Int32 RmsParentSail13Id { get; set; }
        public Int32 RmsParentSail14Id { get; set; }
        public Int32 RmsParentSail15Id { get; set; }
        public Decimal FsGrpAmenityAmt { get; set; }
        public String ObrTradeCd { get; set; }
        public String ObrSubTradeCd { get; set; }
        public String ObrSeasonCd { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public Int32 ProxySailId { get; set; }
        public DateTime OnSaleDat { get; set; }
        public String SeasonYearCd { get; set; }
        public String IsVoyageExceptionCd { get; set; }
        public String VoyageExceptionDesc { get; set; }
        public DateTime ItineraryChangedDat { get; set; }
        public String CharterCd { get; set; }
        public String IsHolidayCd { get; set; }
        public Int32 ProxyBudgetSailId { get; set; }
        public Int32 ProxyMetaWeightSailId { get; set; }
        public String IsFreeOpenBarCd { get; set; }
        public Int32 CasinoCabinCapacityQty { get; set; }
        public String IsExtraordinaryCd { get; set; }
    }
}
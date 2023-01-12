
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.SailingMasterSupp")]
    [BasedOnRow(typeof(Entities.SailingMasterSuppRow), CheckNames = true)]
    public class SailingMasterSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 SailSurKey { get; set; }
        [EditLink]
        public Int32 SailId { get; set; }
        [EditLink]
        public String PackageTypeCd { get; set; }
        public DateTime SailDat { get; set; }
        [Width(50)]
        public String ShipCd { get; set; }
        [Width(50)]
        public String ShipNbr { get; set; }
        public Int32 MandateWeeksQty { get; set; }
        public String ValidVoyageCd { get; set; }
        public String ProductCd { get; set; }
        public String SlProductCd { get; set; }
        public String InactiveCd { get; set; }
        public String RmsSeasonCd { get; set; }
        public String MainVoyageCd { get; set; }
        public String InterportCd { get; set; }
        public String CharterCd { get; set; }
        [Visible(false)]
        public String LatitudeCruiseCd { get; set; }
        public String FareFeedIncludeCd { get; set; }
        [Visible(false)]
        public Decimal AmenityPtsQty { get; set; }
        [Visible(false)]
        public Int32 RmsForecastCd { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail1Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail2Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail3Id { get; set; }
        [Visible(false)]
        public String RmsColorNameDesc { get; set; }
        [Visible(false)]
        public Int32 RmsRefLinkSailId { get; set; }
        [Visible(false)]
        public String BackToBackCd { get; set; }
        [Visible(false)]
        public Int32 JonesActSailId { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail4Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail5Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail6Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail7Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail8Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail9Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail10Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail11Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail12Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail13Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail14Id { get; set; }
        [Visible(false)]
        public Int32 RmsParentSail15Id { get; set; }
        [Visible(false)]
        public Decimal FsGrpAmenityAmt { get; set; }
        [Visible(false)]
        public String ObrTradeCd { get; set; }
        [Visible(false)]
        public String ObrSubTradeCd { get; set; }
        [Visible(false)]
        public String ObrSeasonCd { get; set; }
        public Int32 ProxySailId { get; set; }
        public DateTime OnSaleDat { get; set; }
        public String SeasonYearCd { get; set; }
        [Visible(false)]
        public String IsVoyageExceptionCd { get; set; }
        [Visible(false)]
        public String VoyageExceptionDesc { get; set; }
        [Visible(false)]
        public DateTime ItineraryChangedDat { get; set; }
        [Visible(false)]
        public String IsHolidayCd { get; set; }
        [Visible(false)]
        public Int32 ProxyBudgetSailId { get; set; }
        [Visible(false)]
        public Int32 ProxyMetaWeightSailId { get; set; }
        [Visible(false)]
        public String IsFreeOpenBarCd { get; set; }
        [Visible(false)]
        public Int32 CasinoCabinCapacityQty { get; set; }
        [Visible(false)]
        public String IsExtraordinaryCd { get; set; }

        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}

namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[SAILING_MASTER_SUPP]")]
    [DisplayName("Sailing Master Supp"), InstanceName("Sailing Master Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class SailingMasterSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sail Sur Key"), Column("SAIL_SUR_KEY"), Identity, Visible(false)]
        public Int64? SailSurKey
        {
            get { return Fields.SailSurKey[this]; }
            set { Fields.SailSurKey[this] = value; }
        }

        [DisplayName("Sail Id"), Column("SAIL_ID"), NotNull, QuickSearch, Updatable(false)]
        public Int32? SailId
        {
            get { return Fields.SailId[this]; }
            set { Fields.SailId[this] = value; }
        }

        [DisplayName("Package Type Cd"), Column("PACKAGE_TYPE_CD"), Size(15), NotNull, QuickFilter, LookupEditor("DWSupport.PackageTypeCodeSupp")]
        public String PackageTypeCd
        {
            get { return Fields.PackageTypeCd[this]; }
            set { Fields.PackageTypeCd[this] = value; }
        }

        [DisplayName("Valid Voyage"), Column("VALID_VOYAGE_CD"), Size(1), NotNull, SelectYNEditor]
        public String ValidVoyageCd
        {
            get { return Fields.ValidVoyageCd[this]; }
            set { Fields.ValidVoyageCd[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), NotNull, QuickFilter]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Sail Dat"), Column("SAIL_DAT"), NotNull, QuickFilter]
        public DateTime? SailDat
        {
            get { return Fields.SailDat[this]; }
            set { Fields.SailDat[this] = value; }
        }

        [DisplayName("Product Cd"), Column("PRODUCT_CD"), Size(4), NotNull, ForeignKey("[dbo].[PRODUCT_CODE_SUPP]", "PRODUCT_CD"), LeftJoin("jProductCd"), TextualField("ProductCdProductDesc"), LookupEditor("DWSupport.ProductCodeSupp"), QuickFilter]
        public String ProductCd
        {
            get { return Fields.ProductCd[this]; }
            set { Fields.ProductCd[this] = value; }
        }

        [DisplayName("Latitude Cruise Cd"), Column("LATITUDE_CRUISE_CD"), Size(1), NotNull, SelectYNEditor]
        public String LatitudeCruiseCd
        {
            get { return Fields.LatitudeCruiseCd[this]; }
            set { Fields.LatitudeCruiseCd[this] = value; }
        }

        [DisplayName("Fare Feed Include"), Column("FARE_FEED_INCLUDE_CD"), Size(1), NotNull, SelectYNEditor]
        public String FareFeedIncludeCd
        {
            get { return Fields.FareFeedIncludeCd[this]; }
            set { Fields.FareFeedIncludeCd[this] = value; }
        }

        [DisplayName("Inactive"), Column("INACTIVE_CD"), Size(1), NotNull, SelectYNEditor]
        public String InactiveCd
        {
            get { return Fields.InactiveCd[this]; }
            set { Fields.InactiveCd[this] = value; }
        }

        [DisplayName("Ship Nbr"), Column("SHIP_NBR"), Size(2), MaskedEditor(Mask ="99")]
        public String ShipNbr
        {
            get { return Fields.ShipNbr[this]; }
            set { Fields.ShipNbr[this] = value; }
        }

        [DisplayName("Amenity Pts Qty"), Column("AMENITY_PTS_QTY"), Size(38), Scale(4)]
        public Decimal? AmenityPtsQty
        {
            get { return Fields.AmenityPtsQty[this]; }
            set { Fields.AmenityPtsQty[this] = value; }
        }

        [DisplayName("Rms Forecast Cd"), Column("RMS_FORECAST_CD")]
        public Int32? RmsForecastCd
        {
            get { return Fields.RmsForecastCd[this]; }
            set { Fields.RmsForecastCd[this] = value; }
        }

        [DisplayName("Rms Parent Sail1 Id"), Column("RMS_PARENT_SAIL1_ID")]
        public Int32? RmsParentSail1Id
        {
            get { return Fields.RmsParentSail1Id[this]; }
            set { Fields.RmsParentSail1Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail2 Id"), Column("RMS_PARENT_SAIL2_ID")]
        public Int32? RmsParentSail2Id
        {
            get { return Fields.RmsParentSail2Id[this]; }
            set { Fields.RmsParentSail2Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail3 Id"), Column("RMS_PARENT_SAIL3_ID")]
        public Int32? RmsParentSail3Id
        {
            get { return Fields.RmsParentSail3Id[this]; }
            set { Fields.RmsParentSail3Id[this] = value; }
        }

        [DisplayName("Rms Season Cd"), Column("RMS_SEASON_CD"), Size(30)]
        public String RmsSeasonCd
        {
            get { return Fields.RmsSeasonCd[this]; }
            set { Fields.RmsSeasonCd[this] = value; }
        }

        [DisplayName("Rms Color Name Desc"), Column("RMS_COLOR_NAME_DESC"), Size(20)]
        public String RmsColorNameDesc
        {
            get { return Fields.RmsColorNameDesc[this]; }
            set { Fields.RmsColorNameDesc[this] = value; }
        }

        [DisplayName("Rms Ref Link Sail Id"), Column("RMS_REF_LINK_SAIL_ID")]
        public Int32? RmsRefLinkSailId
        {
            get { return Fields.RmsRefLinkSailId[this]; }
            set { Fields.RmsRefLinkSailId[this] = value; }
        }

        [DisplayName("Back To Back"), Column("BACK_TO_BACK_CD"), Size(1), SelectYNEditor]
        public String BackToBackCd
        {
            get { return Fields.BackToBackCd[this]; }
            set { Fields.BackToBackCd[this] = value; }
        }

        [DisplayName("Main Voyage"), Column("MAIN_VOYAGE_CD"), Size(1), SelectYNEditor]
        public String MainVoyageCd
        {
            get { return Fields.MainVoyageCd[this]; }
            set { Fields.MainVoyageCd[this] = value; }
        }

        [DisplayName("Sl Product Cd"), Column("SL_PRODUCT_CD"), Size(4), ForeignKey("[dbo].[SL_PRODUCT_CODE_SUPP]", "SL_PRODUCT_CD"), LeftJoin("jSlProductCd"), TextualField("SlProductCdSlProductDesc"), LookupEditor("DWSupport.SlProductCodeSupp"), QuickFilter]
        public String SlProductCd
        {
            get { return Fields.SlProductCd[this]; }
            set { Fields.SlProductCd[this] = value; }
        }

        [DisplayName("Mandate Weeks Qty"), Column("MANDATE_WEEKS_QTY")]
        public Int32? MandateWeeksQty
        {
            get { return Fields.MandateWeeksQty[this]; }
            set { Fields.MandateWeeksQty[this] = value; }
        }

        [DisplayName("Interport"), Column("INTERPORT_CD"), Size(1), SelectYNEditor]
        public String InterportCd
        {
            get { return Fields.InterportCd[this]; }
            set { Fields.InterportCd[this] = value; }
        }

        [DisplayName("Jones Act Sail Id"), Column("JONES_ACT_SAIL_ID")]
        public Int32? JonesActSailId
        {
            get { return Fields.JonesActSailId[this]; }
            set { Fields.JonesActSailId[this] = value; }
        }

        [DisplayName("Rms Parent Sail4 Id"), Column("RMS_PARENT_SAIL4_ID")]
        public Int32? RmsParentSail4Id
        {
            get { return Fields.RmsParentSail4Id[this]; }
            set { Fields.RmsParentSail4Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail5 Id"), Column("RMS_PARENT_SAIL5_ID")]
        public Int32? RmsParentSail5Id
        {
            get { return Fields.RmsParentSail5Id[this]; }
            set { Fields.RmsParentSail5Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail6 Id"), Column("RMS_PARENT_SAIL6_ID")]
        public Int32? RmsParentSail6Id
        {
            get { return Fields.RmsParentSail6Id[this]; }
            set { Fields.RmsParentSail6Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail7 Id"), Column("RMS_PARENT_SAIL7_ID")]
        public Int32? RmsParentSail7Id
        {
            get { return Fields.RmsParentSail7Id[this]; }
            set { Fields.RmsParentSail7Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail8 Id"), Column("RMS_PARENT_SAIL8_ID")]
        public Int32? RmsParentSail8Id
        {
            get { return Fields.RmsParentSail8Id[this]; }
            set { Fields.RmsParentSail8Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail9 Id"), Column("RMS_PARENT_SAIL9_ID")]
        public Int32? RmsParentSail9Id
        {
            get { return Fields.RmsParentSail9Id[this]; }
            set { Fields.RmsParentSail9Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail10 Id"), Column("RMS_PARENT_SAIL10_ID")]
        public Int32? RmsParentSail10Id
        {
            get { return Fields.RmsParentSail10Id[this]; }
            set { Fields.RmsParentSail10Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail11 Id"), Column("RMS_PARENT_SAIL11_ID")]
        public Int32? RmsParentSail11Id
        {
            get { return Fields.RmsParentSail11Id[this]; }
            set { Fields.RmsParentSail11Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail12 Id"), Column("RMS_PARENT_SAIL12_ID")]
        public Int32? RmsParentSail12Id
        {
            get { return Fields.RmsParentSail12Id[this]; }
            set { Fields.RmsParentSail12Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail13 Id"), Column("RMS_PARENT_SAIL13_ID")]
        public Int32? RmsParentSail13Id
        {
            get { return Fields.RmsParentSail13Id[this]; }
            set { Fields.RmsParentSail13Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail14 Id"), Column("RMS_PARENT_SAIL14_ID")]
        public Int32? RmsParentSail14Id
        {
            get { return Fields.RmsParentSail14Id[this]; }
            set { Fields.RmsParentSail14Id[this] = value; }
        }

        [DisplayName("Rms Parent Sail15 Id"), Column("RMS_PARENT_SAIL15_ID")]
        public Int32? RmsParentSail15Id
        {
            get { return Fields.RmsParentSail15Id[this]; }
            set { Fields.RmsParentSail15Id[this] = value; }
        }

        [DisplayName("Fs Grp Amenity Amt"), Column("FS_GRP_AMENITY_AMT"), Size(13), Scale(2)]
        public Decimal? FsGrpAmenityAmt
        {
            get { return Fields.FsGrpAmenityAmt[this]; }
            set { Fields.FsGrpAmenityAmt[this] = value; }
        }

        [DisplayName("Obr Trade Cd"), Column("OBR_TRADE_CD"), Size(100)]
        public String ObrTradeCd
        {
            get { return Fields.ObrTradeCd[this]; }
            set { Fields.ObrTradeCd[this] = value; }
        }

        [DisplayName("Obr Sub Trade Cd"), Column("OBR_SUB_TRADE_CD"), Size(100)]
        public String ObrSubTradeCd
        {
            get { return Fields.ObrSubTradeCd[this]; }
            set { Fields.ObrSubTradeCd[this] = value; }
        }

        [DisplayName("Obr Season Cd"), Column("OBR_SEASON_CD"), Size(100)]
        public String ObrSeasonCd
        {
            get { return Fields.ObrSeasonCd[this]; }
            set { Fields.ObrSeasonCd[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50), Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Proxy Sail Id"), Column("PROXY_SAIL_ID")]
        public Int32? ProxySailId
        {
            get { return Fields.ProxySailId[this]; }
            set { Fields.ProxySailId[this] = value; }
        }

        [DisplayName("On Sale Dat"), Column("ON_SALE_DAT")]
        public DateTime? OnSaleDat
        {
            get { return Fields.OnSaleDat[this]; }
            set { Fields.OnSaleDat[this] = value; }
        }

        [DisplayName("Season Year Cd"), Column("SEASON_YEAR_CD"), Size(30)]
        public String SeasonYearCd
        {
            get { return Fields.SeasonYearCd[this]; }
            set { Fields.SeasonYearCd[this] = value; }
        }

        [DisplayName("Is Voyage Exception"), Column("IS_VOYAGE_EXCEPTION_CD"), Size(1), SelectYNEditor]
        public String IsVoyageExceptionCd
        {
            get { return Fields.IsVoyageExceptionCd[this]; }
            set { Fields.IsVoyageExceptionCd[this] = value; }
        }

        [DisplayName("Voyage Exception Desc"), Column("VOYAGE_EXCEPTION_DESC"), Size(100)]
        public String VoyageExceptionDesc
        {
            get { return Fields.VoyageExceptionDesc[this]; }
            set { Fields.VoyageExceptionDesc[this] = value; }
        }

        [DisplayName("Itinerary Changed Dat"), Column("ITINERARY_CHANGED_DAT")]
        public DateTime? ItineraryChangedDat
        {
            get { return Fields.ItineraryChangedDat[this]; }
            set { Fields.ItineraryChangedDat[this] = value; }
        }

        [DisplayName("Charter"), Column("CHARTER_CD"), Size(1), SelectYNEditor]
        public String CharterCd
        {
            get { return Fields.CharterCd[this]; }
            set { Fields.CharterCd[this] = value; }
        }

        [DisplayName("Is Holiday"), Column("IS_HOLIDAY_CD"), Size(1), SelectYNEditor]
        public String IsHolidayCd
        {
            get { return Fields.IsHolidayCd[this]; }
            set { Fields.IsHolidayCd[this] = value; }
        }

        [DisplayName("Proxy Budget Sail Id"), Column("PROXY_BUDGET_SAIL_ID")]
        public Int32? ProxyBudgetSailId
        {
            get { return Fields.ProxyBudgetSailId[this]; }
            set { Fields.ProxyBudgetSailId[this] = value; }
        }

        [DisplayName("Proxy Meta Weight Sail Id"), Column("PROXY_META_WEIGHT_SAIL_ID")]
        public Int32? ProxyMetaWeightSailId
        {
            get { return Fields.ProxyMetaWeightSailId[this]; }
            set { Fields.ProxyMetaWeightSailId[this] = value; }
        }

        [DisplayName("Is Free Open Bar Cd"), Column("IS_FREE_OPEN_BAR_CD"), Size(1)]
        public String IsFreeOpenBarCd
        {
            get { return Fields.IsFreeOpenBarCd[this]; }
            set { Fields.IsFreeOpenBarCd[this] = value; }
        }

        [DisplayName("Casino Cabin Capacity Qty"), Column("CASINO_CABIN_CAPACITY_QTY")]
        public Int32? CasinoCabinCapacityQty
        {
            get { return Fields.CasinoCabinCapacityQty[this]; }
            set { Fields.CasinoCabinCapacityQty[this] = value; }
        }

        [DisplayName("Is Extraordinary"), Column("IS_EXTRAORDINARY_CD"), Size(1), SelectYNEditor]
        public String IsExtraordinaryCd
        {
            get { return Fields.IsExtraordinaryCd[this]; }
            set { Fields.IsExtraordinaryCd[this] = value; }
        }

        [DisplayName("Product Cd Product Sur Key"), Expression("jProductCd.[PRODUCT_SUR_KEY]")]
        public Int32? ProductCdProductSurKey
        {
            get { return Fields.ProductCdProductSurKey[this]; }
            set { Fields.ProductCdProductSurKey[this] = value; }
        }

        [DisplayName("Product Cd Product Desc"), Expression("jProductCd.[PRODUCT_DESC]")]
        public String ProductCdProductDesc
        {
            get { return Fields.ProductCdProductDesc[this]; }
            set { Fields.ProductCdProductDesc[this] = value; }
        }

        [DisplayName("Product Cd Product Code Id"), Expression("jProductCd.[PRODUCT_CODE_ID]")]
        public Int32? ProductCdProductCodeId
        {
            get { return Fields.ProductCdProductCodeId[this]; }
            set { Fields.ProductCdProductCodeId[this] = value; }
        }

        [DisplayName("Product Cd Created By Name"), Expression("jProductCd.[CREATED_BY_NAME]")]
        public String ProductCdCreatedByName
        {
            get { return Fields.ProductCdCreatedByName[this]; }
            set { Fields.ProductCdCreatedByName[this] = value; }
        }

        [DisplayName("Product Cd Created Ts"), Expression("jProductCd.[CREATED_TS]")]
        public DateTime? ProductCdCreatedTs
        {
            get { return Fields.ProductCdCreatedTs[this]; }
            set { Fields.ProductCdCreatedTs[this] = value; }
        }

        [DisplayName("Product Cd Modified By Name"), Expression("jProductCd.[MODIFIED_BY_NAME]")]
        public String ProductCdModifiedByName
        {
            get { return Fields.ProductCdModifiedByName[this]; }
            set { Fields.ProductCdModifiedByName[this] = value; }
        }

        [DisplayName("Product Cd Modified Ts"), Expression("jProductCd.[MODIFIED_TS]")]
        public DateTime? ProductCdModifiedTs
        {
            get { return Fields.ProductCdModifiedTs[this]; }
            set { Fields.ProductCdModifiedTs[this] = value; }
        }

        [DisplayName("Sl Product Cd Sl Product Sur Key"), Expression("jSlProductCd.[SL_PRODUCT_SUR_KEY]")]
        public Int32? SlProductCdSlProductSurKey
        {
            get { return Fields.SlProductCdSlProductSurKey[this]; }
            set { Fields.SlProductCdSlProductSurKey[this] = value; }
        }

        [DisplayName("Sl Product Cd Sl Product Desc"), Expression("jSlProductCd.[SL_PRODUCT_DESC]")]
        public String SlProductCdSlProductDesc
        {
            get { return Fields.SlProductCdSlProductDesc[this]; }
            set { Fields.SlProductCdSlProductDesc[this] = value; }
        }

        [DisplayName("Sl Product Cd Created By Name"), Expression("jSlProductCd.[CREATED_BY_NAME]")]
        public String SlProductCdCreatedByName
        {
            get { return Fields.SlProductCdCreatedByName[this]; }
            set { Fields.SlProductCdCreatedByName[this] = value; }
        }

        [DisplayName("Sl Product Cd Created Ts"), Expression("jSlProductCd.[CREATED_TS]")]
        public DateTime? SlProductCdCreatedTs
        {
            get { return Fields.SlProductCdCreatedTs[this]; }
            set { Fields.SlProductCdCreatedTs[this] = value; }
        }

        [DisplayName("Sl Product Cd Modified By Name"), Expression("jSlProductCd.[MODIFIED_BY_NAME]")]
        public String SlProductCdModifiedByName
        {
            get { return Fields.SlProductCdModifiedByName[this]; }
            set { Fields.SlProductCdModifiedByName[this] = value; }
        }

        [DisplayName("Sl Product Cd Modified Ts"), Expression("jSlProductCd.[MODIFIED_TS]")]
        public DateTime? SlProductCdModifiedTs
        {
            get { return Fields.SlProductCdModifiedTs[this]; }
            set { Fields.SlProductCdModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SailSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PackageTypeCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SailingMasterSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field SailSurKey;
            public Int32Field SailId;
            public StringField PackageTypeCd;
            public StringField ValidVoyageCd;
            public StringField ShipCd;
            public DateTimeField SailDat;
            public StringField ProductCd;
            public StringField LatitudeCruiseCd;
            public StringField FareFeedIncludeCd;
            public StringField InactiveCd;
            public StringField ShipNbr;
            public DecimalField AmenityPtsQty;
            public Int32Field RmsForecastCd;
            public Int32Field RmsParentSail1Id;
            public Int32Field RmsParentSail2Id;
            public Int32Field RmsParentSail3Id;
            public StringField RmsSeasonCd;
            public StringField RmsColorNameDesc;
            public Int32Field RmsRefLinkSailId;
            public StringField BackToBackCd;
            public StringField MainVoyageCd;
            public StringField SlProductCd;
            public Int32Field MandateWeeksQty;
            public StringField InterportCd;
            public Int32Field JonesActSailId;
            public Int32Field RmsParentSail4Id;
            public Int32Field RmsParentSail5Id;
            public Int32Field RmsParentSail6Id;
            public Int32Field RmsParentSail7Id;
            public Int32Field RmsParentSail8Id;
            public Int32Field RmsParentSail9Id;
            public Int32Field RmsParentSail10Id;
            public Int32Field RmsParentSail11Id;
            public Int32Field RmsParentSail12Id;
            public Int32Field RmsParentSail13Id;
            public Int32Field RmsParentSail14Id;
            public Int32Field RmsParentSail15Id;
            public DecimalField FsGrpAmenityAmt;
            public StringField ObrTradeCd;
            public StringField ObrSubTradeCd;
            public StringField ObrSeasonCd;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
            public Int32Field ProxySailId;
            public DateTimeField OnSaleDat;
            public StringField SeasonYearCd;
            public StringField IsVoyageExceptionCd;
            public StringField VoyageExceptionDesc;
            public DateTimeField ItineraryChangedDat;
            public StringField CharterCd;
            public StringField IsHolidayCd;
            public Int32Field ProxyBudgetSailId;
            public Int32Field ProxyMetaWeightSailId;
            public StringField IsFreeOpenBarCd;
            public Int32Field CasinoCabinCapacityQty;
            public StringField IsExtraordinaryCd;

            public Int32Field ProductCdProductSurKey;
            public StringField ProductCdProductDesc;
            public Int32Field ProductCdProductCodeId;
            public StringField ProductCdCreatedByName;
            public DateTimeField ProductCdCreatedTs;
            public StringField ProductCdModifiedByName;
            public DateTimeField ProductCdModifiedTs;

            public Int32Field SlProductCdSlProductSurKey;
            public StringField SlProductCdSlProductDesc;
            public StringField SlProductCdCreatedByName;
            public DateTimeField SlProductCdCreatedTs;
            public StringField SlProductCdModifiedByName;
            public DateTimeField SlProductCdModifiedTs;
        }
    }
}

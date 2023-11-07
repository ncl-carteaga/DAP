
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[nvs].[Dim_Cruise_Flags]")]
    [DisplayName("Dim Cruise Flags"), InstanceName("Dim Cruise Flags")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class DimCruiseFlagsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Dim Cruise Flag Id"), Column("DimCruiseFlagID"), Identity]
        public Int32? DimCruiseFlagId
        {
            get { return Fields.DimCruiseFlagId[this]; }
            set { Fields.DimCruiseFlagId[this] = value; }
        }

        [DisplayName("Cruise Cd"), Column("cruise_cd"), Size(10), NotNull, QuickSearch]
        public String CruiseCd
        {
            get { return Fields.CruiseCd[this]; }
            set { Fields.CruiseCd[this] = value; }
        }

        [DisplayName("Cruise Segment Cd"), Column("cruise_segment_cd"), Size(10), NotNull]
        public String CruiseSegmentCd
        {
            get { return Fields.CruiseSegmentCd[this]; }
            set { Fields.CruiseSegmentCd[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("ship_cd"), Size(3), NotNull]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Capped Capacity"), Column("capped_capacity")]
        public Int32? CappedCapacity
        {
            get { return Fields.CappedCapacity[this]; }
            set { Fields.CappedCapacity[this] = value; }
        }

        [DisplayName("Onbrd Avg Pax Qty"), Column("onbrd_avg_pax_qty")]
        public Int32? OnbrdAvgPaxQty
        {
            get { return Fields.OnbrdAvgPaxQty[this]; }
            set { Fields.OnbrdAvgPaxQty[this] = value; }
        }

        [DisplayName("Highlight Ind"), Column("highlight_ind"),SelectYNEditor]
        public Int32? HighlightInd
        {
            get { return Fields.HighlightInd[this]; }
            set { Fields.HighlightInd[this] = value; }
        }

        [DisplayName("Color Ind"), Column("color_ind"), Size(1), SelectYNEditor]
        public String ColorInd
        {
            get { return Fields.ColorInd[this]; }
            set { Fields.ColorInd[this] = value; }
        }

        [DisplayName("Drydock Ind"), Column("drydock_ind"), SelectYNEditor]
        public Int32? DrydockInd
        {
            get { return Fields.DrydockInd[this]; }
            set { Fields.DrydockInd[this] = value; }
        }

        [DisplayName("Var To Curve"), Column("var_to_curve")]
        public Double? VarToCurve
        {
            get { return Fields.VarToCurve[this]; }
            set { Fields.VarToCurve[this] = value; }
        }

        [DisplayName("Revenue Mgmt Market Segment"), Column("revenue_mgmt_market_segment")]
        public String RevenueMgmtMarketSegment
        {
            get { return Fields.RevenueMgmtMarketSegment[this]; }
            set { Fields.RevenueMgmtMarketSegment[this] = value; }
        }

        [DisplayName("Financial Suppress Ind"), Column("financial_suppress_ind")]
        public String FinancialSuppressInd
        {
            get { return Fields.FinancialSuppressInd[this]; }
            set { Fields.FinancialSuppressInd[this] = value; }
        }

        [DisplayName("Show In Dr001"), Column("show_in_dr001"), Size(1), SelectYNEditor]
        public String ShowInDr001
        {
            get { return Fields.ShowInDr001[this]; }
            set { Fields.ShowInDr001[this] = value; }
        }

        [DisplayName("Show In Dr010"), Column("show_in_dr010"), Size(1), SelectYNEditor]
        public String ShowInDr010
        {
            get { return Fields.ShowInDr010[this]; }
            set { Fields.ShowInDr010[this] = value; }
        }

        [DisplayName("Show In Cube"), Column("show_in_cube"), Size(1), SelectYNEditor]
        public String ShowInCube
        {
            get { return Fields.ShowInCube[this]; }
            set { Fields.ShowInCube[this] = value; }
        }

        [DisplayName("Intl Dateline Ind"), Column("intl_dateline_ind"), Size(1), SelectYNEditor]
        public String IntlDatelineInd
        {
            get { return Fields.IntlDatelineInd[this]; }
            set { Fields.IntlDatelineInd[this] = value; }
        }

        [DisplayName("Miniseg Ind"), Column("miniseg_ind"), Size(1), SelectYNEditor]
        public String MinisegInd
        {
            get { return Fields.MinisegInd[this]; }
            set { Fields.MinisegInd[this] = value; }
        }

        [DisplayName("Effective From"), Column("effective_from"), NotNull]
        public DateTime? EffectiveFrom
        {
            get { return Fields.EffectiveFrom[this]; }
            set { Fields.EffectiveFrom[this] = value; }
        }

        [DisplayName("Effective To"), Column("effective_to")]
        public DateTime? EffectiveTo
        {
            get { return Fields.EffectiveTo[this]; }
            set { Fields.EffectiveTo[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt"), NotNull]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DimCruiseFlagId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CruiseCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DimCruiseFlagsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DimCruiseFlagId;
            public StringField CruiseCd;
            public StringField CruiseSegmentCd;
            public StringField ShipCd;
            public StringField CompanyCd;
            public Int32Field CappedCapacity;
            public Int32Field OnbrdAvgPaxQty;
            public Int32Field HighlightInd;
            public StringField ColorInd;
            public Int32Field DrydockInd;
            public DoubleField VarToCurve;
            public StringField ShowInDr001;
            public StringField ShowInDr010;
            public StringField ShowInCube;
            public StringField IntlDatelineInd;
            public StringField MinisegInd;
            public DateTimeField EffectiveFrom;
            public DateTimeField EffectiveTo;
            public DateTimeField LoadDt;
            public StringField RevenueMgmtMarketSegment;
            public StringField FinancialSuppressInd;
        }
    }
}

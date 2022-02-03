
namespace DAP.PCHDW.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHDW"), TableName("[dbo].[dim_cruise]")]
    [DisplayName("Dim Cruise"), InstanceName("Dim Cruise")]
    [ReadPermission(PermissionKeys.EDMSupport.View)]
    [ModifyPermission(PermissionKeys.EDMSupport.Modify)]
    [DeletePermission(PermissionKeys.EDMSupport.Delete)]
    [LookupScript("PCHDW.GetDimCruise")]
    [DataAuditLog]
    public sealed class DimCruiseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cruise Tk"), Column("cruise_tk"), Identity]
        public Int32? CruiseTk
        {
            get { return Fields.CruiseTk[this]; }
            set { Fields.CruiseTk[this] = value; }
        }

        [DisplayName("Cruise Cd"), Column("cruise_cd"), Size(10), NotNull, QuickSearch]
        public String CruiseCd
        {
            get { return Fields.CruiseCd[this]; }
            set { Fields.CruiseCd[this] = value; }
        }

        [DisplayName("Cruise Segment Cd"), Column("cruise_segment_cd"), Size(10), NotNull, LookupInclude]
        public String CruiseSegmentCd
        {
            get { return Fields.CruiseSegmentCd[this]; }
            set { Fields.CruiseSegmentCd[this] = value; }
        }

        [DisplayName("Cruise Name"), Column("cruise_name"), Size(35)]
        public String CruiseName
        {
            get { return Fields.CruiseName[this]; }
            set { Fields.CruiseName[this] = value; }
        }

        [DisplayName("Location Name"), Column("location_name"), Size(255)]
        public String LocationName
        {
            get { return Fields.LocationName[this]; }
            set { Fields.LocationName[this] = value; }
        }

        [DisplayName("Season Name"), Column("season_name"), Size(255)]
        public String SeasonName
        {
            get { return Fields.SeasonName[this]; }
            set { Fields.SeasonName[this] = value; }
        }

        [DisplayName("Route Name"), Column("route_name"), Size(255)]
        public String RouteName
        {
            get { return Fields.RouteName[this]; }
            set { Fields.RouteName[this] = value; }
        }

        [DisplayName("Market Name"), Column("market_name"), Size(20), LookupInclude]
        public String MarketName
        {
            get { return Fields.MarketName[this]; }
            set { Fields.MarketName[this] = value; }
        }

        [DisplayName("Cruise Days Qty"), Column("cruise_days_qty")]
        public Int32? CruiseDaysQty
        {
            get { return Fields.CruiseDaysQty[this]; }
            set { Fields.CruiseDaysQty[this] = value; }
        }

        [DisplayName("Cruise From Dt"), Column("cruise_from_dt")]
        public DateTime? CruiseFromDt
        {
            get { return Fields.CruiseFromDt[this]; }
            set { Fields.CruiseFromDt[this] = value; }
        }

        [DisplayName("Cruise To Dt"), Column("cruise_to_dt")]
        public DateTime? CruiseToDt
        {
            get { return Fields.CruiseToDt[this]; }
            set { Fields.CruiseToDt[this] = value; }
        }

        [DisplayName("Cruise Segment Days Qty"), Column("cruise_segment_days_qty"), NotNull]
        public Int32? CruiseSegmentDaysQty
        {
            get { return Fields.CruiseSegmentDaysQty[this]; }
            set { Fields.CruiseSegmentDaysQty[this] = value; }
        }

        [DisplayName("Cruise Segment From Dt"), Column("cruise_segment_from_dt")]
        public DateTime? CruiseSegmentFromDt
        {
            get { return Fields.CruiseSegmentFromDt[this]; }
            set { Fields.CruiseSegmentFromDt[this] = value; }
        }

        [DisplayName("Cruise Segment To Dt"), Column("cruise_segment_to_dt")]
        public DateTime? CruiseSegmentToDt
        {
            get { return Fields.CruiseSegmentToDt[this]; }
            set { Fields.CruiseSegmentToDt[this] = value; }
        }

        [DisplayName("Irs Tax Ind"), Column("irs_tax_ind")]
        public Boolean? IrsTaxInd
        {
            get { return Fields.IrsTaxInd[this]; }
            set { Fields.IrsTaxInd[this] = value; }
        }

        [DisplayName("Irs Tax Amt"), Column("irs_tax_amt"), Size(12), Scale(2)]
        public Decimal? IrsTaxAmt
        {
            get { return Fields.IrsTaxAmt[this]; }
            set { Fields.IrsTaxAmt[this] = value; }
        }

        [DisplayName("Iuf Exempt Fee Ind"), Column("iuf_exempt_fee_ind")]
        public Boolean? IufExemptFeeInd
        {
            get { return Fields.IufExemptFeeInd[this]; }
            set { Fields.IufExemptFeeInd[this] = value; }
        }

        [DisplayName("Iuf Exempt Qty"), Column("iuf_exempt_qty")]
        public Int32? IufExemptQty
        {
            get { return Fields.IufExemptQty[this]; }
            set { Fields.IufExemptQty[this] = value; }
        }

        [DisplayName("Iuf Exempt Fee Amt"), Column("iuf_exempt_fee_amt"), Size(10), Scale(2)]
        public Decimal? IufExemptFeeAmt
        {
            get { return Fields.IufExemptFeeAmt[this]; }
            set { Fields.IufExemptFeeAmt[this] = value; }
        }

        [DisplayName("Iuf Nonexempt Fee Ind"), Column("iuf_nonexempt_fee_ind")]
        public Boolean? IufNonexemptFeeInd
        {
            get { return Fields.IufNonexemptFeeInd[this]; }
            set { Fields.IufNonexemptFeeInd[this] = value; }
        }

        [DisplayName("Iuf Nonexempt Qty"), Column("iuf_nonexempt_qty")]
        public Int32? IufNonexemptQty
        {
            get { return Fields.IufNonexemptQty[this]; }
            set { Fields.IufNonexemptQty[this] = value; }
        }

        [DisplayName("Iuf Nonexempt Fee Amt"), Column("iuf_nonexempt_fee_amt"), Size(10), Scale(2)]
        public Decimal? IufNonexemptFeeAmt
        {
            get { return Fields.IufNonexemptFeeAmt[this]; }
            set { Fields.IufNonexemptFeeAmt[this] = value; }
        }

        [DisplayName("Ppf Exempt Ind"), Column("ppf_exempt_ind")]
        public Boolean? PpfExemptInd
        {
            get { return Fields.PpfExemptInd[this]; }
            set { Fields.PpfExemptInd[this] = value; }
        }

        [DisplayName("Ppf Exempt Fee Amt"), Column("ppf_exempt_fee_amt"), Size(10), Scale(2)]
        public Decimal? PpfExemptFeeAmt
        {
            get { return Fields.PpfExemptFeeAmt[this]; }
            set { Fields.PpfExemptFeeAmt[this] = value; }
        }

        [DisplayName("Ppf Nonexempt Ind"), Column("ppf_nonexempt_ind")]
        public Boolean? PpfNonexemptInd
        {
            get { return Fields.PpfNonexemptInd[this]; }
            set { Fields.PpfNonexemptInd[this] = value; }
        }

        [DisplayName("Ppf Nonexempt Fee Amt"), Column("ppf_nonexempt_fee_amt"), Size(10), Scale(2)]
        public Decimal? PpfNonexemptFeeAmt
        {
            get { return Fields.PpfNonexemptFeeAmt[this]; }
            set { Fields.PpfNonexemptFeeAmt[this] = value; }
        }

        [DisplayName("Hmf Fee Ind"), Column("hmf_fee_ind")]
        public Boolean? HmfFeeInd
        {
            get { return Fields.HmfFeeInd[this]; }
            set { Fields.HmfFeeInd[this] = value; }
        }

        [DisplayName("Hmf Pct"), Column("hmf_pct"), Size(10), Scale(6)]
        public Decimal? HmfPct
        {
            get { return Fields.HmfPct[this]; }
            set { Fields.HmfPct[this] = value; }
        }

        [DisplayName("Cpv Tax Ind"), Column("cpv_tax_ind")]
        public Boolean? CpvTaxInd
        {
            get { return Fields.CpvTaxInd[this]; }
            set { Fields.CpvTaxInd[this] = value; }
        }

        [DisplayName("Cpv Tax Amt"), Column("cpv_tax_amt"), Size(10), Scale(2)]
        public Decimal? CpvTaxAmt
        {
            get { return Fields.CpvTaxAmt[this]; }
            set { Fields.CpvTaxAmt[this] = value; }
        }

        [DisplayName("Cruise Sailing Status Desc"), Column("cruise_sailing_status_desc"), Size(20)]
        public String CruiseSailingStatusDesc
        {
            get { return Fields.CruiseSailingStatusDesc[this]; }
            set { Fields.CruiseSailingStatusDesc[this] = value; }
        }

        [DisplayName("From Port Cd"), Column("from_port_cd"), Size(15)]
        public String FromPortCd
        {
            get { return Fields.FromPortCd[this]; }
            set { Fields.FromPortCd[this] = value; }
        }

        [DisplayName("To Port Cd"), Column("to_port_cd"), Size(15)]
        public String ToPortCd
        {
            get { return Fields.ToPortCd[this]; }
            set { Fields.ToPortCd[this] = value; }
        }

        [DisplayName("From Port Name"), Column("from_port_name"), Size(45)]
        public String FromPortName
        {
            get { return Fields.FromPortName[this]; }
            set { Fields.FromPortName[this] = value; }
        }

        [DisplayName("To Port Name"), Column("to_port_name"), Size(45)]
        public String ToPortName
        {
            get { return Fields.ToPortName[this]; }
            set { Fields.ToPortName[this] = value; }
        }

        [DisplayName("Segment From Port Cd"), Column("segment_from_port_cd"), Size(15)]
        public String SegmentFromPortCd
        {
            get { return Fields.SegmentFromPortCd[this]; }
            set { Fields.SegmentFromPortCd[this] = value; }
        }

        [DisplayName("Segment To Port Cd"), Column("segment_to_port_cd"), Size(15)]
        public String SegmentToPortCd
        {
            get { return Fields.SegmentToPortCd[this]; }
            set { Fields.SegmentToPortCd[this] = value; }
        }

        [DisplayName("Segment From Port Name"), Column("segment_from_port_name"), Size(45)]
        public String SegmentFromPortName
        {
            get { return Fields.SegmentFromPortName[this]; }
            set { Fields.SegmentFromPortName[this] = value; }
        }

        [DisplayName("Segment To Port Name"), Column("segment_to_port_name"), Size(45)]
        public String SegmentToPortName
        {
            get { return Fields.SegmentToPortName[this]; }
            set { Fields.SegmentToPortName[this] = value; }
        }

        [DisplayName("Super Market Cd"), Column("super_market_cd"), Size(6)]
        public String SuperMarketCd
        {
            get { return Fields.SuperMarketCd[this]; }
            set { Fields.SuperMarketCd[this] = value; }
        }

        [DisplayName("Super Market Desc"), Column("super_market_desc"), Size(255)]
        public String SuperMarketDesc
        {
            get { return Fields.SuperMarketDesc[this]; }
            set { Fields.SuperMarketDesc[this] = value; }
        }

        [DisplayName("Cruise Segment Name"), Column("cruise_segment_name"), Size(35)]
        public String CruiseSegmentName
        {
            get { return Fields.CruiseSegmentName[this]; }
            set { Fields.CruiseSegmentName[this] = value; }
        }

        [DisplayName("Segment Location Name"), Column("segment_location_name"), Size(255)]
        public String SegmentLocationName
        {
            get { return Fields.SegmentLocationName[this]; }
            set { Fields.SegmentLocationName[this] = value; }
        }

        [DisplayName("Segment Season Name"), Column("segment_season_name"), Size(255)]
        public String SegmentSeasonName
        {
            get { return Fields.SegmentSeasonName[this]; }
            set { Fields.SegmentSeasonName[this] = value; }
        }

        [DisplayName("Segment Route Name"), Column("segment_route_name"), Size(255)]
        public String SegmentRouteName
        {
            get { return Fields.SegmentRouteName[this]; }
            set { Fields.SegmentRouteName[this] = value; }
        }

        [DisplayName("Segment Market Name"), Column("segment_market_name"), Size(20)]
        public String SegmentMarketName
        {
            get { return Fields.SegmentMarketName[this]; }
            set { Fields.SegmentMarketName[this] = value; }
        }

        [DisplayName("Segment Super Market Cd"), Column("segment_super_market_cd"), Size(6)]
        public String SegmentSuperMarketCd
        {
            get { return Fields.SegmentSuperMarketCd[this]; }
            set { Fields.SegmentSuperMarketCd[this] = value; }
        }

        [DisplayName("Segment Super Market Desc"), Column("segment_super_market_desc"), Size(255)]
        public String SegmentSuperMarketDesc
        {
            get { return Fields.SegmentSuperMarketDesc[this]; }
            set { Fields.SegmentSuperMarketDesc[this] = value; }
        }

        [DisplayName("Charter Ind"), Column("charter_ind"), Size(1)]
        public String CharterInd
        {
            get { return Fields.CharterInd[this]; }
            set { Fields.CharterInd[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3)]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Stated Capacity"), Column("stated_capacity")]
        public Int32? StatedCapacity
        {
            get { return Fields.StatedCapacity[this]; }
            set { Fields.StatedCapacity[this] = value; }
        }

        [DisplayName("Capped Capacity"), Column("capped_capacity")]
        public Int32? CappedCapacity
        {
            get { return Fields.CappedCapacity[this]; }
            set { Fields.CappedCapacity[this] = value; }
        }

        [DisplayName("Cruise Status Cd"), Column("cruise_status_cd"), Size(15)]
        public String CruiseStatusCd
        {
            get { return Fields.CruiseStatusCd[this]; }
            set { Fields.CruiseStatusCd[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("ship_cd"), Size(3)]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Show In Report"), Column("show_in_report"), Size(1)]
        public String ShowInReport
        {
            get { return Fields.ShowInReport[this]; }
            set { Fields.ShowInReport[this] = value; }
        }

        [DisplayName("Cruise From Dt Mmddyyyy"), Column("cruise_from_dt_mmddyyyy"), Size(10)]
        public String CruiseFromDtMmddyyyy
        {
            get { return Fields.CruiseFromDtMmddyyyy[this]; }
            set { Fields.CruiseFromDtMmddyyyy[this] = value; }
        }

        [DisplayName("Cruise To Dt Mmddyyyy"), Column("cruise_to_dt_mmddyyyy"), Size(10)]
        public String CruiseToDtMmddyyyy
        {
            get { return Fields.CruiseToDtMmddyyyy[this]; }
            set { Fields.CruiseToDtMmddyyyy[this] = value; }
        }

        [DisplayName("Segment From Dt Mmddyyyy"), Column("segment_from_dt_mmddyyyy"), Size(10)]
        public String SegmentFromDtMmddyyyy
        {
            get { return Fields.SegmentFromDtMmddyyyy[this]; }
            set { Fields.SegmentFromDtMmddyyyy[this] = value; }
        }

        [DisplayName("Segment To Dt Mmddyyyy"), Column("segment_to_dt_mmddyyyy"), Size(10)]
        public String SegmentToDtMmddyyyy
        {
            get { return Fields.SegmentToDtMmddyyyy[this]; }
            set { Fields.SegmentToDtMmddyyyy[this] = value; }
        }

        [DisplayName("Miniseg Ind"), Column("miniseg_ind"), Size(1)]
        public String MinisegInd
        {
            get { return Fields.MinisegInd[this]; }
            set { Fields.MinisegInd[this] = value; }
        }

        [DisplayName("Onboard Acct Trandate"), Column("onboard_acct_trandate"), Size(16)]
        public String OnboardAcctTrandate
        {
            get { return Fields.OnboardAcctTrandate[this]; }
            set { Fields.OnboardAcctTrandate[this] = value; }
        }

        [DisplayName("Segment Onboard Acct Trandate"), Column("segment_onboard_acct_trandate"), Size(16)]
        public String SegmentOnboardAcctTrandate
        {
            get { return Fields.SegmentOnboardAcctTrandate[this]; }
            set { Fields.SegmentOnboardAcctTrandate[this] = value; }
        }

        [DisplayName("Onbrd Avg Pax Qty"), Column("onbrd_avg_pax_qty")]
        public Int32? OnbrdAvgPaxQty
        {
            get { return Fields.OnbrdAvgPaxQty[this]; }
            set { Fields.OnbrdAvgPaxQty[this] = value; }
        }

        [DisplayName("Highlight Ind"), Column("highlight_ind")]
        public Int32? HighlightInd
        {
            get { return Fields.HighlightInd[this]; }
            set { Fields.HighlightInd[this] = value; }
        }

        [DisplayName("Color Ind"), Column("color_ind"), Size(1)]
        public String ColorInd
        {
            get { return Fields.ColorInd[this]; }
            set { Fields.ColorInd[this] = value; }
        }

        [DisplayName("Drydock Ind"), Column("drydock_ind")]
        public Int32? DrydockInd
        {
            get { return Fields.DrydockInd[this]; }
            set { Fields.DrydockInd[this] = value; }
        }

        [DisplayName("Amenity Points Allowed Qty"), Column("amenity_points_allowed_qty")]
        public Int16? AmenityPointsAllowedQty
        {
            get { return Fields.AmenityPointsAllowedQty[this]; }
            set { Fields.AmenityPointsAllowedQty[this] = value; }
        }

        [DisplayName("Var To Curve"), Column("var_to_curve")]
        public Double? VarToCurve
        {
            get { return Fields.VarToCurve[this]; }
            set { Fields.VarToCurve[this] = value; }
        }

        [DisplayName("Revenue Mgmt Market Segment"), Column("revenue_mgmt_market_segment"), Size(150)]
        public String RevenueMgmtMarketSegment
        {
            get { return Fields.RevenueMgmtMarketSegment[this]; }
            set { Fields.RevenueMgmtMarketSegment[this] = value; }
        }

        [DisplayName("Financial Suppress Ind"), Column("Financial_Suppress_ind"), Size(1)]
        public String FinancialSuppressInd
        {
            get { return Fields.FinancialSuppressInd[this]; }
            set { Fields.FinancialSuppressInd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CruiseTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CruiseCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DimCruiseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CruiseTk;
            public StringField CruiseCd;
            public StringField CruiseSegmentCd;
            public StringField CruiseName;
            public StringField LocationName;
            public StringField SeasonName;
            public StringField RouteName;
            public StringField MarketName;
            public Int32Field CruiseDaysQty;
            public DateTimeField CruiseFromDt;
            public DateTimeField CruiseToDt;
            public Int32Field CruiseSegmentDaysQty;
            public DateTimeField CruiseSegmentFromDt;
            public DateTimeField CruiseSegmentToDt;
            public BooleanField IrsTaxInd;
            public DecimalField IrsTaxAmt;
            public BooleanField IufExemptFeeInd;
            public Int32Field IufExemptQty;
            public DecimalField IufExemptFeeAmt;
            public BooleanField IufNonexemptFeeInd;
            public Int32Field IufNonexemptQty;
            public DecimalField IufNonexemptFeeAmt;
            public BooleanField PpfExemptInd;
            public DecimalField PpfExemptFeeAmt;
            public BooleanField PpfNonexemptInd;
            public DecimalField PpfNonexemptFeeAmt;
            public BooleanField HmfFeeInd;
            public DecimalField HmfPct;
            public BooleanField CpvTaxInd;
            public DecimalField CpvTaxAmt;
            public StringField CruiseSailingStatusDesc;
            public StringField FromPortCd;
            public StringField ToPortCd;
            public StringField FromPortName;
            public StringField ToPortName;
            public StringField SegmentFromPortCd;
            public StringField SegmentToPortCd;
            public StringField SegmentFromPortName;
            public StringField SegmentToPortName;
            public StringField SuperMarketCd;
            public StringField SuperMarketDesc;
            public StringField CruiseSegmentName;
            public StringField SegmentLocationName;
            public StringField SegmentSeasonName;
            public StringField SegmentRouteName;
            public StringField SegmentMarketName;
            public StringField SegmentSuperMarketCd;
            public StringField SegmentSuperMarketDesc;
            public StringField CharterInd;
            public StringField CompanyCd;
            public Int32Field StatedCapacity;
            public Int32Field CappedCapacity;
            public StringField CruiseStatusCd;
            public StringField ShipCd;
            public StringField ShowInReport;
            public StringField CruiseFromDtMmddyyyy;
            public StringField CruiseToDtMmddyyyy;
            public StringField SegmentFromDtMmddyyyy;
            public StringField SegmentToDtMmddyyyy;
            public StringField MinisegInd;
            public StringField OnboardAcctTrandate;
            public StringField SegmentOnboardAcctTrandate;
            public Int32Field OnbrdAvgPaxQty;
            public Int32Field HighlightInd;
            public StringField ColorInd;
            public Int32Field DrydockInd;
            public Int16Field AmenityPointsAllowedQty;
            public DoubleField VarToCurve;
            public StringField RevenueMgmtMarketSegment;
            public StringField FinancialSuppressInd;
        }
    }
}

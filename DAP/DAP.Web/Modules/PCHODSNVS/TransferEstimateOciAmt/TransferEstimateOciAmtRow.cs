
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dbo].[transfer_estimate_oci_amt]")]
    [DisplayName("Transfer Estimate Oci Amt"), InstanceName("Transfer Estimate Oci Amt")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class TransferEstimateOciAmtRow : Row, IIdRow, INameRow
    {
        [DisplayName("Segment Market Name"), Column("segment_market_name"), Size(50), NotNull, ReadOnly(true)]
        public String SegmentMarketName
        {
            get { return Fields.SegmentMarketName[this]; }
            set { Fields.SegmentMarketName[this] = value; }
        }

        [DisplayName("Cruise Segment Cd"), Column("cruise_segment_cd"), Size(50), LookupEditor("PCHODSNVS.GetSegment"), QuickSearch]
        public String CruiseSegmentCd
        {
            get { return Fields.CruiseSegmentCd[this]; }
            set { Fields.CruiseSegmentCd[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("ship_cd"), Size(50), ReadOnly(true)]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Transfer Cost Per Pax"), Column("Transfer_cost_per_pax"), Size(50), NotNull]
        public String TransferCostPerPax
        {
            get { return Fields.TransferCostPerPax[this]; }
            set { Fields.TransferCostPerPax[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt")]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        [DisplayName("Transfer Id"), Identity, Visible(false)]
        public Int32? TransferId
        {
            get { return Fields.TransferId[this]; }
            set { Fields.TransferId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TransferId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SegmentMarketName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransferEstimateOciAmtRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField SegmentMarketName;
            public StringField CruiseSegmentCd;
            public StringField ShipCd;
            public StringField TransferCostPerPax;
            public DateTimeField LoadDt;
            public Int32Field TransferId;
        }
    }
}

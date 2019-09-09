
namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHODS"), TableName("[dbo].[vw_OutboundMonthlyRptArchiveOverride]")]
    [DisplayName("Vw Outbound Monthly Rpt Archive Override"), InstanceName("Vw Outbound Monthly Rpt Archive Override")]
    [ReadPermission(PermissionKeys.Outbound.View)]
    [ModifyPermission(PermissionKeys.Outbound.Modify)]
    [DeletePermission(PermissionKeys.Outbound.Delete)]
    public sealed class VwOutboundMonthlyRptArchiveOverrideRow : Row, IIdRow, INameRow
    {
        [DisplayName("Outbound Monthly Rpt Archive Id"), NotNull]
        public Int32? OutboundMonthlyRptArchiveId
        {
            get { return Fields.OutboundMonthlyRptArchiveId[this]; }
            set { Fields.OutboundMonthlyRptArchiveId[this] = value; }
        }

        [DisplayName("Ncl Id"), Column("ncl_id"), Size(255), NotNull]
        public String NclId
        {
            get { return Fields.NclId[this]; }
            set { Fields.NclId[this] = value; }
        }

        [DisplayName("Outbound Month"), Column("outbound_month"), Size(6), NotNull, QuickFilter]
        public String OutboundMonth
        {
            get { return Fields.OutboundMonth[this]; }
            set { Fields.OutboundMonth[this] = value; }
        }

        [DisplayName("Original User Name"), Column("original_user_name"), Size(50), NotNull, QuickSearch]
        public String OriginalUserName
        {
            get { return Fields.OriginalUserName[this]; }
            set { Fields.OriginalUserName[this] = value; }
        }

        [DisplayName("Oci Prev Month Domestic"), Column("OCI_PrevMonthDomestic"), Size(18), Scale(2)]
        public Decimal? OciPrevMonthDomestic
        {
            get { return Fields.OciPrevMonthDomestic[this]; }
            set { Fields.OciPrevMonthDomestic[this] = value; }
        }

        [DisplayName("Ssc Prev Month Domestic"), Column("SSC_PrevMonthDomestic"), Size(18), Scale(2)]
        public Decimal? SscPrevMonthDomestic
        {
            get { return Fields.SscPrevMonthDomestic[this]; }
            set { Fields.SscPrevMonthDomestic[this] = value; }
        }

        [DisplayName("Oci Prev Month International"), Column("OCI_PrevMonthInternational"), Size(18), Scale(2)]
        public Decimal? OciPrevMonthInternational
        {
            get { return Fields.OciPrevMonthInternational[this]; }
            set { Fields.OciPrevMonthInternational[this] = value; }
        }

        [DisplayName("Ssc Prev Month International"), Column("SSC_PrevMonthInternational"), Size(18), Scale(2)]
        public Decimal? SscPrevMonthInternational
        {
            get { return Fields.SscPrevMonthInternational[this]; }
            set { Fields.SscPrevMonthInternational[this] = value; }
        }

        [DisplayName("Oci Prev Month Rev Domestic"), Column("OCI_PrevMonthRevDomestic"), Size(18), Scale(2)]
        public Decimal? OciPrevMonthRevDomestic
        {
            get { return Fields.OciPrevMonthRevDomestic[this]; }
            set { Fields.OciPrevMonthRevDomestic[this] = value; }
        }

        [DisplayName("Ssc Prev Month Rev Domestic"), Column("SSC_PrevMonthRevDomestic"), Size(18), Scale(2)]
        public Decimal? SscPrevMonthRevDomestic
        {
            get { return Fields.SscPrevMonthRevDomestic[this]; }
            set { Fields.SscPrevMonthRevDomestic[this] = value; }
        }

        [DisplayName("Oci Prev Month Rev International"), Column("OCI_PrevMonthRevInternational"), Size(18), Scale(2)]
        public Decimal? OciPrevMonthRevInternational
        {
            get { return Fields.OciPrevMonthRevInternational[this]; }
            set { Fields.OciPrevMonthRevInternational[this] = value; }
        }

        [DisplayName("Ssc Prev Month Rev International"), Column("SSC_PrevMonthRevInternational"), Size(18), Scale(2)]
        public Decimal? SscPrevMonthRevInternational
        {
            get { return Fields.SscPrevMonthRevInternational[this]; }
            set { Fields.SscPrevMonthRevInternational[this] = value; }
        }

        [DisplayName("Oci Adjustdomestic"), Column("Oci_adjustdomestic"), Size(18), Scale(2)]
        public Decimal? OciAdjustdomestic
        {
            get { return Fields.OciAdjustdomestic[this]; }
            set { Fields.OciAdjustdomestic[this] = value; }
        }

        [DisplayName("Ssc Adjustdomestic"), Column("ssc_adjustdomestic"), Size(18), Scale(2)]
        public Decimal? SscAdjustdomestic
        {
            get { return Fields.SscAdjustdomestic[this]; }
            set { Fields.SscAdjustdomestic[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OutboundMonthlyRptArchiveId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NclId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VwOutboundMonthlyRptArchiveOverrideRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OutboundMonthlyRptArchiveId;
            public StringField NclId;
            public StringField OutboundMonth;
            public StringField OriginalUserName;
            public DecimalField OciPrevMonthDomestic;
            public DecimalField SscPrevMonthDomestic;
            public DecimalField OciPrevMonthInternational;
            public DecimalField SscPrevMonthInternational;
            public DecimalField OciPrevMonthRevDomestic;
            public DecimalField SscPrevMonthRevDomestic;
            public DecimalField OciPrevMonthRevInternational;
            public DecimalField SscPrevMonthRevInternational;
            public DecimalField OciAdjustdomestic;
            public DecimalField SscAdjustdomestic;
        }
    }
}

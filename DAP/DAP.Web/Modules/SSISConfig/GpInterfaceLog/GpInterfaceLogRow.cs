
namespace DAP.SSISConfig.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_FIDELIO"), Module("SSISConfig"), TableName("[fms].[gp_interface_log]")]
    [DisplayName("GP Interface Log"), InstanceName("Gp Interface Log")]
    [ReadPermission(PermissionKeys.SSISConfig.View)]
    [ModifyPermission(PermissionKeys.SSISConfig.Modify)]
    [DeletePermission(PermissionKeys.SSISConfig.Delete)]
    [DataAuditLog]
    public sealed class GpInterfaceLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull, PCHODS.CompanyEditor ]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Cruise Segment Cd"), Column("cruise_segment_cd"), Size(10), NotNull, QuickSearch]
        public String CruiseSegmentCd
        {
            get { return Fields.CruiseSegmentCd[this]; }
            set { Fields.CruiseSegmentCd[this] = value; }
        }

        [DisplayName("Exp Rev Type"), Column("exp_rev_type"), Size(3), NotNull]
        public String ExpRevType
        {
            get { return Fields.ExpRevType[this]; }
            set { Fields.ExpRevType[this] = value; }
        }

        [DisplayName("Gp Interface Ind"), Column("gp_interface_ind"), Size(1), NotNull]
        public String GpInterfaceInd
        {
            get { return Fields.GpInterfaceInd[this]; }
            set { Fields.GpInterfaceInd[this] = value; }
        }

        [DisplayName("Gp Interfaced Dt"), Column("gp_interfaced_dt")]
        public DateTime? GpInterfacedDt
        {
            get { return Fields.GpInterfacedDt[this]; }
            set { Fields.GpInterfacedDt[this] = value; }
        }

        [DisplayName("Journal Num"), Column("Journal_Num"), NotNull]
        public Int32? JournalNum
        {
            get { return Fields.JournalNum[this]; }
            set { Fields.JournalNum[this] = value; }
        }

        [DisplayName("Interface Log Id"), Identity]
        public Int32? InterfaceLogId
        {
            get { return Fields.InterfaceLogId[this]; }
            set { Fields.InterfaceLogId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InterfaceLogId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GpInterfaceLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CompanyCd;
            public StringField CruiseSegmentCd;
            public StringField ExpRevType;
            public StringField GpInterfaceInd;
            public DateTimeField GpInterfacedDt;
            public Int32Field JournalNum;
            public Int32Field InterfaceLogId;
        }
    }
}

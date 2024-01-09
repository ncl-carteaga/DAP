
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[REGION_MASTER_SUPP]")]
    [DisplayName("Region Master Supp"), InstanceName("Region Master Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class RegionMasterSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("Id"), ReadOnly(true), Visible(false)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Region Sur Key"), Column("REGION_SUR_KEY")]
        public Int32? RegionSurKey
        {
            get { return Fields.RegionSurKey[this]; }
            set { Fields.RegionSurKey[this] = value; }
        }

        [DisplayName("Region Cd"), Column("REGION_CD"), Size(50), QuickSearch]
        public String RegionCd
        {
            get { return Fields.RegionCd[this]; }
            set { Fields.RegionCd[this] = value; }
        }

        [DisplayName("Responsibility Desc"), Column("RESPONSIBILITY_DESC"), Size(50)]
        public String ResponsibilityDesc
        {
            get { return Fields.ResponsibilityDesc[this]; }
            set { Fields.ResponsibilityDesc[this] = value; }
        }

        [DisplayName("Salesrep User Id"), Column("SALESREP_USER_ID"), Size(50)]
        public String SalesrepUserId
        {
            get { return Fields.SalesrepUserId[this]; }
            set { Fields.SalesrepUserId[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), Size(50)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), Size(50)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RegionCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegionMasterSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field RegionSurKey;
            public StringField RegionCd;
            public StringField ResponsibilityDesc;
            public StringField SalesrepUserId;
            public StringField CreatedByNam;
            public DateTimeField CreatedTs;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}

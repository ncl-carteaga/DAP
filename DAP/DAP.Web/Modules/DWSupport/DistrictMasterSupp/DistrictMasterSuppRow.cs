
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[DISTRICT_MASTER_SUPP]")]
    [DisplayName("District Master"), InstanceName("District Master Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class DistrictMasterSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("District Sur Key"), Column("DISTRICT_SUR_KEY"), Size(19), Identity]
        public Int64? DistrictSurKey
        {
            get { return Fields.DistrictSurKey[this]; }
            set { Fields.DistrictSurKey[this] = value; }
        }

        [DisplayName("District Nbr"), Column("DISTRICT_NBR"), Size(15), NotNull, QuickSearch, EditLink]
        public String DistrictNbr
        {
            get { return Fields.DistrictNbr[this]; }
            set { Fields.DistrictNbr[this] = value; }
        }

        [DisplayName("Salesrep User Id"), Column("SALESREP_USER_ID"), Size(35), NotNull, QuickFilter, LookupEditor(typeof(Lookups.SalesRepLookup))]
        public String SalesrepUserId
        {
            get { return Fields.SalesrepUserId[this]; }
            set { Fields.SalesrepUserId[this] = value; }
        }

        [DisplayName("Group Cd"), Column("GROUP_CD"), Size(30), NotNull, QuickFilter, LookupEditor(typeof(Lookups.GroupLookup))]
        public String GroupCd
        {
            get { return Fields.GroupCd[this]; }
            set { Fields.GroupCd[this] = value; }
        }

        [DisplayName("Sales Channel Cd"), Column("SALES_CHANNEL_CD"), Size(30), NotNull, QuickFilter, LookupEditor(typeof(Lookups.SalesChannelLookup))]
        public String SalesChannelCd
        {
            get { return Fields.SalesChannelCd[this]; }
            set { Fields.SalesChannelCd[this] = value; }
        }

        [DisplayName("Rm Channel Cd"), Column("RM_CHANNEL_CD"), Size(30), NotNull, LookupEditor(typeof(Lookups.ChannelLookup))]
        public String RmChannelCd
        {
            get { return Fields.RmChannelCd[this]; }
            set { Fields.RmChannelCd[this] = value; }
        }

        [DisplayName("Area Cd"), Column("AREA_CD"), Size(30), NotNull, QuickFilter, LookupEditor(typeof(Lookups.AreaLookup))]
        public String AreaCd
        {
            get { return Fields.AreaCd[this]; }
            set { Fields.AreaCd[this] = value; }
        }

        [DisplayName("Primary Crm Support Nam"), Column("PRIMARY_CRM_SUPPORT_NAM"), Size(50)]
        public String PrimaryCrmSupportNam
        {
            get { return Fields.PrimaryCrmSupportNam[this]; }
            set { Fields.PrimaryCrmSupportNam[this] = value; }
        }

        [DisplayName("Secondary Crm Support Nam"), Column("SECONDARY_CRM_SUPPORT_NAM"), Size(50)]
        public String SecondaryCrmSupportNam
        {
            get { return Fields.SecondaryCrmSupportNam[this]; }
            set { Fields.SecondaryCrmSupportNam[this] = value; }
        }

        [DisplayName("Gss Channel Cd"), Column("GSS_CHANNEL_CD"), Size(50)]
        public String GssChannelCd
        {
            get { return Fields.GssChannelCd[this]; }
            set { Fields.GssChannelCd[this] = value; }
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

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
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

        [DisplayName("Channel Cd"), Column("CHANNEL_CD"), NotNull, Size(50), LookupEditor(typeof(Lookups.ChannelCdLookup), )]
        public String ChannelCd
        {
            get { return Fields.ChannelCd[this]; }
            set { Fields.ChannelCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DistrictSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DistrictNbr; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DistrictMasterSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field DistrictSurKey;
            public StringField DistrictNbr;
            public StringField SalesrepUserId;
            public StringField GroupCd;
            public StringField SalesChannelCd;
            public StringField RmChannelCd;
            public StringField AreaCd;
            public StringField PrimaryCrmSupportNam;
            public StringField SecondaryCrmSupportNam;
            public StringField GssChannelCd;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
            public StringField ChannelCd;
        }
    }
}

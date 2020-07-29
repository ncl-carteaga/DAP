
namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[Outbound_Agent]")]
    [DisplayName("Outbound Agent"), InstanceName("Outbound Agent")]
    [ReadPermission(PermissionKeys.Outbound.View)]
    [ModifyPermission(PermissionKeys.Outbound.Modify)]
    [DeletePermission(PermissionKeys.Outbound.Delete)]
    [LookupScript(typeof(Lookups.OutboundAgentLocationLookup))]        
    [DataAuditLog]
    [LeftJoin("c","Outbound_Company","c.[Company_Cd] = T0.[Company_CD]")]
    public sealed class OutboundAgentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Agent Id"), Column("AgentID"), Identity]
        public Int32? AgentId
        {
            get { return Fields.AgentId[this]; }
            set { Fields.AgentId[this] = value; }
        }

        [DisplayName("Company Cd"), Column("Company_cd"), Size(3), NotNull, QuickSearch, CompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [Expression("c.[Company_nm]"), DisplayName("Company")]
        public string CompanyName
        {
            get { return Fields.CompanyName[this]; }
        }

        [DisplayName("Nvs User Id"), Column("NVS_user_id"), Size(10), UsersEditor, QuickSearch, Updatable(false)]
        public String NvsUserId
        {
            get { return Fields.NvsUserId[this]; }
            set { Fields.NvsUserId[this] = value; }
        }

        [DisplayName("Primary Brand"), Column("primary_brand"), NotNull, ForeignKey(typeof(OutboundCompanyRow), "Company_Cd"), LeftJoin("b"), CompanyEditor]
        public String PrimaryBrand
        {
            get { return Fields.PrimaryBrand[this]; }
            set { Fields.PrimaryBrand[this] = value; }
        }

        [Origin("b"), DisplayName(" Primary Brand")]
        public string Nm
        {
            get { return Fields.Nm[this];  }
        }

        [DisplayName("Start Inactive Dt"), Column("start_inactive_dt")]
        public DateTime? StartInactiveDt
        {
            get { return Fields.StartInactiveDt[this]; }
            set { Fields.StartInactiveDt[this] = value; }
        }

        [DisplayName("Agent Location"), Column("AgentLocationID"), NotNull, ForeignKey("[dbo].[Outbound_AgentLocation]", "AgentLocationID"), LeftJoin("jAgentLocation"), OutboundAgentLocationEditor]        
        public Int32? AgentLocationId
        {
            get { return Fields.AgentLocationId[this]; }
            set { Fields.AgentLocationId[this] = value; }
        }

        [DisplayName("Agent Location Description"), Expression("jAgentLocation.[Description]")]
        public String AgentLocationDescription
        {
            get { return Fields.AgentLocationDescription[this]; }
            set { Fields.AgentLocationDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AgentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NvsUserId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutboundAgentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgentId;
            public StringField CompanyCd;
            public StringField NvsUserId;
            public StringField PrimaryBrand;
            public DateTimeField StartInactiveDt;
            public Int32Field AgentLocationId;

            public StringField AgentLocationDescription;            
            public StringField Nm;
            public StringField CompanyName;


        }
    }
}

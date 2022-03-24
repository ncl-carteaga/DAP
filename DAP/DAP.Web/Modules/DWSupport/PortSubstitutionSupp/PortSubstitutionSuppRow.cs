
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[PORT_SUBSTITUTION_SUPP]")]
    [DisplayName("Port Name Substitution"), InstanceName("Port Substitution Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class PortSubstitutionSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Port Substituton Sur Key"), Column("PORT_SUBSTITUTON_SUR_KEY"), Identity, Visible(false)]
        public Int64? PortSubstitutonSurKey
        {
            get { return Fields.PortSubstitutonSurKey[this]; }
            set { Fields.PortSubstitutonSurKey[this] = value; }
        }

        [DisplayName("Port Cd"), Column("PORT_CD"), Size(4), QuickSearch, LookupEditor("DWSupport.GetPortNames")]
        public String PortCd
        {
            get { return Fields.PortCd[this]; }
            set { Fields.PortCd[this] = value; }
        }

        [DisplayName("Port Nam"), Column("PORT_NAM"), Size(30), ReadOnly(true)]
        public String PortNam
        {
            get { return Fields.PortNam[this]; }
            set { Fields.PortNam[this] = value; }
        }

        [DisplayName("Port Substituton Nam"), Column("PORT_SUBSTITUTON_NAM"), Size(100)]
        public String PortSubstitutonNam
        {
            get { return Fields.PortSubstitutonNam[this]; }
            set { Fields.PortSubstitutonNam[this] = value; }
        }

        [DisplayName("Comment Txt"), Column("COMMENT_TXT"), Size(4000)]
        public String CommentTxt
        {
            get { return Fields.CommentTxt[this]; }
            set { Fields.CommentTxt[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.PortSubstitutonSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PortCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PortSubstitutionSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field PortSubstitutonSurKey;
            public StringField PortCd;
            public StringField PortNam;
            public StringField PortSubstitutonNam;
            public StringField CommentTxt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            
            public DateTimeField ModifiedTs;
        }
    }
}

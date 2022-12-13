
namespace DAP.PCHODS.Entities
{
    using DAP.PCHODS.Lookups;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[Inbound_User_Override]")]
    [DisplayName("Inbound User Override"), InstanceName("Inbound User Override")]
    [ReadPermission(PermissionKeys.Outbound.View)]
    [ModifyPermission(PermissionKeys.Outbound.Modify)]
    [DeletePermission(PermissionKeys.Outbound.Delete)]
    [DataAuditLog]
    public sealed class InboundUserOverrideRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Company"), Size(50), QuickSearch]
        public String Company
        {
            get { return Fields.Company[this]; }
            set { Fields.Company[this] = value; }
        }

        [DisplayName("Invoice"), Size(50)]
        public String Invoice
        {
            get { return Fields.Invoice[this]; }
            set { Fields.Invoice[this] = value; }
        }

        [DisplayName("User Assign"), Size(50)]
        public String UserAssign
        {
            get { return Fields.UserAssign[this]; }
            set { Fields.UserAssign[this] = value; }
        }

        [DisplayName("It Description"), Column("ITDescription"), ForeignKey("[dbo].[Inbound_User_Override_Description]", "id"), LeftJoin("jItDescription"), TextualField("ItDescriptionDescription"), LookupEditor(typeof(InboundUserOverrideDescriptionLookupEditor))]
        public Int16? ItDescription
        {
            get { return Fields.ItDescription[this]; }
            set { Fields.ItDescription[this] = value; }
        }

        [DisplayName("Inbound"), Size(50)]
        public String Inbound
        {
            get { return Fields.Inbound[this]; }
            set { Fields.Inbound[this] = value; }
        }

        [DisplayName("Comments"), Size(50)]
        public String Comments
        {
            get { return Fields.Comments[this]; }
            set { Fields.Comments[this] = value; }
        }

        [DisplayName("It Description Description"), Expression("jItDescription.[Description]")]
        public String ItDescriptionDescription
        {
            get { return Fields.ItDescriptionDescription[this]; }
            set { Fields.ItDescriptionDescription[this] = value; }
        }

        [DisplayName("It Description Outbound Comments"), Expression("jItDescription.[OutboundComments]")]
        public String ItDescriptionOutboundComments
        {
            get { return Fields.ItDescriptionOutboundComments[this]; }
            set { Fields.ItDescriptionOutboundComments[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Company; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InboundUserOverrideRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Company;
            public StringField Invoice;
            public StringField UserAssign;
            public Int16Field ItDescription;
            public StringField Inbound;
            public StringField Comments;

            public StringField ItDescriptionDescription;
            public StringField ItDescriptionOutboundComments;
        }
    }
}

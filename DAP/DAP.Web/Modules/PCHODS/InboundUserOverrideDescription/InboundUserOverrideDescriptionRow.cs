
namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[Inbound_User_Override_Description]")]
    [DisplayName("Inbound User Override Description"), InstanceName("Inbound User Override Description")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InboundUserOverrideDescriptionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Description"), Size(35), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Outbound Comments"), Size(150)]
        public String OutboundComments
        {
            get { return Fields.OutboundComments[this]; }
            set { Fields.OutboundComments[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InboundUserOverrideDescriptionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public StringField Description;
            public StringField OutboundComments;
        }
    }
}


namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[Outbound_AgentLocation]")]
    [DisplayName("Outbound Agent Location"), InstanceName("Outbound Agent Location")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [DataAuditLog]
    public sealed class OutboundAgentLocationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Agent Location Id"), Column("AgentLocationID"), Identity]
        public Int32? AgentLocationId
        {
            get { return Fields.AgentLocationId[this]; }
            set { Fields.AgentLocationId[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AgentLocationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutboundAgentLocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgentLocationId;
            public StringField Description;
        }
    }
}

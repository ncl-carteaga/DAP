
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[Request_Type]")]
    [DisplayName("Request Type"), InstanceName("Request Type")]
    [ReadPermission(PermissionKeys.Request.View)]
    [ModifyPermission(PermissionKeys.Request.Modify)]
    [DeletePermission(PermissionKeys.Request.Delete)]
    [DataAuditLog]
    public sealed class RequestTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Type"), Column("Req_type"), Identity]
        public Int32? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Desc"), Column("Req_desc"), Size(255), QuickSearch]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Type; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Desc; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RequestTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Type;
            public StringField Desc;
        }
    }
}

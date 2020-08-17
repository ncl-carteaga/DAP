
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[Request_Status]")]
    [DisplayName("Request Status"), InstanceName("Request Status")]
    [ReadPermission(PermissionKeys.SWRequest.View)]
    [ModifyPermission(PermissionKeys.SWRequest.Modify)]
    [DeletePermission(PermissionKeys.SWRequest.Delete)]
    [LookupScript("NCLHDSAR.RequestStatus")]
    public sealed class RequestStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Status Id"), Column("StatusID"), Identity]
        public Int32? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [DisplayName("Status Description"), Size(50), NotNull, QuickSearch]
        public String StatusDescription
        {
            get { return Fields.StatusDescription[this]; }
            set { Fields.StatusDescription[this] = value; }
        }

        [DisplayName("Status Order"), NotNull]
        public Int32? StatusOrder
        {
            get { return Fields.StatusOrder[this]; }
            set { Fields.StatusOrder[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StatusDescription; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RequestStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StatusId;
            public StringField StatusDescription;
            public Int32Field StatusOrder;
        }
    }
}

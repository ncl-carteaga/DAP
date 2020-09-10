
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[Assignee]")]
    [DisplayName("Assignee"), InstanceName("Assignee")]
    [ReadPermission(PermissionKeys.SWRequest.View)]
    [ModifyPermission(PermissionKeys.SWRequest.Modify)]
    [DeletePermission(PermissionKeys.SWRequest.Delete)]
    [LookupScript("NCLHDSAR.Assignee")]
    [DataAuditLog]
    public sealed class AssigneeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Assignee Id"), Column("AssigneeID"), Identity]
        public Int32? AssigneeId
        {
            get { return Fields.AssigneeId[this]; }
            set { Fields.AssigneeId[this] = value; }
        }

        [DisplayName("Full Name"), Size(50), NotNull, QuickSearch]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AssigneeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssigneeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AssigneeId;
            public StringField FullName;
            public BooleanField IsActive;
        }
    }
}

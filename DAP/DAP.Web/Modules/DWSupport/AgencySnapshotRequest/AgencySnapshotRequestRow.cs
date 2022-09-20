
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[AgencySnapshotRequest]")]
    [DisplayName("Agency Master Snapshot Request"), InstanceName("Agency Snapshot Request")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class AgencySnapshotRequestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Agency Snapshot Req Id"), Column("AgencySnapshotReqID"), Identity]
        public Int32? AgencySnapshotReqId
        {
            get { return Fields.AgencySnapshotReqId[this]; }
            set { Fields.AgencySnapshotReqId[this] = value; }
        }

        [DisplayName("Requested By"), Size(50), NotNull, ReadOnly(true)]
        public String RequestedBy
        {
            get { return Fields.RequestedBy[this]; }
            set { Fields.RequestedBy[this] = value; }
        }

        [DisplayName("Requested By Date"), NotNull]
        public DateTime? RequestedByDate
        {
            get { return Fields.RequestedByDate[this]; }
            set { Fields.RequestedByDate[this] = value; }
        }

        [DisplayName("Requested Reason"), Size(250), NotNull, QuickSearch]
        public String RequestedReason
        {
            get { return Fields.RequestedReason[this]; }
            set { Fields.RequestedReason[this] = value; }
        }

        [DisplayName("Created By"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Modified By"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        [DisplayName("Modified Date"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? ModifiedDate
        {
            get { return Fields.ModifiedDate[this]; }
            set { Fields.ModifiedDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AgencySnapshotReqId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RequestedBy; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AgencySnapshotRequestRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgencySnapshotReqId;
            public StringField RequestedBy;
            public DateTimeField RequestedByDate;
            public StringField RequestedReason;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField ModifiedBy;
            public DateTimeField ModifiedDate;
        }
    }
}

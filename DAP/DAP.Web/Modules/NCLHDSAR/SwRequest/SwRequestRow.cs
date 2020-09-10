
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[SWRequest]")]
    [DisplayName("CCPA Request"), InstanceName("Sw Request")]
    [ReadPermission("NCLHDSAR:SWRequest:View|NCLHDSAR:SWRequestAttribute:View")]
    [ModifyPermission("NCLHDSAR:SWRequest:Modify|NCLHDSAR:SWRequestAttribute:Modify")]
    [DeletePermission("NCLHDSAR:SWRequest:Delete|NCLHDSAR:SWRequestAttribute:Delete")]
    [DataAuditLog]
    public sealed class SwRequestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Record Id"), Identity, Visible(false)]
        public Int32? RecordId
        {
            get { return Fields.RecordId[this]; }
            set { Fields.RecordId[this] = value; }
        }

        [DisplayName("Api Response Id"), Column("APIResponseID"), Size(30), NotNull, Visible(false)]
        public String ApiResponseId
        {
            get { return Fields.ApiResponseId[this]; }
            set { Fields.ApiResponseId[this] = value; }
        }

        [DisplayName("Api Response"), Column("APIResponse"), Size(20), Visible(false)]
        public String ApiResponse
        {
            get { return Fields.ApiResponse[this]; }
            set { Fields.ApiResponse[this] = value; }
        }

        [DisplayName("Api Response Depth"), Column("APIResponseDepth"), Size(20), Visible(false)]
        public String ApiResponseDepth
        {
            get { return Fields.ApiResponseDepth[this]; }
            set { Fields.ApiResponseDepth[this] = value; }
        }

        [DisplayName("First Name"), Column("Client_FirstName"), Size(50), QuickFilter, QuickSearch, Updatable(false)]
        public String ClientFirstName
        {
            get { return Fields.ClientFirstName[this]; }
            set { Fields.ClientFirstName[this] = value; }
        }

        [DisplayName("Last Name"), Column("Client_LastName"), Size(50), QuickFilter, QuickSearch, Updatable(false)]
        public String ClientLastName
        {
            get { return Fields.ClientLastName[this]; }
            set { Fields.ClientLastName[this] = value; }
        }

        [DisplayName("Email"), Column("Client_EmailAddress"), Size(50), Updatable(false)]
        public String ClientEmailAddress
        {
            get { return Fields.ClientEmailAddress[this]; }
            set { Fields.ClientEmailAddress[this] = value; }
        }

        [DisplayName("Category"), Column("Client_GuestCategory"), Size(200), Updatable(false)]
        public String ClientGuestCategory
        {
            get { return Fields.ClientGuestCategory[this]; }
            set { Fields.ClientGuestCategory[this] = value; }
        }

        [DisplayName("Zip"), Column("Client_ZipCode"), Size(50), Updatable(false)]
        public String ClientZipCode
        {
            get { return Fields.ClientZipCode[this]; }
            set { Fields.ClientZipCode[this] = value; }
        }

        [DisplayName("Address"), Column("Client_Address"), Size(200), Updatable(false)]
        public String ClientAddress
        {
            get { return Fields.ClientAddress[this]; }
            set { Fields.ClientAddress[this] = value; }
        }

        [DisplayName("Latitude #"), Column("Client_LatitudesNumber"), Size(50), Updatable(false)]
        public String ClientLatitudesNumber
        {
            get { return Fields.ClientLatitudesNumber[this]; }
            set { Fields.ClientLatitudesNumber[this] = value; }
        }

        [DisplayName("Is Relatedto Household"), Column("Client_IsRelatedtoHousehold"), Size(50), Updatable(false)]
        public String ClientIsRelatedtoHousehold
        {
            get { return Fields.ClientIsRelatedtoHousehold[this]; }
            set { Fields.ClientIsRelatedtoHousehold[this] = value; }
        }

        [DisplayName("Request Type"), Size(30), Updatable(false)]
        public String RequestType
        {
            get { return Fields.RequestType[this]; }
            set { Fields.RequestType[this] = value; }
        }

        [DisplayName("Created"), Updatable(false)]
        public DateTime? RecordTimeStamp
        {
            get { return Fields.RecordTimeStamp[this]; }
            set { Fields.RecordTimeStamp[this] = value; }
        }

        [DisplayName("Last Updated"), Column("LastUpdated_Dt"), Updatable(false)]
        public DateTime? LastUpdatedDt
        {
            get { return Fields.LastUpdatedDt[this]; }
            set { Fields.LastUpdatedDt[this] = value; }
        }

        [DisplayName("Updated By"), Size(50), Updatable(false)]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Assignee"), Column("AssigneeID"), ForeignKey("[dbo].[Assignee]", "AssigneeID"), LeftJoin("jAssignee"), TextualField("AssigneeFullName"), LookupEditor("NCLHDSAR.Assignee")]
        [QuickFilter]
        public Int32? AssigneeId
        {
            get { return Fields.AssigneeId[this]; }
            set { Fields.AssigneeId[this] = value; }
        }

        [DisplayName("Status"), Column("StatusID"), ForeignKey("[dbo].[Request_Status]", "StatusID"), LeftJoin("jStatus"), TextualField("StatusStatusDescription"), LookupEditor("NCLHDSAR.RequestStatus")]
        [QuickFilter]
        public Int32? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [DisplayName("Assignee Full Name"), Expression("jAssignee.[FullName]")]
        public String AssigneeFullName
        {
            get { return Fields.AssigneeFullName[this]; }
            set { Fields.AssigneeFullName[this] = value; }
        }

        [DisplayName("Assignee Is Active"), Expression("jAssignee.[IsActive]")]
        public Boolean? AssigneeIsActive
        {
            get { return Fields.AssigneeIsActive[this]; }
            set { Fields.AssigneeIsActive[this] = value; }
        }

        [DisplayName("Status Status Description"), Expression("jStatus.[StatusDescription]")]
        public String StatusStatusDescription
        {
            get { return Fields.StatusStatusDescription[this]; }
            set { Fields.StatusStatusDescription[this] = value; }
        }

        [DisplayName("Status Status Order"), Expression("jStatus.[StatusOrder]")]
        public Int32? StatusStatusOrder
        {
            get { return Fields.StatusStatusOrder[this]; }
            set { Fields.StatusStatusOrder[this] = value; }
        }

        [DisplayName("Days Old"), AlignCenter, Updatable(false)]
        [Expression("DATEDIFF(DAY,RecordTimeStamp, getdate())")]
        public Int32? DaysOld
        {
            get { return Fields.DaysOld[this]; }
            set { Fields.DaysOld[this] = value; }
        }

        [DisplayName("# Attr"), AlignCenter, Updatable(false)]
        [Expression("(SELECT COUNT(T1.Id) FROM dbo.SWRequest_Attributes AS T1 WHERE T0.RecordId = T1.Id)")]
        public Int32? AttributeCount
        {
            get { return Fields.AttributeCount[this]; }
            set { Fields.AttributeCount[this] = value; }
        }

        [DisplayName("Deadline Dt"), Column("Deadline_dt"), NotNull, Updatable(false)]
        public DateTime? DeadlineDt
        {
            get { return Fields.DeadlineDt[this]; }
            set { Fields.DeadlineDt[this] = value; }
        }

        [DisplayName("Days Left"), AlignCenter, Updatable(false)]
        [Expression("CASE WHEN T0.StatusID in (3,4) THEN 0 ELSE CASE WHEN DATEDIFF(DAY, getdate(), DeadLine_dt) < 0 THEN 0 ELSE DATEDIFF(DAY, getdate(), DeadLine_dt) END END")]
        public Int32? DaysLeft
        {
            get { return Fields.DaysLeft[this]; }
            set { Fields.DaysLeft[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.RecordId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ClientLastName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SwRequestRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RecordId;
            public StringField ApiResponseId;
            public StringField ApiResponse;
            public StringField ApiResponseDepth;
            public StringField ClientFirstName;
            public StringField ClientLastName;
            public StringField ClientEmailAddress;
            public StringField ClientGuestCategory;
            public StringField ClientZipCode;
            public StringField ClientAddress;
            public StringField ClientLatitudesNumber;
            public StringField ClientIsRelatedtoHousehold;
            public StringField RequestType;
            public DateTimeField RecordTimeStamp;
            public DateTimeField LastUpdatedDt;
            public StringField UpdatedBy;
            
            public Int32Field AssigneeId;
            public Int32Field StatusId;
            public DateTimeField DeadlineDt;

            public StringField AssigneeFullName;
            public BooleanField AssigneeIsActive;

            public StringField StatusStatusDescription;
            public Int32Field StatusStatusOrder;

            public Int32Field DaysOld;
            public Int32Field DaysLeft;
            public Int32Field AttributeCount;

            public RowListField<NoteRow> NoteList;
        }
    }
}

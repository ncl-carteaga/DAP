
namespace DAP.NCLHDSAR.Entities
{
    using DAP.NCLHDSAR.Lookups;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[MarketingRequest]")]
    [DisplayName("Marketing Request"), InstanceName("Marketing Request")]
    [ReadPermission(PermissionKeys.Request.View)]
    [ModifyPermission(PermissionKeys.Request.Modify)]
    [DeletePermission(PermissionKeys.Request.Delete)]
    [DataAuditLog]
    public sealed class MarketingRequestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, Visible(false)]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Request Type"), Column("RequestTypeID"), NotNull, ForeignKey("[dbo].[MarketingRequestTypes]", "id"), LeftJoin("jRequestType"), TextualField("RequestTypeDescription"), LookupEditor(typeof(TypeLookupEditor))]
        public Int16? RequestTypeId
        {
            get { return Fields.RequestTypeId[this]; }
            set { Fields.RequestTypeId[this] = value; }
        }

        [DisplayName("BRAND"), Column("BrandID"), NotNull, ForeignKey("[dbo].[MarketingRequestBrands]", "id"), LeftJoin("jBrand"), TextualField("BrandDescription"), LookupEditor(typeof(BrandLookupEditor))]
        public Int16? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("CONTACT_ID"), Column("CONTACT_ID"), Size(100), QuickSearch]
        public String ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Channel"), Column("ChannelID"), NotNull, ForeignKey("[dbo].[MarketingRequestChannels]", "id"), LeftJoin("jChannel"), TextualField("ChannelDescription"), LookupEditor(typeof(ChannelLookupEditor))]
        public Int16? ChannelId
        {
            get { return Fields.ChannelId[this]; }
            set { Fields.ChannelId[this] = value; }
        }

        [DisplayName("Opt Out Status"), Column("OptOutStatusID"), ForeignKey("[dbo].[MarketingRequestOptOutStatus]", "id"), LeftJoin("jOptOut"), Size(3), LookupEditor(typeof(OptOutLookupEditor))]
        public Int16? OptOutStatusID
        {
            get { return Fields.OptOutStatusID[this]; }
            set { Fields.OptOutStatusID[this] = value; }
        }

        [DisplayName("FIRST_NAM"), Column("FIRST_NAM"), Size(50)]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("LAST_NAM"), Column("LAST_NAM"), Size(50)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("ADDRESS1"), Column("ADDRESS1"), Size(95)]
        public String Address1
        {
            get { return Fields.Address1[this]; }
            set { Fields.Address1[this] = value; }
        }

        [DisplayName("ADDRESS2"), Column("ADDRESS2"), Size(95)]
        public String Address2
        {
            get { return Fields.Address2[this]; }
            set { Fields.Address2[this] = value; }
        }

        [DisplayName("CITY"), Column("CITY"), Size(35)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("STATE"), Column("STATE"), Size(25)]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("ZIP"), Column("ZIP"), Size(10)]
        public String Zip
        {
            get { return Fields.Zip[this]; }
            set { Fields.Zip[this] = value; }
        }

        [DisplayName("COUNTRY"), Column("COUNTRY"), Size(25)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("PHONE"), Column("PHONE"), Size(15)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Source"), Column("SourceID"), ForeignKey("[dbo].[MarketingRequestSources]", "id"), LeftJoin("jSource"), TextualField("SourceDescription"), LookupEditor(typeof(SourceLookupEditor))]
        public Int16? SourceId
        {
            get { return Fields.SourceId[this]; }
            set { Fields.SourceId[this] = value; }
        }

        [DisplayName("EMAIL_ADDRESS"), Column("EMAIL_ADDRESS"), Size(65)]
        public String EmailAddress
        {
            get { return Fields.EmailAddress[this]; }
            set { Fields.EmailAddress[this] = value; }
        }

        [DisplayName("TITLE"), Column("TITLE"), Size(100)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("IS_RETURNED_MAIL_CD"), Column("IS_RETURNED_MAIL_CD"), NotNull]
        public Boolean? IsReturnedMailCd
        {
            get { return Fields.IsReturnedMailCd[this]; }
            set { Fields.IsReturnedMailCd[this] = value; }
        }

        [DisplayName("Created By"), Size(50), ReadOnly(true)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), ReadOnly(true)]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Modified By"), Size(50), ReadOnly(true)]
        public String ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        [DisplayName("Modified Date"), ReadOnly(true)]
        public DateTime? ModifiedDate
        {
            get { return Fields.ModifiedDate[this]; }
            set { Fields.ModifiedDate[this] = value; }
        }

        [DisplayName("Request Type Description"), Expression("jRequestType.[Description]")]
        public String RequestTypeDescription
        {
            get { return Fields.RequestTypeDescription[this]; }
            set { Fields.RequestTypeDescription[this] = value; }
        }

        [DisplayName("BRAND"), Expression("jBrand.[Description]")]
        public String BrandDescription
        {
            get { return Fields.BrandDescription[this]; }
            set { Fields.BrandDescription[this] = value; }
        }

        [DisplayName("Channel Description"), Expression("jChannel.[Description]")]
        public String ChannelDescription
        {
            get { return Fields.ChannelDescription[this]; }
            set { Fields.ChannelDescription[this] = value; }
        }

        [DisplayName("Source Description"), Expression("jSource.[Description]")]
        public String SourceDescription
        {
            get { return Fields.SourceDescription[this]; }
            set { Fields.SourceDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ContactId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MarketingRequestRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int16Field RequestTypeId;
            public Int16Field BrandId;
            public StringField ContactId;
            public Int16Field ChannelId;
            public Int16Field OptOutStatusID;
            public StringField FirstName;
            public StringField LastName;
            public StringField Address1;
            public StringField Address2;
            public StringField City;
            public StringField State;
            public StringField Zip;
            public StringField Country;
            public StringField Phone;
            public Int16Field SourceId;
            public StringField EmailAddress;
            public StringField Title;
            public BooleanField IsReturnedMailCd;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField ModifiedBy;
            public DateTimeField ModifiedDate;

            public StringField RequestTypeDescription;

            public StringField BrandDescription;

            public StringField ChannelDescription;

            public StringField SourceDescription;
        }
    }
}


namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[MarketingRequest]")]
    [DisplayName("Marketing Request"), InstanceName("Marketing Request")]
    [ReadPermission(PermissionKeys.Request.View)]
    [ModifyPermission(PermissionKeys.Request.Modify)]
    [DeletePermission(PermissionKeys.Request.Delete)]
    [DataAuditLog]
    public sealed class MarketingRequestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Request Type"), Column("RequestTypeID"), NotNull, ForeignKey("[dbo].[MarketingRequestTypes]", "id"), LeftJoin("jRequestType"), TextualField("RequestTypeDescription")]
        public Int16? RequestTypeId
        {
            get { return Fields.RequestTypeId[this]; }
            set { Fields.RequestTypeId[this] = value; }
        }

        [DisplayName("Brand"), Column("BrandID"), NotNull, ForeignKey("[dbo].[MarketingRequestBrands]", "id"), LeftJoin("jBrand"), TextualField("BrandDescription")]
        public Int16? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("Contact Id"), Column("ContactID"), Size(100), QuickSearch]
        public String ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Channel"), Column("ChannelID"), NotNull, ForeignKey("[dbo].[MarketingRequestChannels]", "id"), LeftJoin("jChannel"), TextualField("ChannelDescription")]
        public Int16? ChannelId
        {
            get { return Fields.ChannelId[this]; }
            set { Fields.ChannelId[this] = value; }
        }

        [DisplayName("Opt Out Status"), Size(3)]
        public String OptOutStatus
        {
            get { return Fields.OptOutStatus[this]; }
            set { Fields.OptOutStatus[this] = value; }
        }

        [DisplayName("First Name"), Size(50)]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(50)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Address1"), Size(95)]
        public String Address1
        {
            get { return Fields.Address1[this]; }
            set { Fields.Address1[this] = value; }
        }

        [DisplayName("Address2"), Size(95)]
        public String Address2
        {
            get { return Fields.Address2[this]; }
            set { Fields.Address2[this] = value; }
        }

        [DisplayName("City"), Size(35)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("State"), Size(25)]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Zip"), Size(10)]
        public String Zip
        {
            get { return Fields.Zip[this]; }
            set { Fields.Zip[this] = value; }
        }

        [DisplayName("Country"), Size(25)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Phone"), Size(15)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Source"), Column("SourceID"), ForeignKey("[dbo].[MarketingRequestSources]", "id"), LeftJoin("jSource"), TextualField("SourceDescription")]
        public Int16? SourceId
        {
            get { return Fields.SourceId[this]; }
            set { Fields.SourceId[this] = value; }
        }

        [DisplayName("Email Address"), Size(65)]
        public String EmailAddress
        {
            get { return Fields.EmailAddress[this]; }
            set { Fields.EmailAddress[this] = value; }
        }

        [DisplayName("Title"), Size(100)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Is Returned Mail Cd"), Column("IsReturnedMailCD"), NotNull]
        public Boolean? IsReturnedMailCd
        {
            get { return Fields.IsReturnedMailCd[this]; }
            set { Fields.IsReturnedMailCd[this] = value; }
        }

        [DisplayName("Created By"), Size(50)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Modified By"), Size(50)]
        public String ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        [DisplayName("Modified Date")]
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

        [DisplayName("Brand Description"), Expression("jBrand.[Description]")]
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
            public StringField OptOutStatus;
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

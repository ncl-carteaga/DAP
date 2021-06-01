
namespace DAP.SSISConfig.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PSConfig"), Module("SSISConfig"), TableName("[dbo].[NCLH_SHIP]")]
    [DisplayName("Nclh Ship"), InstanceName("Nclh Ship")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NclhShipRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ship Id"), Identity]
        public Int32? ShipId
        {
            get { return Fields.ShipId[this]; }
            set { Fields.ShipId[this] = value; }
        }

        [DisplayName("Ship Abbreviation"), Size(50), QuickSearch]
        public String ShipAbbreviation
        {
            get { return Fields.ShipAbbreviation[this]; }
            set { Fields.ShipAbbreviation[this] = value; }
        }

        [DisplayName("Ship Full Name"), Size(50)]
        public String ShipFullName
        {
            get { return Fields.ShipFullName[this]; }
            set { Fields.ShipFullName[this] = value; }
        }

        [DisplayName("Company Cd"), Column("Company_Cd"), Size(50)]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Department Cd"), Column("Department_Cd"), Size(50)]
        public String DepartmentCd
        {
            get { return Fields.DepartmentCd[this]; }
            set { Fields.DepartmentCd[this] = value; }
        }

        [DisplayName("Location Cd"), Column("Location_Cd"), Size(50)]
        public String LocationCd
        {
            get { return Fields.LocationCd[this]; }
            set { Fields.LocationCd[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Ship Tk"), Column("Ship_Tk")]
        public Int32? ShipTk
        {
            get { return Fields.ShipTk[this]; }
            set { Fields.ShipTk[this] = value; }
        }

        [DisplayName("Has Merged"), NotNull]
        public Boolean? HasMerged
        {
            get { return Fields.HasMerged[this]; }
            set { Fields.HasMerged[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ShipId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipAbbreviation; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NclhShipRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShipId;
            public StringField ShipAbbreviation;
            public StringField ShipFullName;
            public StringField CompanyCd;
            public StringField DepartmentCd;
            public StringField LocationCd;
            public BooleanField IsActive;
            public Int32Field ShipTk;
            public BooleanField HasMerged;
        }
    }
}

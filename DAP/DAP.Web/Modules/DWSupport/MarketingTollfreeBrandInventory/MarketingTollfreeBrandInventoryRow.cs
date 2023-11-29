
namespace DAP.DWSupport.Entities
{
    using DAP.NCLHDSAR.Lookups;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[MarketingTollfreeBrandInventory]")]
    [DisplayName("Marketing Tollfree Brand Inventory"), InstanceName("Marketing Tollfree Brand Inventory")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class MarketingTollfreeBrandInventoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Brand Id"), LookupEditor(typeof(BrandLookupEditor))]
        public Int32? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("Location"), Size(50), QuickSearch]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Toll Free Number"), Size(50)]
        public String TollFreeNumber
        {
            get { return Fields.TollFreeNumber[this]; }
            set { Fields.TollFreeNumber[this] = value; }
        }

        [DisplayName("Description"), Size(50)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Vdn"), Column("VDN"), Size(50)]
        public String Vdn
        {
            get { return Fields.Vdn[this]; }
            set { Fields.Vdn[this] = value; }
        }

        [DisplayName("Modified By"), Size(50)]
        public String ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        [DisplayName("Created By"), Size(50)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Modified Ts")]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Created Ts")]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Location; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MarketingTollfreeBrandInventoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field BrandId;
            public StringField Location;
            public StringField TollFreeNumber;
            public StringField Description;
            public StringField Vdn;
            public StringField ModifiedBy;
            public StringField CreatedBy;
            public DateTimeField ModifiedTs;
            public DateTimeField CreatedTs;
        }
    }
}

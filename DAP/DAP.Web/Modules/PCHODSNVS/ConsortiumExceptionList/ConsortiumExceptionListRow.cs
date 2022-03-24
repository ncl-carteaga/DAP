
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dap].[consortium_exception_list]")]
    [DisplayName("Consortium Exception List"), InstanceName("Consortium Exception List")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class ConsortiumExceptionListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Consortium Exception List Tk"), Column("ConsortiumExceptionList_tk"), Identity, Visible(false)]
        public Int32? ConsortiumExceptionListTk
        {
            get { return Fields.ConsortiumExceptionListTk[this]; }
            set { Fields.ConsortiumExceptionListTk[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), QuickSearch, SelectPCHCompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("New Item Type"), Column("new_item_type"), Size(100), NotNull, ForeignKey("[dap].[Item_Type]", "Item_Type"), LeftJoin("jNewItemType"), LookupEditor("PCHODSNVS.Item_Type")]
        public String NewItemType
        {
            get { return Fields.NewItemType[this]; }
            set { Fields.NewItemType[this] = value; }
        }

        [DisplayName("New Item Cd"), Column("new_item_name"), Size(250), NotNull]
        public String NewItemName
        {
            get { return Fields.NewItemName[this]; }
            set { Fields.NewItemName[this] = value; }
        }

        [DisplayName("Item Type"), Column("item_type"), Size(100), NotNull, ForeignKey("[dap].[Item_Type]", "Item_Type"), LeftJoin("jItemType"), LookupEditor("PCHODSNVS.Item_Type")]
        public String ItemType
        {
            get { return Fields.ItemType[this]; }
            set { Fields.ItemType[this] = value; }
        }

        [DisplayName("Item Cd"), Column("item_cd")]
        public String ItemCd
        {
            get { return Fields.ItemCd[this]; }
            set { Fields.ItemCd[this] = value; }
        }

        [DisplayName("New Item Name"), Column("item_name"), Size(250)]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Exclude Ind"), Column("exclude_ind")]
        public Boolean? ExcludeInd
        {
            get { return Fields.ExcludeInd[this]; }
            set { Fields.ExcludeInd[this] = value; }
        }

        [DisplayName("Combine Ind"), Column("combine_ind")]
        public Boolean? CombineInd
        {
            get { return Fields.CombineInd[this]; }
            set { Fields.CombineInd[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt")]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        [DisplayName("New Item Type Type Tk"), Expression("jNewItemType.[Item_Type_tk]")]
        public Int32? NewItemTypeTypeTk
        {
            get { return Fields.NewItemTypeTypeTk[this]; }
            set { Fields.NewItemTypeTypeTk[this] = value; }
        }

        [DisplayName("Item Type Type Tk"), Expression("jItemType.[Item_Type_tk]")]
        public Int32? ItemTypeTypeTk
        {
            get { return Fields.ItemTypeTypeTk[this]; }
            set { Fields.ItemTypeTypeTk[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ConsortiumExceptionListTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsortiumExceptionListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ConsortiumExceptionListTk;
            public StringField CompanyCd;
            public StringField NewItemType;
            public StringField NewItemName;
            public StringField ItemType;
            public StringField ItemCd;
            public StringField ItemName;
            public BooleanField ExcludeInd;
            public BooleanField CombineInd;
            public DateTimeField LoadDt;

            public Int32Field NewItemTypeTypeTk;

            public Int32Field ItemTypeTypeTk;
        }
    }
}

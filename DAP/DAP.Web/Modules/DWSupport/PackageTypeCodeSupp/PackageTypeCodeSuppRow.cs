
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[PACKAGE_TYPE_CODE_SUPP]")]
    [DisplayName("Package Type Code Supp"), InstanceName("Package Type Code Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [LookupScript("DWSupport.PackageTypeCodeSupp")]
    public sealed class PackageTypeCodeSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Type Id"), Column("PACKAGE_TYPE_ID"), Identity]
        public Int32? TypeId
        {
            get { return Fields.TypeId[this]; }
            set { Fields.TypeId[this] = value; }
        }

        [DisplayName("Type Code"), Column("PACKAGE_TYPE_CODE"), Size(15), NotNull, QuickSearch]
        public String TypeCode
        {
            get { return Fields.TypeCode[this]; }
            set { Fields.TypeCode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TypeCode; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypeCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PackageTypeCodeSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TypeId;
            public StringField TypeCode;
        }
    }
}

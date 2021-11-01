
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Department]")]
    [DisplayName("Department"), InstanceName("Department")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [LookupScript("Avaya.Department")]
    public sealed class DepartmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Department Tk"), Column("Department_tk"), Identity]
        public Int32? DepartmentTk
        {
            get { return Fields.DepartmentTk[this]; }
            set { Fields.DepartmentTk[this] = value; }
        }

        [DisplayName("Department"), Size(250), PrimaryKey, QuickSearch]
        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Department; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Department; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepartmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DepartmentTk;
            public StringField Department;
        }
    }
}

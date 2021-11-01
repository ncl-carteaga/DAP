
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Group]")]
    [DisplayName("Group"), InstanceName("Group")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [LookupScript("Avaya.Group")]
    public sealed class GroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tk"), Column("Group_tk"), Identity]
        public Int32? Tk
        {
            get { return Fields.Tk[this]; }
            set { Fields.Tk[this] = value; }
        }

        [DisplayName("Cd"), Column("Group_Cd"), Size(50), PrimaryKey, QuickSearch]
        public String Cd
        {
            get { return Fields.Cd[this]; }
            set { Fields.Cd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Cd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Tk;
            public StringField Cd;
        }
    }
}

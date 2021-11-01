
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Status]")]
    [DisplayName("Status"), InstanceName("Status")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [LookupScript("Avaya.Status")]
    public sealed class StatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Status Tk"), Column("Status_tk"), Identity]
        public Int32? StatusTk
        {
            get { return Fields.StatusTk[this]; }
            set { Fields.StatusTk[this] = value; }
        }

        [DisplayName("Status Desc"), Size(50), PrimaryKey, QuickSearch]
        public String StatusDesc
        {
            get { return Fields.StatusDesc[this]; }
            set { Fields.StatusDesc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StatusDesc; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StatusDesc; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StatusTk;
            public StringField StatusDesc;
        }
    }
}

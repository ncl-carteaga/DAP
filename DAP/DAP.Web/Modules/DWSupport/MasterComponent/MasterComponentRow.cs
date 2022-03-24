
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[MasterComponent]")]
    [DisplayName("Master Component"), InstanceName("Master Component")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.GetMasterComponent")]
    public sealed class MasterComponentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Master Component Cd"), Size(30), PrimaryKey, QuickSearch]
        public String MasterComponentCd
        {
            get { return Fields.MasterComponentCd[this]; }
            set { Fields.MasterComponentCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MasterComponentCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MasterComponentCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterComponentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField MasterComponentCd;
        }
    }
}

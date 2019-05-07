
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[System_Master]")]
    [DisplayName("System Master"), InstanceName("System Master")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")
    [ReadPermission("Administration:General|Reviewer:General")]
    [ModifyPermission("Administration:General")]
    [DataAuditLog]
    public sealed class SystemMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("System Name"), Column("System_name"), Size(75), NotNull, QuickSearch]
        public String SystemName
        {
            get { return Fields.SystemName[this]; }
            set { Fields.SystemName[this] = value; }
        }

        [DisplayName("System Table"), Column("System_table"), Size(255), NotNull, LookupInclude]
        public String SystemTable
        {
            get { return Fields.SystemTable[this]; }
            set { Fields.SystemTable[this] = value; }
        }

        [DisplayName("System Desc"), Column("System_desc"), Size(255)]
        public String SystemDesc
        {
            get { return Fields.SystemDesc[this]; }
            set { Fields.SystemDesc[this] = value; }
        }

        [DisplayName("System Active Yn"), Column("System_Active_YN"), Size(1), NotNull]
        public String SystemActiveYn
        {
            get { return Fields.SystemActiveYn[this]; }
            set { Fields.SystemActiveYn[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SystemName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SystemMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField SystemName;
            public StringField SystemTable;
            public StringField SystemDesc;
            public StringField SystemActiveYn;
        }
    }
}

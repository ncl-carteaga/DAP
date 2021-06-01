
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Support_Channel]")]
    [DisplayName("Support Channel"), InstanceName("Support Channel")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [LookupScript("Avaya.Support_Channel")]
    public sealed class SupportChannelRow : Row, IIdRow, INameRow
    {
        [DisplayName("Supp Channel Tk"), Column("SuppChannel_tk"), Identity]
        public Int32? SuppChannelTk
        {
            get { return Fields.SuppChannelTk[this]; }
            set { Fields.SuppChannelTk[this] = value; }
        }

        [DisplayName("Support Channel"), Column("Support_Channel"), Size(50), PrimaryKey, QuickSearch]
        public String SupportChannel
        {
            get { return Fields.SupportChannel[this]; }
            set { Fields.SupportChannel[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SupportChannel; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SupportChannel; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SupportChannelRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SuppChannelTk;
            public StringField SupportChannel;
        }
    }
}

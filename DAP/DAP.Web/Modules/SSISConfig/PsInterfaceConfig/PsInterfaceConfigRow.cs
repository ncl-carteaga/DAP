
namespace DAP.SSISConfig.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PSConfig"), Module("SSISConfig"), TableName("[dbo].[PSInterface_Config]")]
    [DisplayName("ADMIN AP PS Interface (Port & PP voucher) Closing Date"), InstanceName("Ps Interface Config")]
    [ReadPermission(PermissionKeys.SSISConfig.View)]
    [ModifyPermission(PermissionKeys.SSISConfig.Modify)]
    [DeletePermission(PermissionKeys.SSISConfig.Delete)]
    [DataAuditLog]
    public sealed class PsInterfaceConfigRow : Row, IIdRow, INameRow
    {
        [DisplayName("Source System"), Size(30), QuickSearch]
        public String SourceSystem
        {
            get { return Fields.SourceSystem[this]; }
            set { Fields.SourceSystem[this] = value; }
        }

        [DisplayName("Config Setting"), Size(50), PrimaryKey, Updatable(false)]
        public String ConfigSetting
        {
            get { return Fields.ConfigSetting[this]; }
            set { Fields.ConfigSetting[this] = value; }
        }

        [DisplayName("Data Type"), Size(10), NotNull, Updatable(false)]
        public String DataType
        {
            get { return Fields.DataType[this]; }
            set { Fields.DataType[this] = value; }
        }

        [DisplayName("Config Value"), Size(200), NotNull,]
        public String ConfigValue
        {
            get { return Fields.ConfigValue[this]; }
            set { Fields.ConfigValue[this] = value; }
        }

        [DisplayName("Config Value"), Expression("CASE WHEN T0.[DataType] = 'Date' THEN CAST(ConfigValue AS Datetime) ELSE NULL END"), DateEditor, DisplayFormat("MM/dd/yyyy")]
        public DateTime? ConfigValueDate
        {
            get { return Fields.ConfigValueDate[this]; }
            set { Fields.ConfigValueDate[this] = value; }
        }

        [DisplayName("Config Id"), Identity, Updatable(false)]
        public Int32? ConfigId
        {
            get { return Fields.ConfigId[this]; }
            set { Fields.ConfigId[this] = value; }
        }

        [DisplayName("Modified Date"), Column("ModifiedDate"), Updatable(false), Insertable(false), DisplayFormat("MM/dd/yyyy HH:mm")]
        public DateTime? ModifiedDate
        {
            get { return Fields.ModifiedDate[this]; }
            set { Fields.ModifiedDate[this] = value; }
        }

        [DisplayName("Modified By"), Column("ModifiedBy"), Size(50), Updatable(false), Insertable(false)]
        public String ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ConfigId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SourceSystem; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PsInterfaceConfigRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField SourceSystem;
            public StringField ConfigSetting;
            public StringField DataType;
            public StringField ConfigValue;

            public DateTimeField ConfigValueDate;

            public Int32Field ConfigId;
            public DateTimeField ModifiedDate;
            public StringField ModifiedBy;
        }
    }
}

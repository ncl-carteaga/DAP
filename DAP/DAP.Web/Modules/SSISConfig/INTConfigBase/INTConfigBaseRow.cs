
namespace DAP.SSISConfig.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("INTConfig"), Module("SSISConfig"), TableName("[dbo].[SSIS_Config_base]")]
    [DisplayName("SSIS Config Base (INT)"), InstanceName("INT Config Base")]
    [ReadPermission(PermissionKeys.SSISConfig.View)]
    [ModifyPermission(PermissionKeys.SSISConfig.Modify)]
    [DeletePermission(PermissionKeys.SSISConfig.Delete)]
    [DataAuditLog]
    public sealed class INTConfigBaseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Configuration Filter"), Size(100), NotNull, QuickSearch, QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(Lookups.INTConfigFilterLookup)), Updatable(false)]
        public String ConfigurationFilter
        {
            get { return Fields.ConfigurationFilter[this]; }
            set { Fields.ConfigurationFilter[this] = value; }
        }

        [DisplayName("Package Path"), Size(255), NotNull]
        public String PackagePath
        {
            get { return Fields.PackagePath[this]; }
            set { Fields.PackagePath[this] = value; }
        }

        [DisplayName("Value Type"), Size(20), NotNull]
        public String ConfiguredValueType
        {
            get { return Fields.ConfiguredValueType[this]; }
            set { Fields.ConfiguredValueType[this] = value; }
        }

        [DisplayName("Value"), Size(1000)]
        public String ConfiguredValue
        {
            get { return Fields.ConfiguredValue[this]; }
            set { Fields.ConfiguredValue[this] = value; }
        }

        [DisplayName("Environment Enum"), NotNull, Visible(false)]
        public Int16? EnvironmentEnum
        {
            get { return Fields.EnvironmentEnum[this]; }
            set { Fields.EnvironmentEnum[this] = value; }
        }

        [DisplayName("Environment Desc"), Size(11), Visible(false), Updatable(false)]
        public String EnvironmentDesc
        {
            get { return Fields.EnvironmentDesc[this]; }
            set { Fields.EnvironmentDesc[this] = value; }
        }

        [DisplayName("Config Id"), Identity, Updatable(false)]
        public Int32? ConfigId
        {
            get { return Fields.ConfigId[this]; }
            set { Fields.ConfigId[this] = value; }
        }

        [DisplayName("Modified By"), Size(60), NotNull]
        public String ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        [DisplayName("Modified On"), NotNull, DisplayFormat("yyyy/dd/MM HH:mm")]
        public DateTime? ModifiedOn
        {
            get { return Fields.ModifiedOn[this]; }
            set { Fields.ModifiedOn[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ConfigId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ConfigurationFilter; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public INTConfigBaseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ConfigurationFilter;
            public StringField PackagePath;
            public StringField ConfiguredValueType;
            public StringField ConfiguredValue;
            public Int16Field EnvironmentEnum;
            public StringField EnvironmentDesc;
            public Int32Field ConfigId;
            public StringField ModifiedBy;
            public DateTimeField ModifiedOn;
        }
    }
}

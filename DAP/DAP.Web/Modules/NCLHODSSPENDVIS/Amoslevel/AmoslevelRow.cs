
namespace DAP.NCLHODSSPENDVIS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_ODS_SPEND_VIS"), Module("NCLHODSSPENDVIS"), TableName("[amos].[amoslevel]")]
    [DisplayName("AMOS Level"), InstanceName("Amoslevel")]
    [ReadPermission(PermissionKeys.SPENDVIS.View)]
    [ModifyPermission(PermissionKeys.SPENDVIS.Modify)]
    [DeletePermission(PermissionKeys.SPENDVIS.Delete)]
    public sealed class AmoslevelRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Num"), Column("id_num"), Identity, Visible(false)]
        public Int32? IdNum
        {
            get { return Fields.IdNum[this]; }
            set { Fields.IdNum[this] = value; }
        }

        [DisplayName("Account Id"), Size(50), QuickSearch]
        public String AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Descr"), Column("DESCR"), Size(50)]
        public String Descr
        {
            get { return Fields.Descr[this]; }
            set { Fields.Descr[this] = value; }
        }

        [DisplayName("Flex Dim1 Name"), Column("flexDim1Name"), Size(50)]
        public String FlexDim1Name
        {
            get { return Fields.FlexDim1Name[this]; }
            set { Fields.FlexDim1Name[this] = value; }
        }

        [DisplayName("Flex Dim2 Name"), Column("flexDim2Name"), Size(50)]
        public String FlexDim2Name
        {
            get { return Fields.FlexDim2Name[this]; }
            set { Fields.FlexDim2Name[this] = value; }
        }

        [DisplayName("Flex Dim3 Name"), Column("flexDim3Name"), Size(50)]
        public String FlexDim3Name
        {
            get { return Fields.FlexDim3Name[this]; }
            set { Fields.FlexDim3Name[this] = value; }
        }

        [DisplayName("Flex Dim4 Name"), Column("flexDim4Name"), Size(50)]
        public String FlexDim4Name
        {
            get { return Fields.FlexDim4Name[this]; }
            set { Fields.FlexDim4Name[this] = value; }
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
            get { return Fields.IdNum; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AccountId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AmoslevelRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdNum;
            public StringField AccountId;
            public StringField Descr;
            public StringField FlexDim1Name;
            public StringField FlexDim2Name;
            public StringField FlexDim3Name;
            public StringField FlexDim4Name;
            public DateTimeField ModifiedDate;
            public StringField ModifiedBy;
        }
    }
}

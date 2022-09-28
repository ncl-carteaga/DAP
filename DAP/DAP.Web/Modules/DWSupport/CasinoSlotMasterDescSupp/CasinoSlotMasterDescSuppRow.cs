
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CASINO_SLOT_MASTER_DESC_SUPP]")]
    [DisplayName("Casino Slot Master Desc Supp"), InstanceName("Casino Slot Master Desc Supp")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CasinoSlotMasterDescSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Slot Master Desc Sur Key"), Column("SLOT_MASTER_DESC_SUR_KEY"), Size(50), PrimaryKey, QuickSearch]
        public Int32? SlotMasterDescSurKey
        {
            get { return Fields.SlotMasterDescSurKey[this]; }
            set { Fields.SlotMasterDescSurKey[this] = value; }
        }

        [DisplayName("Slot Master Desc"), Column("SLOT_MASTER_DESC"), Size(100)]
        public String SlotMasterDesc
        {
            get { return Fields.SlotMasterDesc[this]; }
            set { Fields.SlotMasterDesc[this] = value; }
        }

        [DisplayName("Comment Txt"), Column("COMMENT_TXT"), Size(4000)]
        public String CommentTxt
        {
            get { return Fields.CommentTxt[this]; }
            set { Fields.CommentTxt[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Manufacturer Nam"), Column("MANUFACTURER_NAM"), Size(255)]
        public String ManufacturerNam
        {
            get { return Fields.ManufacturerNam[this]; }
            set { Fields.ManufacturerNam[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SlotMasterDescSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SlotMasterDesc; }
        }       

        public static readonly RowFields Fields = new RowFields().Init();

        public CasinoSlotMasterDescSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SlotMasterDescSurKey;
            public StringField SlotMasterDesc;
            public StringField CommentTxt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public StringField ManufacturerNam;
            public DateTimeField ModifiedTs;
        }
    }
}


namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[MINIBAR_SETUP_SUPP]")]
    [DisplayName("Minibar Setup Supp"), InstanceName("Minibar Setup Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class MinibarSetupSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Minibar Setup Sur Key"), Column("MINIBAR_SETUP_SUR_KEY"), PrimaryKey]
        public Int16? MinibarSetupSurKey
        {
            get { return Fields.MinibarSetupSurKey[this]; }
            set { Fields.MinibarSetupSurKey[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), QuickSearch]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Effective Dat"), Column("EFFECTIVE_DAT"), NotNull]
        public DateTime? EffectiveDat
        {
            get { return Fields.EffectiveDat[this]; }
            set { Fields.EffectiveDat[this] = value; }
        }

        [DisplayName("Minibar Setup Cost Amt"), Column("MINIBAR_SETUP_COST_AMT")]
        public Double? MinibarSetupCostAmt
        {
            get { return Fields.MinibarSetupCostAmt[this]; }
            set { Fields.MinibarSetupCostAmt[this] = value; }
        }

        [DisplayName("Comment Txt"), Column("COMMENT_TXT"), Size(2000)]
        public String CommentTxt
        {
            get { return Fields.CommentTxt[this]; }
            set { Fields.CommentTxt[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
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
            get { return Fields.MinibarSetupSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MinibarSetupSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field MinibarSetupSurKey;
            public StringField ShipCd;
            public DateTimeField EffectiveDat;
            public DoubleField MinibarSetupCostAmt;
            public StringField CommentTxt;
            public StringField CreatedByNam;
            public DateTimeField CreatedTs;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}

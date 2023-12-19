
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[SUPER_PRICE_PROGRAMS_SUPP]")]
    [DisplayName("Super Price Programs Supp"), InstanceName("Super Price Programs Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class SuperPriceProgramsSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Super Price Program Sur Key"), Column("SUPER_PRICE_PROGRAM_SUR_KEY")]
        public Int32? SuperPriceProgramSurKey
        {
            get { return Fields.SuperPriceProgramSurKey[this]; }
            set { Fields.SuperPriceProgramSurKey[this] = value; }
        }

        [DisplayName("Meta Price Program Cd"), Column("META_PRICE_PROGRAM_CD"), Size(50), QuickSearch]
        public String MetaPriceProgramCd
        {
            get { return Fields.MetaPriceProgramCd[this]; }
            set { Fields.MetaPriceProgramCd[this] = value; }
        }

        [DisplayName("Super Price Program Cd"), Column("SUPER_PRICE_PROGRAM_CD"), Size(50)]
        public String SuperPriceProgramCd
        {
            get { return Fields.SuperPriceProgramCd[this]; }
            set { Fields.SuperPriceProgramCd[this] = value; }
        }

        [DisplayName("Meta Price Prgrm Priority Nbr"), Column("META_PRICE_PRGRM_PRIORITY_NBR")]
        public Int32? MetaPricePrgrmPriorityNbr
        {
            get { return Fields.MetaPricePrgrmPriorityNbr[this]; }
            set { Fields.MetaPricePrgrmPriorityNbr[this] = value; }
        }

        [DisplayName("Meta Price Program Desc"), Column("META_PRICE_PROGRAM_DESC"), Size(50)]
        public String MetaPriceProgramDesc
        {
            get { return Fields.MetaPriceProgramDesc[this]; }
            set { Fields.MetaPriceProgramDesc[this] = value; }
        }

        [DisplayName("Meta Meta Price Program Cd"), Column("META_META_PRICE_PROGRAM_CD"), Size(50)]
        public String MetaMetaPriceProgramCd
        {
            get { return Fields.MetaMetaPriceProgramCd[this]; }
            set { Fields.MetaMetaPriceProgramCd[this] = value; }
        }

        [DisplayName("Meta Meta Price Program Desc"), Column("META_META_PRICE_PROGRAM_DESC"), Size(50)]
        public String MetaMetaPriceProgramDesc
        {
            get { return Fields.MetaMetaPriceProgramDesc[this]; }
            set { Fields.MetaMetaPriceProgramDesc[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), Size(50)]
        public String CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), Size(50)]
        public String ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SuperPriceProgramSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MetaPriceProgramCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuperPriceProgramsSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SuperPriceProgramSurKey;
            public StringField MetaPriceProgramCd;
            public StringField SuperPriceProgramCd;
            public Int32Field MetaPricePrgrmPriorityNbr;
            public StringField MetaPriceProgramDesc;
            public StringField MetaMetaPriceProgramCd;
            public StringField MetaMetaPriceProgramDesc;
            public StringField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public StringField ModifiedTs;
        }
    }
}

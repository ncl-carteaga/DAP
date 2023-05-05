
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CATEGORY_MASTER_SUPP]")]
    [DisplayName("Category Master Supp"), InstanceName("Category Master Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CategoryMasterSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Master Sur Key"), Column("CATEGORY_MASTER_SUR_KEY"), Size(50), PrimaryKey, Visible(false)]
        public Int32? CategoryMasterSurKey
        {
            get { return Fields.CategoryMasterSurKey[this]; }
            set { Fields.CategoryMasterSurKey[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), NotNull, QuickSearch]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Sail From Dat"), Column("SAIL_FROM_DAT"), NotNull]
        public DateTime? SailFromDat
        {
            get { return Fields.SailFromDat[this]; }
            set { Fields.SailFromDat[this] = value; }
        }

        [DisplayName("Sail To Dat"), Column("SAIL_TO_DAT"), NotNull]
        public DateTime? SailToDat
        {
            get { return Fields.SailToDat[this]; }
            set { Fields.SailToDat[this] = value; }
        }

        [DisplayName("Category Cd"), Column("CATEGORY_CD"), Size(3), NotNull]
        public String CategoryCd
        {
            get { return Fields.CategoryCd[this]; }
            set { Fields.CategoryCd[this] = value; }
        }

        [DisplayName("Meta Category Cd"), Column("META_CATEGORY_CD"), Size(7)]
        public String MetaCategoryCd
        {
            get { return Fields.MetaCategoryCd[this]; }
            set { Fields.MetaCategoryCd[this] = value; }
        }

        [DisplayName("Fleet Category Priority Nbr"), Column("FLEET_CATEGORY_PRIORITY_NBR")]
        public Int32? FleetCategoryPriorityNbr
        {
            get { return Fields.FleetCategoryPriorityNbr[this]; }
            set { Fields.FleetCategoryPriorityNbr[this] = value; }
        }

        [DisplayName("Pseudo Category Cd"), Column("PSEUDO_CATEGORY_CD"), Size(1), SelectYNEditor]
        public String PseudoCategoryCd
        {
            get { return Fields.PseudoCategoryCd[this]; }
            set { Fields.PseudoCategoryCd[this] = value; }
        }

        [DisplayName("Mandatory Assignment Cd"), Column("MANDATORY_ASSIGNMENT_CD"), Size(1), SelectYNEditor]
        public String MandatoryAssignmentCd
        {
            get { return Fields.MandatoryAssignmentCd[this]; }
            set { Fields.MandatoryAssignmentCd[this] = value; }
        }

        [DisplayName("New Meta Category Cd"), Column("NEW_META_CATEGORY_CD"), Size(20)]
        public String NewMetaCategoryCd
        {
            get { return Fields.NewMetaCategoryCd[this]; }
            set { Fields.NewMetaCategoryCd[this] = value; }
        }

        [DisplayName("Rms Pseudo Category Cd"), Column("RMS_PSEUDO_CATEGORY_CD"), Size(1), SelectYNEditor]
        public String RmsPseudoCategoryCd
        {
            get { return Fields.RmsPseudoCategoryCd[this]; }
            set { Fields.RmsPseudoCategoryCd[this] = value; }
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

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryMasterSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryMasterSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryMasterSurKey;
            public StringField ShipCd;
            public DateTimeField SailFromDat;
            public DateTimeField SailToDat;
            public StringField CategoryCd;
            public StringField MetaCategoryCd;
            public Int32Field FleetCategoryPriorityNbr;
            public StringField PseudoCategoryCd;
            public StringField MandatoryAssignmentCd;
            public StringField NewMetaCategoryCd;
            public StringField RmsPseudoCategoryCd;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}

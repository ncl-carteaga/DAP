
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[nvs].[RevDetail_Field]")]
    [DisplayName("Rev Detail Field"), InstanceName("Rev Detail Field")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class RevDetailFieldRow : Row, IIdRow, INameRow
    {
        [DisplayName("Rev Detail Field Id"), Column("RevDetailFieldID"), Identity]
        public Int32? RevDetailFieldId
        {
            get { return Fields.RevDetailFieldId[this]; }
            set { Fields.RevDetailFieldId[this] = value; }
        }

        [DisplayName("Revdetail Field Nm"), Column("revdetail_field_nm"), Size(250), NotNull, QuickSearch]
        public String RevdetailFieldNm
        {
            get { return Fields.RevdetailFieldNm[this]; }
            set { Fields.RevdetailFieldNm[this] = value; }
        }

        [DisplayName("Revdetail Segment Field Nm"), Column("revdetail_segment_field_nm"), Size(250), NotNull]
        public String RevdetailSegmentFieldNm
        {
            get { return Fields.RevdetailSegmentFieldNm[this]; }
            set { Fields.RevdetailSegmentFieldNm[this] = value; }
        }

        [DisplayName("Revdetail Field Check"), Column("revdetail_field_check"), NotNull]
        public String RevdetailFieldCheck
        {
            get { return Fields.RevdetailFieldCheck[this]; }
            set { Fields.RevdetailFieldCheck[this] = value; }
        }

        [DisplayName("Ods Field Nm"), Column("ods_field_nm"), Size(250), NotNull]
        public String OdsFieldNm
        {
            get { return Fields.OdsFieldNm[this]; }
            set { Fields.OdsFieldNm[this] = value; }
        }

        [DisplayName("Cube Ins Ind"), Column("cube_ins_ind"), NotNull]
        public Int32? CubeInsInd
        {
            get { return Fields.CubeInsInd[this]; }
            set { Fields.CubeInsInd[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt"), NotNull]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RevDetailFieldId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RevdetailFieldNm; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RevDetailFieldRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RevDetailFieldId;
            public StringField RevdetailFieldNm;
            public StringField RevdetailSegmentFieldNm;
            public StringField RevdetailFieldCheck;
            public StringField OdsFieldNm;
            public Int32Field CubeInsInd;
            public DateTimeField LoadDt;
        }
    }
}


namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[UAR_Sr_Dir_above_list]")]
    [DisplayName("Uar Sr Dir Above List"), InstanceName("Uar Sr Dir Above List")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UarSrDirAboveListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Jobtitle"), Column("jobtitle"), Size(100), NotNull, QuickSearch]
        public String Jobtitle
        {
            get { return Fields.Jobtitle[this]; }
            set { Fields.Jobtitle[this] = value; }
        }

        [DisplayName("Is Sr Dir Above"), Column("Is_Sr_Dir_Above"), BooleanEditor]
        public Int32? IsSrDirAbove
        {
            get { return Fields.IsSrDirAbove[this]; }
            set { Fields.IsSrDirAbove[this] = value; }
        }

        [DisplayName("Date Effective"), NotNull]
        public DateTime? DateEffective
        {
            get { return Fields.DateEffective[this]; }
            set { Fields.DateEffective[this] = value; }
        }

        [DisplayName("Date Expires")]
        public DateTime? DateExpires
        {
            get { return Fields.DateExpires[this]; }
            set { Fields.DateExpires[this] = value; }
        }

        [DisplayName("Row Change Reason"), Size(120), NotNull]
        public String RowChangeReason
        {
            get { return Fields.RowChangeReason[this]; }
            set { Fields.RowChangeReason[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Jobtitle; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UarSrDirAboveListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Jobtitle;
            public Int32Field IsSrDirAbove;
            public DateTimeField DateEffective;
            public DateTimeField DateExpires;
            public StringField RowChangeReason;
        }
    }
}

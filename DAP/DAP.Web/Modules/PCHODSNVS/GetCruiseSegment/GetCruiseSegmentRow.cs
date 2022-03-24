
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dap].[GetCruiseSegment]")]
    [DisplayName("Get Cruise Segment"), InstanceName("Get Cruise Segment")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [LookupScript("PCHODSNVS.GetSegment")]
    public sealed class GetCruiseSegmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cruise Segment Cd"), Column("cruise_segment_cd"), Size(10), NotNull, QuickSearch]
        public String CruiseSegmentCd
        {
            get { return Fields.CruiseSegmentCd[this]; }
            set { Fields.CruiseSegmentCd[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("ship_cd"), Size(3), LookupInclude]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Market Name"), Column("market_name"), Size(20), LookupInclude]
        public String MarketName
        {
            get { return Fields.MarketName[this]; }
            set { Fields.MarketName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CruiseSegmentCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CruiseSegmentCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GetCruiseSegmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CruiseSegmentCd;
            public StringField ShipCd;
            public StringField MarketName;
        }
    }
}


namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[OutboundCommissionPeriod]")]
    [DisplayName("Outbound Commission Period"), InstanceName("Outbound Commission Period")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]    
    [DataAuditLog]
    public sealed class OutboundCommissionPeriodRow : Row, IIdRow
    {
        [DisplayName("Outbound Commission Period Id"), Column("OutboundCommissionPeriodID"), Identity]
        public Int32? OutboundCommissionPeriodId
        {
            get { return Fields.OutboundCommissionPeriodId[this]; }
            set { Fields.OutboundCommissionPeriodId[this] = value; }
        }

        [DisplayName("Is Open"), NotNull]
        public Boolean? IsOpen
        {
            get { return Fields.IsOpen[this]; }
            set { Fields.IsOpen[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Current Month"), NotNull]
        [DisplayFormat("yyyyMM")]
        public DateTime? CurrentMonth
        {
            get { return Fields.CurrentMonth[this]; }
            set { Fields.CurrentMonth[this] = value; }
        }

        [DisplayName("Previous Month"), NotNull]
        [DisplayFormat("yyyyMM")]
        public DateTime? PreviousMonth
        {
            get { return Fields.PreviousMonth[this]; }
            set { Fields.PreviousMonth[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OutboundCommissionPeriodId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutboundCommissionPeriodRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OutboundCommissionPeriodId;
            public BooleanField IsOpen;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public DateTimeField CurrentMonth;
            public DateTimeField PreviousMonth;
        }
    }
}

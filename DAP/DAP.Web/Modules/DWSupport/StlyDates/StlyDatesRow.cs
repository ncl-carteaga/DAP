
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[nvs].[STLY_Dates]")]
    [DisplayName("Stly Dates"), InstanceName("Stly Dates")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StlyDatesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Stlyid"), Column("STLYID"), Identity]
        public Int32? Stlyid
        {
            get { return Fields.Stlyid[this]; }
            set { Fields.Stlyid[this] = value; }
        }

        [DisplayName("Report Dt"), Column("Report_dt"), NotNull]
        public DateTime? ReportDt
        {
            get { return Fields.ReportDt[this]; }
            set { Fields.ReportDt[this] = value; }
        }

        [DisplayName("Data As Of Dt"), Column("data_as_of_dt"), NotNull]
        public DateTime? DataAsOfDt
        {
            get { return Fields.DataAsOfDt[this]; }
            set { Fields.DataAsOfDt[this] = value; }
        }

        [DisplayName("Stly Dt"), Column("stly_dt"), NotNull]
        public DateTime? StlyDt
        {
            get { return Fields.StlyDt[this]; }
            set { Fields.StlyDt[this] = value; }
        }

        [DisplayName("Day Of Week"), Column("day_of_week"), Size(20), NotNull, QuickSearch]
        public String DayOfWeek
        {
            get { return Fields.DayOfWeek[this]; }
            set { Fields.DayOfWeek[this] = value; }
        }

        [DisplayName("Week Num"), Column("week_num"), NotNull]
        public Int32? WeekNum
        {
            get { return Fields.WeekNum[this]; }
            set { Fields.WeekNum[this] = value; }
        }

        [DisplayName("System Issues Ind"), Column("system_issues_ind"), NotNull]
        public Boolean? SystemIssuesInd
        {
            get { return Fields.SystemIssuesInd[this]; }
            set { Fields.SystemIssuesInd[this] = value; }
        }

        [DisplayName("Holiday Ind"), Column("holiday_ind"), NotNull]
        public Boolean? HolidayInd
        {
            get { return Fields.HolidayInd[this]; }
            set { Fields.HolidayInd[this] = value; }
        }

        [DisplayName("Disaster Ind"), Column("disaster_ind"), NotNull]
        public Boolean? DisasterInd
        {
            get { return Fields.DisasterInd[this]; }
            set { Fields.DisasterInd[this] = value; }
        }

        [DisplayName("Effective From"), Column("effective_from"), NotNull]
        public DateTime? EffectiveFrom
        {
            get { return Fields.EffectiveFrom[this]; }
            set { Fields.EffectiveFrom[this] = value; }
        }

        [DisplayName("Effective To"), Column("effective_to"), DefaultValue("12/30/9999")]
        public DateTime? EffectiveTo
        {
            get { return Fields.EffectiveTo[this]; }
            set { Fields.EffectiveTo[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt"), NotNull, Visible(false)]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Stlyid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DayOfWeek; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StlyDatesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Stlyid;
            public DateTimeField ReportDt;
            public DateTimeField DataAsOfDt;
            public DateTimeField StlyDt;
            public StringField DayOfWeek;
            public Int32Field WeekNum;
            public BooleanField SystemIssuesInd;
            public BooleanField HolidayInd;
            public BooleanField DisasterInd;
            public DateTimeField EffectiveFrom;
            public DateTimeField EffectiveTo;
            public DateTimeField LoadDt;
        }
    }
}


namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[outbound_commission_bk_goal]")]
    [DisplayName("Commission Bk Goal"), InstanceName("Outbound Commission Bk Goal")]
    [ReadPermission(PermissionKeys.Outbound.View)]
    [ModifyPermission(PermissionKeys.Outbound.Modify)]
    [DeletePermission(PermissionKeys.Outbound.Delete)]
    [LookupScript(typeof(Lookups.OutboundAgentLocationLookup))]
    [DataAuditLog]
    [LeftJoin("c", "Outbound_Company", "c.[Company_Cd] = T0.[Company_CD]")]
    public sealed class OutboundCommissionBkGoalRow : Row, IIdRow
    {
        [DisplayName("Commission Tk"), Column("commission_tk"), Identity, Visible(false)]
        public Int32? CommissionTk
        {
            get { return Fields.CommissionTk[this]; }
            set { Fields.CommissionTk[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), CompanyEditor]
        public Int32? CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [Expression("c.[Company_nm]"), DisplayName("Company"), EditLink]
        public string CompanyName
        {
            get { return Fields.CompanyName[this]; }
        }

        [DisplayName("Commission Month"), Column("commission_month"),DisplayFormat("yyyyMM")]
        public DateTime? CommissionMonth
        {
            get { return Fields.CommissionMonth[this]; }
            set { Fields.CommissionMonth[this] = value; }
        }

        [DisplayName("Num Of Bk Goal"), Column("num_of_bk_goal")]
        public Int32? NumOfBkGoal
        {
            get { return Fields.NumOfBkGoal[this]; }
            set { Fields.NumOfBkGoal[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt")]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CommissionTk; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutboundCommissionBkGoalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CommissionTk;
            public Int32Field CompanyCd;
            public DateTimeField CommissionMonth;
            public Int32Field NumOfBkGoal;
            public DateTimeField LoadDt;
            public StringField CompanyName;

        }
    }
}


namespace DAP.PCHODS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.UarUnknownReviewer")]
    [BasedOnRow(typeof(Entities.UarUnknownReviewerRow), CheckNames = true)]
    public class UarUnknownReviewerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String EmployeeId { get; set; }
        public String UserLoginName { get; set; }
        public String UserFullName { get; set; }
        public String Firstname { get; set; }
        public String Middlename { get; set; }
        public String Lastname { get; set; }
        public String OfficeCode { get; set; }
        public String Department { get; set; }
        public String Comments { get; set; }
        public String UserGroupId { get; set; }
        public String UserGroupName { get; set; }
        public String GroupDescription { get; set; }
        public String UserGroupRights { get; set; }
        public String TaskId { get; set; }
        public String TaskName { get; set; }
        public String CriticalFuction { get; set; }
        public String Accesstype { get; set; }
        public String SupEmployeeid { get; set; }
        public String ReviewerFirstname { get; set; }
        public String ReviewerLastname { get; set; }
        public String HowFound { get; set; }
        public String AdManager { get; set; }
        public String AdActiveStatus { get; set; }
        public String HrEmpStatus { get; set; }
        public String AdDescription { get; set; }
        public String ReviewerItCompliance { get; set; }
        //public List<String> ReviewerItComplianceList { get; set; }
    }
}
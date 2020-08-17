
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.SwRequest")]
    [BasedOnRow(typeof(Entities.SwRequestRow), CheckNames = true)]
    public class SwRequestColumns
    {
        public Int32 AttributeCount { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RecordId { get; set; }
        public String ApiResponseId { get; set; }
        public String ApiResponse { get; set; }
        public String ApiResponseDepth { get; set; }
        [EditLink]
        public String ClientFirstName { get; set; }
        [EditLink]
        public String ClientLastName { get; set; }
        public String ClientEmailAddress { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs"), LookupEditor("NCLHDSAR.Assignee")]
        public String AssigneeFullName { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs"), LookupEditor("NCLHDSAR.RequestStatus")]
        public String StatusStatusDescription { get; set; }
        public DateTime RecordTimeStamp { get; set; }        
        public Int32 DaysOld { get; set; }
        public Int32 DaysLeft { get; set; }        
        public String ClientAddress { get; set; }
        public String ClientZipCode { get; set; }
        public String ClientLatitudesNumber { get; set; }
        public String ClientIsRelatedtoHousehold { get; set; }
        public String RequestType { get; set; }
        public String ClientGuestCategory { get; set; }
        public DateTime LastUpdatedDt { get; set; }
        public String UpdatedBy { get; set; }
    }
}
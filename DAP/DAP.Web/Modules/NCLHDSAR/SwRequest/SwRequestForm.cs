
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.SwRequest")]
    [BasedOnRow(typeof(Entities.SwRequestRow), CheckNames = true)]
    public class SwRequestForm
    {
        [Category("Request Info")]

        [HalfWidth(UntilNext = true)]
        public String ClientFirstName { get; set; }
        public String ClientLastName { get; set; }

        public String ClientEmailAddress { get; set; }
        [FormCssClass("line-break-sm")]
        [OneThirdWidth(UntilNext = true)]
        public String ClientAddress { get; set; }
        public String ClientZipCode { get; set; }        
        public String ClientLatitudesNumber { get; set; }
        public String ClientIsRelatedtoHousehold { get; set; }
        public String RequestType { get; set; }        
        public String ClientGuestCategory { get; set; }
        public DateTime RecordTimeStamp { get; set; }
        public DateTime LastUpdatedDt { get; set; }        
        public String UpdatedBy { get; set; }        
        public Int32 AssigneeId { get; set; }
        public Int32 StatusId { get; set; }

        //[Tab("Request Attributes")]
        public String ApiResponseId { get; set; }
        public String ApiResponse { get; set; }
        public String ApiResponseDepth { get; set; }

        //[Tab("Notes")]
        public List<object> NoteList { get; set; }
    }
}
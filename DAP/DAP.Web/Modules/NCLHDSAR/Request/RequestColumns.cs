
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.Request")]
    [BasedOnRow(typeof(Entities.RequestRow), CheckNames = true)]
    public class RequestColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Id { get; set; }
        [EditLink]
        public String FirstName { get; set; }
        [EditLink]
        public String LastName { get; set; }
       // public String FullName { get; set; }
        public DateTime CreatedDt { get; set; }
        public DateTime DeadlineDt { get; set; }
      //  public DateTime LastUpdatedDt { get; set; }
        public Int32 DaysLeft { get; set; }
        public Int32 DaysOld { get; set; }
        public Boolean ReqExtended { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(Lookups.UsersLookup))]        
        public String ReqStatus { get; set; }
        public String RequestTypeNumDesc { get; set; }
        //public String RequestType { get; set; }
        //  public String ReqStage { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(Lookups.RequestApproverLookup))]        
        public String ReqApprover { get; set; }
        public String Email { get; set; }        
        //public String ReqDetails { get; set; }
        //public String SubjectType { get; set; }       
        public String Address1 { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
        //public String NclYn { get; set; }
        //public String LatitudesNum { get; set; }
        //public String OceaniaYn { get; set; }
        //public String OceaniaMpCardNum { get; set; }
        //public String RegentYn { get; set; }
        //public String RegentMpCardNum { get; set; }
        //public String SixthmanYn { get; set; }
        //public String IdentityVerificationOptOuts { get; set; }
        //public String IdentityVerificationOtherRequests { get; set; }

       // public DateTime LoadDt { get; set; }
       // public DateTime ProcessDt { get; set; }
    }
}
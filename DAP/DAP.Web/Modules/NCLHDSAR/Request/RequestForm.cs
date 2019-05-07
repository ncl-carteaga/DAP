
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.Request")]
    [BasedOnRow(typeof(Entities.RequestRow), CheckNames = true)]
    public class RequestForm
    {
     //   [Tab("General")]
        [Category("Request")]
        //[HalfWidth]
        //public String FullName { get; set; }
        [HalfWidth]
        public String FirstName { get; set; }
        [HalfWidth]
        public String ReqStatus { get; set; }
        [HalfWidth]
        public String LastName { get; set; }
        [HalfWidth]
        public String ReqApprover { get; set; }
        [DisplayName("Request Type")]
        [HalfWidth]
        public String RequestTypeNum { get; set; }
        [HalfWidth]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss"), DisplayName("Created")]
        public DateTime CreatedDt { get; set; }
        [HalfWidth]
        public String SubjectType { get; set; }
        [HalfWidth]
       // [TextAreaEditor(Rows = 3)]
        public String RequestType { get; set; }
         [TextAreaEditor(Rows = 2)]
        public String ReqDetails { get; set; }                        
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss"), DisplayName("Deadline")]
        public DateTime DeadlineDt { get; set; }
        [HalfWidth]        
        public Boolean ReqExtended { get; set; }
        [HalfWidth, DisplayName("Last Updated")]
        public DateTime LastUpdatedDt { get; set; }


        // [Category("Request Attributes")]
        [HalfWidth]
        [Visible(false)]
        public String ReqStage { get; set; }


        //[RequestAttributesEditor]
        //public List<Entities.RequestAttributesRow> DetailList { get; set; }

     //   [Tab("Details")]
        [Category("Address"), Collapsible(Collapsed = true)]
        [HalfWidth]
        public String Address1 { get; set; }
        [HalfWidth]
        public String City { get; set; }
        [HalfWidth]
        public String Country { get; set; }
        
        [Category("Brand Identification"), Collapsible(Collapsed = true)]
        [OneThirdWidth, DisplayName("NCL (Y/N)")]    
        public String NclYn { get; set; }
        [OneThirdWidth, DisplayName("Oceania (Y/N)")]
        public String OceaniaYn { get; set; }
        [OneThirdWidth, DisplayName("Regent (Y/N)")]
        public String RegentYn { get; set; }
        [OneThirdWidth, DisplayName("Latitud Number")]
        public String LatitudesNum { get; set; }
        [OneThirdWidth, DisplayName("MP Card Number")]
        public String OceaniaMpCardNum { get; set; }
        [OneThirdWidth, DisplayName("MP Card Number")]
        public String RegentMpCardNum { get; set; }
        [OneThirdWidth, DisplayName("Sixthman (Y/N)")]
        public String SixthmanYn { get; set; }
        [OneThirdWidth]
        public String IdentityVerificationOptOuts { get; set; }
        [OneThirdWidth]
        public String IdentityVerificationOtherRequests { get; set; }
        
        [Category("Request Attributes")]
        [Visible(false)]
        public DateTime LoadDt { get; set; }
        //[OneThirdWidth]
        //public DateTime ProcessDt { get; set; }
        

    }

}
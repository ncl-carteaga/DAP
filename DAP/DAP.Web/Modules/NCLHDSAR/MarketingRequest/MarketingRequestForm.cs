
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.MarketingRequest")]
    [BasedOnRow(typeof(Entities.MarketingRequestRow), CheckNames = true)]
    public class MarketingRequestForm
    {
        public Int16 RequestTypeId { get; set; }
        public Int16 BrandId { get; set; }
        public String ContactId { get; set; }
        public Int16 ChannelId { get; set; }
        public String OptOutStatus { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Address1 { get; set; }
        public String Address2 { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String Zip { get; set; }
        public String Country { get; set; }
        public String Phone { get; set; }
        public Int16 SourceId { get; set; }
        public String EmailAddress { get; set; }
        public String Title { get; set; }
        public Boolean IsReturnedMailCd { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
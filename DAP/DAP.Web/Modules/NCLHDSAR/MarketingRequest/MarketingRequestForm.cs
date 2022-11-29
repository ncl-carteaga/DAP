
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
        [Category("General")]
         public Int16 RequestTypeId { get; set; }
         public Int16 SourceId { get; set; }
        [HalfWidth]
        public Int16 BrandId { get; set; }
        [AlignRight, HalfWidth]
        public String ContactId { get; set; }
        [HalfWidth]
        public String FirstName { get; set; }
        [AlignRight, HalfWidth]
        public String LastName { get; set; }
        [HalfWidth]
        public String Phone { get; set; }
        [AlignRight, HalfWidth]
        public String EmailAddress { get; set; }

        [Category("Opt Out")]
        [HalfWidth]
        public Int16 OptOutStatusID { get; set; }
        [AlignRight, HalfWidth]
        public Int16 ChannelId { get; set; }

        [Category("Return Mail")]
        public Boolean IsReturnedMailCd { get; set; }

        [Category("Change of Address")]
        public String Title { get; set; }
        public String Address1 { get; set; }
        public String Address2 { get; set; }
        [HalfWidth]
        public String City { get; set; }
        [AlignRight, HalfWidth]
        public String State { get; set; }
        [HalfWidth]
        public String Zip { get; set; }
        [AlignRight, HalfWidth]
        public String Country { get; set; }

        [Visible(false)]
        public String CreatedBy { get; set; }
        [Visible(false)]
        public DateTime CreatedDate { get; set; }
        [Visible(false)]
        public String ModifiedBy { get; set; }
        [Visible(false)]
        public DateTime ModifiedDate { get; set; }
    }
}
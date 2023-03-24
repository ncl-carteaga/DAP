
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CreditCardAdjSupp")]
    [BasedOnRow(typeof(Entities.CreditCardAdjSuppRow), CheckNames = true)]
    public class CreditCardAdjSuppForm
    {
        public String Office { get; set; }
        public Decimal BaseRate { get; set; }
        public Decimal ParticipationRate { get; set; }
        public Decimal CxBuffer { get; set; }
        [DisplayName("Blended Rate (Calculated)")]
        public Decimal BlendedRate { get; set; }
        [DisplayName("Proposed Rate (Calculated)")]
        public Decimal ProposedRate { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByName { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}
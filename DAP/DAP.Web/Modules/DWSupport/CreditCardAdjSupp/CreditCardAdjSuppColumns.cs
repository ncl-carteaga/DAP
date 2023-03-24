
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CreditCardAdjSupp")]
    [BasedOnRow(typeof(Entities.CreditCardAdjSuppRow), CheckNames = true)]
    public class CreditCardAdjSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CreditcardAdjId { get; set; }
        [EditLink]
        public String Office { get; set; }
        public Decimal BaseRate { get; set; }
        public Decimal ParticipationRate { get; set; }
        public Decimal BlendedRate { get; set; }
        public Decimal CxBuffer { get; set; }
        public Decimal ProposedRate { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByName { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}
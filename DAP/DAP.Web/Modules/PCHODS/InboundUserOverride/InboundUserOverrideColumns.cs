
namespace DAP.PCHODS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.InboundUserOverride")]
    [BasedOnRow(typeof(Entities.InboundUserOverrideRow), CheckNames = true)]
    public class InboundUserOverrideColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Company { get; set; }
        public String Invoice { get; set; }
        public String UserAssign { get; set; }
        public String ItDescriptionDescription { get; set; }
        public String Inbound { get; set; }
        public String Comments { get; set; }
    }
}
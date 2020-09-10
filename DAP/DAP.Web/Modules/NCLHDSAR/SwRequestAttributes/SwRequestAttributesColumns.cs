
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.SwRequestAttributes")]
    [BasedOnRow(typeof(Entities.SwRequestAttributesRow), CheckNames = true)]
    public class SwRequestAttributesColumns
    {
        [EditLink, Visible(false)]
        public String Id { get; set; }
        [EditLink, Width(200)]
        public String SystemMasterSystemDesc { get; set; }
        [Hidden]
        public Int32 SystemMasterId { get; set; }
        [Width(100)]
        public String RequestValue { get; set; }
        [Width(100)]
        public DateTime ResolvedDt { get; set; }
        [Width(100)]
        public DateTime ExtractDt { get; set; }
        
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RequestAttributeId { get; set; }
        
        public DateTime LastUpdated { get; set; }
    }
}
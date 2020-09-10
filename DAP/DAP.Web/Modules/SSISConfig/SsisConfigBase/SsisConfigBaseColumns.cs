
namespace DAP.SSISConfig.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SSISConfig.SsisConfigBase")]
    [BasedOnRow(typeof(Entities.SsisConfigBaseRow), CheckNames = true)]
    public class SsisConfigBaseColumns
    {
        [EditLink, Width(300)]
        public String ConfigurationFilter { get; set; }
        public String PackagePath { get; set; }
        public String ConfiguredValueType { get; set; }
        public String ConfiguredValue { get; set; }
        public Int16 EnvironmentEnum { get; set; }
        public String EnvironmentDesc { get; set; }
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ConfigId { get; set; }
        public String ModifiedBy { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
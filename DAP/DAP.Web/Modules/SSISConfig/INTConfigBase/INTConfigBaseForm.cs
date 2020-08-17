
namespace DAP.SSISConfig.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SSISConfig.INTConfigBase")]
    [BasedOnRow(typeof(Entities.INTConfigBaseRow), CheckNames = true)]
    public class INTConfigBaseForm
    {
        public String ConfigurationFilter { get; set; }
        public String PackagePath { get; set; }
        public String ConfiguredValueType { get; set; }
        public String ConfiguredValue { get; set; }
        public Int16 EnvironmentEnum { get; set; }
        public String EnvironmentDesc { get; set; }
        public Int32 ConfigId { get; set; }
        [Visible(false)]
        public String ModifiedBy { get; set; }
        [Visible(false)]
        public DateTime ModifiedOn { get; set; }
    }
}

namespace DAP.SSISConfig.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SSISConfig.PsInterfaceConfig")]
    [BasedOnRow(typeof(Entities.PsInterfaceConfigRow), CheckNames = true)]
    public class PsInterfaceConfigForm
    {
        public String ConfigSetting { get; set; }
        public String DataType { get; set; }
        public String ConfigValue { get; set; }

        public String ConfigValueDate { get; set; }
    }
}
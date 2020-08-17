
namespace DAP.SSISConfig.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SSISConfig.PsInterfaceConfig")]
    [BasedOnRow(typeof(Entities.PsInterfaceConfigRow), CheckNames = true)]
    public class PsInterfaceConfigColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String SourceSystem { get; set; }
        public String ConfigSetting { get; set; }
        public String DataType { get; set; }
        public String ConfigValue { get; set; }


        public DateTime ModifiedDate { get; set; }
        public String ModifiedBy { get; set; }
    }
}
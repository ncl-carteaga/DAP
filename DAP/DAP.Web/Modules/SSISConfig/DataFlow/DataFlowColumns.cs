﻿
namespace DAP.SSISConfig.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SSISConfig.DataFlow")]
    [BasedOnRow(typeof(Entities.DataFlowRow), CheckNames = true)]
    public class DataFlowColumns
    {
        [EditLink, AlignRight, Visible(false)]
        public Int32 Key { get; set; }
        [EditLink]
        public String Source { get; set; }
        public String Name { get; set; }
        public String ProcessYn { get; set; }
        public String Target { get; set; }
        public String Description { get; set; }
        public String SourceDesc { get; set; }
        public String TargetDesc { get; set; }
        public String Package { get; set; }
        public Int32 Status { get; set; }
        public DateTime Lset { get; set; }
        public DateTime Cet { get; set; }
    }
}
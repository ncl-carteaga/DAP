﻿
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.UarSrDirAboveList")]
    [BasedOnRow(typeof(Entities.UarSrDirAboveListRow), CheckNames = true)]
    public class UarSrDirAboveListForm
    {
        public String Jobtitle { get; set; }
        public Boolean IsSrDirAbove { get; set; }
        [Visible(false)]
        public DateTime DateEffective { get; set; }
        [Visible(false)]
        public DateTime DateExpires { get; set; }
        [Visible(false)]
        public String RowChangeReason { get; set; }
    }
}
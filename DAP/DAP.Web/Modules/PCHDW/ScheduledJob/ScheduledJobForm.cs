
namespace DAP.PCHDW.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHDW.ScheduledJob")]
    [BasedOnRow(typeof(Entities.ScheduledJobRow), CheckNames = true)]
    public class ScheduledJobForm
    {
        public String JobName { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String JobDescription { get; set; }
    }
}
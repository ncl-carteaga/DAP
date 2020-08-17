
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.Assignee")]
    [BasedOnRow(typeof(Entities.AssigneeRow), CheckNames = true)]
    public class AssigneeForm
    {
        public String FullName { get; set; }
        public Boolean IsActive { get; set; }
    }
}
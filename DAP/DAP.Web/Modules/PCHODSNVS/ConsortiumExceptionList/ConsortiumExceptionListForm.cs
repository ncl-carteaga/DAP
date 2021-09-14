
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.ConsortiumExceptionList")]
    [BasedOnRow(typeof(Entities.ConsortiumExceptionListRow), CheckNames = true)]
    public class ConsortiumExceptionListForm
    {
        public String CompanyCd { get; set; }
        public String NewItemType { get; set; }
        public String NewItemName { get; set; }
        public String ItemType { get; set; }
        public String ItemCd { get; set; }
        public String ItemName { get; set; }
        public Boolean ExcludeInd { get; set; }
        public Boolean CombineInd { get; set; }
        public DateTime LoadDt { get; set; }
    }
}
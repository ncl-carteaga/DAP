
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CategoryMasterSupp")]
    [BasedOnRow(typeof(Entities.CategoryMasterSuppRow), CheckNames = true)]
    public class CategoryMasterSuppForm
    {
        public String ShipCd { get; set; }
        public DateTime SailFromDat { get; set; }
        public DateTime SailToDat { get; set; }
        public String CategoryCd { get; set; }
        public String MetaCategoryCd { get; set; }
        public Int32 FleetCategoryPriorityNbr { get; set; }
        public String PseudoCategoryCd { get; set; }
        public String MandatoryAssignmentCd { get; set; }
        public String NewMetaCategoryCd { get; set; }
        public String RmsPseudoCategoryCd { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}
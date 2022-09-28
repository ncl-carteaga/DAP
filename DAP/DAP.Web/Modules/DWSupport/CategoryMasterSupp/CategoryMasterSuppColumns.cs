
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CategoryMasterSupp")]
    [BasedOnRow(typeof(Entities.CategoryMasterSuppRow), CheckNames = true)]
    public class CategoryMasterSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryMasterSurKey { get; set; }
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
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}
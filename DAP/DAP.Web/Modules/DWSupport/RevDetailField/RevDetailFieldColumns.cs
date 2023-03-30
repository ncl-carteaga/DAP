
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.RevDetailField")]
    [BasedOnRow(typeof(Entities.RevDetailFieldRow), CheckNames = true)]
    public class RevDetailFieldColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RevDetailFieldId { get; set; }
        [EditLink]
        public String RevdetailFieldNm { get; set; }
        public String RevdetailSegmentFieldNm { get; set; }
        public String RevdetailFieldCheck { get; set; }
        public String OdsFieldNm { get; set; }
        public Int32 CubeInsInd { get; set; }
        public DateTime LoadDt { get; set; }
    }
}
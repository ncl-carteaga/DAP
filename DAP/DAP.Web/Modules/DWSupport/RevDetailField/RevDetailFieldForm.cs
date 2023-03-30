
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.RevDetailField")]
    [BasedOnRow(typeof(Entities.RevDetailFieldRow), CheckNames = true)]
    public class RevDetailFieldForm
    {
        public String RevdetailFieldNm { get; set; }
        public String RevdetailSegmentFieldNm { get; set; }
        public String RevdetailFieldCheck { get; set; }
        public String OdsFieldNm { get; set; }
        public Int32 CubeInsInd { get; set; }
        public DateTime LoadDt { get; set; }
    }
}
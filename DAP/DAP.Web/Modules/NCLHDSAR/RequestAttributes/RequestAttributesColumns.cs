
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.RequestAttributes")]
    [BasedOnRow(typeof(Entities.RequestAttributesRow), CheckNames = true)]
    public class RequestAttributesColumns
    {
        //[EditLink]
        //public Int32 Id { get; set; }        
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 RequestAttributeId { get; set; }
        [EditLink, Width(200)]
        public String SystemMasterSystemDesc { get; set; }
        [Hidden]
        public Int32? SystemMasterId { get; set; }
        [Width(100)]
        public String RequestValue { get; set; }
        [Width(100)]
        public DateTime ResolvedDt { get; set; }
        [Width(100)]        
        public DateTime ExtractDt { get; set; }
        public String FirstNm { get; set; }
        public String MiddleNm { get; set; }
        public String LastNm { get; set; }


        public String Addr1 { get; set; }

        public String Addr2 { get; set; }

        public String CityNm { get; set; }

        public String StateNm { get; set; }

        public String PostalCd { get; set; }

        public String CountryCd { get; set; }

        public String Email1 { get; set; }
        
        //public String OldAddr1 { get; set; }

        //public String OldAddr2 { get; set; }

        //public String OldCityNm { get; set; }

        //public String OldStateNm { get; set; }

        //public String OldPostalCd { get; set; }

        //public String OldCountryCd { get; set; }

        //public String OldEmail { get; set; }

    }
}
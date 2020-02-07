
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.RequestAttributes")]
    [BasedOnRow(typeof(Entities.RequestAttributesRow), CheckNames = true)]
    public class RequestAttributesForm
    {
        [Tab("General")]        
        public String Id { get; set; }
        //public Int32 SystemMasterId { get; set; }
        public String SystemMasterId { get; set; }
        public String RequestValue { get; set; }
        public DateTime ResolvedDt { get; set; }
        public DateTime ExtractDt { get; set; }

        [Tab("New Address")]
        [OneThirdWidth]
        public String FirstNm { get; set; }
        [OneThirdWidth]
        public String MiddleNm { get; set; }
        [OneThirdWidth]
        public String LastNm { get; set; }
        public String Addr1 { get; set; }

        public String Addr2 { get; set; }

        public String CityNm { get; set; }

        public String StateNm { get; set; }

        public String PostalCd { get; set; }

        public String CountryCd { get; set; }

        public String Email1 { get; set; }
        [Tab("Old Address")]
        [OneThirdWidth]
        public String OldFirstNm { get; set; }
        [OneThirdWidth]
        public String OldMiddleNm { get; set; }
        [OneThirdWidth]
        public String OldLastNm { get; set; }
        public String OldAddr1 { get; set; }

        public String OldAddr2 { get; set; }

        public String OldCityNm { get; set; }

        public String OldStateNm { get; set; }

        public String OldPostalCd { get; set; }

        public String OldCountryCd { get; set; }

        public String OldEmail { get; set; }

    }
}
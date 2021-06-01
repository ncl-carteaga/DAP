
namespace DAP.SSISConfig.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SSISConfig.NclhShip")]
    [BasedOnRow(typeof(Entities.NclhShipRow), CheckNames = true)]
    public class NclhShipColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ShipId { get; set; }
        [EditLink]
        public String ShipAbbreviation { get; set; }
        public String ShipFullName { get; set; }
        public String CompanyCd { get; set; }
        public String DepartmentCd { get; set; }
        public String LocationCd { get; set; }
        public Boolean IsActive { get; set; }
        public Int32 ShipTk { get; set; }
        public Boolean HasMerged { get; set; }
    }
}
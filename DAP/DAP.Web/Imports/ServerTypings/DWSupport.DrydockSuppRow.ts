namespace DAP.DWSupport {
    export interface DrydockSuppRow {
        DrydockId?: number;
        ShipCd?: string;
        StartDate?: string;
        EndDate?: string;
        NumberOfDays?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        SailYear?: number;
        Status?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace DrydockSuppRow {
        export const idProperty = 'DrydockId';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.DrydockSupp';

        export declare const enum Fields {
            DrydockId = "DrydockId",
            ShipCd = "ShipCd",
            StartDate = "StartDate",
            EndDate = "EndDate",
            NumberOfDays = "NumberOfDays",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            SailYear = "SailYear",
            Status = "Status",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}


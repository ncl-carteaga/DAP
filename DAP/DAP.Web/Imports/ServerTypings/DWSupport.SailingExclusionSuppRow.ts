namespace DAP.DWSupport {
    export interface SailingExclusionSuppRow {
        SailingExclusionId?: number;
        ShipCd?: string;
        MainSailId?: number;
        MainSailDt?: string;
        MainVoyageCd?: string;
        FromDataAsOfDt?: string;
        ToDataAsOfDt?: string;
        CommentTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace SailingExclusionSuppRow {
        export const idProperty = 'SailingExclusionId';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.SailingExclusionSupp';

        export declare const enum Fields {
            SailingExclusionId = "SailingExclusionId",
            ShipCd = "ShipCd",
            MainSailId = "MainSailId",
            MainSailDt = "MainSailDt",
            MainVoyageCd = "MainVoyageCd",
            FromDataAsOfDt = "FromDataAsOfDt",
            ToDataAsOfDt = "ToDataAsOfDt",
            CommentTxt = "CommentTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}


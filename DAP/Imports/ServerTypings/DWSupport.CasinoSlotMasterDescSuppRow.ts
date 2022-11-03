namespace DAP.DWSupport {
    export interface CasinoSlotMasterDescSuppRow {
        SlotMasterDescSurKey?: number;
        SlotMasterDesc?: string;
        CommentTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ManufacturerNam?: string;
        ModifiedTs?: string;
    }

    export namespace CasinoSlotMasterDescSuppRow {
        export const idProperty = 'SlotMasterDescSurKey';
        export const nameProperty = 'SlotMasterDesc';
        export const localTextPrefix = 'DWSupport.CasinoSlotMasterDescSupp';

        export declare const enum Fields {
            SlotMasterDescSurKey = "SlotMasterDescSurKey",
            SlotMasterDesc = "SlotMasterDesc",
            CommentTxt = "CommentTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ManufacturerNam = "ManufacturerNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}


namespace DAP.NCLHODSSPENDVIS {
    export interface AmoslevelRow {
        IdNum?: number;
        AccountId?: string;
        Descr?: string;
        FlexDim1Name?: string;
        FlexDim2Name?: string;
        FlexDim3Name?: string;
        FlexDim4Name?: string;
        ModifiedDate?: string;
        ModifiedBy?: string;
    }

    export namespace AmoslevelRow {
        export const idProperty = 'IdNum';
        export const nameProperty = 'AccountId';
        export const localTextPrefix = 'NCLHODSSPENDVIS.Amoslevel';

        export declare const enum Fields {
            IdNum = "IdNum",
            AccountId = "AccountId",
            Descr = "Descr",
            FlexDim1Name = "FlexDim1Name",
            FlexDim2Name = "FlexDim2Name",
            FlexDim3Name = "FlexDim3Name",
            FlexDim4Name = "FlexDim4Name",
            ModifiedDate = "ModifiedDate",
            ModifiedBy = "ModifiedBy"
        }
    }
}


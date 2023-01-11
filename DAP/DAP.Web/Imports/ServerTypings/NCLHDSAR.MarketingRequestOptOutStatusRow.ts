namespace DAP.NCLHDSAR {
    export interface MarketingRequestOptOutStatusRow {
        Id?: number;
        Description?: string;
    }

    export namespace MarketingRequestOptOutStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'DWSupport.MarketingRequestOptOutStatus';

        export declare const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}


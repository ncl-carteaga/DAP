namespace DAP.NCLHDSAR {
    export interface MarketingRequestTypesRow {
        Id?: number;
        Description?: string;
    }

    export namespace MarketingRequestTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'DWSupport.MarketingRequestTypes';

        export declare const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}


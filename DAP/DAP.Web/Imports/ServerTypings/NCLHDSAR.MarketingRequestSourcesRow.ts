namespace DAP.NCLHDSAR {
    export interface MarketingRequestSourcesRow {
        Id?: number;
        Description?: string;
    }

    export namespace MarketingRequestSourcesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'DWSupport.MarketingRequestSources';

        export declare const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}


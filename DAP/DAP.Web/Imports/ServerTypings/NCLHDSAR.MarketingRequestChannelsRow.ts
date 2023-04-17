namespace DAP.NCLHDSAR {
    export interface MarketingRequestChannelsRow {
        Id?: number;
        Description?: string;
    }

    export namespace MarketingRequestChannelsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'DWSupport.MarketingRequestChannels';

        export declare const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}


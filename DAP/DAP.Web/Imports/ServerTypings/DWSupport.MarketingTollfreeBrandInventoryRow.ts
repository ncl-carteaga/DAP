
namespace DAP.DWSupport {
    export interface MarketingTollfreeBrandInventoryRow {
        Id?: number;
        BrandId?: number;
        Location?: string;
        TollFreeNumber?: string;
        Description?: string;
        Vdn?: string;
        ModifiedBy?: string;
        CreatedBy?: string;
        ModifiedTs?: string;
        CreatedTs?: string;
    }

    export namespace MarketingTollfreeBrandInventoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Location';
        export const localTextPrefix = 'DWSupport.MarketingTollfreeBrandInventory';

        export namespace Fields {
            export declare const Id;
            export declare const BrandId;
            export declare const Location;
            export declare const TollFreeNumber;
            export declare const Description;
            export declare const Vdn;
            export declare const ModifiedBy;
            export declare const CreatedBy;
            export declare const ModifiedTs;
            export declare const CreatedTs;
        }

        [
            'Id',
            'BrandId',
            'Location',
            'TollFreeNumber',
            'Description',
            'Vdn',
            'ModifiedBy',
            'CreatedBy',
            'ModifiedTs',
            'CreatedTs'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
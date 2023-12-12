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

        export declare const enum Fields {
            Id = "Id",
            BrandId = "BrandId",
            Location = "Location",
            TollFreeNumber = "TollFreeNumber",
            Description = "Description",
            Vdn = "Vdn",
            ModifiedBy = "ModifiedBy",
            CreatedBy = "CreatedBy",
            ModifiedTs = "ModifiedTs",
            CreatedTs = "CreatedTs"
        }
    }
}


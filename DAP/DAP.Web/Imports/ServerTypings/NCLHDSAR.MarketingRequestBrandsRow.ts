namespace DAP.NCLHDSAR {
    export interface MarketingRequestBrandsRow {
        Id?: number;
        Description?: string;
    }

    export namespace MarketingRequestBrandsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'NCLHDSAR.MarketingRequestBrands';

        export declare const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}


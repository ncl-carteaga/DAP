namespace DAP.DWSupport {
    export interface ShipRow {
        ShipCode?: string;
        ShipName?: string;
        Brand?: string;
        IsActive?: boolean;
    }

    export namespace ShipRow {
        export const idProperty = 'ShipCode';
        export const nameProperty = 'ShipCode';
        export const localTextPrefix = 'DWSupport.Ship';
        export const lookupKey = 'DWSupport.ShipCode';

        export function getLookup(): Q.Lookup<ShipRow> {
            return Q.getLookup<ShipRow>('DWSupport.ShipCode');
        }

        export declare const enum Fields {
            ShipCode = "ShipCode",
            ShipName = "ShipName",
            Brand = "Brand",
            IsActive = "IsActive"
        }
    }
}


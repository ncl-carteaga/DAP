
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

        export namespace Fields {
            export declare const ShipCode;
            export declare const ShipName;
            export declare const Brand;
            export declare const IsActive;
        }

        [
            'ShipCode',
            'ShipName',
            'Brand',
            'IsActive'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
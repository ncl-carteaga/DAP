
namespace DAP.SSISConfig {
    export interface NclhShipRow {
        ShipId?: number;
        ShipAbbreviation?: string;
        ShipFullName?: string;
        CompanyCd?: string;
        DepartmentCd?: string;
        LocationCd?: string;
        IsActive?: boolean;
        ShipTk?: number;
        HasMerged?: boolean;
    }

    export namespace NclhShipRow {
        export const idProperty = 'ShipId';
        export const nameProperty = 'ShipAbbreviation';
        export const localTextPrefix = 'SSISConfig.NclhShip';

        export namespace Fields {
            export declare const ShipId;
            export declare const ShipAbbreviation;
            export declare const ShipFullName;
            export declare const CompanyCd;
            export declare const DepartmentCd;
            export declare const LocationCd;
            export declare const IsActive;
            export declare const ShipTk;
            export declare const HasMerged;
        }

        [
            'ShipId',
            'ShipAbbreviation',
            'ShipFullName',
            'CompanyCd',
            'DepartmentCd',
            'LocationCd',
            'IsActive',
            'ShipTk',
            'HasMerged'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
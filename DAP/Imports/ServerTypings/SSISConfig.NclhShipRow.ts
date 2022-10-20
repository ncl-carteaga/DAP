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

        export declare const enum Fields {
            ShipId = "ShipId",
            ShipAbbreviation = "ShipAbbreviation",
            ShipFullName = "ShipFullName",
            CompanyCd = "CompanyCd",
            DepartmentCd = "DepartmentCd",
            LocationCd = "LocationCd",
            IsActive = "IsActive",
            ShipTk = "ShipTk",
            HasMerged = "HasMerged"
        }
    }
}


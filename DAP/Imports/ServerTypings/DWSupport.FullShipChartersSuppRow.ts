namespace DAP.DWSupport {
    export interface FullShipChartersSuppRow {
        ShipCharterSurKey?: number;
        ShipCd?: string;
        SailDat?: string;
        SailId?: number;
        SailDayQty?: number;
        VoyageCd?: string;
        AgencyId?: number;
        CharterDesc?: string;
        GuestQty?: number;
        CharterRevAmt?: number;
        CharterCommAmt?: number;
        RmContractAdjNtrNoSvcAmt?: string;
        OfficeCd?: string;
        ContractDat?: string;
        RmFinalGuestQty?: number;
        RmFinalAdjNtrAmt?: number;
        RmFinalAdjNtrNoSvcAmt?: number;
        DistrictNbr?: string;
        ContractPriceAmt?: number;
        DepositDat?: string;
        RmNcfAmt?: number;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace FullShipChartersSuppRow {
        export const idProperty = 'ShipCharterSurKey';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.FullShipChartersSupp';

        export declare const enum Fields {
            ShipCharterSurKey = "ShipCharterSurKey",
            ShipCd = "ShipCd",
            SailDat = "SailDat",
            SailId = "SailId",
            SailDayQty = "SailDayQty",
            VoyageCd = "VoyageCd",
            AgencyId = "AgencyId",
            CharterDesc = "CharterDesc",
            GuestQty = "GuestQty",
            CharterRevAmt = "CharterRevAmt",
            CharterCommAmt = "CharterCommAmt",
            RmContractAdjNtrNoSvcAmt = "RmContractAdjNtrNoSvcAmt",
            OfficeCd = "OfficeCd",
            ContractDat = "ContractDat",
            RmFinalGuestQty = "RmFinalGuestQty",
            RmFinalAdjNtrAmt = "RmFinalAdjNtrAmt",
            RmFinalAdjNtrNoSvcAmt = "RmFinalAdjNtrNoSvcAmt",
            DistrictNbr = "DistrictNbr",
            ContractPriceAmt = "ContractPriceAmt",
            DepositDat = "DepositDat",
            RmNcfAmt = "RmNcfAmt",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}


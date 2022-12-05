namespace DAP.PCHODSNVS {
    export interface TransferEstimateOciAmtRow {
        SegmentMarketName?: string;
        CruiseSegmentCd?: string;
        ShipCd?: string;
        TransferCostPerPax?: number;
        LoadDt?: string;
        TransferId?: number;
    }

    export namespace TransferEstimateOciAmtRow {
        export const idProperty = 'TransferId';
        export const nameProperty = 'SegmentMarketName';
        export const localTextPrefix = 'PCHODSNVS.TransferEstimateOciAmt';

        export declare const enum Fields {
            SegmentMarketName = "SegmentMarketName",
            CruiseSegmentCd = "CruiseSegmentCd",
            ShipCd = "ShipCd",
            TransferCostPerPax = "TransferCostPerPax",
            LoadDt = "LoadDt",
            TransferId = "TransferId"
        }
    }
}


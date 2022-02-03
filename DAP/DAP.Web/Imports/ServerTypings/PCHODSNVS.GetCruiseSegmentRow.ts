namespace DAP.PCHODSNVS {
    export interface GetCruiseSegmentRow {
        CruiseSegmentCd?: string;
        ShipCd?: string;
        MarketName?: string;
    }

    export namespace GetCruiseSegmentRow {
        export const idProperty = 'CruiseSegmentCd';
        export const nameProperty = 'CruiseSegmentCd';
        export const localTextPrefix = 'PCHODSNVS.GetCruiseSegment';
        export const lookupKey = 'PCHODSNVS.GetSegment';

        export function getLookup(): Q.Lookup<GetCruiseSegmentRow> {
            return Q.getLookup<GetCruiseSegmentRow>('PCHODSNVS.GetSegment');
        }

        export declare const enum Fields {
            CruiseSegmentCd = "CruiseSegmentCd",
            ShipCd = "ShipCd",
            MarketName = "MarketName"
        }
    }
}


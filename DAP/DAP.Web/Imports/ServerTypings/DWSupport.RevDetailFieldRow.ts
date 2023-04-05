namespace DAP.DWSupport {
    export interface RevDetailFieldRow {
        RevDetailFieldId?: number;
        RevdetailFieldNm?: string;
        RevdetailSegmentFieldNm?: string;
        RevdetailFieldCheck?: string;
        OdsFieldNm?: string;
        CubeInsInd?: number;
        LoadDt?: string;
    }

    export namespace RevDetailFieldRow {
        export const idProperty = 'RevDetailFieldId';
        export const nameProperty = 'RevdetailFieldNm';
        export const localTextPrefix = 'DWSupport.RevDetailField';

        export declare const enum Fields {
            RevDetailFieldId = "RevDetailFieldId",
            RevdetailFieldNm = "RevdetailFieldNm",
            RevdetailSegmentFieldNm = "RevdetailSegmentFieldNm",
            RevdetailFieldCheck = "RevdetailFieldCheck",
            OdsFieldNm = "OdsFieldNm",
            CubeInsInd = "CubeInsInd",
            LoadDt = "LoadDt"
        }
    }
}


namespace DAP.PCHODS {
    export interface OutboundMonthlyRptArchiveOverrideRow {
        OutboundMonthlyRptArchiveId?: number;
        NclId?: string;
        OutboundMonth?: string;
        OriginalUserName?: string;
        OciPrevMonthDomestic?: number;
        SscPrevMonthDomestic?: number;
        OciPrevMonthInternational?: number;
        SscPrevMonthInternational?: number;
        OciPrevMonthRevDomestic?: number;
        SscPrevMonthRevDomestic?: number;
        OciPrevMonthRevInternational?: number;
        SscPrevMonthRevInternational?: number;
        OciAdjustdomestic?: number;
        SscAdjustdomestic?: number;
    }

    export namespace OutboundMonthlyRptArchiveOverrideRow {
        export const idProperty = 'OutboundMonthlyRptArchiveId';
        export const nameProperty = 'NclId';
        export const localTextPrefix = 'PCHODS.OutboundMonthlyRptArchiveOverride';

        export declare const enum Fields {
            OutboundMonthlyRptArchiveId = "OutboundMonthlyRptArchiveId",
            NclId = "NclId",
            OutboundMonth = "OutboundMonth",
            OriginalUserName = "OriginalUserName",
            OciPrevMonthDomestic = "OciPrevMonthDomestic",
            SscPrevMonthDomestic = "SscPrevMonthDomestic",
            OciPrevMonthInternational = "OciPrevMonthInternational",
            SscPrevMonthInternational = "SscPrevMonthInternational",
            OciPrevMonthRevDomestic = "OciPrevMonthRevDomestic",
            SscPrevMonthRevDomestic = "SscPrevMonthRevDomestic",
            OciPrevMonthRevInternational = "OciPrevMonthRevInternational",
            SscPrevMonthRevInternational = "SscPrevMonthRevInternational",
            OciAdjustdomestic = "OciAdjustdomestic",
            SscAdjustdomestic = "SscAdjustdomestic"
        }
    }
}


namespace DAP.PCHODS {
    export interface VwOutboundMonthlyRptArchiveOverrideRow {
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

    export namespace VwOutboundMonthlyRptArchiveOverrideRow {
        export const idProperty = 'OutboundMonthlyRptArchiveId';
        export const nameProperty = 'NclId';
        export const localTextPrefix = 'PCHODS.VwOutboundMonthlyRptArchiveOverride';

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


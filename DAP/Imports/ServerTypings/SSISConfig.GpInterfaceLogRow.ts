namespace DAP.SSISConfig {
    export interface GpInterfaceLogRow {
        CompanyCd?: string;
        CruiseSegmentCd?: string;
        ExpRevType?: string;
        GpInterfaceInd?: string;
        GpInterfacedDt?: string;
        JournalNum?: number;
        InterfaceLogId?: number;
    }

    export namespace GpInterfaceLogRow {
        export const idProperty = 'InterfaceLogId';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'SSISConfig.GpInterfaceLog';

        export declare const enum Fields {
            CompanyCd = "CompanyCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            ExpRevType = "ExpRevType",
            GpInterfaceInd = "GpInterfaceInd",
            GpInterfacedDt = "GpInterfacedDt",
            JournalNum = "JournalNum",
            InterfaceLogId = "InterfaceLogId"
        }
    }
}


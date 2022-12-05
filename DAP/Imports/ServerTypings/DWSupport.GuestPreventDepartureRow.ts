namespace DAP.DWSupport {
    export interface GuestPreventDepartureRow {
        GuestPreventDepartureKey?: number;
        GuestFirstNam?: string;
        GuestLastNam?: string;
        NameTypeDesc?: string;
        FromReportNbr?: number;
        InternalExternalCd?: string;
        TypeCd?: string;
        SirsNbrTxt?: string;
        IncidentReportedDat?: string;
        BoardingDenialReasonDesc?: string;
        CasinoIncidentNbrTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace GuestPreventDepartureRow {
        export const idProperty = 'GuestPreventDepartureKey';
        export const nameProperty = 'GuestFirstNam';
        export const localTextPrefix = 'DWSupport.GuestPreventDeparture';

        export declare const enum Fields {
            GuestPreventDepartureKey = "GuestPreventDepartureKey",
            GuestFirstNam = "GuestFirstNam",
            GuestLastNam = "GuestLastNam",
            NameTypeDesc = "NameTypeDesc",
            FromReportNbr = "FromReportNbr",
            InternalExternalCd = "InternalExternalCd",
            TypeCd = "TypeCd",
            SirsNbrTxt = "SirsNbrTxt",
            IncidentReportedDat = "IncidentReportedDat",
            BoardingDenialReasonDesc = "BoardingDenialReasonDesc",
            CasinoIncidentNbrTxt = "CasinoIncidentNbrTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}


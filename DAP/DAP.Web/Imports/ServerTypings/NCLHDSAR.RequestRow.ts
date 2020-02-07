namespace DAP.NCLHDSAR {
    export interface RequestRow {
        Id?: string;
        FirstName?: string;
        LastName?: string;
        FullName?: string;
        Email?: string;
        CreatedDt?: string;
        DeadlineDt?: string;
        LastUpdatedDt?: string;
        ReqExtended?: boolean;
        ReqStage?: string;
        ReqApprover?: string;
        ReqDetails?: string;
        SubjectType?: string;
        RequestType?: string;
        Address1?: string;
        City?: string;
        Country?: string;
        NclYn?: string;
        LatitudesNum?: string;
        OceaniaYn?: string;
        OceaniaMpCardNum?: string;
        RegentYn?: string;
        RegentMpCardNum?: string;
        SixthmanYn?: string;
        IdentityVerificationOptOuts?: string;
        IdentityVerificationOtherRequests?: string;
        RequestTypeNum?: number;
        ReqStatus?: string;
        LoadDt?: string;
        ProcessDt?: string;
        RequestTypeNumDesc?: string;
        DaysLeft?: number;
        DaysOld?: number;
        AttrCount?: number;
    }

    export namespace RequestRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'NCLHDSAR.Request';
        export const lookupKey = 'NCLHDSAR.RequestType';

        export function getLookup(): Q.Lookup<RequestRow> {
            return Q.getLookup<RequestRow>('NCLHDSAR.RequestType');
        }

        export declare const enum Fields {
            Id = "Id",
            FirstName = "FirstName",
            LastName = "LastName",
            FullName = "FullName",
            Email = "Email",
            CreatedDt = "CreatedDt",
            DeadlineDt = "DeadlineDt",
            LastUpdatedDt = "LastUpdatedDt",
            ReqExtended = "ReqExtended",
            ReqStage = "ReqStage",
            ReqApprover = "ReqApprover",
            ReqDetails = "ReqDetails",
            SubjectType = "SubjectType",
            RequestType = "RequestType",
            Address1 = "Address1",
            City = "City",
            Country = "Country",
            NclYn = "NclYn",
            LatitudesNum = "LatitudesNum",
            OceaniaYn = "OceaniaYn",
            OceaniaMpCardNum = "OceaniaMpCardNum",
            RegentYn = "RegentYn",
            RegentMpCardNum = "RegentMpCardNum",
            SixthmanYn = "SixthmanYn",
            IdentityVerificationOptOuts = "IdentityVerificationOptOuts",
            IdentityVerificationOtherRequests = "IdentityVerificationOtherRequests",
            RequestTypeNum = "RequestTypeNum",
            ReqStatus = "ReqStatus",
            LoadDt = "LoadDt",
            ProcessDt = "ProcessDt",
            RequestTypeNumDesc = "RequestTypeNumDesc",
            DaysLeft = "DaysLeft",
            DaysOld = "DaysOld",
            AttrCount = "AttrCount"
        }
    }
}


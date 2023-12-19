namespace DAP.NCLHDSAR {
    export interface RequestAttributesRow {
        RequestAttributeId?: number;
        Id?: string;
        SystemMasterId?: number;
        RequestValue?: string;
        ResolvedDt?: string;
        ExtractDt?: string;
        FirstNm?: string;
        MiddleNm?: string;
        LastNm?: string;
        PhoneNumber?: string;
        Addr1?: string;
        Addr2?: string;
        CityNm?: string;
        StateNm?: string;
        PostalCd?: string;
        CountryCd?: string;
        Email1?: string;
        OldAddr1?: string;
        OldAddr2?: string;
        OldCityNm?: string;
        OldStateNm?: string;
        OldPostalCd?: string;
        OldCountryCd?: string;
        OldEmail?: string;
        OldFirstNm?: string;
        OldMiddleNm?: string;
        OldLastNm?: string;
        SystemMasterSystemName?: string;
        SystemMasterSystemTable?: string;
        SystemMasterSystemDesc?: string;
        SystemMasterSystemActiveYn?: string;
        ModifiedDate?: string;
        ModifiedBy?: string;
    }

    export namespace RequestAttributesRow {
        export const idProperty = 'RequestAttributeId';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'NCLHDSAR.RequestAttributes';
        export const lookupKey = 'NCLHDSAR.SystemMaster';

        export function getLookup(): Q.Lookup<RequestAttributesRow> {
            return Q.getLookup<RequestAttributesRow>('NCLHDSAR.SystemMaster');
        }

        export declare const enum Fields {
            RequestAttributeId = "RequestAttributeId",
            Id = "Id",
            SystemMasterId = "SystemMasterId",
            RequestValue = "RequestValue",
            ResolvedDt = "ResolvedDt",
            ExtractDt = "ExtractDt",
            FirstNm = "FirstNm",
            MiddleNm = "MiddleNm",
            LastNm = "LastNm",
            PhoneNumber = "PhoneNumber",
            Addr1 = "Addr1",
            Addr2 = "Addr2",
            CityNm = "CityNm",
            StateNm = "StateNm",
            PostalCd = "PostalCd",
            CountryCd = "CountryCd",
            Email1 = "Email1",
            OldAddr1 = "OldAddr1",
            OldAddr2 = "OldAddr2",
            OldCityNm = "OldCityNm",
            OldStateNm = "OldStateNm",
            OldPostalCd = "OldPostalCd",
            OldCountryCd = "OldCountryCd",
            OldEmail = "OldEmail",
            OldFirstNm = "OldFirstNm",
            OldMiddleNm = "OldMiddleNm",
            OldLastNm = "OldLastNm",
            SystemMasterSystemName = "SystemMasterSystemName",
            SystemMasterSystemTable = "SystemMasterSystemTable",
            SystemMasterSystemDesc = "SystemMasterSystemDesc",
            SystemMasterSystemActiveYn = "SystemMasterSystemActiveYn",
            ModifiedDate = "ModifiedDate",
            ModifiedBy = "ModifiedBy"
        }
    }
}


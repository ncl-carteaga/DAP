namespace DAP.NCLHDSAR {
    export interface RequestAttributesForm {
        Id: Serenity.StringEditor;
        SystemMasterId: SystemMasterEditor;
        RequestValue: Serenity.StringEditor;
        ResolvedDt: Serenity.DateEditor;
        ExtractDt: Serenity.DateEditor;
        FirstNm: Serenity.StringEditor;
        MiddleNm: Serenity.StringEditor;
        LastNm: Serenity.StringEditor;
        Addr1: Serenity.StringEditor;
        Addr2: Serenity.StringEditor;
        CityNm: Serenity.StringEditor;
        StateNm: Serenity.StringEditor;
        PostalCd: Serenity.StringEditor;
        CountryCd: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        OldFirstNm: Serenity.StringEditor;
        OldMiddleNm: Serenity.StringEditor;
        OldLastNm: Serenity.StringEditor;
        OldAddr1: Serenity.StringEditor;
        OldAddr2: Serenity.StringEditor;
        OldCityNm: Serenity.StringEditor;
        OldStateNm: Serenity.StringEditor;
        OldPostalCd: Serenity.StringEditor;
        OldCountryCd: Serenity.StringEditor;
        OldEmail: Serenity.StringEditor;
    }

    export class RequestAttributesForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.RequestAttributes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RequestAttributesForm.init)  {
                RequestAttributesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = SystemMasterEditor;
                var w2 = s.DateEditor;

                Q.initFormType(RequestAttributesForm, [
                    'Id', w0,
                    'SystemMasterId', w1,
                    'RequestValue', w0,
                    'ResolvedDt', w2,
                    'ExtractDt', w2,
                    'FirstNm', w0,
                    'MiddleNm', w0,
                    'LastNm', w0,
                    'Addr1', w0,
                    'Addr2', w0,
                    'CityNm', w0,
                    'StateNm', w0,
                    'PostalCd', w0,
                    'CountryCd', w0,
                    'Email1', w0,
                    'OldFirstNm', w0,
                    'OldMiddleNm', w0,
                    'OldLastNm', w0,
                    'OldAddr1', w0,
                    'OldAddr2', w0,
                    'OldCityNm', w0,
                    'OldStateNm', w0,
                    'OldPostalCd', w0,
                    'OldCountryCd', w0,
                    'OldEmail', w0
                ]);
            }
        }
    }
}


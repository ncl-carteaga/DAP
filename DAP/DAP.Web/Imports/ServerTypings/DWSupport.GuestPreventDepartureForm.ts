namespace DAP.DWSupport {
    export interface GuestPreventDepartureForm {
        GuestFirstNam: Serenity.StringEditor;
        GuestLastNam: Serenity.StringEditor;
        NameTypeDesc: Serenity.StringEditor;
        FromReportNbr: Serenity.IntegerEditor;
        InternalExternalCd: Serenity.StringEditor;
        TypeCd: Serenity.LookupEditor;
        SirsNbrTxt: Serenity.StringEditor;
        IncidentReportedDat: Serenity.DateEditor;
        BoardingDenialReasonDesc: Serenity.TextAreaEditor;
        CasinoIncidentNbrTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class GuestPreventDepartureForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.GuestPreventDeparture';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GuestPreventDepartureForm.init)  {
                GuestPreventDepartureForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(GuestPreventDepartureForm, [
                    'GuestFirstNam', w0,
                    'GuestLastNam', w0,
                    'NameTypeDesc', w0,
                    'FromReportNbr', w1,
                    'InternalExternalCd', w0,
                    'TypeCd', w2,
                    'SirsNbrTxt', w0,
                    'IncidentReportedDat', w3,
                    'BoardingDenialReasonDesc', w4,
                    'CasinoIncidentNbrTxt', w0,
                    'CreatedTs', w3,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w3
                ]);
            }
        }
    }
}


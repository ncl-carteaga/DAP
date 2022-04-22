namespace DAP.DWSupport {
    export interface AmenitiesSuppForm {
        AmenityCd: Serenity.StringEditor;
        AmenityTypeId: Serenity.LookupEditor;
        AmenityDesc: Serenity.StringEditor;
        AmenityCategoryCd: Serenity.LookupEditor;
        DisplayOrderCd: Serenity.IntegerEditor;
        AmenityCostAmt: Serenity.DecimalEditor;
        AmenityAddonAmt: Serenity.DecimalEditor;
        IsPerDiemCd: SelectYNEditor;
        CurrencyCd: Serenity.StringEditor;
        ConditionDesc: Serenity.TextAreaEditor;
        CommentTxt: Serenity.TextAreaEditor;
        CreatedDat: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedDat: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class AmenitiesSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.AmenitiesSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AmenitiesSuppForm.init)  {
                AmenitiesSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;
                var w4 = SelectYNEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.DateEditor;

                Q.initFormType(AmenitiesSuppForm, [
                    'AmenityCd', w0,
                    'AmenityTypeId', w1,
                    'AmenityDesc', w0,
                    'AmenityCategoryCd', w1,
                    'DisplayOrderCd', w2,
                    'AmenityCostAmt', w3,
                    'AmenityAddonAmt', w3,
                    'IsPerDiemCd', w4,
                    'CurrencyCd', w0,
                    'ConditionDesc', w5,
                    'CommentTxt', w5,
                    'CreatedDat', w6,
                    'CreatedByNam', w0,
                    'ModifiedDat', w6,
                    'ModifiedByNam', w0
                ]);
            }
        }
    }
}


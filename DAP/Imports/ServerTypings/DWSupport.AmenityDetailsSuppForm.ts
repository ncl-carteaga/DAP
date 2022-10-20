namespace DAP.DWSupport {
    export interface AmenityDetailsSuppForm {
        AmenityId: Serenity.StringEditor;
        AmenityDetailCd: Serenity.StringEditor;
        OfficeCd: Serenity.LookupEditor;
        SailDayFromQty: Serenity.IntegerEditor;
        SailDayToQty: Serenity.IntegerEditor;
        AmenityPtsQty: Serenity.IntegerEditor;
        MinCabinQty: Serenity.IntegerEditor;
        ConditionDesc: Serenity.TextAreaEditor;
        CommentTxt: Serenity.TextAreaEditor;
        CreatedDat: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedDat: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class AmenityDetailsSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.AmenityDetailsSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AmenityDetailsSuppForm.init)  {
                AmenityDetailsSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.DateEditor;

                Q.initFormType(AmenityDetailsSuppForm, [
                    'AmenityId', w0,
                    'AmenityDetailCd', w0,
                    'OfficeCd', w1,
                    'SailDayFromQty', w2,
                    'SailDayToQty', w2,
                    'AmenityPtsQty', w2,
                    'MinCabinQty', w2,
                    'ConditionDesc', w3,
                    'CommentTxt', w3,
                    'CreatedDat', w4,
                    'CreatedByNam', w0,
                    'ModifiedDat', w4,
                    'ModifiedByNam', w0
                ]);
            }
        }
    }
}


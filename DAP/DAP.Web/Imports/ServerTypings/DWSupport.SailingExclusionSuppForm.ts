namespace DAP.DWSupport {
    export interface SailingExclusionSuppForm {
        ShipCd: Serenity.LookupEditor;
        MainSailId: Serenity.IntegerEditor;
        MainSailDt: Serenity.DateEditor;
        MainVoyageCd: Serenity.StringEditor;
        FromDataAsOfDt: Serenity.DateEditor;
        ToDataAsOfDt: Serenity.DateEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class SailingExclusionSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.SailingExclusionSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SailingExclusionSuppForm.init)  {
                SailingExclusionSuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(SailingExclusionSuppForm, [
                    'ShipCd', w0,
                    'MainSailId', w1,
                    'MainSailDt', w2,
                    'MainVoyageCd', w3,
                    'FromDataAsOfDt', w2,
                    'ToDataAsOfDt', w2,
                    'CommentTxt', w3,
                    'CreatedTs', w2,
                    'CreatedByNam', w3,
                    'ModifiedTs', w2,
                    'ModifiedByNam', w3
                ]);
            }
        }
    }
}


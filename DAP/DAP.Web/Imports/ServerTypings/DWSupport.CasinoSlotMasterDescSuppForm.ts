namespace DAP.DWSupport {
    export interface CasinoSlotMasterDescSuppForm {
        SlotMasterDesc: Serenity.StringEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ManufacturerNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class CasinoSlotMasterDescSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CasinoSlotMasterDescSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CasinoSlotMasterDescSuppForm.init)  {
                CasinoSlotMasterDescSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(CasinoSlotMasterDescSuppForm, [
                    'SlotMasterDesc', w0,
                    'CommentTxt', w0,
                    'CreatedTs', w1,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ManufacturerNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}


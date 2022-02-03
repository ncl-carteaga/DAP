namespace DAP.DWSupport {
    export interface InvoiceItemTypeMasterSuppForm {
        InvoiceItemTypeCd: Serenity.StringEditor;
        InvoiceItemSubTypeCd: Serenity.StringEditor;
        InvoiceItemSubType2Cd: Serenity.StringEditor;
        InvoiceItemSubType3Cd: Serenity.StringEditor;
        InvoiceItemSourceCd: Serenity.StringEditor;
        MasterComponentCd: Serenity.StringEditor;
        CommentsTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class InvoiceItemTypeMasterSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.InvoiceItemTypeMasterSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceItemTypeMasterSuppForm.init)  {
                InvoiceItemTypeMasterSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(InvoiceItemTypeMasterSuppForm, [
                    'InvoiceItemTypeCd', w0,
                    'InvoiceItemSubTypeCd', w0,
                    'InvoiceItemSubType2Cd', w0,
                    'InvoiceItemSubType3Cd', w0,
                    'InvoiceItemSourceCd', w0,
                    'MasterComponentCd', w0,
                    'CommentsTxt', w0,
                    'CreatedTs', w1,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}


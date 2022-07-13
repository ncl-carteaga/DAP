namespace DAP.DWSupport {
    export interface InvoiceItemTypeMasterSuppForm {
        MasterComponentCd: Serenity.LookupEditor;
        InvoiceItemSourceCd: Serenity.LookupEditor;
        InvoiceItemTypeCd: Serenity.LookupEditor;
        InvoiceItemSubTypeCd: Serenity.LookupEditor;
        InvoiceItemSubType2Cd: Serenity.LookupEditor;
        InvoiceItemSubType3Cd: Serenity.LookupEditor;
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
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(InvoiceItemTypeMasterSuppForm, [
                    'MasterComponentCd', w0,
                    'InvoiceItemSourceCd', w0,
                    'InvoiceItemTypeCd', w0,
                    'InvoiceItemSubTypeCd', w0,
                    'InvoiceItemSubType2Cd', w0,
                    'InvoiceItemSubType3Cd', w0,
                    'CommentsTxt', w1,
                    'CreatedTs', w2,
                    'CreatedByNam', w1,
                    'ModifiedByNam', w1,
                    'ModifiedTs', w2
                ]);
            }
        }
    }
}


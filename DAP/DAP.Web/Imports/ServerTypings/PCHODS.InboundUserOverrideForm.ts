namespace DAP.PCHODS {
    export interface InboundUserOverrideForm {
        Company: Serenity.StringEditor;
        Invoice: Serenity.StringEditor;
        UserAssign: Serenity.StringEditor;
        ItDescription: Serenity.LookupEditor;
        Inbound: Serenity.StringEditor;
        Comments: Serenity.StringEditor;
    }

    export class InboundUserOverrideForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.InboundUserOverride';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InboundUserOverrideForm.init)  {
                InboundUserOverrideForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(InboundUserOverrideForm, [
                    'Company', w0,
                    'Invoice', w0,
                    'UserAssign', w0,
                    'ItDescription', w1,
                    'Inbound', w0,
                    'Comments', w0
                ]);
            }
        }
    }
}


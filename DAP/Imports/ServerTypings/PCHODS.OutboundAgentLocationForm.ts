namespace DAP.PCHODS {
    export interface OutboundAgentLocationForm {
        Description: Serenity.StringEditor;
    }

    export class OutboundAgentLocationForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundAgentLocation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundAgentLocationForm.init)  {
                OutboundAgentLocationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OutboundAgentLocationForm, [
                    'Description', w0
                ]);
            }
        }
    }
}


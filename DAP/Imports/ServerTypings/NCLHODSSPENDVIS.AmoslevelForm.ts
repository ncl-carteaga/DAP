namespace DAP.NCLHODSSPENDVIS {
    export interface AmoslevelForm {
        AccountId: Serenity.StringEditor;
        Descr: Serenity.StringEditor;
        FlexDim1Name: Serenity.StringEditor;
        FlexDim2Name: Serenity.StringEditor;
        FlexDim3Name: Serenity.StringEditor;
        FlexDim4Name: Serenity.StringEditor;
    }

    export class AmoslevelForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHODSSPENDVIS.Amoslevel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AmoslevelForm.init)  {
                AmoslevelForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AmoslevelForm, [
                    'AccountId', w0,
                    'Descr', w0,
                    'FlexDim1Name', w0,
                    'FlexDim2Name', w0,
                    'FlexDim3Name', w0,
                    'FlexDim4Name', w0
                ]);
            }
        }
    }
}


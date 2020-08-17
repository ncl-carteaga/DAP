namespace DAP.NCLHDSAR {
    export interface RequestStatusForm {
        StatusDescription: Serenity.StringEditor;
        StatusOrder: Serenity.IntegerEditor;
    }

    export class RequestStatusForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.RequestStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RequestStatusForm.init)  {
                RequestStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(RequestStatusForm, [
                    'StatusDescription', w0,
                    'StatusOrder', w1
                ]);
            }
        }
    }
}


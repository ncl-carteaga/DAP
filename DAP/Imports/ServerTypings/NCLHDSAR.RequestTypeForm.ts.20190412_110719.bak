namespace DAP.NCLHDSAR {
    export interface RequestTypeForm {
        Desc: Serenity.StringEditor;
    }

    export class RequestTypeForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.RequestType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RequestTypeForm.init)  {
                RequestTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RequestTypeForm, [
                    'Desc', w0
                ]);
            }
        }
    }
}


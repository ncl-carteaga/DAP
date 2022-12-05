namespace DAP.NCLHDSAR {
    export interface SystemMasterForm {
        SystemName: Serenity.StringEditor;
        SystemTable: Serenity.StringEditor;
        SystemDesc: Serenity.StringEditor;
        SystemActiveYn: Serenity.StringEditor;
    }

    export class SystemMasterForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.SystemMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SystemMasterForm.init)  {
                SystemMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SystemMasterForm, [
                    'SystemName', w0,
                    'SystemTable', w0,
                    'SystemDesc', w0,
                    'SystemActiveYn', w0
                ]);
            }
        }
    }
}


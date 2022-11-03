namespace DAP.SSISConfig {
    export interface PsInterfaceConfigForm {
        ConfigSetting: Serenity.StringEditor;
        DataType: Serenity.StringEditor;
        ConfigValue: Serenity.StringEditor;
        ConfigValueDate: Serenity.DateEditor;
    }

    export class PsInterfaceConfigForm extends Serenity.PrefixedContext {
        static formKey = 'SSISConfig.PsInterfaceConfig';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PsInterfaceConfigForm.init)  {
                PsInterfaceConfigForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(PsInterfaceConfigForm, [
                    'ConfigSetting', w0,
                    'DataType', w0,
                    'ConfigValue', w0,
                    'ConfigValueDate', w1
                ]);
            }
        }
    }
}


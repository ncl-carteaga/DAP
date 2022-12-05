namespace DAP.SSISConfig {
    export interface SsisConfigBaseForm {
        ConfigurationFilter: Serenity.LookupEditor;
        PackagePath: Serenity.StringEditor;
        ConfiguredValueType: Serenity.StringEditor;
        ConfiguredValue: Serenity.StringEditor;
        EnvironmentEnum: Serenity.IntegerEditor;
        EnvironmentDesc: Serenity.StringEditor;
        ConfigId: Serenity.IntegerEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedOn: Serenity.DateEditor;
    }

    export class SsisConfigBaseForm extends Serenity.PrefixedContext {
        static formKey = 'SSISConfig.SsisConfigBase';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SsisConfigBaseForm.init)  {
                SsisConfigBaseForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(SsisConfigBaseForm, [
                    'ConfigurationFilter', w0,
                    'PackagePath', w1,
                    'ConfiguredValueType', w1,
                    'ConfiguredValue', w1,
                    'EnvironmentEnum', w2,
                    'EnvironmentDesc', w1,
                    'ConfigId', w2,
                    'ModifiedBy', w1,
                    'ModifiedOn', w3
                ]);
            }
        }
    }
}


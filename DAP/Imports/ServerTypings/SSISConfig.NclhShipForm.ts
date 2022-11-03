namespace DAP.SSISConfig {
    export interface NclhShipForm {
        ShipAbbreviation: Serenity.StringEditor;
        ShipFullName: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        DepartmentCd: Serenity.StringEditor;
        LocationCd: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        ShipTk: Serenity.IntegerEditor;
        HasMerged: Serenity.BooleanEditor;
    }

    export class NclhShipForm extends Serenity.PrefixedContext {
        static formKey = 'SSISConfig.NclhShip';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NclhShipForm.init)  {
                NclhShipForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(NclhShipForm, [
                    'ShipAbbreviation', w0,
                    'ShipFullName', w0,
                    'CompanyCd', w0,
                    'DepartmentCd', w0,
                    'LocationCd', w0,
                    'IsActive', w1,
                    'ShipTk', w2,
                    'HasMerged', w1
                ]);
            }
        }
    }
}


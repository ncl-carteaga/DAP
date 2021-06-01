
namespace DAP.SSISConfig {
    export class NclhShipForm extends Serenity.PrefixedContext {
        static formKey = 'SSISConfig.NclhShip';
    }

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

    [,
        ['ShipAbbreviation', () => Serenity.StringEditor],
        ['ShipFullName', () => Serenity.StringEditor],
        ['CompanyCd', () => Serenity.StringEditor],
        ['DepartmentCd', () => Serenity.StringEditor],
        ['LocationCd', () => Serenity.StringEditor],
        ['IsActive', () => Serenity.BooleanEditor],
        ['ShipTk', () => Serenity.IntegerEditor],
        ['HasMerged', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(NclhShipForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
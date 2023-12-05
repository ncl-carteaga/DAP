
namespace DAP.DWSupport {
    export class CapacitySuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CapacitySupp';
    }

    export interface CapacitySuppForm {
        ShipCd: Serenity.StringEditor;
        DoCapacity: Serenity.IntegerEditor;
        CabinCapacity: Serenity.IntegerEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        SailStartDate: Serenity.DateEditor;
        SailEndDate: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    [,
        ['ShipCd', () => Serenity.StringEditor],
        ['DoCapacity', () => Serenity.IntegerEditor],
        ['CabinCapacity', () => Serenity.IntegerEditor],
        ['EffectiveFromDt', () => Serenity.DateEditor],
        ['EffectiveToDt', () => Serenity.DateEditor],
        ['SailStartDate', () => Serenity.DateEditor],
        ['SailEndDate', () => Serenity.DateEditor],
        ['CreatedTs', () => Serenity.DateEditor],
        ['CreatedByNam', () => Serenity.StringEditor],
        ['ModifiedTs', () => Serenity.DateEditor],
        ['ModifiedByNam', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(CapacitySuppForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}

namespace DAP.DWSupport {
    export class AirCostAdjSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.AirCostAdjSupp';
    }

    export interface AirCostAdjSuppForm {
        VoyageCd: Serenity.StringEditor;
        RmEstimatedAirCost: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    [,
        ['VoyageCd', () => Serenity.StringEditor],
        ['RmEstimatedAirCost', () => Serenity.DecimalEditor],
        ['EffectiveFromDt', () => Serenity.DateEditor],
        ['EffectiveToDt', () => Serenity.DateEditor],
        ['CreatedTs', () => Serenity.DateEditor],
        ['CreatedByNam', () => Serenity.StringEditor],
        ['ModifiedTs', () => Serenity.DateEditor],
        ['ModifiedByNam', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AirCostAdjSuppForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
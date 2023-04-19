
namespace DAP.DWSupport {
    export class CruiseSegmentDaysOverrideForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CruiseSegmentDaysOverride';
    }

    export interface CruiseSegmentDaysOverrideForm {
        CruiseCd: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        CruiseDaysQty: Serenity.IntegerEditor;
        CruiseSegmentDaysQty: Serenity.IntegerEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    [,
        ['CruiseCd', () => Serenity.StringEditor],
        ['CompanyCd', () => Serenity.StringEditor],
        ['CruiseDaysQty', () => Serenity.IntegerEditor],
        ['CruiseSegmentDaysQty', () => Serenity.IntegerEditor],
        ['EffectiveFrom', () => Serenity.DateEditor],
        ['EffectiveTo', () => Serenity.DateEditor],
        ['LoadDt', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(CruiseSegmentDaysOverrideForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
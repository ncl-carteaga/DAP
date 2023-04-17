
namespace DAP.DWSupport {
    export class DimCruiseFlagsForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.DimCruiseFlags';
    }

    export interface DimCruiseFlagsForm {
        CruiseCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        CappedCapacity: Serenity.IntegerEditor;
        OnbrdAvgPaxQty: Serenity.IntegerEditor;
        HighlightInd: Serenity.IntegerEditor;
        ColorInd: Serenity.StringEditor;
        DrydockInd: Serenity.IntegerEditor;
        VarToCurve: Serenity.DecimalEditor;
        ShowInDr001: Serenity.StringEditor;
        ShowInDr010: Serenity.StringEditor;
        ShowInCube: Serenity.StringEditor;
        IntlDatelineInd: Serenity.StringEditor;
        MinisegInd: Serenity.StringEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    [,
        ['CruiseCd', () => Serenity.StringEditor],
        ['CruiseSegmentCd', () => Serenity.StringEditor],
        ['ShipCd', () => Serenity.StringEditor],
        ['CompanyCd', () => Serenity.StringEditor],
        ['CappedCapacity', () => Serenity.IntegerEditor],
        ['OnbrdAvgPaxQty', () => Serenity.IntegerEditor],
        ['HighlightInd', () => Serenity.IntegerEditor],
        ['ColorInd', () => Serenity.StringEditor],
        ['DrydockInd', () => Serenity.IntegerEditor],
        ['VarToCurve', () => Serenity.DecimalEditor],
        ['ShowInDr001', () => Serenity.StringEditor],
        ['ShowInDr010', () => Serenity.StringEditor],
        ['ShowInCube', () => Serenity.StringEditor],
        ['IntlDatelineInd', () => Serenity.StringEditor],
        ['MinisegInd', () => Serenity.StringEditor],
        ['EffectiveFrom', () => Serenity.DateEditor],
        ['EffectiveTo', () => Serenity.DateEditor],
        ['LoadDt', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(DimCruiseFlagsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
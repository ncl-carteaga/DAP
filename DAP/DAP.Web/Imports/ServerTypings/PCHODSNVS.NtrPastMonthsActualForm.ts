
namespace DAP.PCHODSNVS {
    export class NtrPastMonthsActualForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrPastMonthsActual';
    }

    export interface NtrPastMonthsActualForm {
        CompanyCd: Serenity.StringEditor;
        YearMonth: Serenity.StringEditor;
        NtrFinal: Serenity.DecimalEditor;
        CxRev: Serenity.DecimalEditor;
        PdsFinalTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        BookedNumOfCabins: Serenity.DecimalEditor;
        AvailableNumOfCabins: Serenity.DecimalEditor;
        StlyBookedNumOfCabins: Serenity.DecimalEditor;
        StlyAvailableNumOfCabins: Serenity.DecimalEditor;
    }

    [
        ['CompanyCd', () => Serenity.StringEditor],
        ['YearMonth', () => Serenity.StringEditor],
        ['NtrFinal', () => Serenity.DecimalEditor],
        ['CxRev', () => Serenity.DecimalEditor],
        ['PdsFinalTotal', () => Serenity.DecimalEditor],
        ['ApcdFinal', () => Serenity.DecimalEditor],
        ['BookedNumOfCabins', () => Serenity.DecimalEditor],
        ['AvailableNumOfCabins', () => Serenity.DecimalEditor],
        ['StlyBookedNumOfCabins', () => Serenity.DecimalEditor],
        ['StlyAvailableNumOfCabins', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(NtrPastMonthsActualForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}

namespace DAP.PCHODSNVS {
    export class NtrRptCommentForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrRptComment';
    }

    export interface NtrRptCommentForm {
        CompanyCd: Serenity.StringEditor;
        ReportDate: Serenity.DateEditor;
        Comment: Serenity.StringEditor;
        AccountPeriodNum: Serenity.StringEditor;
    }

    [,
        ['CompanyCd', () => Serenity.StringEditor],
        ['ReportDate', () => Serenity.DateEditor],
        ['Comment', () => Serenity.StringEditor],
        ['AccountPeriodNum', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(NtrRptCommentForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
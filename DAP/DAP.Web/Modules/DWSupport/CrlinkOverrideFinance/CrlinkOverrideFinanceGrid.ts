
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CrlinkOverrideFinanceGrid extends Serenity.EntityGrid<CrlinkOverrideFinanceRow, any> {
        protected getColumnsKey() { return 'DWSupport.CrlinkOverrideFinance'; }
        protected getDialogType() { return CrlinkOverrideFinanceDialog; }
        protected getIdProperty() { return CrlinkOverrideFinanceRow.idProperty; }
        protected getLocalTextPrefix() { return CrlinkOverrideFinanceRow.localTextPrefix; }
        protected getService() { return CrlinkOverrideFinanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
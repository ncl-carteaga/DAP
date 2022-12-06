
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class PsGlAccountSuppGrid extends Serenity.EntityGrid<PsGlAccountSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.PsGlAccountSupp'; }
        protected getDialogType() { return PsGlAccountSuppDialog; }
        protected getIdProperty() { return PsGlAccountSuppRow.idProperty; }
        protected getLocalTextPrefix() { return PsGlAccountSuppRow.localTextPrefix; }
        protected getService() { return PsGlAccountSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class PortSubstitutionSuppGrid extends Serenity.EntityGrid<PortSubstitutionSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.PortSubstitutionSupp'; }
        protected getDialogType() { return PortSubstitutionSuppDialog; }
        protected getIdProperty() { return PortSubstitutionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return PortSubstitutionSuppRow.localTextPrefix; }
        protected getService() { return PortSubstitutionSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
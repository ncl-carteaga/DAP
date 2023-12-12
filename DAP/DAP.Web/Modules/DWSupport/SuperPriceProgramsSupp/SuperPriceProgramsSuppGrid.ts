
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SuperPriceProgramsSuppGrid extends Serenity.EntityGrid<SuperPriceProgramsSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.SuperPriceProgramsSupp'; }
        protected getDialogType() { return SuperPriceProgramsSuppDialog; }
        protected getIdProperty() { return SuperPriceProgramsSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SuperPriceProgramsSuppRow.localTextPrefix; }
        protected getService() { return SuperPriceProgramsSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
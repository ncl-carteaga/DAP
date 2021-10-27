
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SlProductCodeSuppGrid extends Serenity.EntityGrid<SlProductCodeSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.SlProductCodeSupp'; }
        protected getDialogType() { return SlProductCodeSuppDialog; }
        protected getIdProperty() { return SlProductCodeSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SlProductCodeSuppRow.localTextPrefix; }
        protected getService() { return SlProductCodeSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class InboundUserOverrideGrid extends Serenity.EntityGrid<InboundUserOverrideRow, any> {
        protected getColumnsKey() { return 'PCHODS.InboundUserOverride'; }
        protected getDialogType() { return InboundUserOverrideDialog; }
        protected getIdProperty() { return InboundUserOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return InboundUserOverrideRow.localTextPrefix; }
        protected getService() { return InboundUserOverrideService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
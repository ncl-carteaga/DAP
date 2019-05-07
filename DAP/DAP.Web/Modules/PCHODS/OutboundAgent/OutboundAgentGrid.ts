
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundAgentGrid extends Serenity.EntityGrid<OutboundAgentRow, any> {
        protected getColumnsKey() { return 'PCHODS.OutboundAgent'; }
        protected getDialogType() { return OutboundAgentDialog; }
        protected getIdProperty() { return OutboundAgentRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundAgentRow.localTextPrefix; }
        protected getService() { return OutboundAgentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
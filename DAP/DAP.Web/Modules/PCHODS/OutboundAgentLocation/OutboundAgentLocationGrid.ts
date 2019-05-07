
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundAgentLocationGrid extends Serenity.EntityGrid<OutboundAgentLocationRow, any> {
        protected getColumnsKey() { return 'PCHODS.OutboundAgentLocation'; }
        protected getDialogType() { return OutboundAgentLocationDialog; }
        protected getIdProperty() { return OutboundAgentLocationRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundAgentLocationRow.localTextPrefix; }
        protected getService() { return OutboundAgentLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundAgentLocationDialog extends Serenity.EntityDialog<OutboundAgentLocationRow, any> {
        protected getFormKey() { return OutboundAgentLocationForm.formKey; }
        protected getIdProperty() { return OutboundAgentLocationRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundAgentLocationRow.localTextPrefix; }
        protected getNameProperty() { return OutboundAgentLocationRow.nameProperty; }
        protected getService() { return OutboundAgentLocationService.baseUrl; }

        protected form = new OutboundAgentLocationForm(this.idPrefix);

    }
}
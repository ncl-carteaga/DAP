
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrBudgetByChannelDialog extends Serenity.EntityDialog<NtrBudgetByChannelRow, any> {
        protected getFormKey() { return NtrBudgetByChannelForm.formKey; }
        protected getIdProperty() { return NtrBudgetByChannelRow.idProperty; }
        protected getLocalTextPrefix() { return NtrBudgetByChannelRow.localTextPrefix; }
        protected getNameProperty() { return NtrBudgetByChannelRow.nameProperty; }
        protected getService() { return NtrBudgetByChannelService.baseUrl; }

        protected form = new NtrBudgetByChannelForm(this.idPrefix);

    }
}

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SuperPriceProgramsSuppDialog extends Serenity.EntityDialog<SuperPriceProgramsSuppRow, any> {
        protected getFormKey() { return SuperPriceProgramsSuppForm.formKey; }
        protected getIdProperty() { return SuperPriceProgramsSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SuperPriceProgramsSuppRow.localTextPrefix; }
        protected getNameProperty() { return SuperPriceProgramsSuppRow.nameProperty; }
        protected getService() { return SuperPriceProgramsSuppService.baseUrl; }

        protected form = new SuperPriceProgramsSuppForm(this.idPrefix);

    }
}
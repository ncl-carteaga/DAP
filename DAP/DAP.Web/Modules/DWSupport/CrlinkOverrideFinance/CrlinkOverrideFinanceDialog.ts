
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CrlinkOverrideFinanceDialog extends Serenity.EntityDialog<CrlinkOverrideFinanceRow, any> {
        protected getFormKey() { return CrlinkOverrideFinanceForm.formKey; }
        protected getIdProperty() { return CrlinkOverrideFinanceRow.idProperty; }
        protected getLocalTextPrefix() { return CrlinkOverrideFinanceRow.localTextPrefix; }
        protected getNameProperty() { return CrlinkOverrideFinanceRow.nameProperty; }
        protected getService() { return CrlinkOverrideFinanceService.baseUrl; }

        protected form = new CrlinkOverrideFinanceForm(this.idPrefix);

    }
}
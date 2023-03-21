
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CmiSuppDialog extends Serenity.EntityDialog<CmiSuppRow, any> {
        protected getFormKey() { return CmiSuppForm.formKey; }
        protected getIdProperty() { return CmiSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CmiSuppRow.localTextPrefix; }
        protected getNameProperty() { return CmiSuppRow.nameProperty; }
        protected getService() { return CmiSuppService.baseUrl; }

        protected form = new CmiSuppForm(this.idPrefix);

    }
}
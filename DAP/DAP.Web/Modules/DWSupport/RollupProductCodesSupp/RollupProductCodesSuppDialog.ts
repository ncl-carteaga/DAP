
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class RollupProductCodesSuppDialog extends Serenity.EntityDialog<RollupProductCodesSuppRow, any> {
        protected getFormKey() { return RollupProductCodesSuppForm.formKey; }
        protected getIdProperty() { return RollupProductCodesSuppRow.idProperty; }
        protected getLocalTextPrefix() { return RollupProductCodesSuppRow.localTextPrefix; }
        protected getNameProperty() { return RollupProductCodesSuppRow.nameProperty; }
        protected getService() { return RollupProductCodesSuppService.baseUrl; }

        protected form = new RollupProductCodesSuppForm(this.idPrefix);

    }
}
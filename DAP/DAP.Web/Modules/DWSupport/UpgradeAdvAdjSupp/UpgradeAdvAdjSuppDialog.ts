
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class UpgradeAdvAdjSuppDialog extends Serenity.EntityDialog<UpgradeAdvAdjSuppRow, any> {
        protected getFormKey() { return UpgradeAdvAdjSuppForm.formKey; }
        protected getIdProperty() { return UpgradeAdvAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return UpgradeAdvAdjSuppRow.localTextPrefix; }
        protected getNameProperty() { return UpgradeAdvAdjSuppRow.nameProperty; }
        protected getService() { return UpgradeAdvAdjSuppService.baseUrl; }

        protected form = new UpgradeAdvAdjSuppForm(this.idPrefix);


        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);

            return b;

        }

    }
}
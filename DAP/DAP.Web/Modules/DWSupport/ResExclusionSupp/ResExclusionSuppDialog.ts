
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ResExclusionSuppDialog extends Serenity.EntityDialog<ResExclusionSuppRow, any> {
        protected getFormKey() { return ResExclusionSuppForm.formKey; }
        protected getIdProperty() { return ResExclusionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return ResExclusionSuppRow.localTextPrefix; }
        protected getNameProperty() { return ResExclusionSuppRow.nameProperty; }
        protected getService() { return ResExclusionSuppService.baseUrl; }

        protected form = new ResExclusionSuppForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);

            return b;
        }
    }
}
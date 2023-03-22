
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class GtfSuppDialog extends Serenity.EntityDialog<GtfSuppRow, any> {
        protected getFormKey() { return GtfSuppForm.formKey; }
        protected getIdProperty() { return GtfSuppRow.idProperty; }
        protected getLocalTextPrefix() { return GtfSuppRow.localTextPrefix; }
        protected getNameProperty() { return GtfSuppRow.nameProperty; }
        protected getService() { return GtfSuppService.baseUrl; }

        protected form = new GtfSuppForm(this.idPrefix);

        
        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            //b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            return b;
        }

    }
}
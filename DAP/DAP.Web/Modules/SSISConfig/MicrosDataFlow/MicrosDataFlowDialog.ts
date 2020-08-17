
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class MicrosDataFlowDialog extends Serenity.EntityDialog<MicrosDataFlowRow, any> {
        protected getFormKey() { return MicrosDataFlowForm.formKey; }
        protected getIdProperty() { return MicrosDataFlowRow.idProperty; }
        protected getLocalTextPrefix() { return MicrosDataFlowRow.localTextPrefix; }
        protected getNameProperty() { return MicrosDataFlowRow.nameProperty; }
        protected getService() { return MicrosDataFlowService.baseUrl; }

        protected form = new MicrosDataFlowForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }
    }
}
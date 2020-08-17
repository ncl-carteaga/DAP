
namespace DAP.NCLHODSMICROS {

    @Serenity.Decorators.registerClass()
    export class DataFlowDialog extends Serenity.EntityDialog<DataFlowRow, any> {
        protected getFormKey() { return DataFlowForm.formKey; }
        protected getIdProperty() { return DataFlowRow.idProperty; }
        protected getLocalTextPrefix() { return DataFlowRow.localTextPrefix; }
        protected getNameProperty() { return DataFlowRow.nameProperty; }
        protected getService() { return DataFlowService.baseUrl; }

        protected form = new DataFlowForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }
    }
}
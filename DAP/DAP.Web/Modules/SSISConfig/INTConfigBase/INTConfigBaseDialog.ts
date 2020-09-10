
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class INTConfigBaseDialog extends Serenity.EntityDialog<INTConfigBaseRow, any> {
        protected getFormKey() { return INTConfigBaseForm.formKey; }
        protected getIdProperty() { return INTConfigBaseRow.idProperty; }
        protected getLocalTextPrefix() { return INTConfigBaseRow.localTextPrefix; }
        protected getNameProperty() { return INTConfigBaseRow.nameProperty; }
        protected getService() { return INTConfigBaseService.baseUrl; }

        protected form = new INTConfigBaseForm(this.idPrefix);
        
        constructor() {
            super();
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }

    }
}
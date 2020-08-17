
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class SsisConfigBaseDialog extends Serenity.EntityDialog<SsisConfigBaseRow, any> {
        protected getFormKey() { return SsisConfigBaseForm.formKey; }
        protected getIdProperty() { return SsisConfigBaseRow.idProperty; }
        protected getLocalTextPrefix() { return SsisConfigBaseRow.localTextPrefix; }
        protected getNameProperty() { return SsisConfigBaseRow.nameProperty; }
        protected getService() { return SsisConfigBaseService.baseUrl; }

        protected form = new SsisConfigBaseForm(this.idPrefix);
        
        constructor() {
            super();
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            if (!Authorization.hasPermission("SSISConfig:Config:Delete")) {
                b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            }

            return b;
        }

    }
}

namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class PsInterfaceConfigDialog extends Serenity.EntityDialog<PsInterfaceConfigRow, any> {
        protected getFormKey() { return PsInterfaceConfigForm.formKey; }
        protected getIdProperty() { return PsInterfaceConfigRow.idProperty; }
        protected getLocalTextPrefix() { return PsInterfaceConfigRow.localTextPrefix; }
        protected getNameProperty() { return PsInterfaceConfigRow.nameProperty; }
        protected getService() { return PsInterfaceConfigService.baseUrl; }

        protected form = new PsInterfaceConfigForm(this.idPrefix);
        
        constructor() {
            super();
        }

        //validateEntity(row, id) {

        //    row.ConfigurationValue = "03/26/2020";

        //}

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.form.DataType.value == "Date") {
                this.form.ConfigValue.getGridField().toggle(false);
                this.form.ConfigValueDate.getGridField().toggle(true);
            }
            else {
                this.form.ConfigValue.getGridField().toggle(true);
                this.form.ConfigValueDate.getGridField().toggle(false);
            }
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }
    }
}

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SailingMasterSuppDialog extends Serenity.EntityDialog<SailingMasterSuppRow, any> {
        protected getFormKey() { return SailingMasterSuppForm.formKey; }
        protected getIdProperty() { return SailingMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SailingMasterSuppRow.localTextPrefix; }
        protected getNameProperty() { return SailingMasterSuppRow.nameProperty; }
        protected getService() { return SailingMasterSuppService.baseUrl; }

        protected form = new SailingMasterSuppForm(this.idPrefix);

        constructor() {
            super();

            this.form.RmsSeasonCd.addValidationRule(this.uniqueName, e => {
                if (this.form.RmsSeasonCd.value != null) {

                    if ((this.form.RmsSeasonCd.value.length > 30) || (!(/[A-Za-z]/.test(this.form.RmsSeasonCd.value)))) {
                        return "Rm_Season_Cd Only accepts letters.";
                    }
                }
            });
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            return b;
        }

        
    }
}
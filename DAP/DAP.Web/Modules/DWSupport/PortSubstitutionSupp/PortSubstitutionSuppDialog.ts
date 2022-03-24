
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class PortSubstitutionSuppDialog extends Serenity.EntityDialog<PortSubstitutionSuppRow, any> {
        protected getFormKey() { return PortSubstitutionSuppForm.formKey; }
        protected getIdProperty() { return PortSubstitutionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return PortSubstitutionSuppRow.localTextPrefix; }
        protected getNameProperty() { return PortSubstitutionSuppRow.nameProperty; }
        protected getService() { return PortSubstitutionSuppService.baseUrl; }

        protected form = new PortSubstitutionSuppForm(this.idPrefix);

        constructor() {
            super();

            this.form = new PortSubstitutionSuppForm(this.idPrefix);

            this.form.PortCd.changeSelect2(e => {
                var portcd = Q.toId(this.form.PortCd.value);
                if (portcd != null) {
                    this.form.PortNam.value = DWSupport.VwGetSeaPortCodeRow.getLookup().itemById[portcd].PortName;                   
                }
            });
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            // b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            return b;
        }

    }
}
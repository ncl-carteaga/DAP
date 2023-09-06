
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CreditCardAdjSuppDialog extends Serenity.EntityDialog<CreditCardAdjSuppRow, any> {
        protected getFormKey() { return CreditCardAdjSuppForm.formKey; }
        protected getIdProperty() { return CreditCardAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CreditCardAdjSuppRow.localTextPrefix; }
        protected getNameProperty() { return CreditCardAdjSuppRow.nameProperty; }
        protected getService() { return CreditCardAdjSuppService.baseUrl; }

        protected form = new CreditCardAdjSuppForm(this.idPrefix);


        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);

            return b;
        }

        protected updateInterface() {
            super.updateInterface();

            // Calculate and refresh [Calculated fields] when base fields change
            // -------------------------------------------------------------- //
                this.form.BlendedRate.change(e => {
                    // set proposed rate value = this value
                    this.form.ProposedRate.set_value(this.form.BlendedRate.value);
                });
            // -------------------------------------------------------------- //
        }
    }
}
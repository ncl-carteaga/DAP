
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CreditCardAdjSuppDialog extends Serenity.EntityDialog<CreditCardAdjSuppRow, any> {
        protected getFormKey() { return CreditCardAdjSuppForm.formKey; }
        protected getIdProperty() { return CreditCardAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CreditCardAdjSuppRow.localTextPrefix; }
        protected getNameProperty() { return CreditCardAdjSuppRow.nameProperty; }
        protected getService() { return CreditCardAdjSuppService.baseUrl; }

        protected form = new CreditCardAdjSuppForm(this.idPrefix);

        constructor() {
            super();

            // Calculate and refresh [Calculated fields] when base fields change
            // ---------------------------------------------
                this.form.BaseRate.change(e => {
                    let t1 = this.form.ParticipationRate.value;
                    let t2 = this.form.BaseRate.value;
                    let t3 = this.form.CxBuffer.value;
                    this.form.BlendedRate.set_value((t1 * t2) + t3);
                    this.form.ProposedRate.set_value(this.form.BlendedRate.value + t3);
                });
                this.form.ParticipationRate.change(e => {
                    let t1 = this.form.ParticipationRate.value;
                    let t2 = this.form.BaseRate.value;
                    let t3 = this.form.CxBuffer.value;
                    this.form.BlendedRate.set_value((t1 * t2) + t3);
                    this.form.ProposedRate.set_value(this.form.BlendedRate.value + t3);
                });
                this.form.CxBuffer.change(e => {
                    let t1 = this.form.CxBuffer.value;
                    let t2 = this.form.BlendedRate.value;
                    this.form.ProposedRate.set_value(t1 + t2);
                });
            // ---------------------------------------------     
        }


        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);

            return b;
        }
    }
}
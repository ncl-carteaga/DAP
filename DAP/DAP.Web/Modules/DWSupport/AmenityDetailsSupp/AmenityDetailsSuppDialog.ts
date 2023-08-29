
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AmenityDetailsSuppDialog extends Serenity.EntityDialog<AmenityDetailsSuppRow, any> {
        protected getFormKey() { return AmenityDetailsSuppForm.formKey; }
        protected getIdProperty() { return AmenityDetailsSuppRow.idProperty; }
        protected getLocalTextPrefix() { return AmenityDetailsSuppRow.localTextPrefix; }
        protected getNameProperty() { return AmenityDetailsSuppRow.nameProperty; }
        protected getService() { return AmenityDetailsSuppService.baseUrl; }

        protected form = new AmenityDetailsSuppForm(this.idPrefix);

        protected updateInterface() {
            super.updateInterface();

            this.form.AmenityPtsQty.set_value(0);
            this.form.MinCabinQty.set_value(0);
            this.form.SailDayFromQty.set_value(0);
            this.form.SailDayToQty.set_value(0);
        }
    }
}
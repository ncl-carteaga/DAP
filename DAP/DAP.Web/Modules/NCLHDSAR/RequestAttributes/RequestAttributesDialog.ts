
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestAttributesDialog extends Serenity.EntityDialog<RequestAttributesRow, any> {
        protected getFormKey() { return RequestAttributesForm.formKey; }
        protected getIdProperty() { return RequestAttributesRow.idProperty; }
        protected getLocalTextPrefix() { return RequestAttributesRow.localTextPrefix; }
        protected getNameProperty() { return RequestAttributesRow.nameProperty; }
        protected getService() { return RequestAttributesService.baseUrl; }

        protected form = new RequestAttributesForm(this.idPrefix);

        constructor() {
            super();

            this.form = new RequestAttributesForm(this.idPrefix);

            this.form.SystemMasterId.changeSelect2(e => {
                var sysid = Q.toId(this.form.SystemMasterId.value);
                if (sysid != null) {
                    this.form.ResolvedDt.value = null;
                }
            });

            this.form.RequestValue.changeSelect2(e => {
                var rqvalue = Q.toId(this.form.RequestValue.value);
                if (rqvalue != null) {
                    this.form.ResolvedDt.value = null;
                }
            });

            //this.form.RequestValue.addValidationRule(this.uniqueName, e => {
            //    if (!(/^[0-9]*$/.test(this.form.RequestValue.value))) return "Only Numbers";
            //});

            this.form.RequestValue.addValidationRule(this.uniqueName, e => {
                if (this.form.SystemMasterId.value != null &&
                    ((this.form.SystemMasterId.value == "2" || this.form.SystemMasterId.value == "3") &&
                    this.form.RequestValue.value.length != 12) ||
                        (!(/^[0-9]*$/.test(this.form.RequestValue.value))) ) {
                    return "Invalid NVS MP Card Number Format";
                }
                if (this.form.SystemMasterId.value != null &&
                    (this.form.SystemMasterId.value == "4" || this.form.SystemMasterId.value == "5" || this.form.SystemMasterId.value == "6" || this.form.SystemMasterId.value == "7") &&
                    this.form.RequestValue.value.length != 15) {
                    return "Invalid SFDC ID Format";
                }
                if (this.form.SystemMasterId.value != null &&
                    ((this.form.SystemMasterId.value == "1" || this.form.SystemMasterId.value == "8" || this.form.SystemMasterId.value == "9" || this.form.SystemMasterId.value == "10") &&
                      this.form.RequestValue.value.length != 10) ||
                      (!(/^[0-9]*$/.test(this.form.RequestValue.value))) ) {
                    return "Invalid SEAWARE/EPSILON Client ID Format";
                }

            });

        }

    }
}
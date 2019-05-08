
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

            this.form.RequestValue.changeSelect2(e => {
                var rqvalue = Q.toId(this.form.RequestValue.value);
                if (rqvalue != null) {
                    this.form.ResolvedDt.value = null;
                }
            });
        }

    }
}
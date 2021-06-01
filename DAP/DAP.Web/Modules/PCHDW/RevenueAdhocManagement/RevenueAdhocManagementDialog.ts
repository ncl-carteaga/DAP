
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class RevenueAdhocManagementDialog extends Serenity.EntityDialog<RevenueAdhocManagementRow, any> {
        protected getFormKey() { return RevenueAdhocManagementForm.formKey; }
        protected getIdProperty() { return RevenueAdhocManagementRow.idProperty; }
        protected getLocalTextPrefix() { return RevenueAdhocManagementRow.localTextPrefix; }
        protected getNameProperty() { return RevenueAdhocManagementRow.nameProperty; }
        protected getService() { return RevenueAdhocManagementService.baseUrl; }

        protected form = new RevenueAdhocManagementForm(this.idPrefix);


        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.form.DatabaseId.value != "Reporting_stly") {
                Serenity.EditorUtils.setReadOnly(this.form.AdhocStlydate, true);
            }
            else {
                Serenity.EditorUtils.setReadOnly(this.form.AdhocStlydate, false);
            }
            
        }
    }
}

namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class RevenueAdhocManagementDialog extends Serenity.EntityDialog<RevenueAdhocManagementRow, any> {
        protected getFormKey() { return RevenueAdhocManagementForm.formKey; }
        protected getIdProperty() { return RevenueAdhocManagementRow.idProperty; }
        protected getLocalTextPrefix() { return RevenueAdhocManagementRow.localTextPrefix; }
        protected getNameProperty() { return RevenueAdhocManagementRow.nameProperty; }
        protected getService() { return RevenueAdhocManagementService.baseUrl; }

        protected form = new RevenueAdhocManagementForm(this.idPrefix);

        constructor() {
            super();
           
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            if (!Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            }

            return b;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (!Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                Serenity.EditorUtils.setReadOnly(this.form.SqlJobName, true);
            }
            
        }
    }
}
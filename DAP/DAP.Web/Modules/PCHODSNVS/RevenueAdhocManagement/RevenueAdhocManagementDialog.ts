
namespace DAP.PCHODSNVS {

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
            let btns = super.getToolbarButtons();



            var btnSave = Q.first(btns, x => x.cssClass == "save-and-close-button");
            var btnApply = Q.first(btns, x => x.cssClass == "apply-changes-button");
            var btnDelete = Q.first(btns, x => x.cssClass == "delete-button");

            var oldSaveClick = btnSave.onClick;
            var oldApplyClick = btnApply.onClick;
            var oldDeleteClick = btnDelete.onClick;

            btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
            btnApply.onClick = e => { this.confirmBeforeSave(oldApplyClick, e); };
            btnDelete.onClick = e => { this.confirmBeforeSave(oldDeleteClick, e); };

            if (!Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                btns.splice(Q.indexOf(btns, x => x.cssClass == "delete-button"), 1);
            }

            return btns;
        }

        private confirmBeforeSave(oldEvt, e) {
            switch (this.form.CompanyCd.value) {
                case "100":
                    if (!Authorization.hasPermission("PCHODSNVS:Finance100")) {
                        Q.notifyError("User not Authorize to make any changes to company 100");
                        return;
                    }
                    break;
                case "110":
                    if (!Authorization.hasPermission("PCHODSNVS:Finance110")) {
                        Q.notifyError("User not Authorize to make any changes to company 110");
                        return;
                    }
                    break;
            }

            oldEvt(e);

        }


        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (!Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                Serenity.EditorUtils.setReadOnly(this.form.SqlJobName, true);
            }
            
        }
    }
}
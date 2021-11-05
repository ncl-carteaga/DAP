
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrBudgetDialog extends Serenity.EntityDialog<NtrBudgetRow, any> {
        protected getFormKey() { return NtrBudgetForm.formKey; }
        protected getIdProperty() { return NtrBudgetRow.idProperty; }
        protected getLocalTextPrefix() { return NtrBudgetRow.localTextPrefix; }
        protected getNameProperty() { return NtrBudgetRow.nameProperty; }
        protected getService() { return NtrBudgetService.baseUrl; }

        protected form = new NtrBudgetForm(this.idPrefix);

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

    }
}
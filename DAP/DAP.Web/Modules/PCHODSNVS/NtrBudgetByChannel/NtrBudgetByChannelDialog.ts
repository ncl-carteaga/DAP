
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrBudgetByChannelDialog extends Serenity.EntityDialog<NtrBudgetByChannelRow, any> {
        protected getFormKey() { return NtrBudgetByChannelForm.formKey; }
        protected getIdProperty() { return NtrBudgetByChannelRow.idProperty; }
        protected getLocalTextPrefix() { return NtrBudgetByChannelRow.localTextPrefix; }
        protected getNameProperty() { return NtrBudgetByChannelRow.nameProperty; }
        protected getService() { return NtrBudgetByChannelService.baseUrl; }

        protected form = new NtrBudgetByChannelForm(this.idPrefix);

        constructor() {
            super();

            this.form.AccountingYear.addValidationRule(this.uniqueName, e => {
                if (this.form.AccountingYear.value != null) {

                    if ((this.form.AccountingYear.value > 2100) || (this.form.AccountingYear.value < 2000)) {
                        return "Invalid Account Year Format.";
                    }
                }
            });

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

namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrFcstDialog extends Serenity.EntityDialog<NtrFcstRow, any> {
        protected getFormKey() { return NtrFcstForm.formKey; }
        protected getIdProperty() { return NtrFcstRow.idProperty; }
        protected getLocalTextPrefix() { return NtrFcstRow.localTextPrefix; }
        protected getNameProperty() { return NtrFcstRow.nameProperty; }
        protected getService() { return NtrFcstService.baseUrl; }

        protected form = new NtrFcstForm(this.idPrefix);

        constructor() {
            super();

            this.form.AccountPeriodNum.addValidationRule(this.uniqueName, e => {
                if (this.form.AccountPeriodNum.value != null) {

                    if ((this.form.AccountPeriodNum.value.length > 6) || (!(/(20[0-4]\d)(0[1-9]|1[0-2])/.test(this.form.AccountPeriodNum.value)))) {
                        return "Invalid Account Period Format. It should be YYYYMM.";
                    }
                }
            }
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
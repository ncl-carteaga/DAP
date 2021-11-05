
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrPastMonthsActualDialog extends Serenity.EntityDialog<NtrPastMonthsActualRow, any> {
        protected getFormKey() { return NtrPastMonthsActualForm.formKey; }
        protected getIdProperty() { return NtrPastMonthsActualRow.idProperty; }
        protected getLocalTextPrefix() { return NtrPastMonthsActualRow.localTextPrefix; }
        protected getNameProperty() { return NtrPastMonthsActualRow.nameProperty; }
        protected getService() { return NtrPastMonthsActualService.baseUrl; }

        protected form = new NtrPastMonthsActualForm(this.idPrefix);

        constructor() {
            super();

            this.form.YearMonth.addValidationRule(this.uniqueName, e => {
                if (this.form.YearMonth.value != null) {

                    if ((this.form.YearMonth.value.length > 6) || (!(/(20[0-4]\d)(0[1-9]|1[0-2])/.test(this.form.YearMonth.value)))) {
                        return "Invalid Year Month Format. It should be YYYYMM.";
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
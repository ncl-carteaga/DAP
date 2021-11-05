
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrIntlDatelineCruisesDialog extends Serenity.EntityDialog<NtrIntlDatelineCruisesRow, any> {
        protected getFormKey() { return NtrIntlDatelineCruisesForm.formKey; }
        protected getIdProperty() { return NtrIntlDatelineCruisesRow.idProperty; }
        protected getLocalTextPrefix() { return NtrIntlDatelineCruisesRow.localTextPrefix; }
        protected getNameProperty() { return NtrIntlDatelineCruisesRow.nameProperty; }
        protected getService() { return NtrIntlDatelineCruisesService.baseUrl; }

        protected form = new NtrIntlDatelineCruisesForm(this.idPrefix);

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
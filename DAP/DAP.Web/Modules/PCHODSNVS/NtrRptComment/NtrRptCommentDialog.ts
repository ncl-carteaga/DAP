
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrRptCommentDialog extends Serenity.EntityDialog<NtrRptCommentRow, any> {
        protected getFormKey() { return NtrRptCommentForm.formKey; }
        protected getIdProperty() { return NtrRptCommentRow.idProperty; }
        protected getLocalTextPrefix() { return NtrRptCommentRow.localTextPrefix; }
        protected getNameProperty() { return NtrRptCommentRow.nameProperty; }
        protected getService() { return NtrRptCommentService.baseUrl; }

        protected form = new NtrRptCommentForm(this.idPrefix);

        constructor() {
            super();

        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let btns = super.getToolbarButtons();

            var btnSave = Q.first(btns, x => x.cssClass == "save-and-close-button");
            var btnApply = Q.first(btns, x => x.cssClass == "apply-changes-button");

            var oldSaveClick = btnSave.onClick;
            var oldApplyClick = btnApply.onClick;

            btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
            btnApply.onClick = e => { this.confirmBeforeSave(oldApplyClick, e); };

            return btns;
        }

        private confirmBeforeSave(oldEvt, e) {
            switch (this.form.CompanyCd.value) {
                case "100":
                    if (!Authorization.hasPermission("PCHODSNVS:Finance100")) {
                        Q.notifyError("User not Authorize to change company 100");
                        return;
                    }
                    break;
                case "110":
                    if (!Authorization.hasPermission("PCHODSNVS:Finance110")) {
                        Q.notifyError("User not Authorize to change company 110");
                        return;
                    }
                    break;
            }
            
            //Q.confirm("Here is confirm message?", () => {
                oldEvt(e);
            //});
           
        }

    }
}
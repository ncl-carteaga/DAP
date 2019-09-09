
namespace DAP.PCHODS {

   

    @Serenity.Decorators.registerClass()
    export class VwOutboundMonthlyRptArchiveOverrideDialog extends Serenity.EntityDialog<VwOutboundMonthlyRptArchiveOverrideRow, any> {
        protected getFormKey() { return VwOutboundMonthlyRptArchiveOverrideForm.formKey; }
        protected getIdProperty() { return VwOutboundMonthlyRptArchiveOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return VwOutboundMonthlyRptArchiveOverrideRow.localTextPrefix; }
        protected getNameProperty() { return VwOutboundMonthlyRptArchiveOverrideRow.nameProperty; }
        protected getService() { return VwOutboundMonthlyRptArchiveOverrideService.baseUrl; }

        protected form = new VwOutboundMonthlyRptArchiveOverrideForm(this.idPrefix);


        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);    
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);    
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);    

            if (!this.isEditMode()) {
                let newBtn: Serenity.ToolButton =
                {
                    title: "Save Changes",
                    hint: "Save Changes",                    
                    cssClass: "button-saveandnew",                    
                    onClick: (e) => {
                        e.preventDefault();
                        this.saveClick();
                    }
                };
                buttons.push(newBtn);
            }

            return buttons;
        }

        private saveClick() {
            this.dialogClose();
            //let e = this.entity; let f = this.form;
            //this.save((response) => {
            //    let ent: VwOutboundMonthlyRptArchiveOverrideRow = { idProperty: e.OutboundMonthlyRptArchiveId, KeyBodega: parseInt(f..value) };
            //    this.loadEntity(ent);
            //});
        }

    }
}

namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestAttributesDialog extends Serenity.EntityDialog<RequestAttributesRow, any> {
        protected getFormKey() { return RequestAttributesForm.formKey; }
        protected getIdProperty() { return RequestAttributesRow.idProperty; }
        protected getLocalTextPrefix() { return RequestAttributesRow.localTextPrefix; }
        protected getNameProperty() { return RequestAttributesRow.nameProperty; }
        protected getService() { return RequestAttributesService.baseUrl; }

        protected form = new RequestAttributesForm(this.idPrefix);

        constructor() {
            super();

            this.form = new RequestAttributesForm(this.idPrefix);

            this.form.SystemMasterId.changeSelect2(e => {
                var sysid = Q.toId(this.form.SystemMasterId.value);
                if (sysid != null) {
                    this.form.ResolvedDt.value = null;
                }
            });

            this.form.RequestValue.changeSelect2(e => {
                var rqvalue = Q.toId(this.form.RequestValue.value);
                if (rqvalue != null) {
                    this.form.ResolvedDt.value = null;
                }
            });

            //this.form.RequestValue.addValidationRule(this.uniqueName, e => {
            //    if (!(/^[0-9]*$/.test(this.form.RequestValue.value))) return "Only Numbers";
            //});

            this.form.RequestValue.addValidationRule(this.uniqueName, e => {
                if (this.form.SystemMasterId.value != null) {

                    switch (this.form.SystemMasterId.value) {
                        case "2":
                        case "3":
                            if ((this.form.RequestValue.value.length > 12) || (!(/^[0-9]*$/.test(this.form.RequestValue.value)))) {
                                return "Invalid NVS MP Card Number Format";
                            }
                            break;
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                            if (this.form.RequestValue.value.length > 18) {
                                return "Invalid SFDC ID Format";
                            }
                            break;
                        case "1":
                            if ((this.form.RequestValue.value.length > 10) || (!(/^[0-9]*$/.test(this.form.RequestValue.value)))) {
                                return "Invalid SEAWARE Client ID Format";
                            }
                            break;
                        case "8":
                        case "9":
                            if ((this.form.RequestValue.value.length > 10) || (!(/^[0-9]*$/.test(this.form.RequestValue.value)))) {
                                return "Invalid EPSILON OCI/SSC Client ID Format";
                            }
                            break;
                        case "10":
                            if ((this.form.RequestValue.value.length > 13) || (!(/^[0-9]*$/.test(this.form.RequestValue.value)))) {
                                return "Invalid EPSILON NCL Client ID Format";
                            }
                            break;
                }
                }

                

            });

        }

        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            //this.cloneButton.toggle(this.isEditMode());
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let btns = super.getToolbarButtons();
            let newBtn: Serenity.ToolButton =
            {
                title: "Save And New",
                onClick: () => {
                    this.save(() => {
                        let ent: RequestAttributesRow = {};
                        ent.Id = Q.toId(this.form.Id.value);
                        this.loadEntity(ent);
                    });

                }
            }

            btns.push(newBtn);

            let dupBtn: Serenity.ToolButton =
            {
                title: "Clone",               
                onClick: () => {

                    if (!this.isEditMode()) {
                        return;
                    } 

                    var cloneEntity = this.getCloningEntity(); 
                    let ent: RequestAttributesRow = this.getCloningEntity();       
                    ent.Id = Q.toId(this.form.Id.value);

                    ent.ResolvedDt = null;
                    ent.RequestValue = null;
                        
                    this.loadEntity(ent);
                    Q.notifySuccess("Request Attribute cloned - Enter new ID.");
                }
            }

            btns.push(dupBtn);

            return btns;
        }

    }
}

namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class DimCruiseDialog extends Serenity.EntityDialog<DimCruiseRow, any> {
        protected getFormKey() { return DimCruiseForm.formKey; }
        protected getIdProperty() { return DimCruiseRow.idProperty; }
        protected getLocalTextPrefix() { return DimCruiseRow.localTextPrefix; }
        protected getNameProperty() { return DimCruiseRow.nameProperty; }
        protected getService() { return DimCruiseService.baseUrl; }

        protected form = new DimCruiseForm(this.idPrefix);

        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            //this.cloneButton.toggle(this.isEditMode());
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let btns = super.getToolbarButtons();
            let dupBtn: Serenity.ToolButton =
            {
                title: "Clone",
                onClick: () => {

                    if (!this.isEditMode()) {
                        return;
                    }

                    var cloneEntity = this.getCloningEntity();
                    let ent: DimCruiseRow = this.getCloningEntity();

                    ent.CruiseCd = null;

                    this.loadEntity(ent);
                    Q.notifySuccess("Dim_Cruise cloned.  Edit cloned record");
                }
            }

            btns.push(dupBtn);

            return btns;
        }

    }
}
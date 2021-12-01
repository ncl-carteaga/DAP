
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class DimCruiseDialog extends Serenity.EntityDialog<DimCruiseRow, any> {
        protected getFormKey() { return DimCruiseForm.formKey; }
        protected getIdProperty() { return DimCruiseRow.idProperty; }
        protected getLocalTextPrefix() { return DimCruiseRow.localTextPrefix; }
        protected getNameProperty() { return DimCruiseRow.nameProperty; }
        protected getService() { return DimCruiseService.baseUrl; }

        protected form = new DimCruiseForm(this.idPrefix);

        constructor() {
            super();

            this.form.CruiseSegmentToDt.addValidationRule(this.uniqueName, e => {
                 var startDate = new Date(this.form.CruiseSegmentFromDt.value);
                 var endDate = new Date(this.form.CruiseSegmentToDt.value);
                 if (endDate < startDate) {
                        return "Invalid Cruise Segment Dates!";
                 }
            });

            this.form.CruiseToDt.addValidationRule(this.uniqueName, e => {
                var startDate = new Date(this.form.CruiseFromDt.value);
                var endDate = new Date(this.form.CruiseToDt.value);
                if (endDate < startDate) {
                    return "Invalid Cruise Dates!";
                }
            });

            this.form.SegmentToDtMmddyyyy.addValidationRule(this.uniqueName, e => {
                if (this.form.SegmentToDtMmddyyyy.value != null) {

                    if ((this.form.SegmentToDtMmddyyyy.value.length > 8) || (!(/(0[1-9]|1[0-2])(1[0-9]|2[0-9]|3[0-1])(19|20)\d\d/.test(this.form.SegmentToDtMmddyyyy.value)))) {
                        return "Invalid Segment to Format. It should be ddmmyyyy.";
                    }
                }
            });

            this.form.CruiseToDtMmddyyyy.addValidationRule(this.uniqueName, e => {
                if (this.form.CruiseToDtMmddyyyy.value != null) {

                    if ((this.form.CruiseToDtMmddyyyy.value.length > 8) || (!(/(0[1-9]|1[0-2])(1[0-9]|2[0-9]|3[0-1])(19|20)\d\d/.test(this.form.CruiseToDtMmddyyyy.value)))) {
                        return "Invalid Cruise to Format. It should be ddmmyyyy.";
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
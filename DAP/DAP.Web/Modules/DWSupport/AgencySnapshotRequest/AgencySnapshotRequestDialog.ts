
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AgencySnapshotRequestDialog extends Serenity.EntityDialog<AgencySnapshotRequestRow, any> {
        protected getFormKey() { return AgencySnapshotRequestForm.formKey; }
        protected getIdProperty() { return AgencySnapshotRequestRow.idProperty; }
        protected getLocalTextPrefix() { return AgencySnapshotRequestRow.localTextPrefix; }
        protected getNameProperty() { return AgencySnapshotRequestRow.nameProperty; }
        protected getService() { return AgencySnapshotRequestService.baseUrl; }

        protected form = new AgencySnapshotRequestForm(this.idPrefix);

        constructor() {
            super();

            this.form = new AgencySnapshotRequestForm(this.idPrefix);

            this.form.RequestedByDate.addValidationRule(this.uniqueName, e => {
                var rdt = new Date(Q.formatDate(this.form.RequestedByDate.value, "MM/dd/yyyy"));
                //pdt.setHours(0, 0, 0, 0);
                var dt = new Date(Q.formatDate(new Date(), "MM/dd/yyyy"));
                //dt.setHours(0, 0, 0, 0);
                if (rdt.getTime() < dt.getTime()) {
                    return "Requested Date Should be greater han Today";
                }
            });

        }



        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew) {
                this.form.RequestedBy.value = Authorization.userDefinition.Username;
            }

            var rdt = new Date(Q.formatDate(this.form.RequestedByDate.value, "MM/dd/yyyy"));
            //pdt.setHours(0, 0, 0, 0);
            var dt = new Date(Q.formatDate(new Date(), "MM/dd/yyyy"));
            //dt.setHours(0, 0, 0, 0);
            if (rdt.getTime() < dt.getTime()) {

                Serenity.EditorUtils.setReadOnly(this.form.RequestedBy, true);
                Serenity.EditorUtils.setReadOnly(this.form.RequestedByDate, true);
                Serenity.EditorUtils.setReadOnly(this.form.RequestedReason, true);

                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
                this.deleteButton.hide();
            }
        }
    }
}
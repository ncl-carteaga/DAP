
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AmenitiesSuppDialog extends Serenity.EntityDialog<AmenitiesSuppRow, any> {
        protected getFormKey() { return AmenitiesSuppForm.formKey; }
        protected getIdProperty() { return AmenitiesSuppRow.idProperty; }
        protected getLocalTextPrefix() { return AmenitiesSuppRow.localTextPrefix; }
        protected getNameProperty() { return AmenitiesSuppRow.nameProperty; }
        protected getService() { return AmenitiesSuppService.baseUrl; }

        protected form = new AmenitiesSuppForm(this.idPrefix);


        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            Q.notifySuccess("Master detail entered successfully.");
            Q.notifyInfo("ENTER new detail.");
            
            var dialog = new AmenityDetailsSuppDialog();         

            dialog.loadEntityAndOpenDialog(<AmenityDetailsSuppRow>{
                AmenityId: response.EntityId,
                AmenityDetailCd: this.form.AmenityCd.value
            });
        }

        updateInterface() {
            super.updateInterface();

            // duplicate entered data
            this.form.AmenityDesc.change(e => {
                var val = this.form.AmenityDesc.value;

                // copy this value to other fields
                this.form.ConditionDesc.value = val;
                this.form.CommentTxt.value = val;
            });

            // duplicate entered data
            this.form.AmenityCostAmt.change(e => {
                var val = this.form.AmenityCostAmt.value;

                // copy this value to other fields
                this.form.AmenityAddonAmt.value = val;
            });
        }
    }
}

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
    }
}
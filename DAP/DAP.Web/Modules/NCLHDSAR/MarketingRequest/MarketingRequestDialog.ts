
namespace DAP.NCLHDSAR {

    import fld = MarketingRequestRow.Fields;

    @Serenity.Decorators.registerClass()
    export class MarketingRequestDialog extends Serenity.EntityDialog<MarketingRequestRow, any> {
        protected getFormKey() { return MarketingRequestForm.formKey; }
        protected getIdProperty() { return MarketingRequestRow.idProperty; }
        protected getLocalTextPrefix() { return MarketingRequestRow.localTextPrefix; }
        protected getNameProperty() { return MarketingRequestRow.nameProperty; }
        protected getService() { return MarketingRequestService.baseUrl; }

        protected form = new MarketingRequestForm(this.idPrefix);
       
        
        constructor() {
            super();

            // get form obj
            this.form = new MarketingRequestForm(this.idPrefix);

            // For each drop-down option, check required fields have value. //
            this.form.RequestTypeId.addValidationRule(this.uniqueName, e => {

                // Check dropdown ID 1 (Opt Outs)
                if (this.form.RequestTypeId.value == "1") {
                    if (Q.isEmptyOrNull(this.form.ChannelId.value)) {
                        let fld1 = fld.ChannelId;
                        return `Field ${fld1} is required.`;
                    }
                    
                }
                // Check dropdown ID 2 (Change of Address)
                else if (this.form.RequestTypeId.value == "2") {
                    if (Q.isEmptyOrNull(this.form.BrandId.value)) {
                        let fld1 = fld.BrandId;
                        return `Field ${fld1} is required.`;
                    }
                    else if (Q.isEmptyOrNull(this.form.Address1.value)) {
                        let fld1 = fld.Address1;
                        return `Field ${fld1} is required.`;
                    }
                }
            });
        }


        updateInterface() {
            super.updateInterface();
            // set dropdown default value. Passing in item ID
            this.form.ChannelId.value = '6';
        }
    }
}
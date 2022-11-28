
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

            this.form = new MarketingRequestForm(this.idPrefix);// For each drop-down option, check required fields have value. //            

            this.form.RequestTypeId.addValidationRule(this.uniqueName, e => {
                if (this.form.RequestTypeId.value == "1") {
                    // Check dropdown ID 1
                    if (Q.isEmptyOrNull(this.form.OptOutStatusID.value) || Q.isEmptyOrNull(this.form.ChannelId.value)) {
                        let fld1 = fld.OptOutStatusID;
                        let fld2 = fld.ChannelId;
                        return `Fields ${fld1} and ${fld2} required.`;
                    }
                    // Check dropdown ID 2
                } else if (this.form.RequestTypeId.value == "2") {
                    if (Q.isEmptyOrNull(this.form.Title.value)      || 
                        Q.isEmptyOrNull(this.form.Address1.value)   ||
                        Q.isEmptyOrNull(this.form.City.value)       ||
                        Q.isEmptyOrNull(this.form.Zip.value)        ||
                        Q.isEmptyOrNull(this.form.State.value)      ||
                        Q.isEmptyOrNull(this.form.Country.value) 
                    ) {
                        let fld1 = fld.Title;
                        let fld2 = fld.Address1;
                        let fld3 = fld.City;
                        let fld4 = fld.Zip;
                        let fld5 = fld.State;
                        let fld6 = fld.Country;
                        return `Fields ${fld1}, ${fld2}, ${fld3}, ${fld4} are required.`;
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
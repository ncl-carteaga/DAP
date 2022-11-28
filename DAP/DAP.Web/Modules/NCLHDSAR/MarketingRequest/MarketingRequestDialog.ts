
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

            this.form = new MarketingRequestForm(this.idPrefix);

            // For each drop-down option, check required fields have value. //            
            //this.form.RequestTypeId.addValidationRule(this.uniqueName, e => {
            //    if (this.form.RequestTypeId.value == "1") {
            //        // Check dropdown ID 1
            //        if (Q.isEmptyOrNull(this.form.OptOutStatusID.value) || Q.isEmptyOrNull(this.form.ChannelId.value)) {
            //            let fld1 = fld.OptOutStatusID;
            //            let fld2 = fld.ChannelId;
            //            return `Fields ${fld1} and ${fld2} required.`;
            //        }
            //        // Check dropdown ID 2
            //    } else if (this.form.RequestTypeId.value == "2") {
            //        if (Q.isEmptyOrNull(this.form.Title.value)) {
            //            let fld3 = fld.Title; 
            //            return `Field ${fld3} is required.`;
            //        }
            //    }
            //});

            //this.form.RequestTypeId.changeSelect2(e => {
            //    var rqvalue = Q.toId(this.form.RequestTypeId.value);
            //    if (rqvalue != null) {
            //        alert(rqvalue);
            //    }
            //});

            this.form.Title.addValidationRule(this.uniqueName, e => {
                if ((this.form.RequestTypeId.value == "2") && (this.form.Title.value == null)) {
                    return "Title is required for Address Change Requests";
                }
            });
            this.form.Address1.addValidationRule(this.uniqueName, e => {
                if ((this.form.RequestTypeId.value == "2") && (this.form.Address1.value == null)) {
                    return "Address1 is required for Address Change Requests";
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
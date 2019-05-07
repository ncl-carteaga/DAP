
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundAgentDialog extends Serenity.EntityDialog<OutboundAgentRow, any> {
        protected getFormKey() { return OutboundAgentForm.formKey; }
        protected getIdProperty() { return OutboundAgentRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundAgentRow.localTextPrefix; }
        protected getNameProperty() { return OutboundAgentRow.nameProperty; }
        protected getService() { return OutboundAgentService.baseUrl; }

        protected form = new OutboundAgentForm(this.idPrefix);

        constructor() {
            super();

            this.form = new OutboundAgentForm(this.idPrefix);

            this.form.NvsUserId.changeSelect2(e => {
                var nvsuserid = Q.toId(this.form.NvsUserId.value);                
                if (nvsuserid != null) {
                    this.form.CompanyCd.value = PCHODS.OutboundNvsUsersRow.getLookup().itemById[nvsuserid].CompanyCd;                   
                }
            });
        }

    }
}
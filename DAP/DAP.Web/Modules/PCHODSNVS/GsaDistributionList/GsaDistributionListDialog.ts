
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class GsaDistributionListDialog extends Serenity.EntityDialog<GsaDistributionListRow, any> {
        protected getFormKey() { return GsaDistributionListForm.formKey; }
        protected getIdProperty() { return GsaDistributionListRow.idProperty; }
        protected getLocalTextPrefix() { return GsaDistributionListRow.localTextPrefix; }
        protected getNameProperty() { return GsaDistributionListRow.nameProperty; }
        protected getService() { return GsaDistributionListService.baseUrl; }

        protected form = new GsaDistributionListForm(this.idPrefix);

    }
}
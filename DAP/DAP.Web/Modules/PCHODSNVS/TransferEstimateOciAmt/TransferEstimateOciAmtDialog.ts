
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class TransferEstimateOciAmtDialog extends Serenity.EntityDialog<TransferEstimateOciAmtRow, any> {
        protected getFormKey() { return TransferEstimateOciAmtForm.formKey; }
        protected getIdProperty() { return TransferEstimateOciAmtRow.idProperty; }
        protected getLocalTextPrefix() { return TransferEstimateOciAmtRow.localTextPrefix; }
        protected getNameProperty() { return TransferEstimateOciAmtRow.nameProperty; }
        protected getService() { return TransferEstimateOciAmtService.baseUrl; }

        protected form = new TransferEstimateOciAmtForm(this.idPrefix);

        constructor() {
            super();

            this.form = new TransferEstimateOciAmtForm(this.idPrefix);

            this.form.CruiseSegmentCd.changeSelect2(e => {
                var segmentcd = Q.toId(this.form.CruiseSegmentCd.value);
                if (segmentcd != null) {
                    //this.form.SegmentMarketName.value = PCHDW.DimCruiseRow.getLookup().itemById[segmentcd].MarketName;
                    this.form.SegmentMarketName.value = PCHODSNVS.GetCruiseSegmentRow.getLookup().itemById[segmentcd].MarketName;
                    this.form.ShipCd.value = PCHODSNVS.GetCruiseSegmentRow.getLookup().itemById[segmentcd].ShipCd;
                }
            });
        }

    }
}
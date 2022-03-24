
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class TransferEstimateOciAmtGrid extends Serenity.EntityGrid<TransferEstimateOciAmtRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.TransferEstimateOciAmt'; }
        protected getDialogType() { return TransferEstimateOciAmtDialog; }
        protected getIdProperty() { return TransferEstimateOciAmtRow.idProperty; }
        protected getLocalTextPrefix() { return TransferEstimateOciAmtRow.localTextPrefix; }
        protected getService() { return TransferEstimateOciAmtService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
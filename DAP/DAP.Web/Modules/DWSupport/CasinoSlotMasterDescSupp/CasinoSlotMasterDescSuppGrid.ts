
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CasinoSlotMasterDescSuppGrid extends Serenity.EntityGrid<CasinoSlotMasterDescSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CasinoSlotMasterDescSupp'; }
        protected getDialogType() { return CasinoSlotMasterDescSuppDialog; }
        protected getIdProperty() { return CasinoSlotMasterDescSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CasinoSlotMasterDescSuppRow.localTextPrefix; }
        protected getService() { return CasinoSlotMasterDescSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
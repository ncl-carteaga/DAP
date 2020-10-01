
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrBudgetByChannelGrid extends Serenity.EntityGrid<NtrBudgetByChannelRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrBudgetByChannel'; }
        protected getDialogType() { return NtrBudgetByChannelDialog; }
        protected getIdProperty() { return NtrBudgetByChannelRow.idProperty; }
        protected getLocalTextPrefix() { return NtrBudgetByChannelRow.localTextPrefix; }
        protected getService() { return NtrBudgetByChannelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        
    }
}
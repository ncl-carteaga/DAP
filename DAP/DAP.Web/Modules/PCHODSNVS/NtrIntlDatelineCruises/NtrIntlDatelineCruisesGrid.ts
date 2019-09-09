
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrIntlDatelineCruisesGrid extends Serenity.EntityGrid<NtrIntlDatelineCruisesRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrIntlDatelineCruises'; }
        protected getDialogType() { return NtrIntlDatelineCruisesDialog; }
        protected getIdProperty() { return NtrIntlDatelineCruisesRow.idProperty; }
        protected getLocalTextPrefix() { return NtrIntlDatelineCruisesRow.localTextPrefix; }
        protected getService() { return NtrIntlDatelineCruisesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
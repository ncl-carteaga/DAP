
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SurveyFilterExclusionSuppGrid extends Serenity.EntityGrid<SurveyFilterExclusionSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.SurveyFilterExclusionSupp'; }
        protected getDialogType() { return SurveyFilterExclusionSuppDialog; }
        protected getIdProperty() { return SurveyFilterExclusionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SurveyFilterExclusionSuppRow.localTextPrefix; }
        protected getService() { return SurveyFilterExclusionSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
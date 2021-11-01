
namespace DAP.Avaya {

    @Serenity.Decorators.registerClass()
    export class SkillSplitMappingGrid extends Serenity.EntityGrid<SkillSplitMappingRow, any> {
        protected getColumnsKey() { return 'Avaya.SkillSplitMapping'; }
        protected getDialogType() { return SkillSplitMappingDialog; }
        protected getIdProperty() { return SkillSplitMappingRow.idProperty; }
        protected getLocalTextPrefix() { return SkillSplitMappingRow.localTextPrefix; }
        protected getService() { return SkillSplitMappingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
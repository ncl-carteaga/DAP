
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class Skill2SkillgroupGrid extends Serenity.EntityGrid<Skill2SkillgroupRow, any> {
        protected getColumnsKey() { return 'DWSupport.Skill2Skillgroup'; }
        protected getDialogType() { return Skill2SkillgroupDialog; }
        protected getIdProperty() { return Skill2SkillgroupRow.idProperty; }
        protected getLocalTextPrefix() { return Skill2SkillgroupRow.localTextPrefix; }
        protected getService() { return Skill2SkillgroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
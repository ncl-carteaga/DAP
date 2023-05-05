
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class Skill2SkillgroupDialog extends Serenity.EntityDialog<Skill2SkillgroupRow, any> {
        protected getFormKey() { return Skill2SkillgroupForm.formKey; }
        protected getIdProperty() { return Skill2SkillgroupRow.idProperty; }
        protected getLocalTextPrefix() { return Skill2SkillgroupRow.localTextPrefix; }
        protected getNameProperty() { return Skill2SkillgroupRow.nameProperty; }
        protected getService() { return Skill2SkillgroupService.baseUrl; }

        protected form = new Skill2SkillgroupForm(this.idPrefix);

    }
}
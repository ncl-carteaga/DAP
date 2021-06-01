
namespace DAP.Avaya {

    @Serenity.Decorators.registerClass()
    export class SkillSplitMappingDialog extends Serenity.EntityDialog<SkillSplitMappingRow, any> {
        protected getFormKey() { return SkillSplitMappingForm.formKey; }
        protected getIdProperty() { return SkillSplitMappingRow.idProperty; }
        protected getLocalTextPrefix() { return SkillSplitMappingRow.localTextPrefix; }
        protected getNameProperty() { return SkillSplitMappingRow.nameProperty; }
        protected getService() { return SkillSplitMappingService.baseUrl; }

        protected form = new SkillSplitMappingForm(this.idPrefix);

    }
}
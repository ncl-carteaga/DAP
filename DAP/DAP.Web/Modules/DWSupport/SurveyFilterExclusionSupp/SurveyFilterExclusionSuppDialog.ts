
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SurveyFilterExclusionSuppDialog extends Serenity.EntityDialog<SurveyFilterExclusionSuppRow, any> {
        protected getFormKey() { return SurveyFilterExclusionSuppForm.formKey; }
        protected getIdProperty() { return SurveyFilterExclusionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SurveyFilterExclusionSuppRow.localTextPrefix; }
        protected getNameProperty() { return SurveyFilterExclusionSuppRow.nameProperty; }
        protected getService() { return SurveyFilterExclusionSuppService.baseUrl; }

        protected form = new SurveyFilterExclusionSuppForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            //b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            return b;
        }

        
    
    }
}
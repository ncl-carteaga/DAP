
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class FinReportPublishingSuppDialog extends Serenity.EntityDialog<FinReportPublishingSuppRow, any> {
        protected getFormKey() { return FinReportPublishingSuppForm.formKey; }
        protected getIdProperty() { return FinReportPublishingSuppRow.idProperty; }
        protected getLocalTextPrefix() { return FinReportPublishingSuppRow.localTextPrefix; }
        protected getNameProperty() { return FinReportPublishingSuppRow.nameProperty; }
        protected getService() { return FinReportPublishingSuppService.baseUrl; }

        protected form: FinReportPublishingSuppForm;

        constructor() {
            super();

            this.form = new FinReportPublishingSuppForm(this.idPrefix);

            this.form.PublishDat.addValidationRule(this.uniqueName, e => {
                var pdt = new Date(Q.formatDate(this.form.PublishDat.value, "MM/dd/yyyy"));
                //pdt.setHours(0, 0, 0, 0);
                var dt = new Date(Q.formatDate(new Date(), "MM/dd/yyyy"));
                //dt.setHours(0, 0, 0, 0);
               if (pdt.getTime() < dt.getTime()) {
                    return "Publish Date Should be greater or equal than Today";
                }
            });

        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);

            return b;

        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.form.ProcessedDateTs.value != null) {
                Serenity.EditorUtils.setReadOnly(this.form.PublishDat, true);
                Serenity.EditorUtils.setReadOnly(this.form.PublishCommentsTxt, true);
                Serenity.EditorUtils.setReadOnly(this.form.PublishCd, true);

                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
            }
        }

        protected updateInterface(): void {

            super.updateInterface();


            // finding all editor elements and setting their readonly attribute
            // note that this helper method only works with basic inputs, 
            // some editors require widget based set readonly overload (setReadOnly)
            //Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);

            //// this.form.NclYn.element.closest('.category').toggleClass('category collapsible collapsed', true);
            ////this.form.Address1.element.closest('.category').toggleClass('category collapsible collapsed', true);

            //// img.toggleClass('fa-plus').toggleClass('fa-minus');

            //// remove required asterisk (*)
            //this.element.find('sup').hide();

            //this.applyChangesButton.hide();
            //this.saveAndCloseButton.hide();

        }

        protected updateTitle(): void {
            //super.updateTitle();

            // remove super.updateTitle() call above and uncomment 
            // below line if you'd like to use this version
            // 
            this.dialogTitle = 'Financial Report Publishing';
        }

    }
}
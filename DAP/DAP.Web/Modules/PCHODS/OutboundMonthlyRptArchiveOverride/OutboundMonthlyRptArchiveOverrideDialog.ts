
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundMonthlyRptArchiveOverrideDialog extends Serenity.EntityDialog<OutboundMonthlyRptArchiveOverrideRow, any> {
        protected getFormKey() { return OutboundMonthlyRptArchiveOverrideForm.formKey; }
        protected getIdProperty() { return OutboundMonthlyRptArchiveOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundMonthlyRptArchiveOverrideRow.localTextPrefix; }
        protected getNameProperty() { return OutboundMonthlyRptArchiveOverrideRow.nameProperty; }
        protected getService() { return OutboundMonthlyRptArchiveOverrideService.baseUrl; }

        protected form = new OutboundMonthlyRptArchiveOverrideForm(this.idPrefix);

        constructor() {
            super();
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }

    }
}
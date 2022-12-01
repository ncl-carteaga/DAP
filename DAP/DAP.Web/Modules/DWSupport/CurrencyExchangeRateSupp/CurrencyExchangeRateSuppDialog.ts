
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CurrencyExchangeRateSuppDialog extends Serenity.EntityDialog<CurrencyExchangeRateSuppRow, any> {
        protected getFormKey() { return CurrencyExchangeRateSuppForm.formKey; }
        protected getIdProperty() { return CurrencyExchangeRateSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyExchangeRateSuppRow.localTextPrefix; }
        protected getNameProperty() { return CurrencyExchangeRateSuppRow.nameProperty; }
        protected getService() { return CurrencyExchangeRateSuppService.baseUrl; }

        protected form = new CurrencyExchangeRateSuppForm(this.idPrefix);


        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: 'Close Record',
                cssClass: 'edit-permissions-button',
                icon: 'fa-lock text-green',
                onClick: () => {                   

                    // -------------------------------- [ VALIDATE ] --------------------------------- //
                        // (record cannot be closed if criteria already met)
                        if (this.form.SailToDat.value == lastDayOfMonthDate(this.form.SailFromDat.value)) {
                            window.setTimeout(() => Q.notifyError('Record already closed.'), 0);
                            this.dialogClose();

                            return buttons; // return immediately
                        }


                    // ------------------------------ [ CLOSE RECORD ] ------------------------------ //
                    // get sailFromDate's last day of the month to update sailFromToDate
                        this.entity.SailToDat = lastDayOfMonthDate(this.form.SailFromDat.value);
                        CurrencyExchangeRateSuppService.Update({
                            EntityId: this.entityId,
                            Entity: this.entity
                            }, response => {
                                this.dialogClose();
                                window.setTimeout(() => Q.notifySuccess('Record successfully closed.'), 0);
                        });
                    // ----------------------------------------------------------------------------- //

                    
                    // update row set sailToDate = lastDayOfMonth(sailfromDate)
                    // insert new row sailToDate = 9999-12-31 sailFromDate = firstDayOfMonth(sailfromDate)
                }
            });

            return buttons;
        }
    }

    function lastDayOfMonthDate(date: string) {
        var dateArr = date.split('-');
        var dateObj = new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]));
        var newDate = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);

        return Q.formatDate(newDate.toDateString(), "yyyy-MM-dd");
    }
}
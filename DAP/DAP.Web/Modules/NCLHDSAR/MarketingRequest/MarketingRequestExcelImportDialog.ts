namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class MarketingRequestExcelImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: MarketingRequestExcelImportForm;
        private index: number;

        constructor(i: number) {
            super();

            this.form = new MarketingRequestExcelImportForm(this.idPrefix);
            this.index = i;
        }

        protected getDialogTitle(): string {
            return "Excel Import";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Import',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        // Select service type
                        if (this.index == 0) {
                            MarketingRequestService.ExcelImportChangeOfAddress({
                                FileName: this.form.FileName.value.Filename
                            }, response => {
                                Q.notifyInfo(
                                    'Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));

                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }

                                this.dialogClose();
                            });
                        } else if (this.index == 1){
                            MarketingRequestService.ExcelImportReturnMail({
                                FileName: this.form.FileName.value.Filename
                            }, response => {
                                Q.notifyInfo(
                                    'Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));

                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }

                                this.dialogClose();
                            });
                        } else if (this.index == 2) {
                            MarketingRequestService.ExcelImportOptOut({
                                FileName: this.form.FileName.value.Filename
                            }, response => {
                                Q.notifyInfo(
                                    'Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));

                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }

                                this.dialogClose();
                            });
                        }
                    },
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ];
        }
    }
}
﻿namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SailingExclusionSuppExcelImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: SailingExclusionSuppExcelImportForm;

        constructor() {
            super();

            this.form = new SailingExclusionSuppExcelImportForm(this.idPrefix);
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

                        SailingExclusionSuppService.ExcelImport({
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
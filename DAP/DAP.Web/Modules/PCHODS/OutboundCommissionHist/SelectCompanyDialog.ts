namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class SelectComapanyDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey() { return SelectCompanyForm.formKey; }

        public returnData: (dataList: string) => void;

        protected form = new SelectCompanyForm(this.idPrefix);

        constructor() {
            super();

            this.dialogTitle = "Create New Bracket";
            
        }

        createBracket() {
            var HistRow: OutboundCommissionHistRow[];
            var equalFilter = { "CompanyCd": this.form.CompanyCd.value };

            PCHODS.OutboundCommissionHistService.List({
                EqualityFilter: equalFilter
            }, response => {
                HistRow = response.Entities;
            });

        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Create New Bracket',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.CompanyCd.value == null ||
                            Q.isEmptyOrNull(this.form.CompanyCd.value)) {
                            Q.notifyError("Please select a Company!");
                            return;
                        }

                        //var HistRow[] = <PCHODS.OutboundCommissionHistRow>{};

                        var HistRow: OutboundCommissionHistRow[];
                        var equalFilter = { "CompanyCd": this.form.CompanyCd.value };

                        PCHODS.OutboundCommissionHistService.List({
                            EqualityFilter: equalFilter
                        }, response => {
                                HistRow = response.Entities;
                                for (let item of HistRow) {
                                    item.InactiveDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                                    //Q.alert(item.InactiveDt);
                                    PCHODS.OutboundCommissionHistService.Update({
                                        EntityId: item.CommissionHistId,
                                        Entity: item
                                    }, response => {
                                            item.CommissionHistId = null;
                                            item.ActiveDt = item.InactiveDt;
                                            item.InactiveDt = null;
                                            PCHODS.OutboundCommissionHistService.Create({                                                
                                                Entity: item
                                            }, response => {
                                                    Serenity.SubDialogHelper.triggerDataChange(this);
                                            });
                                    });
                                }                                
                                Q.notifySuccess("Bracket Created Successfully!", '');
                                
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

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 550;
            return opt;
        }

        protected onDialogClose() {
            this.returnData(this.form.CompanyCd.value);
        }
    }
}
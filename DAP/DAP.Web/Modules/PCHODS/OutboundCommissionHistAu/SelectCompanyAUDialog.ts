namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class SelectComapanyAUDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey() { return SelectCompanyAuForm.formKey; }

        public returnData: (dataList: string) => void;

        protected form = new SelectCompanyAuForm(this.idPrefix);

        constructor() {
            super();

            this.dialogTitle = "Create New Bracket";
            
        }

        createBracket() {
            var HistRow: OutboundCommissionHistAuRow[];
            var equalFilter = { "CompanyCd": this.form.CompanyCd.value };

            PCHODS.OutboundCommissionHistAuService.List({
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


                        if (this.form.EffectiveDt.value == null ||
                            Q.isEmptyOrNull(this.form.EffectiveDt.value)) {
                            Q.notifyError("Please enter an effective date!");
                            return;
                        }

                        //var HistRow[] = <PCHODS.OutboundCommissionHistRow>{};

                        var HistRow: OutboundCommissionHistAuRow[];
                        var equalFilter = { "CompanyCd": this.form.CompanyCd.value };

                        PCHODS.OutboundCommissionHistAuService.List({
                            EqualityFilter: equalFilter
                        }, response => {
                                HistRow = response.Entities;
                                for (let item of HistRow) {

                                    item.InactiveDt = Q.formatDate(this.form.EffectiveDt.value, "MM/dd/yyyy");
                                     
                                    //Q.alert(item.InactiveDt);
                                    PCHODS.OutboundCommissionHistAuService.Update({
                                        EntityId: item.CommissionHistAuId,
                                        Entity: item
                                    }, response => {
                                            item.CommissionHistAuId = null;
                                            item.ActiveDt = this.form.EffectiveDt.value;
                                            item.InactiveDt = null;
                                            PCHODS.OutboundCommissionHistAuService.Create({                                                
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
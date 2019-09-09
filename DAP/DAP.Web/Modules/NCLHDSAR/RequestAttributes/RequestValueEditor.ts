namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerEditor()
    export class RequestValueEditor extends Serenity.StringEditor {

        constructor(input: JQuery) {
            super(input);

            this.addValidationRule(this.uniqueName, e => {
                var value = Q.trimToNull(this.get_value());
                if (value == null) {
                    return null;
                }
                return RequestValueEditor.validate(value);
            });

            input.bind('change', e => {
                if (!Serenity.WX.hasOriginalEvent(e)) {
                    return;
                }
                this.formatValue();
            });

            input.bind('blur', e => {
                if (this.element.hasClass('valid')) {
                    this.formatValue();
                }
            });
        }

        protected formatValue(): void {
            this.element.val(this.getFormattedValue());
        }

        protected getFormattedValue(): string {
            var value = this.element.val();
            
            return RequestValueEditor.formatField(value);
        }

        @Serenity.Decorators.option()
        public multiple: boolean;

        get_value() {
            return this.getFormattedValue();
        }

        set_value(value: string) {
            this.element.val(value);
        }

        static validate(value: string) {
            var valid = RequestValueEditor.isValidValue(value);
            if (valid) {
                return null;
            }
            return Q.text('Invalid Format');
        }

        static isValidValue(requestvalue: string) {
            if (Q.isEmptyOrNull(requestvalue)) {
                return false;
            }
            requestvalue = Q.replaceAll(Q.replaceAll(requestvalue, ' ', ''), '-', '');
            if (requestvalue.length < 10) {
                return false;
            }

          

            //if (requestvalue.length !== 10) {
            //    return false;
            //}
           
            for (var i = 0; i < requestvalue.length; i++) {
                var c = requestvalue.charAt(i);
                if (c < '0' || c > '9') {
                    return false;
                }
            }

            return true;
        }

        static formatField(requestvalue) {
        //    if (!PhoneEditor.isValidPhone(phone)) {
        //        return phone;
        //    }
        //    phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
        //    if (Q.startsWith(phone, '0')) {
        //        phone = phone.substring(1);
        //    }
        //    phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
            return requestvalue;
        }

       
    }
}
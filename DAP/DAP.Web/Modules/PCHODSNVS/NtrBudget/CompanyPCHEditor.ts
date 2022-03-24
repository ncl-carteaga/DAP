namespace DAP.PCHODSNVS {
         /**
         * Our select editor with hardcoded values.
         * 
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available 
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        @Serenity.Decorators.registerEditor()
        export class SelectPCHCompanyEditor extends Serenity.Select2Editor<any, any> {

            constructor(container: JQuery) {
                super(container, null);

                // add option accepts a key (id) value and display text value
                this.addOption("100", "100 (Oceania Cruises)");
                this.addOption("110", "110 (Regent Seven Seas Cruises)");

            }
        }
    }

namespace DAP.PCHODS {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class SelectCompanyAUEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            // add option accepts a key (id) value and display text value
            this.addOption("100", "Oceania Cruises");
            this.addOption("110", "Regent Seven Seas Cruises");
            this.addOption("111", "International");
            //this.addOption("112", "Latam");
            //this.addOption("113", "UK DE");

            // you may also use addItem which accepts a Select2Item parameter
            //this.addItem({
            //    id: "key3",
            //    text: "Text 3"
            //});

            //// don't let selecting this one (disabled)
            //this.addItem({
            //    id: "key4",
            //    text: "Text 4",
            //    disabled: true
            //});
        }
    }
}
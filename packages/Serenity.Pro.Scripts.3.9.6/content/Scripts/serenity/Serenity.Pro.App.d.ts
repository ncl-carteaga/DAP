/// <reference types="jquery" />
/// <reference types="react" />
declare namespace Serenity {
    class SingleLineTextFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        static formatValue(value: string): string;
    }
}
declare namespace Serenity {
    interface IdleTimeoutOptions {
        /** which events to consider as an activity. */
        activityEvents?: string;
        /** signout user if no activity within this duration (seconds). default is 900 (15 mins). */
        activityTimeout?: number;
        /** optional callback that is called just before signing out */
        beforeSignout?: () => void;
        /** interval for checking timer, default is 5 seconds */
        checkInterval?: number;
        /** interval for calling keep alive url in seconds, default is 300 (5 mins) */
        keepAliveTimer?: number;
        /** keep alive url */
        keepAliveUrl?: string;
        /** url used to signout user */
        signoutUrl?: string;
        /** show warning for this number of seconds */
        warningDuration?: number;
    }
    class IdleTimeout {
        private options;
        private idleTimer;
        private keepAliveTimer;
        private warningTimer;
        private remainingTimer;
        constructor(options: IdleTimeoutOptions);
        protected startKeepAliveTimer(): void;
        protected isWarningActive(): boolean;
        protected startWarningTimer(): void;
        protected stopWarningTimer(): void;
        protected warningTimeout(): void;
        protected resetIdleTimer(): void;
        protected idleTimeout(): void;
        protected checkActivityTimeout(): void;
        protected signout(): void;
        protected showWarning(): void;
        protected closeWarning(): void;
        protected getRemainingSeconds(): number;
        protected countdownDisplay(): void;
        static defaults: IdleTimeoutOptions;
    }
}
declare namespace Serenity {
    function setupUIOverrides(): void;
}
declare namespace Serenity {
    /**
     * A dialog/panel base class that easily generates a wizard UI from tabs in a form definition (e.g. Form.cs)
     */
    abstract class WizardDialog<TEntity, TOptions> extends Serenity.TemplatedDialog<TOptions> {
        private wizardGrid;
        /**
         * Creates a new wizard dialog
         * @param opt options, might be used by derived classes
         */
        constructor(opt?: TOptions);
        /**
         * gets property grid options
         */
        protected getPropertyGridOptions(): PropertyGridOptions;
        /**
         * gets form key to use to load property items / tabs
         */
        protected getFormKey(): string;
        /**
         * gets local text prefix for labels
         */
        protected getLocalTextPrefix(): string;
        /**
         * gets list of property items to shown on form, uses form key to load items by default
         */
        protected getPropertyItems(): Serenity.PropertyItem[];
        /**
         * gets initial entity to load onto form, override these to customize initial form values
         */
        protected getInitialEntity(): TEntity;
        protected readonly maxSteps: number;
        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        protected moveToStep(toStep: number): void;
        private _step;
        protected step: number;
        /**
         * called to reset the form, and go back to first step
         */
        protected reset(): void;
        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        protected finish(): void;
        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        protected next(toStep: number): void;
        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        protected back(toStep: number): void;
        private getStepLink;
        private getStepPanel;
        /**
         * make sure derived classes use WizardDialog template,
         * if they don't define one of their own
         */
        protected getFallbackTemplate(): string;
        /**
         * gets cancel confirmation message, return null to disable confirmation
         */
        protected getCancelMessage(): string;
        /**
         * confirms when user tries to cancel or close the wizard
         * @param e
         */
        protected confirmCancel(e: JQueryEventObject): void;
        /** gets save entity from form, optionally from a limited list of steps (tabs)
         * @param steps the list of steps to read data from, pass null to get all
         */
        protected getSaveEntity(steps?: number[]): TEntity;
        protected compactSteps: boolean;
    }
}
declare namespace Serenity {
    interface AutoColumnWidthMixinOptions {
        grid: Serenity.DataGrid<any, any>;
        /** Disable auto size on load behavior, default is false, user can stil auto size by double click */
        disabled?: boolean;
        /** True to just auto size once on load, not on every load, like after changing pages, sorting etc, default is false */
        autoSizeAllJustOnce?: boolean;
        /** Disable auto size on load behavior if user manually resizes a column, default is true */
        disableIfUserResize?: boolean;
        /** If column has an explicit width set in Form.cs, use that width on auto size,
         * doesn't effect manually triggered auto size by double click, default is false */
        useExplicitWidths?: boolean;
        /** Set to true if headers shouldn't affect auto width, default is false.
         * If passed a number, header are considered for auto width but only up to that
         * number, e.g. if you pass 200, and header width is 300, 200 will be used */
        ignoreHeaders?: boolean | number;
        /** Maximum rows to scan in data source, default is infinite */
        maxRows?: number;
        /** Maximum auto column width, default value is 400 */
        maxWidth?: number;
        /** Minimum auto column width, default value is 30 */
        minWidth?: number;
    }
    /**
     * A mixin that can be applied to a DataGrid for auto size column width functionality
     */
    class AutoColumnWidthMixin extends Serenity.Widget<AutoColumnWidthMixinOptions> {
        private slickGrid;
        private $container;
        private _disabled;
        private autoSizing;
        private markupReadyOnce;
        private oldMarkupReady;
        private oldPersistSettings;
        private oldGetCurrentSettings;
        private oldRestoreSettings;
        disabled: boolean;
        private columnResizeHandler;
        constructor(options: AutoColumnWidthMixinOptions);
        destroy(): void;
        private resizeHandleClick;
        private getAutoColumnWidth;
        private autoSizeColumn;
        private queueAutoSize;
        autoSizeAll(useExplicitWidths?: boolean): void;
        private createRow;
        private getMaxColumnWidth;
    }
}
declare namespace Serenity {
    interface CardViewItemsProps<TItem> {
        items: TItem[];
        renderItem: (item: TItem, index: number) => React.ReactNode;
    }
    class CardViewItems<TItem> extends React.Component<CardViewItemsProps<TItem>> {
        render(): React.ReactNode;
    }
}
declare namespace Serenity {
    type CardViewType = "card" | "grid";
    /**
     * A mixin that can be applied to a DataGrid for card view functionality
     */
    class CardViewMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private cardContainer;
        constructor(options: CardViewMixinOptions<TItem>);
        private switchView;
        private updateCardItems;
        private resizeCardView;
    }
    interface CardViewMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        renderItem: (item: TItem, index: number) => React.ReactNode;
    }
}
declare namespace Serenity {
    /**
     * A mixin that can be applied to a DataGrid for favorite views functionality
     */
    class FavoriteViewsMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private ul;
        constructor(options: FavoriteViewsMixinOptions<TItem>);
        private populateFavorites;
        private saveFavorites;
        private getFavorites;
    }
    interface FavoriteViewsMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
    }
}
declare namespace Slick {
    interface Column {
        summaryType?: Serenity.SummaryType;
    }
}
declare namespace Serenity {
    interface CustomSummaryMixinOptions {
        grid: Serenity.DataGrid<any, any>;
    }
    class CustomSummaryMixin {
        constructor(options: CustomSummaryMixinOptions);
    }
}
declare namespace Slick {
    interface Column {
        grouping?: false | GroupInfo<any>;
    }
}
declare namespace Slick.Plugins {
    interface DraggableGroupingOptions {
        deleteIconCssClass?: string;
        deleteIconImage?: string;
        dropPlaceHolderText?: string;
        getGroupingFor?: (column: Column) => GroupInfo<any>;
        getAllColumns?: () => Slick.Column[];
    }
    /**
     * Based on plugin at https://github.com/muthukumarse/Slickgrid
     */
    class DraggableGrouping {
        private grid;
        private gridUid;
        private dataView;
        private dropbox;
        private dropboxPlaceholder;
        private expandAll;
        private collapseAll;
        private options;
        private columnsGroupBy;
        onGroupChanged: Event<any>;
        constructor(options?: DraggableGroupingOptions);
        init(grid: Slick.Grid): void;
        private getColumns;
        destroy(): void;
        private setupColumnDropbox;
        getGroupingFor(column: Column): GroupInfo<any>;
        handleGroupByDrop(container: JQuery, columnid: string): void;
        private addColumnGroupBy;
        setDroppedGroups(idList: string[]): void;
        private removeGroupBy;
        private updateInterface;
        private updateGroupBy;
        static setupColumnReorder(grid: Slick.Grid, $headers: JQuery, setupColumnResize: () => void, trigger: (ev: any, p: any) => void): void;
    }
}
declare namespace Serenity {
    interface GridPersistanceFlags {
        groupColumns?: boolean;
    }
    interface PersistedGridSettings {
        groupColumns?: string[];
    }
    interface DraggableGroupingMixinOptions {
        grid: Serenity.DataGrid<any, any>;
    }
    class DraggableGroupingMixin {
        readonly plugin: Slick.Plugins.DraggableGrouping;
        constructor(options: DraggableGroupingMixinOptions);
    }
}
declare namespace Serenity {
    const enum HeaderFilterType {
        disabled = 0,
        value = 1,
        text = 2
    }
}
declare namespace Slick {
    interface Column {
        headerFilterType?: Serenity.HeaderFilterType;
        headerFilterValues?: object[];
    }
}
declare namespace Slick.Plugins {
    interface HeaderFiltersOptions {
        buttonImage?: string;
        useColumnFormatter?: boolean;
        getFilterValues?: (column: Slick.Column, callback: (values: object[], texts?: string[]) => void) => void;
        getFilterType?: (column: Slick.Column) => Serenity.HeaderFilterType;
    }
    class HeaderFilters {
        private grid;
        private menu;
        private searchInput;
        private handler;
        private options;
        private checkedValues;
        private filterValues;
        private filterTexts;
        onFilterApplied: Event<any>;
        onCommand: Event<any>;
        constructor(options: HeaderFiltersOptions);
        init(g: Slick.Grid): void;
        destroy(): void;
        getFilterType(column: Slick.Column): Serenity.HeaderFilterType;
        private handleBodyMouseDown;
        private hideMenu;
        private handleHeaderCellRendered;
        private handleBeforeHeaderCellDestroy;
        private addMenuItem;
        private addSearchInput;
        private updateFilterItems;
        private getFilterText;
        private showFilter;
        private columnsResized;
        private onCheckboxClick;
        private setButtonImage;
        private handleApply;
        private containsFilter;
        getFilterValue(item: any, column: Slick.Column): any;
        private sortFilterValues;
        private updateFilterValues;
        private updateFilterValuesFromData;
        private handleMenuItemClick;
    }
}
declare namespace Serenity {
    interface HeadersFiltersMixinOptions {
        grid: Serenity.DataGrid<any, any>;
        filterByText?: boolean;
    }
    /**
     * A mixin that can be applied to a DataGrid for column filters functionality
     */
    class HeaderFiltersMixin {
        private filterByText;
        constructor(options: HeadersFiltersMixinOptions);
    }
}

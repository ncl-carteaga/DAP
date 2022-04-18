namespace DAP.PCHODS {
    export interface UarSrDirAboveListRow {
        Id?: number;
        Jobtitle?: string;
        IsSrDirAbove?: number;
        DateEffective?: string;
        DateExpires?: string;
        RowChangeReason?: string;
    }

    export namespace UarSrDirAboveListRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Jobtitle';
        export const localTextPrefix = 'PCHODS.UarSrDirAboveList';

        export declare const enum Fields {
            Id = "Id",
            Jobtitle = "Jobtitle",
            IsSrDirAbove = "IsSrDirAbove",
            DateEffective = "DateEffective",
            DateExpires = "DateExpires",
            RowChangeReason = "RowChangeReason"
        }
    }
}


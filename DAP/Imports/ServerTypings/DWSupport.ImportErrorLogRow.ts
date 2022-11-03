namespace DAP.DWSupport {
    export interface ImportErrorLogRow {
        ImportLogId?: number;
        RunNumber?: number;
        ImportDate?: string;
        Calledby?: string;
        FileName?: string;
        ErrorMessage?: string;
    }

    export namespace ImportErrorLogRow {
        export const idProperty = 'ImportLogId';
        export const nameProperty = 'Calledby';
        export const localTextPrefix = 'DWSupport.ImportErrorLog';

        export declare const enum Fields {
            ImportLogId = "ImportLogId",
            RunNumber = "RunNumber",
            ImportDate = "ImportDate",
            Calledby = "Calledby",
            FileName = "FileName",
            ErrorMessage = "ErrorMessage"
        }
    }
}


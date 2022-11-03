namespace DAP.Common {
    export interface BackgroundTaskLogRow {
        LogId?: number;
        TaskKey?: string;
        RunAt?: string;
        Status?: number;
        Server?: string;
        Message?: string;
    }

    export namespace BackgroundTaskLogRow {
        export const idProperty = 'LogId';
        export const nameProperty = 'TaskKey';
        export const localTextPrefix = 'Common.BackgroundTaskLog';

        export declare const enum Fields {
            LogId = "LogId",
            TaskKey = "TaskKey",
            RunAt = "RunAt",
            Status = "Status",
            Server = "Server",
            Message = "Message"
        }
    }
}


namespace DAP.PCHDW {
    export interface ScheduledJobRow {
        ScheduledJobId?: number;
        JobName?: string;
        JobDescription?: string;
    }

    export namespace ScheduledJobRow {
        export const idProperty = 'ScheduledJobId';
        export const nameProperty = 'JobName';
        export const localTextPrefix = 'PCHDW.ScheduledJob';

        export declare const enum Fields {
            ScheduledJobId = "ScheduledJobId",
            JobName = "JobName",
            JobDescription = "JobDescription"
        }
    }
}



namespace DAP.DWSupport {
    export interface AgencySnapshotRequestRow {
        AgencySnapshotReqId?: number;
        RequestedBy?: string;
        RequestedByDate?: string;
        RequestedReason?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        ModifiedBy?: string;
        ModifiedDate?: string;
    }

    export namespace AgencySnapshotRequestRow {
        export const idProperty = 'AgencySnapshotReqId';
        export const nameProperty = 'RequestedBy';
        export const localTextPrefix = 'DWSupport.AgencySnapshotRequest';

        export namespace Fields {
            export declare const AgencySnapshotReqId;
            export declare const RequestedBy;
            export declare const RequestedByDate;
            export declare const RequestedReason;
            export declare const CreatedBy;
            export declare const CreatedDate;
            export declare const ModifiedBy;
            export declare const ModifiedDate;
        }

        [
            'AgencySnapshotReqId',
            'RequestedBy',
            'RequestedByDate',
            'RequestedReason',
            'CreatedBy',
            'CreatedDate',
            'ModifiedBy',
            'ModifiedDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
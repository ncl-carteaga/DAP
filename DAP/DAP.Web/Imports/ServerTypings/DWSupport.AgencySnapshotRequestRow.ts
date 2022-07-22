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

        export declare const enum Fields {
            AgencySnapshotReqId = "AgencySnapshotReqId",
            RequestedBy = "RequestedBy",
            RequestedByDate = "RequestedByDate",
            RequestedReason = "RequestedReason",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            ModifiedBy = "ModifiedBy",
            ModifiedDate = "ModifiedDate"
        }
    }
}


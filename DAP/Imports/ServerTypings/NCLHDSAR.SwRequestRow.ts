namespace DAP.NCLHDSAR {
    export interface SwRequestRow {
        RecordId?: number;
        ApiResponseId?: string;
        ApiResponse?: string;
        ApiResponseDepth?: string;
        ClientFirstName?: string;
        ClientLastName?: string;
        ClientEmailAddress?: string;
        ClientGuestCategory?: string;
        ClientZipCode?: string;
        ClientAddress?: string;
        ClientLatitudesNumber?: string;
        ClientIsRelatedtoHousehold?: string;
        RequestType?: string;
        RecordTimeStamp?: string;
        LastUpdatedDt?: string;
        UpdatedBy?: string;
        AssigneeId?: number;
        StatusId?: number;
        DeadlineDt?: string;
        AssigneeFullName?: string;
        AssigneeIsActive?: boolean;
        StatusStatusDescription?: string;
        StatusStatusOrder?: number;
        DaysOld?: number;
        DaysLeft?: number;
        AttributeCount?: number;
        NoteList?: NoteRow[];
    }

    export namespace SwRequestRow {
        export const idProperty = 'RecordId';
        export const nameProperty = 'ClientLastName';
        export const localTextPrefix = 'NCLHDSAR.SwRequest';

        export declare const enum Fields {
            RecordId = "RecordId",
            ApiResponseId = "ApiResponseId",
            ApiResponse = "ApiResponse",
            ApiResponseDepth = "ApiResponseDepth",
            ClientFirstName = "ClientFirstName",
            ClientLastName = "ClientLastName",
            ClientEmailAddress = "ClientEmailAddress",
            ClientGuestCategory = "ClientGuestCategory",
            ClientZipCode = "ClientZipCode",
            ClientAddress = "ClientAddress",
            ClientLatitudesNumber = "ClientLatitudesNumber",
            ClientIsRelatedtoHousehold = "ClientIsRelatedtoHousehold",
            RequestType = "RequestType",
            RecordTimeStamp = "RecordTimeStamp",
            LastUpdatedDt = "LastUpdatedDt",
            UpdatedBy = "UpdatedBy",
            AssigneeId = "AssigneeId",
            StatusId = "StatusId",
            DeadlineDt = "DeadlineDt",
            AssigneeFullName = "AssigneeFullName",
            AssigneeIsActive = "AssigneeIsActive",
            StatusStatusDescription = "StatusStatusDescription",
            StatusStatusOrder = "StatusStatusOrder",
            DaysOld = "DaysOld",
            DaysLeft = "DaysLeft",
            AttributeCount = "AttributeCount",
            NoteList = "NoteList"
        }
    }
}


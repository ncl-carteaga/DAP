namespace DAP.PCHODS {
    export interface UarUnknownReviewerRow {
        Id?: number;
        EmployeeId?: string;
        UserLoginName?: string;
        UserFullName?: string;
        Firstname?: string;
        Middlename?: string;
        Lastname?: string;
        OfficeCode?: string;
        Department?: string;
        Comments?: string;
        UserGroupId?: string;
        UserGroupName?: string;
        GroupDescription?: string;
        UserGroupRights?: string;
        TaskId?: string;
        TaskName?: string;
        CriticalFuction?: string;
        Accesstype?: string;
        SupEmployeeid?: string;
        ReviewerFirstname?: string;
        ReviewerLastname?: string;
        HowFound?: string;
        AdManager?: string;
        AdActiveStatus?: string;
        HrEmpStatus?: string;
        AdDescription?: string;
        ReviewerItCompliance?: string;
    }

    export namespace UarUnknownReviewerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeId';
        export const localTextPrefix = 'PCHODS.UarUnknownReviewer';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            UserLoginName = "UserLoginName",
            UserFullName = "UserFullName",
            Firstname = "Firstname",
            Middlename = "Middlename",
            Lastname = "Lastname",
            OfficeCode = "OfficeCode",
            Department = "Department",
            Comments = "Comments",
            UserGroupId = "UserGroupId",
            UserGroupName = "UserGroupName",
            GroupDescription = "GroupDescription",
            UserGroupRights = "UserGroupRights",
            TaskId = "TaskId",
            TaskName = "TaskName",
            CriticalFuction = "CriticalFuction",
            Accesstype = "Accesstype",
            SupEmployeeid = "SupEmployeeid",
            ReviewerFirstname = "ReviewerFirstname",
            ReviewerLastname = "ReviewerLastname",
            HowFound = "HowFound",
            AdManager = "AdManager",
            AdActiveStatus = "AdActiveStatus",
            HrEmpStatus = "HrEmpStatus",
            AdDescription = "AdDescription",
            ReviewerItCompliance = "ReviewerItCompliance"
        }
    }
}


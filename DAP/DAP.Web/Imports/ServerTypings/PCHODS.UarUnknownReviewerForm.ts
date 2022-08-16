namespace DAP.PCHODS {
    export interface UarUnknownReviewerForm {
        EmployeeId: Serenity.LookupEditor;
        UserLoginName: Serenity.StringEditor;
        UserFullName: Serenity.StringEditor;
        Firstname: Serenity.StringEditor;
        Middlename: Serenity.StringEditor;
        Lastname: Serenity.StringEditor;
        OfficeCode: Serenity.StringEditor;
        Department: Serenity.StringEditor;
        Comments: Serenity.StringEditor;
        UserGroupId: Serenity.StringEditor;
        UserGroupName: Serenity.StringEditor;
        GroupDescription: Serenity.StringEditor;
        UserGroupRights: Serenity.StringEditor;
        TaskId: Serenity.StringEditor;
        TaskName: Serenity.StringEditor;
        CriticalFuction: Serenity.StringEditor;
        Accesstype: Serenity.StringEditor;
        SupEmployeeid: Serenity.StringEditor;
        ReviewerFirstname: Serenity.StringEditor;
        ReviewerLastname: Serenity.StringEditor;
        HowFound: Serenity.StringEditor;
        AdManager: Serenity.StringEditor;
        AdActiveStatus: Serenity.StringEditor;
        HrEmpStatus: Serenity.StringEditor;
        AdDescription: Serenity.StringEditor;
        ReviewerItCompliance: Serenity.StringEditor;
    }

    export class UarUnknownReviewerForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.UarUnknownReviewer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UarUnknownReviewerForm.init)  {
                UarUnknownReviewerForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(UarUnknownReviewerForm, [
                    'EmployeeId', w0,
                    'UserLoginName', w1,
                    'UserFullName', w1,
                    'Firstname', w1,
                    'Middlename', w1,
                    'Lastname', w1,
                    'OfficeCode', w1,
                    'Department', w1,
                    'Comments', w1,
                    'UserGroupId', w1,
                    'UserGroupName', w1,
                    'GroupDescription', w1,
                    'UserGroupRights', w1,
                    'TaskId', w1,
                    'TaskName', w1,
                    'CriticalFuction', w1,
                    'Accesstype', w1,
                    'SupEmployeeid', w1,
                    'ReviewerFirstname', w1,
                    'ReviewerLastname', w1,
                    'HowFound', w1,
                    'AdManager', w1,
                    'AdActiveStatus', w1,
                    'HrEmpStatus', w1,
                    'AdDescription', w1,
                    'ReviewerItCompliance', w1
                ]);
            }
        }
    }
}


namespace DAP.PCHODS {
    export interface UarUnknownReviewerForm {
        EmployeeId: Serenity.StringEditor;
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
                var w0 = s.StringEditor;

                Q.initFormType(UarUnknownReviewerForm, [
                    'EmployeeId', w0,
                    'UserLoginName', w0,
                    'UserFullName', w0,
                    'Firstname', w0,
                    'Middlename', w0,
                    'Lastname', w0,
                    'OfficeCode', w0,
                    'Department', w0,
                    'Comments', w0,
                    'UserGroupId', w0,
                    'UserGroupName', w0,
                    'GroupDescription', w0,
                    'UserGroupRights', w0,
                    'TaskId', w0,
                    'TaskName', w0,
                    'CriticalFuction', w0,
                    'Accesstype', w0,
                    'SupEmployeeid', w0,
                    'ReviewerFirstname', w0,
                    'ReviewerLastname', w0,
                    'HowFound', w0,
                    'AdManager', w0,
                    'AdActiveStatus', w0,
                    'HrEmpStatus', w0,
                    'AdDescription', w0,
                    'ReviewerItCompliance', w0
                ]);
            }
        }
    }
}


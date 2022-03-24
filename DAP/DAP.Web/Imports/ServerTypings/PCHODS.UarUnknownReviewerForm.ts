
namespace DAP.PCHODS {
    export class UarUnknownReviewerForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.UarUnknownReviewer';
    }

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

    [,
        ['EmployeeId', () => Serenity.StringEditor],
        ['UserLoginName', () => Serenity.StringEditor],
        ['UserFullName', () => Serenity.StringEditor],
        ['Firstname', () => Serenity.StringEditor],
        ['Middlename', () => Serenity.StringEditor],
        ['Lastname', () => Serenity.StringEditor],
        ['OfficeCode', () => Serenity.StringEditor],
        ['Department', () => Serenity.StringEditor],
        ['Comments', () => Serenity.StringEditor],
        ['UserGroupId', () => Serenity.StringEditor],
        ['UserGroupName', () => Serenity.StringEditor],
        ['GroupDescription', () => Serenity.StringEditor],
        ['UserGroupRights', () => Serenity.StringEditor],
        ['TaskId', () => Serenity.StringEditor],
        ['TaskName', () => Serenity.StringEditor],
        ['CriticalFuction', () => Serenity.StringEditor],
        ['Accesstype', () => Serenity.StringEditor],
        ['SupEmployeeid', () => Serenity.StringEditor],
        ['ReviewerFirstname', () => Serenity.StringEditor],
        ['ReviewerLastname', () => Serenity.StringEditor],
        ['HowFound', () => Serenity.StringEditor],
        ['AdManager', () => Serenity.StringEditor],
        ['AdActiveStatus', () => Serenity.StringEditor],
        ['HrEmpStatus', () => Serenity.StringEditor],
        ['AdDescription', () => Serenity.StringEditor],
        ['ReviewerItCompliance', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(UarUnknownReviewerForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
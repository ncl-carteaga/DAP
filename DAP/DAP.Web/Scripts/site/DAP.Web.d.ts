/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace DAP.Administration {
}
declare namespace DAP.Administration {
    interface DataAuditLogForm {
        LogType: Serenity.EnumEditor;
        LogDate: Serenity.DateTimeEditor;
        UserId: Serenity.IntegerEditor;
        Tablename: Serenity.LookupEditor;
        RecordId: Serenity.StringEditor;
        FieldName: Serenity.LookupEditor;
        OldValue: Serenity.StringEditor;
        NewValue: Serenity.StringEditor;
    }
    class DataAuditLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Administration {
    interface DataAuditLogRow {
        LogId?: number;
        LogType?: DataAuditLogType;
        LogDate?: string;
        UserId?: number;
        Tablename?: string;
        RecordId?: string;
        FieldName?: string;
        OldValue?: string;
        NewValue?: string;
        Username?: string;
        UserDisplayName?: string;
    }
    namespace DataAuditLogRow {
        const idProperty = "LogId";
        const localTextPrefix = "Administration.DataAuditLog";
        const enum Fields {
            LogId = "LogId",
            LogType = "LogType",
            LogDate = "LogDate",
            UserId = "UserId",
            Tablename = "Tablename",
            RecordId = "RecordId",
            FieldName = "FieldName",
            OldValue = "OldValue",
            NewValue = "NewValue",
            Username = "Username",
            UserDisplayName = "UserDisplayName"
        }
    }
}
declare namespace DAP.Administration {
    namespace DataAuditLogService {
        const baseUrl = "Administration/DataAuditLog";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Administration/DataAuditLog/Retrieve",
            List = "Administration/DataAuditLog/List"
        }
    }
}
declare namespace DAP.Administration {
    enum DataAuditLogType {
        Insert = 1,
        Update = 2,
        Delete = 3
    }
}
declare namespace DAP.Administration {
}
declare namespace DAP.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace DAP.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace DAP.Administration {
}
declare namespace DAP.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        RoleKey: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace DAP.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace DAP.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace DAP.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace DAP.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace DAP.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
declare namespace DAP.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace DAP.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace DAP.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace DAP.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace DAP.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace DAP.Administration {
    enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
}
declare namespace DAP.Administration {
}
declare namespace DAP.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        TwoFactorAuth: Serenity.EnumEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Administration {
    interface UserListRequest extends Serenity.ListRequest {
    }
}
declare namespace DAP.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace DAP.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace DAP.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace DAP.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace DAP.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace DAP.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace DAP.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace DAP.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace DAP.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace DAP.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        MobilePhoneNumber?: string;
        MobilePhoneVerified?: boolean;
        TwoFactorAuth?: TwoFactorAuthType;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ImpersonationToken?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            MobilePhoneNumber = "MobilePhoneNumber",
            MobilePhoneVerified = "MobilePhoneVerified",
            TwoFactorAuth = "TwoFactorAuth",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ImpersonationToken = "ImpersonationToken",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace DAP.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace DAP.Common {
    interface BackgroundTaskLogRow {
        LogId?: number;
        TaskKey?: string;
        RunAt?: string;
        Status?: number;
        Server?: string;
        Message?: string;
    }
    namespace BackgroundTaskLogRow {
        const idProperty = "LogId";
        const nameProperty = "TaskKey";
        const localTextPrefix = "Common.BackgroundTaskLog";
        const enum Fields {
            LogId = "LogId",
            TaskKey = "TaskKey",
            RunAt = "RunAt",
            Status = "Status",
            Server = "Server",
            Message = "Message"
        }
    }
}
declare namespace DAP.Common {
}
declare namespace DAP.Common {
    interface MailForm {
        Uid: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        Body: Serenity.HtmlNoteContentEditor;
        MailFrom: Serenity.StringEditor;
        MailTo: Serenity.StringEditor;
        ReplyTo: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
        Bcc: Serenity.StringEditor;
        Priority: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        RetryCount: Serenity.IntegerEditor;
        LockExpiration: Serenity.DateTimeEditor;
        ErrorMessage: Serenity.StringEditor;
        SentDate: Serenity.DateTimeEditor;
        InsertUser: Serenity.IntegerEditor;
        InsertDate: Serenity.DateTimeEditor;
    }
    class MailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Common {
    enum MailQueuePriority {
        High = 1,
        Medium = 2,
        Low = 3
    }
}
declare namespace DAP.Common {
    interface MailRow {
        MailId?: number;
        Uid?: string;
        Subject?: string;
        Body?: string;
        MailFrom?: string;
        MailTo?: string;
        ReplyTo?: string;
        Cc?: string;
        Bcc?: string;
        Priority?: MailQueuePriority;
        Status?: MailStatus;
        RetryCount?: number;
        ErrorMessage?: string;
        LockExpiration?: string;
        SentDate?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUser?: string;
    }
    namespace MailRow {
        const idProperty = "MailId";
        const nameProperty = "Subject";
        const localTextPrefix = "Common.Mail";
        const enum Fields {
            MailId = "MailId",
            Uid = "Uid",
            Subject = "Subject",
            Body = "Body",
            MailFrom = "MailFrom",
            MailTo = "MailTo",
            ReplyTo = "ReplyTo",
            Cc = "Cc",
            Bcc = "Bcc",
            Priority = "Priority",
            Status = "Status",
            RetryCount = "RetryCount",
            ErrorMessage = "ErrorMessage",
            LockExpiration = "LockExpiration",
            SentDate = "SentDate",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUser = "InsertUser"
        }
    }
}
declare namespace DAP.Common {
    namespace MailService {
        const baseUrl = "Common/Mail";
        function Create(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Common/Mail/Create",
            Update = "Common/Mail/Update",
            Delete = "Common/Mail/Delete",
            Retrieve = "Common/Mail/Retrieve",
            List = "Common/Mail/List"
        }
    }
}
declare namespace DAP.Common {
    enum MailStatus {
        Failed = -1,
        InQueue = 0,
        Sent = 1
    }
}
declare namespace DAP.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace DAP.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace DAP.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace DAP.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace DAP.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface FinReportPublishingSuppForm {
        PublishDat: Serenity.DateEditor;
        PublishCommentsTxt: Serenity.TextAreaEditor;
        PublishCd: Serenity.BooleanEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ProcessedDateTs: Serenity.DateEditor;
    }
    class FinReportPublishingSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface FinReportPublishingSuppRow {
        FinReportPublishingSurKey?: number;
        PublishDat?: string;
        PublishCd?: boolean;
        PublishCommentsTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
        ProcessedDateTs?: string;
    }
    namespace FinReportPublishingSuppRow {
        const idProperty = "FinReportPublishingSurKey";
        const nameProperty = "PublishCommentsTxt";
        const localTextPrefix = "DWSupport.FinReportPublishingSupp";
        const enum Fields {
            FinReportPublishingSurKey = "FinReportPublishingSurKey",
            PublishDat = "PublishDat",
            PublishCd = "PublishCd",
            PublishCommentsTxt = "PublishCommentsTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam",
            ProcessedDateTs = "ProcessedDateTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace FinReportPublishingSuppService {
        const baseUrl = "DWSupport/FinReportPublishingSupp";
        function Create(request: Serenity.SaveRequest<FinReportPublishingSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FinReportPublishingSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinReportPublishingSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinReportPublishingSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/FinReportPublishingSupp/Create",
            Update = "DWSupport/FinReportPublishingSupp/Update",
            Delete = "DWSupport/FinReportPublishingSupp/Delete",
            Retrieve = "DWSupport/FinReportPublishingSupp/Retrieve",
            List = "DWSupport/FinReportPublishingSupp/List"
        }
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachment {
        Key?: number;
        FileName?: string;
        DownloadUrl?: string;
        Size?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachmentRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        Key?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeForm {
        To: EmailSuggestEditor;
        Cc: EmailSuggestEditor;
        Bcc: EmailSuggestEditor;
        Subject: StringEditor;
        BodyHtml: EmailContentEditor;
        Attachments: MultipleImageUploadEditor;
        ReplyToFolder: StringEditor;
        ReplyToUniqueId: StringEditor;
    }
    class EmailComposeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeRequest extends Serenity.ServiceRequest {
        To?: string;
        Cc?: string;
        Bcc?: string;
        Subject?: string;
        BodyHtml?: string;
        Attachments?: string;
        ReplyToFolder?: string;
        ReplyToUniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailDeleteRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailFolder {
        Kind?: string;
        Name?: string;
        FullName?: string;
        UnreadCount?: number;
        SubFolders?: EmailFolder[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailItem {
        UniqueId?: number;
        Subject?: string;
        Date?: string;
        From?: string;
        To?: string;
        Cc?: string;
        Seen?: boolean;
        Important?: boolean;
        Deleted?: boolean;
        HasAttachments?: boolean;
        Size?: number;
        HtmlBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailListRequest extends Serenity.ListRequest {
        Folder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginInfo {
        ImapHost?: string;
        ImapPort?: number;
        ImapUsername?: string;
        ImapPassword?: string;
        SmtpHost?: string;
        SmtpPort?: number;
        SmtpUsername?: string;
        SmtpPassword?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginRequest extends Serenity.ServiceRequest {
        LoginInfo?: EmailLoginInfo;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailMoveRequest extends Serenity.ServiceRequest {
        SourceFolder?: string;
        UniqueIds?: number[];
        TargetFolder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        ReplyToAll?: boolean;
        Forward?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyResponse extends Serenity.ServiceResponse {
        Subject?: string;
        To?: string;
        Cc?: string;
        ReplyBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailRetrieveRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    namespace EmailService {
        const baseUrl = "Common/Email";
        function Login(request: EmailLoginRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Signout(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UnreadCount(request: EmailUnreadCountRequest, onSuccess?: (response: EmailUnreadCountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Suggest(request: EmailSuggestRequest, onSuccess?: (response: EmailSuggestResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reply(request: EmailReplyRequest, onSuccess?: (response: EmailReplyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Compose(request: EmailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteMessages(request: EmailDeleteRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ToggleSeen(request: EmailToggleSeenRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Move(request: EmailMoveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListMessages(request: EmailListRequest, onSuccess?: (response: Serenity.ListResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListFolders(request: ServiceRequest, onSuccess?: (response: Serenity.ListResponse<EmailFolder>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveMessage(request: EmailRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Login = "Common/Email/Login",
            Signout = "Common/Email/Signout",
            UnreadCount = "Common/Email/UnreadCount",
            Suggest = "Common/Email/Suggest",
            Reply = "Common/Email/Reply",
            Compose = "Common/Email/Compose",
            DeleteMessages = "Common/Email/DeleteMessages",
            ToggleSeen = "Common/Email/ToggleSeen",
            Move = "Common/Email/Move",
            ListMessages = "Common/Email/ListMessages",
            ListFolders = "Common/Email/ListFolders",
            RetrieveMessage = "Common/Email/RetrieveMessage"
        }
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestRequest extends Serenity.ServiceRequest {
        ContainsText?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestResponse extends Serenity.ServiceResponse {
        Suggestions?: string[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailToggleSeenRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
        Seen?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountResponse extends Serenity.ServiceResponse {
        UnreadCount?: number;
    }
}
declare namespace DAP {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace DAP {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace DAP {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace DAP {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace DAP.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace DAP.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace DAP.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
declare namespace DAP.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace DAP.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface AssigneeForm {
        FullName: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
    }
    class AssigneeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface AssigneeRow {
        AssigneeId?: number;
        FullName?: string;
        IsActive?: boolean;
    }
    namespace AssigneeRow {
        const idProperty = "AssigneeId";
        const nameProperty = "FullName";
        const localTextPrefix = "NCLHDSAR.Assignee";
        const lookupKey = "NCLHDSAR.Assignee";
        function getLookup(): Q.Lookup<AssigneeRow>;
        const enum Fields {
            AssigneeId = "AssigneeId",
            FullName = "FullName",
            IsActive = "IsActive"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace AssigneeService {
        const baseUrl = "NCLHDSAR/Assignee";
        function Create(request: Serenity.SaveRequest<AssigneeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssigneeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssigneeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssigneeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/Assignee/Create",
            Update = "NCLHDSAR/Assignee/Update",
            Delete = "NCLHDSAR/Assignee/Delete",
            Retrieve = "NCLHDSAR/Assignee/Retrieve",
            List = "NCLHDSAR/Assignee/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "NCLHDSAR.Note";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface RequestAttributesForm {
        Id: Serenity.StringEditor;
        SystemMasterId: SystemMasterEditor;
        RequestValue: Serenity.StringEditor;
        ResolvedDt: Serenity.DateEditor;
        ExtractDt: Serenity.DateEditor;
        FirstNm: Serenity.StringEditor;
        MiddleNm: Serenity.StringEditor;
        LastNm: Serenity.StringEditor;
        Addr1: Serenity.StringEditor;
        Addr2: Serenity.StringEditor;
        CityNm: Serenity.StringEditor;
        StateNm: Serenity.StringEditor;
        PostalCd: Serenity.StringEditor;
        CountryCd: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        OldFirstNm: Serenity.StringEditor;
        OldMiddleNm: Serenity.StringEditor;
        OldLastNm: Serenity.StringEditor;
        OldAddr1: Serenity.StringEditor;
        OldAddr2: Serenity.StringEditor;
        OldCityNm: Serenity.StringEditor;
        OldStateNm: Serenity.StringEditor;
        OldPostalCd: Serenity.StringEditor;
        OldCountryCd: Serenity.StringEditor;
        OldEmail: Serenity.StringEditor;
    }
    class RequestAttributesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface RequestAttributesRow {
        RequestAttributeId?: number;
        Id?: string;
        SystemMasterId?: number;
        RequestValue?: string;
        ResolvedDt?: string;
        ExtractDt?: string;
        FirstNm?: string;
        MiddleNm?: string;
        LastNm?: string;
        Addr1?: string;
        Addr2?: string;
        CityNm?: string;
        StateNm?: string;
        PostalCd?: string;
        CountryCd?: string;
        Email1?: string;
        OldAddr1?: string;
        OldAddr2?: string;
        OldCityNm?: string;
        OldStateNm?: string;
        OldPostalCd?: string;
        OldCountryCd?: string;
        OldEmail?: string;
        OldFirstNm?: string;
        OldMiddleNm?: string;
        OldLastNm?: string;
        SystemMasterSystemName?: string;
        SystemMasterSystemTable?: string;
        SystemMasterSystemDesc?: string;
        SystemMasterSystemActiveYn?: string;
        ModifiedDate?: string;
        ModifiedBy?: string;
    }
    namespace RequestAttributesRow {
        const idProperty = "RequestAttributeId";
        const nameProperty = "Id";
        const localTextPrefix = "NCLHDSAR.RequestAttributes";
        const lookupKey = "NCLHDSAR.SystemMaster";
        function getLookup(): Q.Lookup<RequestAttributesRow>;
        const enum Fields {
            RequestAttributeId = "RequestAttributeId",
            Id = "Id",
            SystemMasterId = "SystemMasterId",
            RequestValue = "RequestValue",
            ResolvedDt = "ResolvedDt",
            ExtractDt = "ExtractDt",
            FirstNm = "FirstNm",
            MiddleNm = "MiddleNm",
            LastNm = "LastNm",
            Addr1 = "Addr1",
            Addr2 = "Addr2",
            CityNm = "CityNm",
            StateNm = "StateNm",
            PostalCd = "PostalCd",
            CountryCd = "CountryCd",
            Email1 = "Email1",
            OldAddr1 = "OldAddr1",
            OldAddr2 = "OldAddr2",
            OldCityNm = "OldCityNm",
            OldStateNm = "OldStateNm",
            OldPostalCd = "OldPostalCd",
            OldCountryCd = "OldCountryCd",
            OldEmail = "OldEmail",
            OldFirstNm = "OldFirstNm",
            OldMiddleNm = "OldMiddleNm",
            OldLastNm = "OldLastNm",
            SystemMasterSystemName = "SystemMasterSystemName",
            SystemMasterSystemTable = "SystemMasterSystemTable",
            SystemMasterSystemDesc = "SystemMasterSystemDesc",
            SystemMasterSystemActiveYn = "SystemMasterSystemActiveYn",
            ModifiedDate = "ModifiedDate",
            ModifiedBy = "ModifiedBy"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace RequestAttributesService {
        const baseUrl = "NCLHDSAR/RequestAttributes";
        function Create(request: Serenity.SaveRequest<RequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/RequestAttributes/Create",
            Update = "NCLHDSAR/RequestAttributes/Update",
            Delete = "NCLHDSAR/RequestAttributes/Delete",
            Retrieve = "NCLHDSAR/RequestAttributes/Retrieve",
            List = "NCLHDSAR/RequestAttributes/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface RequestForm {
        FirstName: Serenity.StringEditor;
        ReqStatus: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        ReqApprover: Serenity.StringEditor;
        RequestTypeNum: RequestTypeEditor;
        CreatedDt: Serenity.DateEditor;
        SubjectType: Serenity.StringEditor;
        RequestType: Serenity.StringEditor;
        ReqDetails: Serenity.TextAreaEditor;
        Email: Serenity.StringEditor;
        DeadlineDt: Serenity.DateEditor;
        ReqExtended: Serenity.BooleanEditor;
        LastUpdatedDt: Serenity.DateEditor;
        ReqStage: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        NclYn: Serenity.StringEditor;
        OceaniaYn: Serenity.StringEditor;
        RegentYn: Serenity.StringEditor;
        LatitudesNum: Serenity.StringEditor;
        OceaniaMpCardNum: Serenity.StringEditor;
        RegentMpCardNum: Serenity.StringEditor;
        SixthmanYn: Serenity.StringEditor;
        IdentityVerificationOptOuts: Serenity.StringEditor;
        IdentityVerificationOtherRequests: Serenity.StringEditor;
        LoadDt: Serenity.DateEditor;
    }
    class RequestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface RequestRow {
        Id?: string;
        FirstName?: string;
        LastName?: string;
        FullName?: string;
        Email?: string;
        CreatedDt?: string;
        DeadlineDt?: string;
        LastUpdatedDt?: string;
        ReqExtended?: boolean;
        ReqStage?: string;
        ReqApprover?: string;
        ReqDetails?: string;
        SubjectType?: string;
        RequestType?: string;
        Address1?: string;
        City?: string;
        Country?: string;
        NclYn?: string;
        LatitudesNum?: string;
        OceaniaYn?: string;
        OceaniaMpCardNum?: string;
        RegentYn?: string;
        RegentMpCardNum?: string;
        SixthmanYn?: string;
        IdentityVerificationOptOuts?: string;
        IdentityVerificationOtherRequests?: string;
        RequestTypeNum?: number;
        ReqStatus?: string;
        LoadDt?: string;
        ProcessDt?: string;
        RequestTypeNumDesc?: string;
        DaysLeft?: number;
        DaysOld?: number;
        AttrCount?: number;
    }
    namespace RequestRow {
        const idProperty = "Id";
        const nameProperty = "Id";
        const localTextPrefix = "NCLHDSAR.Request";
        const lookupKey = "NCLHDSAR.RequestType";
        function getLookup(): Q.Lookup<RequestRow>;
        const enum Fields {
            Id = "Id",
            FirstName = "FirstName",
            LastName = "LastName",
            FullName = "FullName",
            Email = "Email",
            CreatedDt = "CreatedDt",
            DeadlineDt = "DeadlineDt",
            LastUpdatedDt = "LastUpdatedDt",
            ReqExtended = "ReqExtended",
            ReqStage = "ReqStage",
            ReqApprover = "ReqApprover",
            ReqDetails = "ReqDetails",
            SubjectType = "SubjectType",
            RequestType = "RequestType",
            Address1 = "Address1",
            City = "City",
            Country = "Country",
            NclYn = "NclYn",
            LatitudesNum = "LatitudesNum",
            OceaniaYn = "OceaniaYn",
            OceaniaMpCardNum = "OceaniaMpCardNum",
            RegentYn = "RegentYn",
            RegentMpCardNum = "RegentMpCardNum",
            SixthmanYn = "SixthmanYn",
            IdentityVerificationOptOuts = "IdentityVerificationOptOuts",
            IdentityVerificationOtherRequests = "IdentityVerificationOtherRequests",
            RequestTypeNum = "RequestTypeNum",
            ReqStatus = "ReqStatus",
            LoadDt = "LoadDt",
            ProcessDt = "ProcessDt",
            RequestTypeNumDesc = "RequestTypeNumDesc",
            DaysLeft = "DaysLeft",
            DaysOld = "DaysOld",
            AttrCount = "AttrCount"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace RequestService {
        const baseUrl = "NCLHDSAR/Request";
        function Create(request: Serenity.SaveRequest<RequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/Request/Create",
            Update = "NCLHDSAR/Request/Update",
            Delete = "NCLHDSAR/Request/Delete",
            Retrieve = "NCLHDSAR/Request/Retrieve",
            List = "NCLHDSAR/Request/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface RequestStatusForm {
        StatusDescription: Serenity.StringEditor;
        StatusOrder: Serenity.IntegerEditor;
    }
    class RequestStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface RequestStatusRow {
        StatusId?: number;
        StatusDescription?: string;
        StatusOrder?: number;
    }
    namespace RequestStatusRow {
        const idProperty = "StatusId";
        const nameProperty = "StatusDescription";
        const localTextPrefix = "NCLHDSAR.RequestStatus";
        const lookupKey = "NCLHDSAR.RequestStatus";
        function getLookup(): Q.Lookup<RequestStatusRow>;
        const enum Fields {
            StatusId = "StatusId",
            StatusDescription = "StatusDescription",
            StatusOrder = "StatusOrder"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace RequestStatusService {
        const baseUrl = "NCLHDSAR/RequestStatus";
        function Create(request: Serenity.SaveRequest<RequestStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequestStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequestStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequestStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/RequestStatus/Create",
            Update = "NCLHDSAR/RequestStatus/Update",
            Delete = "NCLHDSAR/RequestStatus/Delete",
            Retrieve = "NCLHDSAR/RequestStatus/Retrieve",
            List = "NCLHDSAR/RequestStatus/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface RequestTypeForm {
        Desc: Serenity.StringEditor;
    }
    class RequestTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface RequestTypeRow {
        Type?: number;
        Desc?: string;
    }
    namespace RequestTypeRow {
        const idProperty = "Type";
        const nameProperty = "Desc";
        const localTextPrefix = "NCLHDSAR.RequestType";
        const lookupKey = "NCLHDSAR.RequestType";
        function getLookup(): Q.Lookup<RequestTypeRow>;
        const enum Fields {
            Type = "Type",
            Desc = "Desc"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace RequestTypeService {
        const baseUrl = "NCLHDSAR/RequestType";
        function Create(request: Serenity.SaveRequest<RequestTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequestTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequestTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequestTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/RequestType/Create",
            Update = "NCLHDSAR/RequestType/Update",
            Delete = "NCLHDSAR/RequestType/Delete",
            Retrieve = "NCLHDSAR/RequestType/Retrieve",
            List = "NCLHDSAR/RequestType/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface SwRequestAttributesForm {
        Id: Serenity.StringEditor;
        SystemMasterId: SystemMasterEditor;
        RequestValue: Serenity.StringEditor;
        ResolvedDt: Serenity.DateEditor;
        ExtractDt: Serenity.DateEditor;
    }
    class SwRequestAttributesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface SwRequestAttributesRow {
        Id?: number;
        SystemMasterId?: number;
        RequestValue?: string;
        ResolvedDt?: string;
        ExtractDt?: string;
        RequestAttributeId?: number;
        LastUpdated?: string;
        SystemMasterSystemDesc?: string;
    }
    namespace SwRequestAttributesRow {
        const idProperty = "RequestAttributeId";
        const nameProperty = "RequestValue";
        const localTextPrefix = "NCLHDSAR.SwRequestAttributes";
        const enum Fields {
            Id = "Id",
            SystemMasterId = "SystemMasterId",
            RequestValue = "RequestValue",
            ResolvedDt = "ResolvedDt",
            ExtractDt = "ExtractDt",
            RequestAttributeId = "RequestAttributeId",
            LastUpdated = "LastUpdated",
            SystemMasterSystemDesc = "SystemMasterSystemDesc"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace SwRequestAttributesService {
        const baseUrl = "NCLHDSAR/SwRequestAttributes";
        function Create(request: Serenity.SaveRequest<SwRequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SwRequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SwRequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SwRequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/SwRequestAttributes/Create",
            Update = "NCLHDSAR/SwRequestAttributes/Update",
            Delete = "NCLHDSAR/SwRequestAttributes/Delete",
            Retrieve = "NCLHDSAR/SwRequestAttributes/Retrieve",
            List = "NCLHDSAR/SwRequestAttributes/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface SwRequestForm {
        ClientFirstName: Serenity.StringEditor;
        ClientLastName: Serenity.StringEditor;
        ClientEmailAddress: Serenity.StringEditor;
        ClientAddress: Serenity.StringEditor;
        ClientZipCode: Serenity.StringEditor;
        ClientLatitudesNumber: Serenity.StringEditor;
        ClientIsRelatedtoHousehold: Serenity.StringEditor;
        RequestType: Serenity.StringEditor;
        ClientGuestCategory: Serenity.StringEditor;
        RecordTimeStamp: Serenity.DateEditor;
        LastUpdatedDt: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        AssigneeId: Serenity.LookupEditor;
        StatusId: Serenity.LookupEditor;
        ApiResponseId: Serenity.StringEditor;
        ApiResponse: Serenity.StringEditor;
        ApiResponseDepth: Serenity.StringEditor;
        NoteList: NotesEditor;
    }
    class SwRequestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface SwRequestRow {
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
    namespace SwRequestRow {
        const idProperty = "RecordId";
        const nameProperty = "ClientLastName";
        const localTextPrefix = "NCLHDSAR.SwRequest";
        const enum Fields {
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
declare namespace DAP.NCLHDSAR {
    namespace SwRequestService {
        const baseUrl = "NCLHDSAR/SwRequest";
        function Create(request: Serenity.SaveRequest<SwRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SwRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SwRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SwRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/SwRequest/Create",
            Update = "NCLHDSAR/SwRequest/Update",
            Delete = "NCLHDSAR/SwRequest/Delete",
            Retrieve = "NCLHDSAR/SwRequest/Retrieve",
            List = "NCLHDSAR/SwRequest/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface SystemMasterForm {
        SystemName: Serenity.StringEditor;
        SystemTable: Serenity.StringEditor;
        SystemDesc: Serenity.StringEditor;
        SystemActiveYn: Serenity.StringEditor;
    }
    class SystemMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface SystemMasterRow {
        Id?: number;
        SystemName?: string;
        SystemTable?: string;
        SystemDesc?: string;
        SystemActiveYn?: string;
    }
    namespace SystemMasterRow {
        const idProperty = "Id";
        const nameProperty = "SystemName";
        const localTextPrefix = "NCLHDSAR.SystemMaster";
        const lookupKey = "NCLHDSAR.SystemMaster";
        function getLookup(): Q.Lookup<SystemMasterRow>;
        const enum Fields {
            Id = "Id",
            SystemName = "SystemName",
            SystemTable = "SystemTable",
            SystemDesc = "SystemDesc",
            SystemActiveYn = "SystemActiveYn"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace SystemMasterService {
        const baseUrl = "NCLHDSAR/SystemMaster";
        function Create(request: Serenity.SaveRequest<SystemMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SystemMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SystemMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SystemMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/SystemMaster/Create",
            Update = "NCLHDSAR/SystemMaster/Update",
            Delete = "NCLHDSAR/SystemMaster/Delete",
            Retrieve = "NCLHDSAR/SystemMaster/Retrieve",
            List = "NCLHDSAR/SystemMaster/List"
        }
    }
}
declare namespace DAP.NCLHODSMICROS {
    class DataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DataFlowForm {
        Source: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        ProcessYn: Serenity.StringEditor;
        Target: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SourceDesc: Serenity.StringEditor;
        TargetDesc: Serenity.StringEditor;
        Package: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Lset: Serenity.DateEditor;
        Cet: Serenity.DateEditor;
    }
}
declare namespace DAP.NCLHODSMICROS {
    interface DataFlowRow {
        Key?: number;
        Source?: string;
        Name?: string;
        ProcessYn?: string;
        Target?: string;
        Description?: string;
        SourceDesc?: string;
        TargetDesc?: string;
        Package?: string;
        Status?: number;
        Lset?: string;
        Cet?: string;
    }
    namespace DataFlowRow {
        const idProperty = "Key";
        const nameProperty = "Source";
        const localTextPrefix = "NCLHODSMICROS.DataFlow";
        namespace Fields {
            const Key: any;
            const Source: any;
            const Name: any;
            const ProcessYn: any;
            const Target: any;
            const Description: any;
            const SourceDesc: any;
            const TargetDesc: any;
            const Package: any;
            const Status: any;
            const Lset: any;
            const Cet: any;
        }
    }
}
declare namespace DAP.NCLHODSMICROS {
    namespace DataFlowService {
        const baseUrl = "NCLHODSMICROS/DataFlow";
        function Create(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
}
declare namespace DAP.NCLHODSSPENDVIS {
    interface AmoslevelForm {
        AccountId: Serenity.StringEditor;
        Descr: Serenity.StringEditor;
        FlexDim1Name: Serenity.StringEditor;
        FlexDim2Name: Serenity.StringEditor;
        FlexDim3Name: Serenity.StringEditor;
        FlexDim4Name: Serenity.StringEditor;
    }
    class AmoslevelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    interface AmoslevelRow {
        IdNum?: number;
        AccountId?: string;
        Descr?: string;
        FlexDim1Name?: string;
        FlexDim2Name?: string;
        FlexDim3Name?: string;
        FlexDim4Name?: string;
        ModifiedDate?: string;
        ModifiedBy?: string;
    }
    namespace AmoslevelRow {
        const idProperty = "IdNum";
        const nameProperty = "AccountId";
        const localTextPrefix = "NCLHODSSPENDVIS.Amoslevel";
        const enum Fields {
            IdNum = "IdNum",
            AccountId = "AccountId",
            Descr = "Descr",
            FlexDim1Name = "FlexDim1Name",
            FlexDim2Name = "FlexDim2Name",
            FlexDim3Name = "FlexDim3Name",
            FlexDim4Name = "FlexDim4Name",
            ModifiedDate = "ModifiedDate",
            ModifiedBy = "ModifiedBy"
        }
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    namespace AmoslevelService {
        const baseUrl = "NCLHODSSPENDVIS/Amoslevel";
        function Create(request: Serenity.SaveRequest<AmoslevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AmoslevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmoslevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmoslevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHODSSPENDVIS/Amoslevel/Create",
            Update = "NCLHODSSPENDVIS/Amoslevel/Update",
            Delete = "NCLHODSSPENDVIS/Amoslevel/Delete",
            Retrieve = "NCLHODSSPENDVIS/Amoslevel/Retrieve",
            List = "NCLHODSSPENDVIS/Amoslevel/List"
        }
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    class DataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DataFlowForm {
        Source: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        ProcessYn: Serenity.StringEditor;
        Target: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Package: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Lset: Serenity.DateEditor;
        Cet: Serenity.DateEditor;
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    interface DataFlowRow {
        Key?: number;
        Source?: string;
        Name?: string;
        ProcessYn?: string;
        Target?: string;
        Description?: string;
        Package?: string;
        Status?: number;
        Lset?: string;
        Cet?: string;
    }
    namespace DataFlowRow {
        const idProperty = "Key";
        const nameProperty = "Source";
        const localTextPrefix = "NCLHODSSPENDVIS.DataFlow";
        namespace Fields {
            const Key: any;
            const Source: any;
            const Name: any;
            const ProcessYn: any;
            const Target: any;
            const Description: any;
            const Package: any;
            const Status: any;
            const Lset: any;
            const Cet: any;
        }
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    namespace DataFlowService {
        const baseUrl = "NCLHODSSPENDVIS/DataFlow";
        function Create(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace DAP.PCHDW {
    class DimInvoiceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DimInvoiceForm {
        InvoiceNum: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        PassengerQty: Serenity.IntegerEditor;
        NonrevPassengerQty: Serenity.IntegerEditor;
        NontaxPassengerQty: Serenity.IntegerEditor;
        OfficeCd: Serenity.StringEditor;
        OfficeDesc: Serenity.StringEditor;
        CurrencyCd: Serenity.StringEditor;
        CurrencyDesc: Serenity.StringEditor;
        StatusCd: Serenity.StringEditor;
        StatusDesc: Serenity.StringEditor;
        ZipCd: Serenity.StringEditor;
        CityName: Serenity.StringEditor;
        StateCd: Serenity.StringEditor;
        CountryName: Serenity.StringEditor;
        CancellationDt: Serenity.DateEditor;
        BonusSavingsCd: Serenity.StringEditor;
        BonusSavingsDesc: Serenity.StringEditor;
        AirParticipationInd: Serenity.BooleanEditor;
        HotelParticipationInd: Serenity.BooleanEditor;
        PaxAirClassCd: Serenity.StringEditor;
        DepositDt: Serenity.DateEditor;
        DepositAmt: Serenity.StringEditor;
        UserId: Serenity.StringEditor;
        Pax1FirstName: Serenity.StringEditor;
        Pax1LastName: Serenity.StringEditor;
        Pax2FirstName: Serenity.StringEditor;
        Pax2LastName: Serenity.StringEditor;
        CruiseTk: Serenity.IntegerEditor;
        ChangeDt: Serenity.DateEditor;
        CreateDt: Serenity.DateEditor;
        FirstPaymentDt: Serenity.DateEditor;
        FinalPaymentDueDt: Serenity.DateEditor;
        InitialWaitlistInd: Serenity.BooleanEditor;
        CancelBookingStatusCd: Serenity.StringEditor;
        SalesSourceCd: Serenity.StringEditor;
        SalesSourceDesc: Serenity.StringEditor;
        OriginalConsortiumCd: Serenity.StringEditor;
        OriginalConsortiumDesc: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        OriginalUserId: Serenity.StringEditor;
        OriginalUserName: Serenity.StringEditor;
        OriginalDeptCd: Serenity.StringEditor;
        OriginalDeptName: Serenity.StringEditor;
        OriginalUserActiveInd: Serenity.StringEditor;
        WaitlistDt: Serenity.DateEditor;
        FirstConfirmDt: Serenity.DateEditor;
        PastGuestInd: Serenity.IntegerEditor;
        DirectBookingInd: Serenity.StringEditor;
        AttnName: Serenity.StringEditor;
        ComboBookingInd: Serenity.StringEditor;
        OnboardTypeDesc: Serenity.StringEditor;
        CruiseSvcMgmtCrNum: Serenity.StringEditor;
        PromoCd: Serenity.StringEditor;
        GdsSystemCd: Serenity.StringEditor;
        GdsSystemDesc: Serenity.StringEditor;
        PromoDesc: Serenity.StringEditor;
        CancellationType: Serenity.StringEditor;
        ChannelTk: Serenity.IntegerEditor;
        PromoBonusComm: Serenity.StringEditor;
        PromoCommAmt: Serenity.DecimalEditor;
        ComboLegQty: Serenity.DecimalEditor;
        CancelReason: Serenity.StringEditor;
        PaidClassCd: Serenity.StringEditor;
        PaidClassCategoryDesc: Serenity.StringEditor;
        OciOfficeCd: Serenity.StringEditor;
        AirXferFeeAmt: Serenity.DecimalEditor;
        CountryCd: Serenity.StringEditor;
        FutureDepositFlag: Serenity.StringEditor;
        PromotionalAmenityCd: Serenity.StringEditor;
        CruiseCommissionAmt: Serenity.DecimalEditor;
        PostedInvoiceDt: Serenity.DateEditor;
        AgentTk: Serenity.IntegerEditor;
        Cinvoice1Num: Serenity.StringEditor;
        Cinvoice2Num: Serenity.StringEditor;
        Cinvoice3Num: Serenity.StringEditor;
        Cinvoice4Num: Serenity.StringEditor;
        Cinvoice5Num: Serenity.StringEditor;
        Cinvoice6Num: Serenity.StringEditor;
        PackageCd: Serenity.StringEditor;
        LandPackageParticipantQty: Serenity.IntegerEditor;
        LandPackageParticipantInd: Serenity.StringEditor;
        DptrFlightQty: Serenity.IntegerEditor;
        RtrnFlightQty: Serenity.IntegerEditor;
        DptrFlightClassCd: Serenity.StringEditor;
        RtrnFlightClassCd: Serenity.StringEditor;
        AirCostSourceCd: Serenity.StringEditor;
        ChannelCountryCd: Serenity.StringEditor;
        ChannelCountryName: Serenity.StringEditor;
        Pax1AirportHome1Cd: Serenity.StringEditor;
        Pax1AirportRtrn1Cd: Serenity.StringEditor;
        Pax1FirstFlightClass: Serenity.StringEditor;
        Pax1RtrnFlightClass: Serenity.StringEditor;
        Pax2AirportHome1Cd: Serenity.StringEditor;
        Pax2AirportRtrn1Cd: Serenity.StringEditor;
        Pax2FirstFlightClass: Serenity.StringEditor;
        Pax2RtrnFlightClass: Serenity.StringEditor;
        Pax1LoyaltyLevelNm: Serenity.StringEditor;
        Pax2LoyaltyLevelNm: Serenity.StringEditor;
        InstallmentPlanInd: Serenity.StringEditor;
        InstallmentPlanNum: Serenity.IntegerEditor;
        CruiseSvcMgmtId: Serenity.StringEditor;
        OutboundReportingRegionCd: Serenity.StringEditor;
        CenturionCd: Serenity.StringEditor;
        CenturionInd: Serenity.StringEditor;
        PlatinumCd: Serenity.StringEditor;
        PlatinumInd: Serenity.StringEditor;
        DwPastGuestInd: Serenity.StringEditor;
        DwPastGuest1Ind: Serenity.StringEditor;
        DwPastGuest2Ind: Serenity.StringEditor;
        Pax1NvsPgInd: Serenity.StringEditor;
        Pax2NvsPgInd: Serenity.StringEditor;
        NvsPgInd: Serenity.StringEditor;
        CurrentPackageCd: Serenity.StringEditor;
        MpcardNumPax1: Serenity.StringEditor;
        CurrentLoyaltyLevelPax1: Serenity.StringEditor;
        MpcardNumPax2: Serenity.StringEditor;
        CurrentLoyaltyLevelPax2: Serenity.StringEditor;
        FccDeferredInd: Serenity.StringEditor;
    }
}
declare namespace DAP.PCHDW {
    interface DimInvoiceRow {
        InvoiceTk?: number;
        InvoiceNum?: string;
        CompanyCd?: string;
        PassengerQty?: number;
        NonrevPassengerQty?: number;
        NontaxPassengerQty?: number;
        OfficeCd?: string;
        OfficeDesc?: string;
        CurrencyCd?: string;
        CurrencyDesc?: string;
        StatusCd?: string;
        StatusDesc?: string;
        ZipCd?: string;
        CityName?: string;
        StateCd?: string;
        CountryName?: string;
        CancellationDt?: string;
        BonusSavingsCd?: string;
        BonusSavingsDesc?: string;
        AirParticipationInd?: boolean;
        HotelParticipationInd?: boolean;
        PaxAirClassCd?: string;
        DepositDt?: string;
        DepositAmt?: string;
        UserId?: string;
        Pax1FirstName?: string;
        Pax1LastName?: string;
        Pax2FirstName?: string;
        Pax2LastName?: string;
        CruiseTk?: number;
        ChangeDt?: string;
        CreateDt?: string;
        FirstPaymentDt?: string;
        FinalPaymentDueDt?: string;
        InitialWaitlistInd?: boolean;
        CancelBookingStatusCd?: string;
        SalesSourceCd?: string;
        SalesSourceDesc?: string;
        OriginalConsortiumCd?: string;
        OriginalConsortiumDesc?: string;
        UserName?: string;
        OriginalUserId?: string;
        OriginalUserName?: string;
        OriginalDeptCd?: string;
        OriginalDeptName?: string;
        OriginalUserActiveInd?: string;
        WaitlistDt?: string;
        FirstConfirmDt?: string;
        PastGuestInd?: number;
        DirectBookingInd?: string;
        AttnName?: string;
        ComboBookingInd?: string;
        OnboardTypeDesc?: string;
        CruiseSvcMgmtCrNum?: string;
        PromoCd?: string;
        GdsSystemCd?: string;
        GdsSystemDesc?: string;
        PromoDesc?: string;
        CancellationType?: string;
        ChannelTk?: number;
        PromoBonusComm?: string;
        PromoCommAmt?: number;
        ComboLegQty?: number;
        CancelReason?: string;
        PaidClassCd?: string;
        PaidClassCategoryDesc?: string;
        OciOfficeCd?: string;
        AirXferFeeAmt?: number;
        CountryCd?: string;
        FutureDepositFlag?: string;
        PromotionalAmenityCd?: string;
        CruiseCommissionAmt?: number;
        PostedInvoiceDt?: string;
        AgentTk?: number;
        Cinvoice1Num?: string;
        Cinvoice2Num?: string;
        Cinvoice3Num?: string;
        Cinvoice4Num?: string;
        Cinvoice5Num?: string;
        Cinvoice6Num?: string;
        PackageCd?: string;
        LandPackageParticipantQty?: number;
        LandPackageParticipantInd?: string;
        DptrFlightQty?: number;
        RtrnFlightQty?: number;
        DptrFlightClassCd?: string;
        RtrnFlightClassCd?: string;
        AirCostSourceCd?: string;
        ChannelCountryCd?: string;
        ChannelCountryName?: string;
        Pax1AirportHome1Cd?: string;
        Pax1AirportRtrn1Cd?: string;
        Pax1FirstFlightClass?: string;
        Pax1RtrnFlightClass?: string;
        Pax2AirportHome1Cd?: string;
        Pax2AirportRtrn1Cd?: string;
        Pax2FirstFlightClass?: string;
        Pax2RtrnFlightClass?: string;
        Pax1LoyaltyLevelNm?: string;
        Pax2LoyaltyLevelNm?: string;
        InstallmentPlanInd?: string;
        InstallmentPlanNum?: number;
        CruiseSvcMgmtId?: string;
        OutboundReportingRegionCd?: string;
        CenturionCd?: string;
        CenturionInd?: string;
        PlatinumCd?: string;
        PlatinumInd?: string;
        DwPastGuestInd?: string;
        DwPastGuest1Ind?: string;
        DwPastGuest2Ind?: string;
        Pax1NvsPgInd?: string;
        Pax2NvsPgInd?: string;
        NvsPgInd?: string;
        CurrentPackageCd?: string;
        MpcardNumPax1?: string;
        CurrentLoyaltyLevelPax1?: string;
        MpcardNumPax2?: string;
        CurrentLoyaltyLevelPax2?: string;
        FccDeferredInd?: string;
    }
    namespace DimInvoiceRow {
        const idProperty = "InvoiceTk";
        const nameProperty = "InvoiceNum";
        const localTextPrefix = "PCHDW.DimInvoice";
        namespace Fields {
            const InvoiceTk: any;
            const InvoiceNum: any;
            const CompanyCd: any;
            const PassengerQty: any;
            const NonrevPassengerQty: any;
            const NontaxPassengerQty: any;
            const OfficeCd: any;
            const OfficeDesc: any;
            const CurrencyCd: any;
            const CurrencyDesc: any;
            const StatusCd: any;
            const StatusDesc: any;
            const ZipCd: any;
            const CityName: any;
            const StateCd: any;
            const CountryName: any;
            const CancellationDt: any;
            const BonusSavingsCd: any;
            const BonusSavingsDesc: any;
            const AirParticipationInd: any;
            const HotelParticipationInd: any;
            const PaxAirClassCd: any;
            const DepositDt: any;
            const DepositAmt: any;
            const UserId: any;
            const Pax1FirstName: any;
            const Pax1LastName: any;
            const Pax2FirstName: any;
            const Pax2LastName: any;
            const CruiseTk: any;
            const ChangeDt: any;
            const CreateDt: any;
            const FirstPaymentDt: any;
            const FinalPaymentDueDt: any;
            const InitialWaitlistInd: any;
            const CancelBookingStatusCd: any;
            const SalesSourceCd: any;
            const SalesSourceDesc: any;
            const OriginalConsortiumCd: any;
            const OriginalConsortiumDesc: any;
            const UserName: any;
            const OriginalUserId: any;
            const OriginalUserName: any;
            const OriginalDeptCd: any;
            const OriginalDeptName: any;
            const OriginalUserActiveInd: any;
            const WaitlistDt: any;
            const FirstConfirmDt: any;
            const PastGuestInd: any;
            const DirectBookingInd: any;
            const AttnName: any;
            const ComboBookingInd: any;
            const OnboardTypeDesc: any;
            const CruiseSvcMgmtCrNum: any;
            const PromoCd: any;
            const GdsSystemCd: any;
            const GdsSystemDesc: any;
            const PromoDesc: any;
            const CancellationType: any;
            const ChannelTk: any;
            const PromoBonusComm: any;
            const PromoCommAmt: any;
            const ComboLegQty: any;
            const CancelReason: any;
            const PaidClassCd: any;
            const PaidClassCategoryDesc: any;
            const OciOfficeCd: any;
            const AirXferFeeAmt: any;
            const CountryCd: any;
            const FutureDepositFlag: any;
            const PromotionalAmenityCd: any;
            const CruiseCommissionAmt: any;
            const PostedInvoiceDt: any;
            const AgentTk: any;
            const Cinvoice1Num: any;
            const Cinvoice2Num: any;
            const Cinvoice3Num: any;
            const Cinvoice4Num: any;
            const Cinvoice5Num: any;
            const Cinvoice6Num: any;
            const PackageCd: any;
            const LandPackageParticipantQty: any;
            const LandPackageParticipantInd: any;
            const DptrFlightQty: any;
            const RtrnFlightQty: any;
            const DptrFlightClassCd: any;
            const RtrnFlightClassCd: any;
            const AirCostSourceCd: any;
            const ChannelCountryCd: any;
            const ChannelCountryName: any;
            const Pax1AirportHome1Cd: any;
            const Pax1AirportRtrn1Cd: any;
            const Pax1FirstFlightClass: any;
            const Pax1RtrnFlightClass: any;
            const Pax2AirportHome1Cd: any;
            const Pax2AirportRtrn1Cd: any;
            const Pax2FirstFlightClass: any;
            const Pax2RtrnFlightClass: any;
            const Pax1LoyaltyLevelNm: any;
            const Pax2LoyaltyLevelNm: any;
            const InstallmentPlanInd: any;
            const InstallmentPlanNum: any;
            const CruiseSvcMgmtId: any;
            const OutboundReportingRegionCd: any;
            const CenturionCd: any;
            const CenturionInd: any;
            const PlatinumCd: any;
            const PlatinumInd: any;
            const DwPastGuestInd: any;
            const DwPastGuest1Ind: any;
            const DwPastGuest2Ind: any;
            const Pax1NvsPgInd: any;
            const Pax2NvsPgInd: any;
            const NvsPgInd: any;
            const CurrentPackageCd: any;
            const MpcardNumPax1: any;
            const CurrentLoyaltyLevelPax1: any;
            const MpcardNumPax2: any;
            const CurrentLoyaltyLevelPax2: any;
            const FccDeferredInd: any;
        }
    }
}
declare namespace DAP.PCHDW {
    namespace DimInvoiceService {
        const baseUrl = "PCHDW/DimInvoice";
        function Create(request: Serenity.SaveRequest<DimInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DimInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DimInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DimInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace DAP.PCHODS.Lookups {
}
declare namespace DAP.PCHODS.Lookups {
}
declare namespace DAP.PCHODS.Lookups {
}
declare namespace DAP.PCHODS {
    interface OutboundAgentForm {
        NvsUserId: UsersEditor;
        CompanyCd: CompanyEditor;
        PrimaryBrand: CompanyEditor;
        AgentLocationId: OutboundAgentLocationEditor;
        StartInactiveDt: Serenity.DateEditor;
    }
    class OutboundAgentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundAgentLocationForm {
        Description: Serenity.StringEditor;
    }
    class OutboundAgentLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundAgentLocationRow {
        AgentLocationId?: number;
        Description?: string;
    }
    namespace OutboundAgentLocationRow {
        const idProperty = "AgentLocationId";
        const nameProperty = "Description";
        const localTextPrefix = "PCHODS.OutboundAgentLocation";
        const lookupKey = "PCHODS.OutboundAgentLocation";
        function getLookup(): Q.Lookup<OutboundAgentLocationRow>;
        const enum Fields {
            AgentLocationId = "AgentLocationId",
            Description = "Description"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundAgentLocationService {
        const baseUrl = "PCHODS/OutboundAgentLocation";
        function Create(request: Serenity.SaveRequest<OutboundAgentLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundAgentLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundAgentLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundAgentLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundAgentLocation/Create",
            Update = "PCHODS/OutboundAgentLocation/Update",
            Delete = "PCHODS/OutboundAgentLocation/Delete",
            Retrieve = "PCHODS/OutboundAgentLocation/Retrieve",
            List = "PCHODS/OutboundAgentLocation/List"
        }
    }
}
declare namespace DAP.PCHODS {
    interface OutboundAgentRow {
        AgentId?: number;
        CompanyCd?: string;
        NvsUserId?: string;
        PrimaryBrand?: string;
        StartInactiveDt?: string;
        AgentLocationId?: number;
        AgentLocationDescription?: string;
        Nm?: string;
        CompanyName?: string;
    }
    namespace OutboundAgentRow {
        const idProperty = "AgentId";
        const nameProperty = "NvsUserId";
        const localTextPrefix = "PCHODS.OutboundAgent";
        const lookupKey = "PCHODS.OutboundAgentLocation";
        function getLookup(): Q.Lookup<OutboundAgentRow>;
        const enum Fields {
            AgentId = "AgentId",
            CompanyCd = "CompanyCd",
            NvsUserId = "NvsUserId",
            PrimaryBrand = "PrimaryBrand",
            StartInactiveDt = "StartInactiveDt",
            AgentLocationId = "AgentLocationId",
            AgentLocationDescription = "AgentLocationDescription",
            Nm = "Nm",
            CompanyName = "CompanyName"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundAgentService {
        const baseUrl = "PCHODS/OutboundAgent";
        function Create(request: Serenity.SaveRequest<OutboundAgentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundAgentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundAgentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundAgentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundAgent/Create",
            Update = "PCHODS/OutboundAgent/Update",
            Delete = "PCHODS/OutboundAgent/Delete",
            Retrieve = "PCHODS/OutboundAgent/Retrieve",
            List = "PCHODS/OutboundAgent/List"
        }
    }
}
declare namespace DAP.PCHODS {
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionHistAuForm {
        CommissionId: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        LowNumBookings: Serenity.DecimalEditor;
        HighNumBookings: Serenity.DecimalEditor;
        CommissionRate: Serenity.DecimalEditor;
        ActiveDt: Serenity.DateEditor;
        InactiveDt: Serenity.DateEditor;
    }
    class OutboundCommissionHistAuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionHistAuRow {
        CommissionId?: string;
        CompanyCd?: string;
        LowNumBookings?: number;
        HighNumBookings?: number;
        CommissionRate?: number;
        ActiveDt?: string;
        InactiveDt?: string;
        CommissionHistAuId?: number;
        CompanyName?: string;
    }
    namespace OutboundCommissionHistAuRow {
        const idProperty = "CommissionHistAuId";
        const nameProperty = "CommissionId";
        const localTextPrefix = "PCHODS.OutboundCommissionHistAu";
        const enum Fields {
            CommissionId = "CommissionId",
            CompanyCd = "CompanyCd",
            LowNumBookings = "LowNumBookings",
            HighNumBookings = "HighNumBookings",
            CommissionRate = "CommissionRate",
            ActiveDt = "ActiveDt",
            InactiveDt = "InactiveDt",
            CommissionHistAuId = "CommissionHistAuId",
            CompanyName = "CompanyName"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundCommissionHistAuService {
        const baseUrl = "PCHODS/OutboundCommissionHistAu";
        function Create(request: Serenity.SaveRequest<OutboundCommissionHistAuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundCommissionHistAuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionHistAuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionHistAuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundCommissionHistAu/Create",
            Update = "PCHODS/OutboundCommissionHistAu/Update",
            Delete = "PCHODS/OutboundCommissionHistAu/Delete",
            Retrieve = "PCHODS/OutboundCommissionHistAu/Retrieve",
            List = "PCHODS/OutboundCommissionHistAu/List"
        }
    }
}
declare namespace DAP.PCHODS {
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionHistBrForm {
        CommissionId: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        LowNumBookings: Serenity.DecimalEditor;
        HighNumBookings: Serenity.DecimalEditor;
        CommissionRate: Serenity.DecimalEditor;
        ActiveDt: Serenity.DateEditor;
        InactiveDt: Serenity.DateEditor;
    }
    class OutboundCommissionHistBrForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionHistBrRow {
        CommissionId?: string;
        CompanyCd?: string;
        LowNumBookings?: number;
        HighNumBookings?: number;
        CommissionRate?: number;
        ActiveDt?: string;
        InactiveDt?: string;
        CommissionHistBrId?: number;
        CompanyName?: string;
    }
    namespace OutboundCommissionHistBrRow {
        const idProperty = "CommissionHistBrId";
        const nameProperty = "CommissionId";
        const localTextPrefix = "PCHODS.OutboundCommissionHistBr";
        const enum Fields {
            CommissionId = "CommissionId",
            CompanyCd = "CompanyCd",
            LowNumBookings = "LowNumBookings",
            HighNumBookings = "HighNumBookings",
            CommissionRate = "CommissionRate",
            ActiveDt = "ActiveDt",
            InactiveDt = "InactiveDt",
            CommissionHistBrId = "CommissionHistBrId",
            CompanyName = "CompanyName"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundCommissionHistBrService {
        const baseUrl = "PCHODS/OutboundCommissionHistBr";
        function Create(request: Serenity.SaveRequest<OutboundCommissionHistBrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundCommissionHistBrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionHistBrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionHistBrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundCommissionHistBr/Create",
            Update = "PCHODS/OutboundCommissionHistBr/Update",
            Delete = "PCHODS/OutboundCommissionHistBr/Delete",
            Retrieve = "PCHODS/OutboundCommissionHistBr/Retrieve",
            List = "PCHODS/OutboundCommissionHistBr/List"
        }
    }
}
declare namespace DAP.PCHODS {
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionHistForm {
        CommissionId: Serenity.StringEditor;
        CompanyCd: CompanyEditor;
        LowNumBookings: Serenity.DecimalEditor;
        HighNumBookings: Serenity.DecimalEditor;
        CommissionRate: Serenity.DecimalEditor;
        ActiveDt: Serenity.DateEditor;
        InactiveDt: Serenity.DateEditor;
    }
    class OutboundCommissionHistForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionHistRow {
        CommissionId?: string;
        CompanyCd?: string;
        LowNumBookings?: number;
        HighNumBookings?: number;
        CommissionRate?: number;
        ActiveDt?: string;
        InactiveDt?: string;
        CommissionHistId?: number;
        CompanyName?: string;
    }
    namespace OutboundCommissionHistRow {
        const idProperty = "CommissionHistId";
        const nameProperty = "CommissionId";
        const localTextPrefix = "PCHODS.OutboundCommissionHist";
        const enum Fields {
            CommissionId = "CommissionId",
            CompanyCd = "CompanyCd",
            LowNumBookings = "LowNumBookings",
            HighNumBookings = "HighNumBookings",
            CommissionRate = "CommissionRate",
            ActiveDt = "ActiveDt",
            InactiveDt = "InactiveDt",
            CommissionHistId = "CommissionHistId",
            CompanyName = "CompanyName"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundCommissionHistService {
        const baseUrl = "PCHODS/OutboundCommissionHist";
        function Create(request: Serenity.SaveRequest<OutboundCommissionHistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundCommissionHistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionHistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionHistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListByCompany(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionHistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundCommissionHist/Create",
            Update = "PCHODS/OutboundCommissionHist/Update",
            Delete = "PCHODS/OutboundCommissionHist/Delete",
            Retrieve = "PCHODS/OutboundCommissionHist/Retrieve",
            List = "PCHODS/OutboundCommissionHist/List",
            ListByCompany = "PCHODS/OutboundCommissionHist/ListByCompany"
        }
    }
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionPeriodForm {
        IsOpen: Serenity.BooleanEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        CurrentMonth: Serenity.DateEditor;
        PreviousMonth: Serenity.DateEditor;
    }
    class OutboundCommissionPeriodForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionPeriodRow {
        OutboundCommissionPeriodId?: number;
        IsOpen?: boolean;
        StartDate?: string;
        EndDate?: string;
        CurrentMonth?: string;
        PreviousMonth?: string;
        ClosedDate?: string;
        ClosedBy?: string;
    }
    namespace OutboundCommissionPeriodRow {
        const idProperty = "OutboundCommissionPeriodId";
        const nameProperty = "ClosedBy";
        const localTextPrefix = "PCHODS.OutboundCommissionPeriod";
        const enum Fields {
            OutboundCommissionPeriodId = "OutboundCommissionPeriodId",
            IsOpen = "IsOpen",
            StartDate = "StartDate",
            EndDate = "EndDate",
            CurrentMonth = "CurrentMonth",
            PreviousMonth = "PreviousMonth",
            ClosedDate = "ClosedDate",
            ClosedBy = "ClosedBy"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundCommissionPeriodService {
        const baseUrl = "PCHODS/OutboundCommissionPeriod";
        function Create(request: Serenity.SaveRequest<OutboundCommissionPeriodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CreateWithSP(request: Serenity.SaveRequest<OutboundCommissionPeriodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundCommissionPeriodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionPeriodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionPeriodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundCommissionPeriod/Create",
            CreateWithSP = "PCHODS/OutboundCommissionPeriod/CreateWithSP",
            Update = "PCHODS/OutboundCommissionPeriod/Update",
            Delete = "PCHODS/OutboundCommissionPeriod/Delete",
            Retrieve = "PCHODS/OutboundCommissionPeriod/Retrieve",
            List = "PCHODS/OutboundCommissionPeriod/List"
        }
    }
}
declare namespace DAP.PCHODS {
    interface OutboundCompanyRow {
        Cd?: string;
        Nm?: string;
    }
    namespace OutboundCompanyRow {
        const idProperty = "Cd";
        const nameProperty = "Cd";
        const localTextPrefix = "PCHODS.OutboundCompany";
        const lookupKey = "PCHODS.Outbound_Company";
        function getLookup(): Q.Lookup<OutboundCompanyRow>;
        const enum Fields {
            Cd = "Cd",
            Nm = "Nm"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundCompanyService {
        const baseUrl = "PCHODS/OutboundCompany";
        function Create(request: Serenity.SaveRequest<OutboundCompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundCompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundCompany/Create",
            Update = "PCHODS/OutboundCompany/Update",
            Delete = "PCHODS/OutboundCompany/Delete",
            Retrieve = "PCHODS/OutboundCompany/Retrieve",
            List = "PCHODS/OutboundCompany/List"
        }
    }
}
declare namespace DAP.PCHODS {
}
declare namespace DAP.PCHODS {
    interface OutboundMonthlyRptArchiveOverrideForm {
        OutboundMonth: Serenity.LookupEditor;
        NclId: Serenity.StringEditor;
        OriginalUserName: Serenity.StringEditor;
        OciPrevMonthDomestic: Serenity.DecimalEditor;
        SscPrevMonthDomestic: Serenity.DecimalEditor;
        OciPrevMonthInternational: Serenity.DecimalEditor;
        SscPrevMonthInternational: Serenity.DecimalEditor;
        OciPrevMonthRevDomestic: Serenity.DecimalEditor;
        SscPrevMonthRevDomestic: Serenity.DecimalEditor;
        OciPrevMonthRevInternational: Serenity.DecimalEditor;
        SscPrevMonthRevInternational: Serenity.DecimalEditor;
        OciAdjustdomestic: Serenity.DecimalEditor;
        SscAdjustdomestic: Serenity.DecimalEditor;
    }
    class OutboundMonthlyRptArchiveOverrideForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundMonthlyRptArchiveOverrideRow {
        OutboundMonthlyRptArchiveId?: number;
        NclId?: string;
        OutboundMonth?: string;
        OriginalUserName?: string;
        OciPrevMonthDomestic?: number;
        SscPrevMonthDomestic?: number;
        OciPrevMonthInternational?: number;
        SscPrevMonthInternational?: number;
        OciPrevMonthRevDomestic?: number;
        SscPrevMonthRevDomestic?: number;
        OciPrevMonthRevInternational?: number;
        SscPrevMonthRevInternational?: number;
        OciAdjustdomestic?: number;
        SscAdjustdomestic?: number;
    }
    namespace OutboundMonthlyRptArchiveOverrideRow {
        const idProperty = "OutboundMonthlyRptArchiveId";
        const nameProperty = "OriginalUserName";
        const localTextPrefix = "PCHODS.OutboundMonthlyRptArchiveOverride";
        const enum Fields {
            OutboundMonthlyRptArchiveId = "OutboundMonthlyRptArchiveId",
            NclId = "NclId",
            OutboundMonth = "OutboundMonth",
            OriginalUserName = "OriginalUserName",
            OciPrevMonthDomestic = "OciPrevMonthDomestic",
            SscPrevMonthDomestic = "SscPrevMonthDomestic",
            OciPrevMonthInternational = "OciPrevMonthInternational",
            SscPrevMonthInternational = "SscPrevMonthInternational",
            OciPrevMonthRevDomestic = "OciPrevMonthRevDomestic",
            SscPrevMonthRevDomestic = "SscPrevMonthRevDomestic",
            OciPrevMonthRevInternational = "OciPrevMonthRevInternational",
            SscPrevMonthRevInternational = "SscPrevMonthRevInternational",
            OciAdjustdomestic = "OciAdjustdomestic",
            SscAdjustdomestic = "SscAdjustdomestic"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundMonthlyRptArchiveOverrideService {
        const baseUrl = "PCHODS/OutboundMonthlyRptArchiveOverride";
        function Create(request: Serenity.SaveRequest<OutboundMonthlyRptArchiveOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundMonthlyRptArchiveOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundMonthlyRptArchiveOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundMonthlyRptArchiveOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundMonthlyRptArchiveOverride/Create",
            Update = "PCHODS/OutboundMonthlyRptArchiveOverride/Update",
            Delete = "PCHODS/OutboundMonthlyRptArchiveOverride/Delete",
            Retrieve = "PCHODS/OutboundMonthlyRptArchiveOverride/Retrieve",
            List = "PCHODS/OutboundMonthlyRptArchiveOverride/List"
        }
    }
}
declare namespace DAP.PCHODS {
    interface OutboundNvsUsersRow {
        UserId?: string;
        UserFirstName?: string;
        UserLastName?: string;
        CompanyCd?: string;
        ActiveInd?: string;
        DepartmentCd?: string;
        DepartmentDesc?: string;
    }
    namespace OutboundNvsUsersRow {
        const idProperty = "UserId";
        const nameProperty = "UserId";
        const localTextPrefix = "PCHODS.OutboundNvsUsers";
        const lookupKey = "NCLHDSAR.OutboundNvsUsers";
        function getLookup(): Q.Lookup<OutboundNvsUsersRow>;
        const enum Fields {
            UserId = "UserId",
            UserFirstName = "UserFirstName",
            UserLastName = "UserLastName",
            CompanyCd = "CompanyCd",
            ActiveInd = "ActiveInd",
            DepartmentCd = "DepartmentCd",
            DepartmentDesc = "DepartmentDesc"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundNvsUsersService {
        const baseUrl = "PCHODS/OutboundNvsUsers";
        function Create(request: Serenity.SaveRequest<OutboundNvsUsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundNvsUsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundNvsUsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundNvsUsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundNvsUsers/Create",
            Update = "PCHODS/OutboundNvsUsers/Update",
            Delete = "PCHODS/OutboundNvsUsers/Delete",
            Retrieve = "PCHODS/OutboundNvsUsers/Retrieve",
            List = "PCHODS/OutboundNvsUsers/List"
        }
    }
}
declare namespace DAP.PCHODS {
    interface SelectCompanyForm {
        CompanyCd: SelectCompanyEditor;
    }
    class SelectCompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface NtrIntlDatelineCruisesForm {
        CompanyCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        CruiseDaysQty: Serenity.IntegerEditor;
        CruiseCalendarDaysQty: Serenity.IntegerEditor;
        LoadDt: Serenity.DateEditor;
    }
    class NtrIntlDatelineCruisesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrIntlDatelineCruisesRow {
        CruiseIntlTk?: number;
        CompanyCd?: string;
        CruiseSegmentCd?: string;
        CruiseDaysQty?: number;
        CruiseCalendarDaysQty?: number;
        LoadDt?: string;
    }
    namespace NtrIntlDatelineCruisesRow {
        const idProperty = "CruiseIntlTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.NtrIntlDatelineCruises";
        const enum Fields {
            CruiseIntlTk = "CruiseIntlTk",
            CompanyCd = "CompanyCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            CruiseDaysQty = "CruiseDaysQty",
            CruiseCalendarDaysQty = "CruiseCalendarDaysQty",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace NtrIntlDatelineCruisesService {
        const baseUrl = "PCHODSNVS/NtrIntlDatelineCruises";
        function Create(request: Serenity.SaveRequest<NtrIntlDatelineCruisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NtrIntlDatelineCruisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrIntlDatelineCruisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrIntlDatelineCruisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/NtrIntlDatelineCruises/Create",
            Update = "PCHODSNVS/NtrIntlDatelineCruises/Update",
            Delete = "PCHODSNVS/NtrIntlDatelineCruises/Delete",
            Retrieve = "PCHODSNVS/NtrIntlDatelineCruises/Retrieve",
            List = "PCHODSNVS/NtrIntlDatelineCruises/List"
        }
    }
}
declare namespace Serenity.Reporting {
    interface ReportRetrieveResult extends Serenity.ServiceResponse {
        IsExternalReport?: boolean;
        ReportKey?: string;
        Title?: string;
        Properties?: Serenity.PropertyItem[];
        InitialSettings?: any;
        IsDataOnlyReport?: boolean;
    }
}
declare namespace DAP.SSISConfig {
}
declare namespace DAP.SSISConfig {
    interface DataFlowForm {
        Source: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        ProcessYn: Serenity.StringEditor;
        Target: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SourceDesc: Serenity.StringEditor;
        TargetDesc: Serenity.StringEditor;
        Package: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Lset: Serenity.DateEditor;
        Cet: Serenity.DateEditor;
    }
    class DataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.SSISConfig {
    interface DataFlowRow {
        Key?: number;
        Source?: string;
        Name?: string;
        ProcessYn?: string;
        Target?: string;
        Description?: string;
        SourceDesc?: string;
        TargetDesc?: string;
        Package?: string;
        Status?: number;
        Lset?: string;
        Cet?: string;
    }
    namespace DataFlowRow {
        const idProperty = "Key";
        const nameProperty = "Source";
        const localTextPrefix = "SSISConfig.DataFlow";
        const enum Fields {
            Key = "Key",
            Source = "Source",
            Name = "Name",
            ProcessYn = "ProcessYn",
            Target = "Target",
            Description = "Description",
            SourceDesc = "SourceDesc",
            TargetDesc = "TargetDesc",
            Package = "Package",
            Status = "Status",
            Lset = "Lset",
            Cet = "Cet"
        }
    }
}
declare namespace DAP.SSISConfig {
    namespace DataFlowService {
        const baseUrl = "SSISConfig/DataFlow";
        function Create(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SSISConfig/DataFlow/Create",
            Update = "SSISConfig/DataFlow/Update",
            Delete = "SSISConfig/DataFlow/Delete",
            Retrieve = "SSISConfig/DataFlow/Retrieve",
            List = "SSISConfig/DataFlow/List"
        }
    }
}
declare namespace DAP.SSISConfig {
}
declare namespace DAP.SSISConfig {
    interface GpInterfaceLogForm {
        CompanyCd: PCHODS.CompanyEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        ExpRevType: Serenity.StringEditor;
        GpInterfaceInd: Serenity.StringEditor;
        GpInterfacedDt: Serenity.DateEditor;
        JournalNum: Serenity.IntegerEditor;
    }
    class GpInterfaceLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.SSISConfig {
    interface GpInterfaceLogRow {
        CompanyCd?: string;
        CruiseSegmentCd?: string;
        ExpRevType?: string;
        GpInterfaceInd?: string;
        GpInterfacedDt?: string;
        JournalNum?: number;
        InterfaceLogId?: number;
    }
    namespace GpInterfaceLogRow {
        const idProperty = "InterfaceLogId";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "SSISConfig.GpInterfaceLog";
        const enum Fields {
            CompanyCd = "CompanyCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            ExpRevType = "ExpRevType",
            GpInterfaceInd = "GpInterfaceInd",
            GpInterfacedDt = "GpInterfacedDt",
            JournalNum = "JournalNum",
            InterfaceLogId = "InterfaceLogId"
        }
    }
}
declare namespace DAP.SSISConfig {
    namespace GpInterfaceLogService {
        const baseUrl = "SSISConfig/GpInterfaceLog";
        function Create(request: Serenity.SaveRequest<GpInterfaceLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GpInterfaceLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GpInterfaceLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GpInterfaceLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SSISConfig/GpInterfaceLog/Create",
            Update = "SSISConfig/GpInterfaceLog/Update",
            Delete = "SSISConfig/GpInterfaceLog/Delete",
            Retrieve = "SSISConfig/GpInterfaceLog/Retrieve",
            List = "SSISConfig/GpInterfaceLog/List"
        }
    }
}
declare namespace DAP.SSISConfig {
}
declare namespace DAP.SSISConfig {
    interface INTConfigBaseForm {
        ConfigurationFilter: Serenity.LookupEditor;
        PackagePath: Serenity.StringEditor;
        ConfiguredValueType: Serenity.StringEditor;
        ConfiguredValue: Serenity.StringEditor;
        EnvironmentEnum: Serenity.IntegerEditor;
        EnvironmentDesc: Serenity.StringEditor;
        ConfigId: Serenity.IntegerEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedOn: Serenity.DateEditor;
    }
    class INTConfigBaseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.SSISConfig {
    interface INTConfigBaseRow {
        ConfigurationFilter?: string;
        PackagePath?: string;
        ConfiguredValueType?: string;
        ConfiguredValue?: string;
        EnvironmentEnum?: number;
        EnvironmentDesc?: string;
        ConfigId?: number;
        ModifiedBy?: string;
        ModifiedOn?: string;
    }
    namespace INTConfigBaseRow {
        const idProperty = "ConfigId";
        const nameProperty = "ConfigurationFilter";
        const localTextPrefix = "SSISConfig.INTConfigBase";
        const enum Fields {
            ConfigurationFilter = "ConfigurationFilter",
            PackagePath = "PackagePath",
            ConfiguredValueType = "ConfiguredValueType",
            ConfiguredValue = "ConfiguredValue",
            EnvironmentEnum = "EnvironmentEnum",
            EnvironmentDesc = "EnvironmentDesc",
            ConfigId = "ConfigId",
            ModifiedBy = "ModifiedBy",
            ModifiedOn = "ModifiedOn"
        }
    }
}
declare namespace DAP.SSISConfig {
    namespace INTConfigBaseService {
        const baseUrl = "SSISConfig/INTConfigBase";
        function Create(request: Serenity.SaveRequest<INTConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<INTConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<INTConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<INTConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SSISConfig/INTConfigBase/Create",
            Update = "SSISConfig/INTConfigBase/Update",
            Delete = "SSISConfig/INTConfigBase/Delete",
            Retrieve = "SSISConfig/INTConfigBase/Retrieve",
            List = "SSISConfig/INTConfigBase/List"
        }
    }
}
declare namespace DAP.SSISConfig {
    class MicrosDataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MicrosDataFlowForm {
        Source: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        ProcessYn: Serenity.StringEditor;
        Target: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SourceDesc: Serenity.StringEditor;
        TargetDesc: Serenity.StringEditor;
        Package: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Lset: Serenity.DateEditor;
        Cet: Serenity.DateEditor;
        LseIndex: Serenity.IntegerEditor;
        CeIndex: Serenity.IntegerEditor;
    }
}
declare namespace DAP.SSISConfig {
    interface MicrosDataFlowRow {
        Key?: number;
        Source?: string;
        Name?: string;
        ProcessYn?: string;
        Target?: string;
        Description?: string;
        SourceDesc?: string;
        TargetDesc?: string;
        Package?: string;
        Status?: number;
        Lset?: string;
        Cet?: string;
        LseIndex?: number;
        CeIndex?: number;
    }
    namespace MicrosDataFlowRow {
        const idProperty = "Key";
        const nameProperty = "Source";
        const localTextPrefix = "SSISConfig.MicrosDataFlow";
        namespace Fields {
            const Key: any;
            const Source: any;
            const Name: any;
            const ProcessYn: any;
            const Target: any;
            const Description: any;
            const SourceDesc: any;
            const TargetDesc: any;
            const Package: any;
            const Status: any;
            const Lset: any;
            const Cet: any;
            const LseIndex: any;
            const CeIndex: any;
        }
    }
}
declare namespace DAP.SSISConfig {
    namespace MicrosDataFlowService {
        const baseUrl = "SSISConfig/MicrosDataFlow";
        function Create(request: Serenity.SaveRequest<MicrosDataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MicrosDataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MicrosDataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MicrosDataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace DAP.SSISConfig {
}
declare namespace DAP.SSISConfig {
    interface PsInterfaceConfigForm {
        ConfigSetting: Serenity.StringEditor;
        DataType: Serenity.StringEditor;
        ConfigValue: Serenity.StringEditor;
        ConfigValueDate: Serenity.DateEditor;
    }
    class PsInterfaceConfigForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.SSISConfig {
    interface PsInterfaceConfigRow {
        SourceSystem?: string;
        ConfigSetting?: string;
        DataType?: string;
        ConfigValue?: string;
        ConfigValueDate?: string;
        ConfigId?: number;
        ModifiedDate?: string;
        ModifiedBy?: string;
    }
    namespace PsInterfaceConfigRow {
        const idProperty = "ConfigId";
        const nameProperty = "SourceSystem";
        const localTextPrefix = "SSISConfig.PsInterfaceConfig";
        const enum Fields {
            SourceSystem = "SourceSystem",
            ConfigSetting = "ConfigSetting",
            DataType = "DataType",
            ConfigValue = "ConfigValue",
            ConfigValueDate = "ConfigValueDate",
            ConfigId = "ConfigId",
            ModifiedDate = "ModifiedDate",
            ModifiedBy = "ModifiedBy"
        }
    }
}
declare namespace DAP.SSISConfig {
    namespace PsInterfaceConfigService {
        const baseUrl = "SSISConfig/PsInterfaceConfig";
        function Create(request: Serenity.SaveRequest<PsInterfaceConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PsInterfaceConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PsInterfaceConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PsInterfaceConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SSISConfig/PsInterfaceConfig/Create",
            Update = "SSISConfig/PsInterfaceConfig/Update",
            Delete = "SSISConfig/PsInterfaceConfig/Delete",
            Retrieve = "SSISConfig/PsInterfaceConfig/Retrieve",
            List = "SSISConfig/PsInterfaceConfig/List"
        }
    }
}
declare namespace DAP.SSISConfig {
}
declare namespace DAP.SSISConfig {
    interface SsisConfigBaseForm {
        ConfigurationFilter: Serenity.LookupEditor;
        PackagePath: Serenity.StringEditor;
        ConfiguredValueType: Serenity.StringEditor;
        ConfiguredValue: Serenity.StringEditor;
        EnvironmentEnum: Serenity.IntegerEditor;
        EnvironmentDesc: Serenity.StringEditor;
        ConfigId: Serenity.IntegerEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedOn: Serenity.DateEditor;
    }
    class SsisConfigBaseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.SSISConfig {
    interface SsisConfigBaseRow {
        ConfigurationFilter?: string;
        PackagePath?: string;
        ConfiguredValueType?: string;
        ConfiguredValue?: string;
        EnvironmentEnum?: number;
        EnvironmentDesc?: string;
        ConfigId?: number;
        ModifiedBy?: string;
        ModifiedOn?: string;
    }
    namespace SsisConfigBaseRow {
        const idProperty = "ConfigId";
        const nameProperty = "ConfigurationFilter";
        const localTextPrefix = "SSISConfig.SsisConfigBase";
        const enum Fields {
            ConfigurationFilter = "ConfigurationFilter",
            PackagePath = "PackagePath",
            ConfiguredValueType = "ConfiguredValueType",
            ConfiguredValue = "ConfiguredValue",
            EnvironmentEnum = "EnvironmentEnum",
            EnvironmentDesc = "EnvironmentDesc",
            ConfigId = "ConfigId",
            ModifiedBy = "ModifiedBy",
            ModifiedOn = "ModifiedOn"
        }
    }
}
declare namespace DAP.SSISConfig {
    namespace SsisConfigBaseService {
        const baseUrl = "SSISConfig/SsisConfigBase";
        function Create(request: Serenity.SaveRequest<SsisConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SsisConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SsisConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SsisConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SSISConfig/SsisConfigBase/Create",
            Update = "SSISConfig/SsisConfigBase/Update",
            Delete = "SSISConfig/SsisConfigBase/Delete",
            Retrieve = "SSISConfig/SsisConfigBase/Retrieve",
            List = "SSISConfig/SsisConfigBase/List"
        }
    }
}
declare namespace DAP {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace DAP.Texts {
}
declare namespace DAP.Administration {
    class DataAuditLogDialog extends Serenity.EntityDialog<DataAuditLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: DataAuditLogForm;
        protected getToolbarButtons(): any[];
        protected updateInterface(): void;
    }
}
declare namespace DAP.Administration {
    class DataAuditLogGrid extends Serenity.EntityGrid<DataAuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DataAuditLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace DAP.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace DAP.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace DAP.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace DAP.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace DAP.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace DAP.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace DAP.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace DAP.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace DAP.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace DAP.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace DAP.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace DAP.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace DAP.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace DAP.LanguageList {
    function getValue(): string[][];
}
declare namespace DAP.ScriptInitialization {
}
declare namespace DAP {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace DAP.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace DAP.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace DAP.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace DAP.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        icon?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace DAP.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace DAP.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace DAP.Membership {
    interface PromptDialogOptions {
        cssClass?: string;
        editorType?: string;
        editorOptions?: any;
        title?: string;
        message?: string;
        isHtml?: boolean;
        value?: any;
        required?: boolean;
        validateValue: (v: any) => boolean;
    }
    class PromptDialog extends Serenity.PropertyDialog<any, PromptDialogOptions> {
        constructor(opt: PromptDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected loadInitialEntity(): void;
        protected getPropertyItems(): {
            name: string;
            editorType: string;
            required: any;
            editorParams: any;
        }[];
        value: any;
        static prompt(title: string, message: string, value: string, validateValue: (string: any) => boolean): void;
    }
}
declare namespace DAP {
    interface ServiceEditorOptions {
        cascadeFrom?: string;
        cascadeField?: string;
        cascadeValue?: any;
    }
    class ServiceEditorBase<TOptions extends ServiceEditorOptions, TRow> extends Serenity.Select2AjaxEditor<TOptions, TRow> {
        private cascadeLink;
        constructor(hidden: JQuery, options: TOptions);
        private setCascadeFrom;
        cascadeValue: any;
        cascadeField: any;
        cascadeFrom: any;
        private getCascadeFromValue;
        protected getIncludeColumns(): string[];
        protected getSort(): string[];
        getTypeDelay(): number;
        private lastRequest;
        executeQueryByKey(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<TRow>>): void;
        executeQuery(options: Serenity.ServiceOptions<Serenity.ListResponse<TRow>>): void;
    }
}
declare namespace DAP {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace DAP.Common {
    class MailDialog extends Serenity.EntityDialog<MailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MailForm;
        constructor();
    }
}
declare namespace DAP.Common {
    class MailGrid extends Serenity.EntityGrid<MailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace DAP.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace DAP.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace DAP.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        icon?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace DAP.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): ({
            title: string;
            cssClass: string;
            onClick: () => void;
            icon?: undefined;
        } | {
            title: string;
            cssClass: string;
            icon: string;
            onClick: () => void;
        })[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace DAP.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace DAP.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace DAP.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace DAP.DWSupport {
    class FinReportPublishingSuppDialog extends Serenity.EntityDialog<FinReportPublishingSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FinReportPublishingSuppForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected updateTitle(): void;
    }
}
declare namespace DAP.DWSupport {
    class FinReportPublishingSuppGrid extends Serenity.EntityGrid<FinReportPublishingSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FinReportPublishingSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string): void;
        protected getTemplate(): string;
    }
}
declare namespace DAP.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DAP.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DAP.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DAP.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DAP.NCLHDSAR {
    class AssigneeDialog extends Serenity.EntityDialog<AssigneeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AssigneeForm;
    }
}
declare namespace DAP.NCLHDSAR {
    class AssigneeGrid extends Serenity.EntityGrid<AssigneeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssigneeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.NCLHDSAR {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace DAP.NCLHDSAR {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestAttributesDialog extends Serenity.EntityDialog<RequestAttributesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RequestAttributesForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.NCLHDSAR {
    class AttributeDialog extends RequestAttributesDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestAttributesGrid extends Serenity.EntityGrid<RequestAttributesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequestAttributesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.NCLHDSAR {
    class AttributeGrid extends RequestAttributesGrid {
        protected getDialogType(): typeof AttributeDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _RequestID;
        requestID: string;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestDialog extends Serenity.EntityDialog<RequestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RequestForm;
        private aGrid;
        private loadedState;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: RequestRow): void;
        onSaveSuccess(response: any): void;
        protected updateInterface(): void;
        protected updateTitle(): void;
        protected createToolbar(): void;
        protected createQuickSearchInput(): void;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestGrid extends Serenity.EntityGrid<RequestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequestDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestAttributesEditor extends Common.GridEditorBase<RequestAttributesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequestAttributesDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestValueEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(value: string): string;
        static isValidValue(requestvalue: string): boolean;
        static formatField(requestvalue: any): any;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestStatusDialog extends Serenity.EntityDialog<RequestStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RequestStatusForm;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestStatusGrid extends Serenity.EntityGrid<RequestStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequestStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestTypeDialog extends Serenity.EntityDialog<RequestTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RequestTypeForm;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestTypeEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, RequestTypeRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): any;
    }
}
declare namespace DAP.NCLHDSAR {
    class RequestTypeGrid extends Serenity.EntityGrid<RequestTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequestTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.NCLHDSAR {
    class SwRequestAttributesDialog extends Serenity.EntityDialog<SwRequestAttributesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SwRequestAttributesForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.NCLHDSAR {
    class SwAttributeDialog extends SwRequestAttributesDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace DAP.NCLHDSAR {
    class SwRequestAttributesGrid extends Serenity.EntityGrid<SwRequestAttributesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SwRequestAttributesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.NCLHDSAR {
    class SwAttributeGrid extends SwRequestAttributesGrid {
        protected getDialogType(): typeof SwAttributeDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _RequestID;
        requestID: number;
    }
}
declare namespace DAP.NCLHDSAR {
    class SwRequestDialog extends Serenity.EntityDialog<SwRequestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SwRequestForm;
        private aGrid;
        private loadedState;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: SwRequestRow): void;
        onSaveSuccess(response: any): void;
        protected updateInterface(): void;
        protected updateTitle(): void;
        protected createToolbar(): void;
        protected createQuickSearchInput(): void;
    }
}
declare namespace DAP.NCLHDSAR {
    class SwRequestGrid extends Serenity.EntityGrid<SwRequestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SwRequestDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.NCLHDSAR {
    class SwRequestAttributesEditor extends Common.GridEditorBase<SwRequestAttributesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SwRequestAttributesDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.NCLHDSAR {
    class SystemMasterDialog extends Serenity.EntityDialog<SystemMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SystemMasterForm;
    }
}
declare namespace DAP.NCLHDSAR {
    class SystemMasterEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, SystemMasterRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace DAP.NCLHDSAR {
    class SystemMasterGrid extends Serenity.EntityGrid<SystemMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SystemMasterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.NCLHODSMICROS {
    class DataFlowDialog extends Serenity.EntityDialog<DataFlowRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DataFlowForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.NCLHODSMICROS {
    class DataFlowGrid extends Serenity.EntityGrid<DataFlowRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DataFlowDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    class AmoslevelDialog extends Serenity.EntityDialog<AmoslevelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AmoslevelForm;
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    class AmoslevelGrid extends Serenity.EntityGrid<AmoslevelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AmoslevelDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    class DataFlowDialog extends Serenity.EntityDialog<DataFlowRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DataFlowForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.NCLHODSSPENDVIS {
    class DataFlowGrid extends Serenity.EntityGrid<DataFlowRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DataFlowDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHDW {
    class DimInvoiceDialog extends Serenity.EntityDialog<DimInvoiceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DimInvoiceForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHDW {
    class DimInvoiceGrid extends Serenity.EntityGrid<DimInvoiceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DimInvoiceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODS {
    class OutboundAgentDialog extends Serenity.EntityDialog<OutboundAgentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OutboundAgentForm;
        constructor();
    }
}
declare namespace DAP.PCHODS {
    class OutboundAgentGrid extends Serenity.EntityGrid<OutboundAgentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundAgentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODS {
    class OutboundAgentLocationDialog extends Serenity.EntityDialog<OutboundAgentLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OutboundAgentLocationForm;
    }
}
declare namespace DAP.PCHODS {
    class OutboundAgentLocationEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OutboundAgentLocationRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace DAP.PCHODS {
    class OutboundAgentLocationGrid extends Serenity.EntityGrid<OutboundAgentLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundAgentLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionHistDialog extends Serenity.EntityDialog<OutboundCommissionHistRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OutboundCommissionHistForm;
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionHistGrid extends Serenity.EntityGrid<OutboundCommissionHistRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundCommissionHistDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        private _CompanyID;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<OutboundCommissionHistRow>;
        private setSaveButtonState;
        private getEffectiveValue;
        private numericInputFormatter;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private saveClick;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        private createNewBracketClick;
    }
}
declare namespace DAP.PCHODS {
    class SelectComapanyDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        returnData: (dataList: string) => void;
        protected form: SelectCompanyForm;
        constructor();
        createBracket(): void;
        protected getDialogButtons(): Serenity.DialogButton[];
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected onDialogClose(): void;
    }
}
declare namespace DAP.PCHODS {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class SelectCompanyEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionHistAuDialog extends Serenity.EntityDialog<OutboundCommissionHistAuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OutboundCommissionHistAuForm;
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionHistAuGrid extends Serenity.EntityGrid<OutboundCommissionHistAuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundCommissionHistAuDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private createNewBracketClick;
        protected onViewProcessData(response: any): Serenity.ListResponse<OutboundCommissionHistAuRow>;
        private setSaveButtonState;
        private getEffectiveValue;
        private numericInputFormatter;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private saveClick;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionHistBrDialog extends Serenity.EntityDialog<OutboundCommissionHistBrRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OutboundCommissionHistBrForm;
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionHistBrGrid extends Serenity.EntityGrid<OutboundCommissionHistBrRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundCommissionHistBrDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        private AllowEdits;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private createNewBracketClick;
        protected onViewProcessData(response: any): Serenity.ListResponse<OutboundCommissionHistBrRow>;
        private setSaveButtonState;
        private getEffectiveValue;
        private numericInputFormatter;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private saveClick;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionPeriodDialog extends Serenity.EntityDialog<OutboundCommissionPeriodRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: OutboundCommissionPeriodForm;
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionPeriodGrid extends Serenity.EntityGrid<OutboundCommissionPeriodRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundCommissionPeriodDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createQuickSearchInput(): void;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODS {
    class CompanyEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OutboundCompanyRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: PCHODS.OutboundCompanyRow, lookup: Q.Lookup<PCHODS.OutboundCompanyRow>): string;
    }
}
declare namespace DAP.PCHODS {
    class OutboundMonthlyRptArchiveOverrideDialog extends Serenity.EntityDialog<OutboundMonthlyRptArchiveOverrideRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OutboundMonthlyRptArchiveOverrideForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODS {
    class OutboundMonthlyRptArchiveOverrideGrid extends Serenity.EntityGrid<OutboundMonthlyRptArchiveOverrideRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundMonthlyRptArchiveOverrideDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private canSubmit;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.PCHODS {
    class UsersEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OutboundNvsUsersRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: PCHODS.OutboundNvsUsersRow, lookup: Q.Lookup<PCHODS.OutboundNvsUsersRow>): string;
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrIntlDatelineCruisesDialog extends Serenity.EntityDialog<NtrIntlDatelineCruisesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NtrIntlDatelineCruisesForm;
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrIntlDatelineCruisesGrid extends Serenity.EntityGrid<NtrIntlDatelineCruisesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NtrIntlDatelineCruisesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.SSISConfig {
    class DataFlowDialog extends Serenity.EntityDialog<DataFlowRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DataFlowForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class DataFlowGrid extends Serenity.EntityGrid<DataFlowRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DataFlowDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class GpInterfaceLogDialog extends Serenity.EntityDialog<GpInterfaceLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GpInterfaceLogForm;
    }
}
declare namespace DAP.SSISConfig {
    class GpInterfaceLogGrid extends Serenity.EntityGrid<GpInterfaceLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GpInterfaceLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.SSISConfig {
    class INTConfigBaseDialog extends Serenity.EntityDialog<INTConfigBaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: INTConfigBaseForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class INTConfigBaseGrid extends Serenity.EntityGrid<INTConfigBaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof INTConfigBaseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class MicrosDataFlowDialog extends Serenity.EntityDialog<MicrosDataFlowRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MicrosDataFlowForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class MicrosDataFlowGrid extends Serenity.EntityGrid<MicrosDataFlowRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MicrosDataFlowDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class PsInterfaceConfigDialog extends Serenity.EntityDialog<PsInterfaceConfigRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PsInterfaceConfigForm;
        constructor();
        protected afterLoadEntity(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class PsInterfaceConfigGrid extends Serenity.EntityGrid<PsInterfaceConfigRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PsInterfaceConfigDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class SsisConfigBaseDialog extends Serenity.EntityDialog<SsisConfigBaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SsisConfigBaseForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.SSISConfig {
    class SsisConfigBaseGrid extends Serenity.EntityGrid<SsisConfigBaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SsisConfigBaseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
    }
}

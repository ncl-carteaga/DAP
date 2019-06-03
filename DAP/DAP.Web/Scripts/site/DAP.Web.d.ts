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
    interface RequestAttributesForm {
        Id: Serenity.StringEditor;
        SystemMasterId: SystemMasterEditor;
        RequestValue: Serenity.StringEditor;
        ResolvedDt: Serenity.DateEditor;
        ExtractDt: Serenity.DateEditor;
        Addr1: Serenity.StringEditor;
        Addr2: Serenity.StringEditor;
        CityNm: Serenity.StringEditor;
        StateNm: Serenity.StringEditor;
        PostalCd: Serenity.StringEditor;
        CountryCd: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
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
        SystemMasterSystemName?: string;
        SystemMasterSystemTable?: string;
        SystemMasterSystemDesc?: string;
        SystemMasterSystemActiveYn?: string;
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
            SystemMasterSystemName = "SystemMasterSystemName",
            SystemMasterSystemTable = "SystemMasterSystemTable",
            SystemMasterSystemDesc = "SystemMasterSystemDesc",
            SystemMasterSystemActiveYn = "SystemMasterSystemActiveYn"
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
            DaysOld = "DaysOld"
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
        function Update(request: Serenity.SaveRequest<OutboundCommissionPeriodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionPeriodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionPeriodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundCommissionPeriod/Create",
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
    interface OutboundNvsUsersRow {
        UserId?: string;
        UserFirstName?: string;
        UserLastName?: string;
        CompanyCd?: string;
        ActiveInd?: string;
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
            ActiveInd = "ActiveInd"
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
    class RequestAttributesDialog extends Serenity.EntityDialog<RequestAttributesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RequestAttributesForm;
        constructor();
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
    class UsersEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OutboundNvsUsersRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: PCHODS.OutboundNvsUsersRow, lookup: Q.Lookup<PCHODS.OutboundNvsUsersRow>): string;
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

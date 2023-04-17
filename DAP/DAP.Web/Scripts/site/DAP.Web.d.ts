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
declare namespace DAP.Avaya {
    interface BrandRow {
        BrandTk?: number;
        Brand?: string;
    }
    namespace BrandRow {
        const idProperty = "Brand";
        const nameProperty = "Brand";
        const localTextPrefix = "Avaya.Brand";
        const lookupKey = "Avaya.Brand";
        function getLookup(): Q.Lookup<BrandRow>;
        const enum Fields {
            BrandTk = "BrandTk",
            Brand = "Brand"
        }
    }
}
declare namespace DAP.Avaya {
    namespace BrandService {
        const baseUrl = "Avaya/Brand";
        function Create(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BrandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BrandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/Brand/Create",
            Update = "Avaya/Brand/Update",
            Delete = "Avaya/Brand/Delete",
            Retrieve = "Avaya/Brand/Retrieve",
            List = "Avaya/Brand/List"
        }
    }
}
declare namespace DAP.Avaya {
    interface CallTypeRow {
        TypeTk?: number;
        Type?: string;
    }
    namespace CallTypeRow {
        const idProperty = "Type";
        const nameProperty = "Type";
        const localTextPrefix = "Avaya.CallType";
        const lookupKey = "Avaya.Call_Type";
        function getLookup(): Q.Lookup<CallTypeRow>;
        const enum Fields {
            TypeTk = "TypeTk",
            Type = "Type"
        }
    }
}
declare namespace DAP.Avaya {
    namespace CallTypeService {
        const baseUrl = "Avaya/CallType";
        function Create(request: Serenity.SaveRequest<CallTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CallTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CallTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CallTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/CallType/Create",
            Update = "Avaya/CallType/Update",
            Delete = "Avaya/CallType/Delete",
            Retrieve = "Avaya/CallType/Retrieve",
            List = "Avaya/CallType/List"
        }
    }
}
declare namespace DAP.Avaya {
    interface DepartmentRow {
        DepartmentTk?: number;
        Department?: string;
    }
    namespace DepartmentRow {
        const idProperty = "Department";
        const nameProperty = "Department";
        const localTextPrefix = "Avaya.Department";
        const lookupKey = "Avaya.Department";
        function getLookup(): Q.Lookup<DepartmentRow>;
        const enum Fields {
            DepartmentTk = "DepartmentTk",
            Department = "Department"
        }
    }
}
declare namespace DAP.Avaya {
    namespace DepartmentService {
        const baseUrl = "Avaya/Department";
        function Create(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/Department/Create",
            Update = "Avaya/Department/Update",
            Delete = "Avaya/Department/Delete",
            Retrieve = "Avaya/Department/Retrieve",
            List = "Avaya/Department/List"
        }
    }
}
declare namespace DAP.Avaya {
    interface GroupRow {
        Tk?: number;
        Cd?: string;
    }
    namespace GroupRow {
        const idProperty = "Cd";
        const nameProperty = "Cd";
        const localTextPrefix = "Avaya.Group";
        const lookupKey = "Avaya.Group";
        function getLookup(): Q.Lookup<GroupRow>;
        const enum Fields {
            Tk = "Tk",
            Cd = "Cd"
        }
    }
}
declare namespace DAP.Avaya {
    namespace GroupService {
        const baseUrl = "Avaya/Group";
        function Create(request: Serenity.SaveRequest<GroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/Group/Create",
            Update = "Avaya/Group/Update",
            Delete = "Avaya/Group/Delete",
            Retrieve = "Avaya/Group/Retrieve",
            List = "Avaya/Group/List"
        }
    }
}
declare namespace DAP.Avaya {
    interface RegionRow {
        RegionTk?: number;
        Region?: string;
    }
    namespace RegionRow {
        const idProperty = "Region";
        const nameProperty = "Region";
        const localTextPrefix = "Avaya.Region";
        const lookupKey = "Avaya.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        const enum Fields {
            RegionTk = "RegionTk",
            Region = "Region"
        }
    }
}
declare namespace DAP.Avaya {
    namespace RegionService {
        const baseUrl = "Avaya/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/Region/Create",
            Update = "Avaya/Region/Update",
            Delete = "Avaya/Region/Delete",
            Retrieve = "Avaya/Region/Retrieve",
            List = "Avaya/Region/List"
        }
    }
}
declare namespace DAP.Avaya {
}
declare namespace DAP.Avaya {
    interface SkillSplitMappingForm {
        CmsNo: Serenity.IntegerEditor;
        AcdNo: Serenity.IntegerEditor;
        SplitNo: Serenity.IntegerEditor;
        SkillName: Serenity.StringEditor;
        Brand: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        GroupCd: Serenity.LookupEditor;
        Region: Serenity.LookupEditor;
        SupportChannel: Serenity.LookupEditor;
        Department: Serenity.LookupEditor;
        CallType: Serenity.LookupEditor;
    }
    class SkillSplitMappingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.Avaya {
    interface SkillSplitMappingRow {
        SkillSplitTk?: number;
        CmsNo?: number;
        AcdNo?: number;
        SplitNo?: number;
        SkillName?: string;
        Brand?: string;
        Status?: string;
        GroupCd?: string;
        Region?: string;
        SupportChannel?: string;
        Department?: string;
        CallType?: string;
        BrandBrandTk?: number;
        StatusStatusTk?: number;
        GroupCdTk?: number;
        RegionRegionTk?: number;
        SupportChannelSuppChannelTk?: number;
        DepartmentDepartmentTk?: number;
        CallTypeTypeTk?: number;
    }
    namespace SkillSplitMappingRow {
        const idProperty = "SkillSplitTk";
        const nameProperty = "SkillName";
        const localTextPrefix = "Avaya.SkillSplitMapping";
        const enum Fields {
            SkillSplitTk = "SkillSplitTk",
            CmsNo = "CmsNo",
            AcdNo = "AcdNo",
            SplitNo = "SplitNo",
            SkillName = "SkillName",
            Brand = "Brand",
            Status = "Status",
            GroupCd = "GroupCd",
            Region = "Region",
            SupportChannel = "SupportChannel",
            Department = "Department",
            CallType = "CallType",
            BrandBrandTk = "BrandBrandTk",
            StatusStatusTk = "StatusStatusTk",
            GroupCdTk = "GroupCdTk",
            RegionRegionTk = "RegionRegionTk",
            SupportChannelSuppChannelTk = "SupportChannelSuppChannelTk",
            DepartmentDepartmentTk = "DepartmentDepartmentTk",
            CallTypeTypeTk = "CallTypeTypeTk"
        }
    }
}
declare namespace DAP.Avaya {
    namespace SkillSplitMappingService {
        const baseUrl = "Avaya/SkillSplitMapping";
        function Create(request: Serenity.SaveRequest<SkillSplitMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SkillSplitMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SkillSplitMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SkillSplitMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/SkillSplitMapping/Create",
            Update = "Avaya/SkillSplitMapping/Update",
            Delete = "Avaya/SkillSplitMapping/Delete",
            Retrieve = "Avaya/SkillSplitMapping/Retrieve",
            List = "Avaya/SkillSplitMapping/List"
        }
    }
}
declare namespace DAP.Avaya {
    interface StatusRow {
        StatusTk?: number;
        StatusDesc?: string;
    }
    namespace StatusRow {
        const idProperty = "StatusDesc";
        const nameProperty = "StatusDesc";
        const localTextPrefix = "Avaya.Status";
        const lookupKey = "Avaya.Status";
        function getLookup(): Q.Lookup<StatusRow>;
        const enum Fields {
            StatusTk = "StatusTk",
            StatusDesc = "StatusDesc"
        }
    }
}
declare namespace DAP.Avaya {
    namespace StatusService {
        const baseUrl = "Avaya/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/Status/Create",
            Update = "Avaya/Status/Update",
            Delete = "Avaya/Status/Delete",
            Retrieve = "Avaya/Status/Retrieve",
            List = "Avaya/Status/List"
        }
    }
}
declare namespace DAP.Avaya {
    interface SupportChannelRow {
        SuppChannelTk?: number;
        SupportChannel?: string;
    }
    namespace SupportChannelRow {
        const idProperty = "SupportChannel";
        const nameProperty = "SupportChannel";
        const localTextPrefix = "Avaya.SupportChannel";
        const lookupKey = "Avaya.Support_Channel";
        function getLookup(): Q.Lookup<SupportChannelRow>;
        const enum Fields {
            SuppChannelTk = "SuppChannelTk",
            SupportChannel = "SupportChannel"
        }
    }
}
declare namespace DAP.Avaya {
    namespace SupportChannelService {
        const baseUrl = "Avaya/SupportChannel";
        function Create(request: Serenity.SaveRequest<SupportChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupportChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupportChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupportChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Avaya/SupportChannel/Create",
            Update = "Avaya/SupportChannel/Update",
            Delete = "Avaya/SupportChannel/Delete",
            Retrieve = "Avaya/SupportChannel/Retrieve",
            List = "Avaya/SupportChannel/List"
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
    interface AgencySnapshotRequestForm {
        RequestedBy: Serenity.StringEditor;
        RequestedByDate: Serenity.DateEditor;
        RequestedReason: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedDate: Serenity.DateEditor;
    }
    class AgencySnapshotRequestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface AgencySnapshotRequestRow {
        AgencySnapshotReqId?: number;
        RequestedBy?: string;
        RequestedByDate?: string;
        RequestedReason?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        ModifiedBy?: string;
        ModifiedDate?: string;
    }
    namespace AgencySnapshotRequestRow {
        const idProperty = "AgencySnapshotReqId";
        const nameProperty = "RequestedBy";
        const localTextPrefix = "DWSupport.AgencySnapshotRequest";
        const enum Fields {
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
declare namespace DAP.DWSupport {
    namespace AgencySnapshotRequestService {
        const baseUrl = "DWSupport/AgencySnapshotRequest";
        function Create(request: Serenity.SaveRequest<AgencySnapshotRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgencySnapshotRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgencySnapshotRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgencySnapshotRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/AgencySnapshotRequest/Create",
            Update = "DWSupport/AgencySnapshotRequest/Update",
            Delete = "DWSupport/AgencySnapshotRequest/Delete",
            Retrieve = "DWSupport/AgencySnapshotRequest/Retrieve",
            List = "DWSupport/AgencySnapshotRequest/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface AirCostAdjSuppForm {
        VoyageCd: Serenity.StringEditor;
        RmEstimatedAirCost: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }
    class AirCostAdjSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface AirCostAdjSuppRow {
        AirCostAdjId?: number;
        VoyageCd?: string;
        RmEstimatedAirCost?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }
    namespace AirCostAdjSuppRow {
        const idProperty = "AirCostAdjId";
        const nameProperty = "VoyageCd";
        const localTextPrefix = "DWSupport.AirCostAdjSupp";
        const enum Fields {
            AirCostAdjId = "AirCostAdjId",
            VoyageCd = "VoyageCd",
            RmEstimatedAirCost = "RmEstimatedAirCost",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace AirCostAdjSuppService {
        const baseUrl = "DWSupport/AirCostAdjSupp";
        function Create(request: Serenity.SaveRequest<AirCostAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AirCostAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AirCostAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AirCostAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/AirCostAdjSupp/Create",
            Update = "DWSupport/AirCostAdjSupp/Update",
            Delete = "DWSupport/AirCostAdjSupp/Delete",
            Retrieve = "DWSupport/AirCostAdjSupp/Retrieve",
            List = "DWSupport/AirCostAdjSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface AmenitiesSuppForm {
        AmenityCd: Serenity.StringEditor;
        AmenityTypeId: Serenity.LookupEditor;
        AmenityDesc: Serenity.StringEditor;
        AmenityCategoryCd: Serenity.LookupEditor;
        DisplayOrderCd: Serenity.IntegerEditor;
        AmenityCostAmt: Serenity.DecimalEditor;
        AmenityAddonAmt: Serenity.DecimalEditor;
        IsPerDiemCd: SelectYNEditor;
        CurrencyCd: Serenity.LookupEditor;
        ConditionDesc: Serenity.TextAreaEditor;
        CommentTxt: Serenity.TextAreaEditor;
        CreatedDat: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedDat: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }
    class AmenitiesSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface AmenitiesSuppRow {
        AmenityId?: number;
        AmenityCd?: string;
        AmenityTypeId?: number;
        AmenityDesc?: string;
        AmenityCategoryCd?: string;
        DisplayOrderCd?: number;
        ConditionDesc?: string;
        CommentTxt?: string;
        AmenityCostAmt?: number;
        AmenityAddonAmt?: number;
        IsPerDiemCd?: string;
        CurrencyCd?: string;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
        AmenityTypeAmenityTypeCd?: string;
        AmenityTypeAmenityTypeDesc?: string;
        AmenityTypeConditionDesc?: string;
        AmenityTypeDisplayOrderCd?: number;
        AmenityTypeCommentTxt?: string;
        AmenityTypeCreatedDat?: string;
        AmenityTypeCreatedByNam?: string;
        AmenityTypeModifiedDat?: string;
        AmenityTypeModifiedByNam?: string;
    }
    namespace AmenitiesSuppRow {
        const idProperty = "AmenityId";
        const nameProperty = "AmenityCd";
        const localTextPrefix = "DWSupport.AmenitiesSupp";
        const enum Fields {
            AmenityId = "AmenityId",
            AmenityCd = "AmenityCd",
            AmenityTypeId = "AmenityTypeId",
            AmenityDesc = "AmenityDesc",
            AmenityCategoryCd = "AmenityCategoryCd",
            DisplayOrderCd = "DisplayOrderCd",
            ConditionDesc = "ConditionDesc",
            CommentTxt = "CommentTxt",
            AmenityCostAmt = "AmenityCostAmt",
            AmenityAddonAmt = "AmenityAddonAmt",
            IsPerDiemCd = "IsPerDiemCd",
            CurrencyCd = "CurrencyCd",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam",
            AmenityTypeAmenityTypeCd = "AmenityTypeAmenityTypeCd",
            AmenityTypeAmenityTypeDesc = "AmenityTypeAmenityTypeDesc",
            AmenityTypeConditionDesc = "AmenityTypeConditionDesc",
            AmenityTypeDisplayOrderCd = "AmenityTypeDisplayOrderCd",
            AmenityTypeCommentTxt = "AmenityTypeCommentTxt",
            AmenityTypeCreatedDat = "AmenityTypeCreatedDat",
            AmenityTypeCreatedByNam = "AmenityTypeCreatedByNam",
            AmenityTypeModifiedDat = "AmenityTypeModifiedDat",
            AmenityTypeModifiedByNam = "AmenityTypeModifiedByNam"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace AmenitiesSuppService {
        const baseUrl = "DWSupport/AmenitiesSupp";
        function Create(request: Serenity.SaveRequest<AmenitiesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AmenitiesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmenitiesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmenitiesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/AmenitiesSupp/Create",
            Update = "DWSupport/AmenitiesSupp/Update",
            Delete = "DWSupport/AmenitiesSupp/Delete",
            Retrieve = "DWSupport/AmenitiesSupp/Retrieve",
            List = "DWSupport/AmenitiesSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface AmenityCategoryRow {
        CategoryCd?: string;
    }
    namespace AmenityCategoryRow {
        const idProperty = "CategoryCd";
        const nameProperty = "CategoryCd";
        const localTextPrefix = "DWSupport.AmenityCategory";
        const lookupKey = "DWSupport.AmenityCategory";
        function getLookup(): Q.Lookup<AmenityCategoryRow>;
        const enum Fields {
            CategoryCd = "CategoryCd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace AmenityCategoryService {
        const baseUrl = "DWSupport/AmenityCategory";
        function Create(request: Serenity.SaveRequest<AmenityCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AmenityCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmenityCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmenityCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/AmenityCategory/Create",
            Update = "DWSupport/AmenityCategory/Update",
            Delete = "DWSupport/AmenityCategory/Delete",
            Retrieve = "DWSupport/AmenityCategory/Retrieve",
            List = "DWSupport/AmenityCategory/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface AmenityDetailsSuppForm {
        AmenityId: Serenity.StringEditor;
        AmenityDetailCd: Serenity.StringEditor;
        OfficeCd: Serenity.LookupEditor;
        SailDayFromQty: Serenity.IntegerEditor;
        SailDayToQty: Serenity.IntegerEditor;
        AmenityPtsQty: Serenity.IntegerEditor;
        MinCabinQty: Serenity.IntegerEditor;
        ConditionDesc: Serenity.TextAreaEditor;
        CommentTxt: Serenity.TextAreaEditor;
        CreatedDat: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedDat: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }
    class AmenityDetailsSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface AmenityDetailsSuppRow {
        AmenityDetailId?: number;
        AmenityDetailCd?: string;
        OfficeCd?: string;
        AmenityId?: number;
        SailDayFromQty?: number;
        SailDayToQty?: number;
        AmenityPtsQty?: number;
        MinCabinQty?: number;
        ConditionDesc?: string;
        CommentTxt?: string;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
        AmenityAmenityCd?: string;
        AmenityAmenityTypeId?: number;
        AmenityAmenityDesc?: string;
        AmenityAmenityCategoryCd?: string;
        AmenityDisplayOrderCd?: number;
        AmenityConditionDesc?: string;
        AmenityCommentTxt?: string;
        AmenityAmenityCostAmt?: number;
        AmenityAmenityAddonAmt?: number;
        AmenityIsPerDiemCd?: string;
        AmenityCurrencyCd?: string;
        AmenityCreatedDat?: string;
        AmenityCreatedByNam?: string;
        AmenityModifiedDat?: string;
        AmenityModifiedByNam?: string;
    }
    namespace AmenityDetailsSuppRow {
        const idProperty = "AmenityDetailId";
        const nameProperty = "AmenityDetailCd";
        const localTextPrefix = "DWSupport.AmenityDetailsSupp";
        const enum Fields {
            AmenityDetailId = "AmenityDetailId",
            AmenityDetailCd = "AmenityDetailCd",
            OfficeCd = "OfficeCd",
            AmenityId = "AmenityId",
            SailDayFromQty = "SailDayFromQty",
            SailDayToQty = "SailDayToQty",
            AmenityPtsQty = "AmenityPtsQty",
            MinCabinQty = "MinCabinQty",
            ConditionDesc = "ConditionDesc",
            CommentTxt = "CommentTxt",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam",
            AmenityAmenityCd = "AmenityAmenityCd",
            AmenityAmenityTypeId = "AmenityAmenityTypeId",
            AmenityAmenityDesc = "AmenityAmenityDesc",
            AmenityAmenityCategoryCd = "AmenityAmenityCategoryCd",
            AmenityDisplayOrderCd = "AmenityDisplayOrderCd",
            AmenityConditionDesc = "AmenityConditionDesc",
            AmenityCommentTxt = "AmenityCommentTxt",
            AmenityAmenityCostAmt = "AmenityAmenityCostAmt",
            AmenityAmenityAddonAmt = "AmenityAmenityAddonAmt",
            AmenityIsPerDiemCd = "AmenityIsPerDiemCd",
            AmenityCurrencyCd = "AmenityCurrencyCd",
            AmenityCreatedDat = "AmenityCreatedDat",
            AmenityCreatedByNam = "AmenityCreatedByNam",
            AmenityModifiedDat = "AmenityModifiedDat",
            AmenityModifiedByNam = "AmenityModifiedByNam"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace AmenityDetailsSuppService {
        const baseUrl = "DWSupport/AmenityDetailsSupp";
        function Create(request: Serenity.SaveRequest<AmenityDetailsSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AmenityDetailsSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmenityDetailsSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmenityDetailsSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/AmenityDetailsSupp/Create",
            Update = "DWSupport/AmenityDetailsSupp/Update",
            Delete = "DWSupport/AmenityDetailsSupp/Delete",
            Retrieve = "DWSupport/AmenityDetailsSupp/Retrieve",
            List = "DWSupport/AmenityDetailsSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface AmenityOfficeRow {
        Cd?: string;
    }
    namespace AmenityOfficeRow {
        const idProperty = "Cd";
        const nameProperty = "Cd";
        const localTextPrefix = "DWSupport.AmenityOffice";
        const lookupKey = "DWSupport.AmenityOffice";
        function getLookup(): Q.Lookup<AmenityOfficeRow>;
        const enum Fields {
            Cd = "Cd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace AmenityOfficeService {
        const baseUrl = "DWSupport/AmenityOffice";
        function Create(request: Serenity.SaveRequest<AmenityOfficeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AmenityOfficeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmenityOfficeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmenityOfficeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/AmenityOffice/Create",
            Update = "DWSupport/AmenityOffice/Update",
            Delete = "DWSupport/AmenityOffice/Delete",
            Retrieve = "DWSupport/AmenityOffice/Retrieve",
            List = "DWSupport/AmenityOffice/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface AmenityTypesSuppRow {
        AmenityTypeId?: number;
        AmenityTypeCd?: string;
        AmenityTypeDesc?: string;
        ConditionDesc?: string;
        DisplayOrderCd?: number;
        CommentTxt?: string;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
    }
    namespace AmenityTypesSuppRow {
        const idProperty = "AmenityTypeId";
        const nameProperty = "AmenityTypeCd";
        const localTextPrefix = "DWSupport.AmenityTypesSupp";
        const lookupKey = "DWSupport.AmenityType";
        function getLookup(): Q.Lookup<AmenityTypesSuppRow>;
        const enum Fields {
            AmenityTypeId = "AmenityTypeId",
            AmenityTypeCd = "AmenityTypeCd",
            AmenityTypeDesc = "AmenityTypeDesc",
            ConditionDesc = "ConditionDesc",
            DisplayOrderCd = "DisplayOrderCd",
            CommentTxt = "CommentTxt",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace AmenityTypesSuppService {
        const baseUrl = "DWSupport/AmenityTypesSupp";
        function Create(request: Serenity.SaveRequest<AmenityTypesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AmenityTypesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmenityTypesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmenityTypesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/AmenityTypesSupp/Create",
            Update = "DWSupport/AmenityTypesSupp/Update",
            Delete = "DWSupport/AmenityTypesSupp/Delete",
            Retrieve = "DWSupport/AmenityTypesSupp/Retrieve",
            List = "DWSupport/AmenityTypesSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface CasinoSlotMasterDescSuppForm {
        SlotMasterDesc: Serenity.StringEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ManufacturerNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class CasinoSlotMasterDescSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface CasinoSlotMasterDescSuppRow {
        SlotMasterDescSurKey?: number;
        SlotMasterDesc?: string;
        CommentTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ManufacturerNam?: string;
        ModifiedTs?: string;
    }
    namespace CasinoSlotMasterDescSuppRow {
        const idProperty = "SlotMasterDescSurKey";
        const nameProperty = "SlotMasterDesc";
        const localTextPrefix = "DWSupport.CasinoSlotMasterDescSupp";
        const enum Fields {
            SlotMasterDescSurKey = "SlotMasterDescSurKey",
            SlotMasterDesc = "SlotMasterDesc",
            CommentTxt = "CommentTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ManufacturerNam = "ManufacturerNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace CasinoSlotMasterDescSuppService {
        const baseUrl = "DWSupport/CasinoSlotMasterDescSupp";
        function Create(request: Serenity.SaveRequest<CasinoSlotMasterDescSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CasinoSlotMasterDescSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CasinoSlotMasterDescSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CasinoSlotMasterDescSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/CasinoSlotMasterDescSupp/Create",
            Update = "DWSupport/CasinoSlotMasterDescSupp/Update",
            Delete = "DWSupport/CasinoSlotMasterDescSupp/Delete",
            Retrieve = "DWSupport/CasinoSlotMasterDescSupp/Retrieve",
            List = "DWSupport/CasinoSlotMasterDescSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface CategoryMasterSuppForm {
        ShipCd: Serenity.StringEditor;
        SailFromDat: Serenity.DateEditor;
        SailToDat: Serenity.DateEditor;
        CategoryCd: Serenity.StringEditor;
        MetaCategoryCd: Serenity.StringEditor;
        FleetCategoryPriorityNbr: Serenity.IntegerEditor;
        PseudoCategoryCd: Serenity.StringEditor;
        MandatoryAssignmentCd: Serenity.StringEditor;
        NewMetaCategoryCd: Serenity.StringEditor;
        RmsPseudoCategoryCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class CategoryMasterSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface CategoryMasterSuppRow {
        CategoryMasterSurKey?: number;
        ShipCd?: string;
        SailFromDat?: string;
        SailToDat?: string;
        CategoryCd?: string;
        MetaCategoryCd?: string;
        FleetCategoryPriorityNbr?: number;
        PseudoCategoryCd?: string;
        MandatoryAssignmentCd?: string;
        NewMetaCategoryCd?: string;
        RmsPseudoCategoryCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace CategoryMasterSuppRow {
        const idProperty = "CategoryMasterSurKey";
        const nameProperty = "CategoryCd";
        const localTextPrefix = "DWSupport.CategoryMasterSupp";
        const enum Fields {
            CategoryMasterSurKey = "CategoryMasterSurKey",
            ShipCd = "ShipCd",
            SailFromDat = "SailFromDat",
            SailToDat = "SailToDat",
            CategoryCd = "CategoryCd",
            MetaCategoryCd = "MetaCategoryCd",
            FleetCategoryPriorityNbr = "FleetCategoryPriorityNbr",
            PseudoCategoryCd = "PseudoCategoryCd",
            MandatoryAssignmentCd = "MandatoryAssignmentCd",
            NewMetaCategoryCd = "NewMetaCategoryCd",
            RmsPseudoCategoryCd = "RmsPseudoCategoryCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace CategoryMasterSuppService {
        const baseUrl = "DWSupport/CategoryMasterSupp";
        function Create(request: Serenity.SaveRequest<CategoryMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/CategoryMasterSupp/Create",
            Update = "DWSupport/CategoryMasterSupp/Update",
            Delete = "DWSupport/CategoryMasterSupp/Delete",
            Retrieve = "DWSupport/CategoryMasterSupp/Retrieve",
            List = "DWSupport/CategoryMasterSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface CcOfficeLoationsRow {
        Cd?: string;
    }
    namespace CcOfficeLoationsRow {
        const idProperty = "Cd";
        const nameProperty = "Cd";
        const localTextPrefix = "DWSupport.CcOfficeLoations";
        const lookupKey = "DWSupport.CCOffice";
        function getLookup(): Q.Lookup<CcOfficeLoationsRow>;
        const enum Fields {
            Cd = "Cd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace CcOfficeLoationsService {
        const baseUrl = "DWSupport/CcOfficeLoations";
        function Create(request: Serenity.SaveRequest<CcOfficeLoationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CcOfficeLoationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CcOfficeLoationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CcOfficeLoationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/CcOfficeLoations/Create",
            Update = "DWSupport/CcOfficeLoations/Update",
            Delete = "DWSupport/CcOfficeLoations/Delete",
            Retrieve = "DWSupport/CcOfficeLoations/Retrieve",
            List = "DWSupport/CcOfficeLoations/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface CmiSuppForm {
        ShipCd: Serenity.LookupEditor;
        SailId: Serenity.IntegerEditor;
        AgencyId: Serenity.IntegerEditor;
        VoyageCd: Serenity.StringEditor;
        CmiTypeCd: Serenity.StringEditor;
        CruiseRevAmt: Serenity.DecimalEditor;
        NcfAmt: Serenity.DecimalEditor;
        CommissionAmt: Serenity.DecimalEditor;
        CmiAmenityCostAmt: Serenity.DecimalEditor;
        CabinQty: Serenity.IntegerEditor;
        PaxQty: Serenity.IntegerEditor;
        VoyageStartDate: Serenity.DateEditor;
        VoyageEndDate: Serenity.DateEditor;
        ContractDat: Serenity.DateEditor;
        BookingCurrencyCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        CmiSubTypeCd: Serenity.StringEditor;
        CmiSubType2Cd: Serenity.StringEditor;
        SmCabinFareAmt: Serenity.DecimalEditor;
        SmCabinFareNonrevAmt: Serenity.DecimalEditor;
        SmExcessTicketingAmt: Serenity.DecimalEditor;
        SmCruiseDiscAmt: Serenity.DecimalEditor;
        SmCostOfSalesAmt: Serenity.DecimalEditor;
        SmGuestFeesGratsExpenseAmt: Serenity.DecimalEditor;
        SmCreditCardCostAmt: Serenity.DecimalEditor;
        SailDat: Serenity.DateEditor;
        SailDayQty: Serenity.IntegerEditor;
        CharterDesc: Serenity.StringEditor;
        RmContractAdjNtrNoSvcAmt: Serenity.StringEditor;
        OfficeCd: Serenity.StringEditor;
        RmFinalGuestQty: Serenity.IntegerEditor;
        RmFinalAdjNtrAmt: Serenity.IntegerEditor;
        RmFinalAdjNtrNoSvcAmt: Serenity.IntegerEditor;
        DistrictNbr: Serenity.StringEditor;
        ContractPriceAmt: Serenity.IntegerEditor;
        DepositDat: Serenity.DateEditor;
    }
    class CmiSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface CmiSuppRow {
        CmiSurKey?: number;
        CmiTypeCd?: string;
        SailId?: number;
        CruiseRevAmt?: number;
        NcfAmt?: number;
        CommissionAmt?: number;
        CmiAmenityCostAmt?: number;
        AgencyId?: number;
        ContractDat?: string;
        CabinQty?: number;
        PaxQty?: number;
        BookingCurrencyCd?: string;
        CreatedTs?: string;
        VoyageStartDate?: string;
        VoyageEndDate?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        CmiSubTypeCd?: string;
        CmiSubType2Cd?: string;
        VoyageCd?: string;
        SmCabinFareAmt?: number;
        SmCabinFareNonrevAmt?: number;
        SmExcessTicketingAmt?: number;
        SmCruiseDiscAmt?: number;
        SmCostOfSalesAmt?: number;
        SmGuestFeesGratsExpenseAmt?: number;
        SmCreditCardCostAmt?: number;
        ShipCd?: string;
        SailDat?: string;
        SailDayQty?: number;
        CharterDesc?: string;
        RmContractAdjNtrNoSvcAmt?: string;
        OfficeCd?: string;
        RmFinalGuestQty?: number;
        RmFinalAdjNtrAmt?: number;
        RmFinalAdjNtrNoSvcAmt?: number;
        DistrictNbr?: string;
        ContractPriceAmt?: number;
        DepositDat?: string;
    }
    namespace CmiSuppRow {
        const idProperty = "CmiSurKey";
        const nameProperty = "CmiTypeCd";
        const localTextPrefix = "DWSupport.CmiSupp";
        const enum Fields {
            CmiSurKey = "CmiSurKey",
            CmiTypeCd = "CmiTypeCd",
            SailId = "SailId",
            CruiseRevAmt = "CruiseRevAmt",
            NcfAmt = "NcfAmt",
            CommissionAmt = "CommissionAmt",
            CmiAmenityCostAmt = "CmiAmenityCostAmt",
            AgencyId = "AgencyId",
            ContractDat = "ContractDat",
            CabinQty = "CabinQty",
            PaxQty = "PaxQty",
            BookingCurrencyCd = "BookingCurrencyCd",
            CreatedTs = "CreatedTs",
            VoyageStartDate = "VoyageStartDate",
            VoyageEndDate = "VoyageEndDate",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            CmiSubTypeCd = "CmiSubTypeCd",
            CmiSubType2Cd = "CmiSubType2Cd",
            VoyageCd = "VoyageCd",
            SmCabinFareAmt = "SmCabinFareAmt",
            SmCabinFareNonrevAmt = "SmCabinFareNonrevAmt",
            SmExcessTicketingAmt = "SmExcessTicketingAmt",
            SmCruiseDiscAmt = "SmCruiseDiscAmt",
            SmCostOfSalesAmt = "SmCostOfSalesAmt",
            SmGuestFeesGratsExpenseAmt = "SmGuestFeesGratsExpenseAmt",
            SmCreditCardCostAmt = "SmCreditCardCostAmt",
            ShipCd = "ShipCd",
            SailDat = "SailDat",
            SailDayQty = "SailDayQty",
            CharterDesc = "CharterDesc",
            RmContractAdjNtrNoSvcAmt = "RmContractAdjNtrNoSvcAmt",
            OfficeCd = "OfficeCd",
            RmFinalGuestQty = "RmFinalGuestQty",
            RmFinalAdjNtrAmt = "RmFinalAdjNtrAmt",
            RmFinalAdjNtrNoSvcAmt = "RmFinalAdjNtrNoSvcAmt",
            DistrictNbr = "DistrictNbr",
            ContractPriceAmt = "ContractPriceAmt",
            DepositDat = "DepositDat"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace CmiSuppService {
        const baseUrl = "DWSupport/CmiSupp";
        function Create(request: Serenity.SaveRequest<CmiSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CmiSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CmiSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CmiSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/CmiSupp/Create",
            Update = "DWSupport/CmiSupp/Update",
            Delete = "DWSupport/CmiSupp/Delete",
            Retrieve = "DWSupport/CmiSupp/Retrieve",
            List = "DWSupport/CmiSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface CreditCardAdjSuppForm {
        Office: Serenity.LookupEditor;
        BaseRate: Serenity.DecimalEditor;
        ParticipationRate: Serenity.DecimalEditor;
        CxBuffer: Serenity.DecimalEditor;
        BlendedRate: Serenity.DecimalEditor;
        ProposedRate: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }
    class CreditCardAdjSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface CreditCardAdjSuppRow {
        CreditcardAdjId?: number;
        Office?: string;
        BaseRate?: number;
        ParticipationRate?: number;
        BlendedRate?: number;
        CxBuffer?: number;
        ProposedRate?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByName?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }
    namespace CreditCardAdjSuppRow {
        const idProperty = "CreditcardAdjId";
        const nameProperty = "Office";
        const localTextPrefix = "DWSupport.CreditCardAdjSupp";
        const enum Fields {
            CreditcardAdjId = "CreditcardAdjId",
            Office = "Office",
            BaseRate = "BaseRate",
            ParticipationRate = "ParticipationRate",
            BlendedRate = "BlendedRate",
            CxBuffer = "CxBuffer",
            ProposedRate = "ProposedRate",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByName = "CreatedByName",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace CreditCardAdjSuppService {
        const baseUrl = "DWSupport/CreditCardAdjSupp";
        function Create(request: Serenity.SaveRequest<CreditCardAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CreditCardAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CreditCardAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CreditCardAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/CreditCardAdjSupp/Create",
            Update = "DWSupport/CreditCardAdjSupp/Update",
            Delete = "DWSupport/CreditCardAdjSupp/Delete",
            Retrieve = "DWSupport/CreditCardAdjSupp/Retrieve",
            List = "DWSupport/CreditCardAdjSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface CruiseSegmentDaysOverrideForm {
        CruiseCd: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        CruiseDaysQty: Serenity.IntegerEditor;
        CruiseSegmentDaysQty: Serenity.IntegerEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }
    class CruiseSegmentDaysOverrideForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface CruiseSegmentDaysOverrideRow {
        CruiseSegmentDayOverrideId?: number;
        CruiseCd?: string;
        CompanyCd?: string;
        CruiseDaysQty?: number;
        CruiseSegmentDaysQty?: number;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }
    namespace CruiseSegmentDaysOverrideRow {
        const idProperty = "CruiseSegmentDayOverrideId";
        const nameProperty = "CruiseCd";
        const localTextPrefix = "DWSupport.CruiseSegmentDaysOverride";
        const enum Fields {
            CruiseSegmentDayOverrideId = "CruiseSegmentDayOverrideId",
            CruiseCd = "CruiseCd",
            CompanyCd = "CompanyCd",
            CruiseDaysQty = "CruiseDaysQty",
            CruiseSegmentDaysQty = "CruiseSegmentDaysQty",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace CruiseSegmentDaysOverrideService {
        const baseUrl = "DWSupport/CruiseSegmentDaysOverride";
        function Create(request: Serenity.SaveRequest<CruiseSegmentDaysOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CruiseSegmentDaysOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CruiseSegmentDaysOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CruiseSegmentDaysOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/CruiseSegmentDaysOverride/Create",
            Update = "DWSupport/CruiseSegmentDaysOverride/Update",
            Delete = "DWSupport/CruiseSegmentDaysOverride/Delete",
            Retrieve = "DWSupport/CruiseSegmentDaysOverride/Retrieve",
            List = "DWSupport/CruiseSegmentDaysOverride/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface CurrencyExchangeRateSuppForm {
        CurrencyCd: Serenity.StringEditor;
        SailFromDat: Serenity.DateEditor;
        SailToDat: Serenity.DateEditor;
        ExchangeRateNbr: Serenity.DecimalEditor;
        CommentTxt: Serenity.StringEditor;
        AuditRecordId: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class CurrencyExchangeRateSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface CurrencyExchangeRateSuppRow {
        CurrencySurKey?: number;
        CurrencyCd?: string;
        SailFromDat?: string;
        SailToDat?: string;
        ExchangeRateNbr?: number;
        CommentTxt?: string;
        AuditRecordId?: string;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace CurrencyExchangeRateSuppRow {
        const idProperty = "CurrencySurKey";
        const nameProperty = "CurrencyCd";
        const localTextPrefix = "DWSupport.CurrencyExchangeRateSupp";
        const enum Fields {
            CurrencySurKey = "CurrencySurKey",
            CurrencyCd = "CurrencyCd",
            SailFromDat = "SailFromDat",
            SailToDat = "SailToDat",
            ExchangeRateNbr = "ExchangeRateNbr",
            CommentTxt = "CommentTxt",
            AuditRecordId = "AuditRecordId",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace CurrencyExchangeRateSuppService {
        const baseUrl = "DWSupport/CurrencyExchangeRateSupp";
        function Create(request: Serenity.SaveRequest<CurrencyExchangeRateSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrencyExchangeRateSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrencyExchangeRateSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrencyExchangeRateSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/CurrencyExchangeRateSupp/Create",
            Update = "DWSupport/CurrencyExchangeRateSupp/Update",
            Delete = "DWSupport/CurrencyExchangeRateSupp/Delete",
            Retrieve = "DWSupport/CurrencyExchangeRateSupp/Retrieve",
            List = "DWSupport/CurrencyExchangeRateSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface DimCruiseFlagsForm {
        CruiseCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        CappedCapacity: Serenity.IntegerEditor;
        OnbrdAvgPaxQty: Serenity.IntegerEditor;
        HighlightInd: SelectYNEditor;
        ColorInd: SelectYNEditor;
        DrydockInd: SelectYNEditor;
        VarToCurve: Serenity.DecimalEditor;
        ShowInDr001: SelectYNEditor;
        ShowInDr010: SelectYNEditor;
        ShowInCube: SelectYNEditor;
        IntlDatelineInd: SelectYNEditor;
        MinisegInd: SelectYNEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }
    class DimCruiseFlagsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface DimCruiseFlagsRow {
        DimCruiseFlagId?: number;
        CruiseCd?: string;
        CruiseSegmentCd?: string;
        ShipCd?: string;
        CompanyCd?: string;
        CappedCapacity?: number;
        OnbrdAvgPaxQty?: number;
        HighlightInd?: number;
        ColorInd?: string;
        DrydockInd?: number;
        VarToCurve?: number;
        ShowInDr001?: string;
        ShowInDr010?: string;
        ShowInCube?: string;
        IntlDatelineInd?: string;
        MinisegInd?: string;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }
    namespace DimCruiseFlagsRow {
        const idProperty = "DimCruiseFlagId";
        const nameProperty = "CruiseCd";
        const localTextPrefix = "DWSupport.DimCruiseFlags";
        const enum Fields {
            DimCruiseFlagId = "DimCruiseFlagId",
            CruiseCd = "CruiseCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            ShipCd = "ShipCd",
            CompanyCd = "CompanyCd",
            CappedCapacity = "CappedCapacity",
            OnbrdAvgPaxQty = "OnbrdAvgPaxQty",
            HighlightInd = "HighlightInd",
            ColorInd = "ColorInd",
            DrydockInd = "DrydockInd",
            VarToCurve = "VarToCurve",
            ShowInDr001 = "ShowInDr001",
            ShowInDr010 = "ShowInDr010",
            ShowInCube = "ShowInCube",
            IntlDatelineInd = "IntlDatelineInd",
            MinisegInd = "MinisegInd",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace DimCruiseFlagsService {
        const baseUrl = "DWSupport/DimCruiseFlags";
        function Create(request: Serenity.SaveRequest<DimCruiseFlagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DimCruiseFlagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DimCruiseFlagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DimCruiseFlagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/DimCruiseFlags/Create",
            Update = "DWSupport/DimCruiseFlags/Update",
            Delete = "DWSupport/DimCruiseFlags/Delete",
            Retrieve = "DWSupport/DimCruiseFlags/Retrieve",
            List = "DWSupport/DimCruiseFlags/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface DistrictMasterSuppForm {
        DistrictNbr: Serenity.StringEditor;
        SalesrepUserId: Serenity.LookupEditor;
        GroupCd: Serenity.LookupEditor;
        SalesChannelCd: Serenity.LookupEditor;
        RmChannelCd: Serenity.LookupEditor;
        AreaCd: Serenity.LookupEditor;
        PrimaryCrmSupportNam: Serenity.StringEditor;
        SecondaryCrmSupportNam: Serenity.StringEditor;
        GssChannelCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ChannelCd: Serenity.LookupEditor;
    }
    class DistrictMasterSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface DistrictMasterSuppRow {
        DistrictSurKey?: number;
        DistrictNbr?: string;
        SalesrepUserId?: string;
        GroupCd?: string;
        SalesChannelCd?: string;
        RmChannelCd?: string;
        AreaCd?: string;
        PrimaryCrmSupportNam?: string;
        SecondaryCrmSupportNam?: string;
        GssChannelCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        ChannelCd?: string;
    }
    namespace DistrictMasterSuppRow {
        const idProperty = "DistrictSurKey";
        const nameProperty = "DistrictNbr";
        const localTextPrefix = "DWSupport.DistrictMasterSupp";
        const enum Fields {
            DistrictSurKey = "DistrictSurKey",
            DistrictNbr = "DistrictNbr",
            SalesrepUserId = "SalesrepUserId",
            GroupCd = "GroupCd",
            SalesChannelCd = "SalesChannelCd",
            RmChannelCd = "RmChannelCd",
            AreaCd = "AreaCd",
            PrimaryCrmSupportNam = "PrimaryCrmSupportNam",
            SecondaryCrmSupportNam = "SecondaryCrmSupportNam",
            GssChannelCd = "GssChannelCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            ChannelCd = "ChannelCd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace DistrictMasterSuppService {
        const baseUrl = "DWSupport/DistrictMasterSupp";
        function Create(request: Serenity.SaveRequest<DistrictMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistrictMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistrictMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistrictMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/DistrictMasterSupp/Create",
            Update = "DWSupport/DistrictMasterSupp/Update",
            Delete = "DWSupport/DistrictMasterSupp/Delete",
            Retrieve = "DWSupport/DistrictMasterSupp/Retrieve",
            List = "DWSupport/DistrictMasterSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface ExchangeFixedRateForm {
        CurrencyCd: Serenity.StringEditor;
        ExchangeRate: Serenity.DecimalEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }
    class ExchangeFixedRateForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface ExchangeFixedRateRow {
        ExchangeFixedRateId?: number;
        CurrencyCd?: string;
        ExchangeRate?: number;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }
    namespace ExchangeFixedRateRow {
        const idProperty = "ExchangeFixedRateId";
        const nameProperty = "CurrencyCd";
        const localTextPrefix = "DWSupport.ExchangeFixedRate";
        const enum Fields {
            ExchangeFixedRateId = "ExchangeFixedRateId",
            CurrencyCd = "CurrencyCd",
            ExchangeRate = "ExchangeRate",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace ExchangeFixedRateService {
        const baseUrl = "DWSupport/ExchangeFixedRate";
        function Create(request: Serenity.SaveRequest<ExchangeFixedRateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExchangeFixedRateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExchangeFixedRateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExchangeFixedRateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/ExchangeFixedRate/Create",
            Update = "DWSupport/ExchangeFixedRate/Update",
            Delete = "DWSupport/ExchangeFixedRate/Delete",
            Retrieve = "DWSupport/ExchangeFixedRate/Retrieve",
            List = "DWSupport/ExchangeFixedRate/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface FinPlannedCapacitySuppForm {
        ShipCd: Serenity.StringEditor;
        SailFromDat: Serenity.DateEditor;
        SailToDat: Serenity.DateEditor;
        FinancialCabinCapacityQty: Serenity.IntegerEditor;
        FinancialGuestCapacityQty: Serenity.IntegerEditor;
        CapacityDesc: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        UnadjustedFinancialCabinCapacityQty: Serenity.IntegerEditor;
        UnadjustedFinancialGuestCapacityQty: Serenity.IntegerEditor;
    }
    class FinPlannedCapacitySuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface FinPlannedCapacitySuppRow {
        FinPlannedCapacitySurKey?: number;
        ShipCd?: string;
        SailFromDat?: string;
        SailToDat?: string;
        FinancialCabinCapacityQty?: number;
        FinancialGuestCapacityQty?: number;
        CapacityDesc?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        UnadjustedFinancialCabinCapacityQty?: number;
        UnadjustedFinancialGuestCapacityQty?: number;
    }
    namespace FinPlannedCapacitySuppRow {
        const idProperty = "FinPlannedCapacitySurKey";
        const nameProperty = "ShipCd";
        const localTextPrefix = "DWSupport.FinPlannedCapacitySupp";
        const enum Fields {
            FinPlannedCapacitySurKey = "FinPlannedCapacitySurKey",
            ShipCd = "ShipCd",
            SailFromDat = "SailFromDat",
            SailToDat = "SailToDat",
            FinancialCabinCapacityQty = "FinancialCabinCapacityQty",
            FinancialGuestCapacityQty = "FinancialGuestCapacityQty",
            CapacityDesc = "CapacityDesc",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            UnadjustedFinancialCabinCapacityQty = "UnadjustedFinancialCabinCapacityQty",
            UnadjustedFinancialGuestCapacityQty = "UnadjustedFinancialGuestCapacityQty"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace FinPlannedCapacitySuppService {
        const baseUrl = "DWSupport/FinPlannedCapacitySupp";
        function Create(request: Serenity.SaveRequest<FinPlannedCapacitySuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FinPlannedCapacitySuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinPlannedCapacitySuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinPlannedCapacitySuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/FinPlannedCapacitySupp/Create",
            Update = "DWSupport/FinPlannedCapacitySupp/Update",
            Delete = "DWSupport/FinPlannedCapacitySupp/Delete",
            Retrieve = "DWSupport/FinPlannedCapacitySupp/Retrieve",
            List = "DWSupport/FinPlannedCapacitySupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface FinReportPublishingSuppForm {
        ReportName: Serenity.StringEditor;
        OnHold: Serenity.BooleanEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
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
        OnHold?: boolean;
        ReportName?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }
    namespace FinReportPublishingSuppRow {
        const idProperty = "FinReportPublishingSurKey";
        const nameProperty = "ReportName";
        const localTextPrefix = "DWSupport.FinReportPublishingSupp";
        const enum Fields {
            FinReportPublishingSurKey = "FinReportPublishingSurKey",
            OnHold = "OnHold",
            ReportName = "ReportName",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
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
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface FullShipChartersSuppForm {
        ShipCd: Serenity.StringEditor;
        SailDat: Serenity.DateEditor;
        SailId: Serenity.IntegerEditor;
        SailDayQty: Serenity.IntegerEditor;
        VoyageCd: Serenity.StringEditor;
        AgencyId: Serenity.IntegerEditor;
        CharterDesc: Serenity.StringEditor;
        GuestQty: Serenity.IntegerEditor;
        CharterRevAmt: Serenity.IntegerEditor;
        CharterCommAmt: Serenity.IntegerEditor;
        RmContractAdjNtrNoSvcAmt: Serenity.StringEditor;
        OfficeCd: Serenity.StringEditor;
        ContractDat: Serenity.DateEditor;
        RmFinalGuestQty: Serenity.IntegerEditor;
        RmFinalAdjNtrAmt: Serenity.IntegerEditor;
        RmFinalAdjNtrNoSvcAmt: Serenity.IntegerEditor;
        DistrictNbr: Serenity.StringEditor;
        ContractPriceAmt: Serenity.IntegerEditor;
        DepositDat: Serenity.DateEditor;
        RmNcfAmt: Serenity.IntegerEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class FullShipChartersSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface FullShipChartersSuppRow {
        ShipCharterSurKey?: number;
        ShipCd?: string;
        SailDat?: string;
        SailId?: number;
        SailDayQty?: number;
        VoyageCd?: string;
        AgencyId?: number;
        CharterDesc?: string;
        GuestQty?: number;
        CharterRevAmt?: number;
        CharterCommAmt?: number;
        RmContractAdjNtrNoSvcAmt?: string;
        OfficeCd?: string;
        ContractDat?: string;
        RmFinalGuestQty?: number;
        RmFinalAdjNtrAmt?: number;
        RmFinalAdjNtrNoSvcAmt?: number;
        DistrictNbr?: string;
        ContractPriceAmt?: number;
        DepositDat?: string;
        RmNcfAmt?: number;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace FullShipChartersSuppRow {
        const idProperty = "ShipCharterSurKey";
        const nameProperty = "ShipCd";
        const localTextPrefix = "DWSupport.FullShipChartersSupp";
        const enum Fields {
            ShipCharterSurKey = "ShipCharterSurKey",
            ShipCd = "ShipCd",
            SailDat = "SailDat",
            SailId = "SailId",
            SailDayQty = "SailDayQty",
            VoyageCd = "VoyageCd",
            AgencyId = "AgencyId",
            CharterDesc = "CharterDesc",
            GuestQty = "GuestQty",
            CharterRevAmt = "CharterRevAmt",
            CharterCommAmt = "CharterCommAmt",
            RmContractAdjNtrNoSvcAmt = "RmContractAdjNtrNoSvcAmt",
            OfficeCd = "OfficeCd",
            ContractDat = "ContractDat",
            RmFinalGuestQty = "RmFinalGuestQty",
            RmFinalAdjNtrAmt = "RmFinalAdjNtrAmt",
            RmFinalAdjNtrNoSvcAmt = "RmFinalAdjNtrNoSvcAmt",
            DistrictNbr = "DistrictNbr",
            ContractPriceAmt = "ContractPriceAmt",
            DepositDat = "DepositDat",
            RmNcfAmt = "RmNcfAmt",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace FullShipChartersSuppService {
        const baseUrl = "DWSupport/FullShipChartersSupp";
        function Create(request: Serenity.SaveRequest<FullShipChartersSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FullShipChartersSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FullShipChartersSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FullShipChartersSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/FullShipChartersSupp/Create",
            Update = "DWSupport/FullShipChartersSupp/Update",
            Delete = "DWSupport/FullShipChartersSupp/Delete",
            Retrieve = "DWSupport/FullShipChartersSupp/Retrieve",
            List = "DWSupport/FullShipChartersSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface GtfSuppForm {
        ShipCd: Serenity.LookupEditor;
        CategoryCd: GTFCategoryEditor;
        EmbarkDebarkCd: Serenity.LookupEditor;
        Rate: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }
    class GtfSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface GtfSuppRow {
        GtfsuppId?: number;
        ShipCd?: string;
        CategoryCd?: string;
        EmbarkDebarkCd?: string;
        Rate?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }
    namespace GtfSuppRow {
        const idProperty = "GtfsuppId";
        const nameProperty = "ShipCd";
        const localTextPrefix = "DWSupport.GtfSupp";
        const enum Fields {
            GtfsuppId = "GtfsuppId",
            ShipCd = "ShipCd",
            CategoryCd = "CategoryCd",
            EmbarkDebarkCd = "EmbarkDebarkCd",
            Rate = "Rate",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace GtfSuppService {
        const baseUrl = "DWSupport/GtfSupp";
        function Create(request: Serenity.SaveRequest<GtfSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GtfSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GtfSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GtfSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/GtfSupp/Create",
            Update = "DWSupport/GtfSupp/Update",
            Delete = "DWSupport/GtfSupp/Delete",
            Retrieve = "DWSupport/GtfSupp/Retrieve",
            List = "DWSupport/GtfSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface GuestPreventDepartureForm {
        GuestFirstNam: Serenity.StringEditor;
        GuestLastNam: Serenity.StringEditor;
        NameTypeDesc: Serenity.StringEditor;
        FromReportNbr: Serenity.IntegerEditor;
        InternalExternalCd: Serenity.StringEditor;
        TypeCd: Serenity.LookupEditor;
        SirsNbrTxt: Serenity.StringEditor;
        IncidentReportedDat: Serenity.DateEditor;
        BoardingDenialReasonDesc: Serenity.TextAreaEditor;
        CasinoIncidentNbrTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class GuestPreventDepartureForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface GuestPreventDepartureRow {
        GuestPreventDepartureKey?: number;
        GuestFirstNam?: string;
        GuestLastNam?: string;
        NameTypeDesc?: string;
        FromReportNbr?: number;
        InternalExternalCd?: string;
        TypeCd?: string;
        SirsNbrTxt?: string;
        IncidentReportedDat?: string;
        BoardingDenialReasonDesc?: string;
        CasinoIncidentNbrTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace GuestPreventDepartureRow {
        const idProperty = "GuestPreventDepartureKey";
        const nameProperty = "GuestFirstNam";
        const localTextPrefix = "DWSupport.GuestPreventDeparture";
        const enum Fields {
            GuestPreventDepartureKey = "GuestPreventDepartureKey",
            GuestFirstNam = "GuestFirstNam",
            GuestLastNam = "GuestLastNam",
            NameTypeDesc = "NameTypeDesc",
            FromReportNbr = "FromReportNbr",
            InternalExternalCd = "InternalExternalCd",
            TypeCd = "TypeCd",
            SirsNbrTxt = "SirsNbrTxt",
            IncidentReportedDat = "IncidentReportedDat",
            BoardingDenialReasonDesc = "BoardingDenialReasonDesc",
            CasinoIncidentNbrTxt = "CasinoIncidentNbrTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace GuestPreventDepartureService {
        const baseUrl = "DWSupport/GuestPreventDeparture";
        function Create(request: Serenity.SaveRequest<GuestPreventDepartureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GuestPreventDepartureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GuestPreventDepartureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GuestPreventDepartureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/GuestPreventDeparture/Create",
            Update = "DWSupport/GuestPreventDeparture/Update",
            Delete = "DWSupport/GuestPreventDeparture/Delete",
            Retrieve = "DWSupport/GuestPreventDeparture/Retrieve",
            List = "DWSupport/GuestPreventDeparture/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface ImportErrorLogForm {
        RunNumber: Serenity.IntegerEditor;
        ImportDate: Serenity.DateEditor;
        Calledby: Serenity.StringEditor;
        FileName: Serenity.StringEditor;
        ErrorMessage: Serenity.TextAreaEditor;
    }
    class ImportErrorLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface ImportErrorLogRow {
        ImportLogId?: number;
        RunNumber?: number;
        ImportDate?: string;
        Calledby?: string;
        FileName?: string;
        ErrorMessage?: string;
    }
    namespace ImportErrorLogRow {
        const idProperty = "ImportLogId";
        const nameProperty = "Calledby";
        const localTextPrefix = "DWSupport.ImportErrorLog";
        const enum Fields {
            ImportLogId = "ImportLogId",
            RunNumber = "RunNumber",
            ImportDate = "ImportDate",
            Calledby = "Calledby",
            FileName = "FileName",
            ErrorMessage = "ErrorMessage"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace ImportErrorLogService {
        const baseUrl = "DWSupport/ImportErrorLog";
        function Create(request: Serenity.SaveRequest<ImportErrorLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportErrorLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteAll(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportErrorLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportErrorLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/ImportErrorLog/Create",
            Update = "DWSupport/ImportErrorLog/Update",
            Delete = "DWSupport/ImportErrorLog/Delete",
            DeleteAll = "DWSupport/ImportErrorLog/DeleteAll",
            Retrieve = "DWSupport/ImportErrorLog/Retrieve",
            List = "DWSupport/ImportErrorLog/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface InvoiceItemSourceRow {
        ItemSourceCd?: string;
    }
    namespace InvoiceItemSourceRow {
        const idProperty = "ItemSourceCd";
        const nameProperty = "ItemSourceCd";
        const localTextPrefix = "DWSupport.InvoiceItemSource";
        const lookupKey = "DWSupport.GetInvoiceItemSource";
        function getLookup(): Q.Lookup<InvoiceItemSourceRow>;
        const enum Fields {
            ItemSourceCd = "ItemSourceCd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace InvoiceItemSourceService {
        const baseUrl = "DWSupport/InvoiceItemSource";
        function Create(request: Serenity.SaveRequest<InvoiceItemSourceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceItemSourceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemSourceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemSourceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/InvoiceItemSource/Create",
            Update = "DWSupport/InvoiceItemSource/Update",
            Delete = "DWSupport/InvoiceItemSource/Delete",
            Retrieve = "DWSupport/InvoiceItemSource/Retrieve",
            List = "DWSupport/InvoiceItemSource/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface InvoiceItemSubType2Row {
        ItemSubType2Cd?: string;
    }
    namespace InvoiceItemSubType2Row {
        const idProperty = "ItemSubType2Cd";
        const nameProperty = "ItemSubType2Cd";
        const localTextPrefix = "DWSupport.InvoiceItemSubType2";
        const lookupKey = "DWSupport.GetInvoiceItemSubType2";
        function getLookup(): Q.Lookup<InvoiceItemSubType2Row>;
        const enum Fields {
            ItemSubType2Cd = "ItemSubType2Cd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace InvoiceItemSubType2Service {
        const baseUrl = "DWSupport/InvoiceItemSubType2";
        function Create(request: Serenity.SaveRequest<InvoiceItemSubType2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceItemSubType2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemSubType2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemSubType2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/InvoiceItemSubType2/Create",
            Update = "DWSupport/InvoiceItemSubType2/Update",
            Delete = "DWSupport/InvoiceItemSubType2/Delete",
            Retrieve = "DWSupport/InvoiceItemSubType2/Retrieve",
            List = "DWSupport/InvoiceItemSubType2/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface InvoiceItemSubType3Row {
        ItemSubType3Cd?: string;
    }
    namespace InvoiceItemSubType3Row {
        const idProperty = "ItemSubType3Cd";
        const nameProperty = "ItemSubType3Cd";
        const localTextPrefix = "DWSupport.InvoiceItemSubType3";
        const lookupKey = "DWSupport.GetInvoiceItemSubType3";
        function getLookup(): Q.Lookup<InvoiceItemSubType3Row>;
        const enum Fields {
            ItemSubType3Cd = "ItemSubType3Cd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace InvoiceItemSubType3Service {
        const baseUrl = "DWSupport/InvoiceItemSubType3";
        function Create(request: Serenity.SaveRequest<InvoiceItemSubType3Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceItemSubType3Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemSubType3Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemSubType3Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/InvoiceItemSubType3/Create",
            Update = "DWSupport/InvoiceItemSubType3/Update",
            Delete = "DWSupport/InvoiceItemSubType3/Delete",
            Retrieve = "DWSupport/InvoiceItemSubType3/Retrieve",
            List = "DWSupport/InvoiceItemSubType3/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface InvoiceItemSubTypeRow {
        ItemSubTypeCd?: string;
    }
    namespace InvoiceItemSubTypeRow {
        const idProperty = "ItemSubTypeCd";
        const nameProperty = "ItemSubTypeCd";
        const localTextPrefix = "DWSupport.InvoiceItemSubType";
        const lookupKey = "DWSupport.GetInvoiceItemSubType";
        function getLookup(): Q.Lookup<InvoiceItemSubTypeRow>;
        const enum Fields {
            ItemSubTypeCd = "ItemSubTypeCd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace InvoiceItemSubTypeService {
        const baseUrl = "DWSupport/InvoiceItemSubType";
        function Create(request: Serenity.SaveRequest<InvoiceItemSubTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceItemSubTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemSubTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemSubTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/InvoiceItemSubType/Create",
            Update = "DWSupport/InvoiceItemSubType/Update",
            Delete = "DWSupport/InvoiceItemSubType/Delete",
            Retrieve = "DWSupport/InvoiceItemSubType/Retrieve",
            List = "DWSupport/InvoiceItemSubType/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface InvoiceItemTypeMasterSuppForm {
        MasterComponentCd: Serenity.LookupEditor;
        InvoiceItemSourceCd: Serenity.StringEditor;
        InvoiceItemTypeCd: Serenity.StringEditor;
        InvoiceItemSubTypeCd: Serenity.StringEditor;
        InvoiceItemSubType2Cd: Serenity.StringEditor;
        InvoiceItemSubType3Cd: Serenity.StringEditor;
        CommentsTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class InvoiceItemTypeMasterSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface InvoiceItemTypeMasterSuppRow {
        InvoiceItemTypeCd?: string;
        InvoiceItemSubTypeCd?: string;
        InvoiceItemSubType2Cd?: string;
        InvoiceItemSubType3Cd?: string;
        InvoiceItemSourceCd?: string;
        MasterComponentCd?: string;
        CommentsTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        InvoiceItemTypeMasterId?: number;
    }
    namespace InvoiceItemTypeMasterSuppRow {
        const idProperty = "InvoiceItemTypeMasterId";
        const nameProperty = "InvoiceItemTypeCd";
        const localTextPrefix = "DWSupport.InvoiceItemTypeMasterSupp";
        const enum Fields {
            InvoiceItemTypeCd = "InvoiceItemTypeCd",
            InvoiceItemSubTypeCd = "InvoiceItemSubTypeCd",
            InvoiceItemSubType2Cd = "InvoiceItemSubType2Cd",
            InvoiceItemSubType3Cd = "InvoiceItemSubType3Cd",
            InvoiceItemSourceCd = "InvoiceItemSourceCd",
            MasterComponentCd = "MasterComponentCd",
            CommentsTxt = "CommentsTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            InvoiceItemTypeMasterId = "InvoiceItemTypeMasterId"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace InvoiceItemTypeMasterSuppService {
        const baseUrl = "DWSupport/InvoiceItemTypeMasterSupp";
        function Create(request: Serenity.SaveRequest<InvoiceItemTypeMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceItemTypeMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemTypeMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemTypeMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/InvoiceItemTypeMasterSupp/Create",
            Update = "DWSupport/InvoiceItemTypeMasterSupp/Update",
            Delete = "DWSupport/InvoiceItemTypeMasterSupp/Delete",
            Retrieve = "DWSupport/InvoiceItemTypeMasterSupp/Retrieve",
            List = "DWSupport/InvoiceItemTypeMasterSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface InvoiceItemTypeRow {
        ItemTypeCd?: string;
    }
    namespace InvoiceItemTypeRow {
        const idProperty = "ItemTypeCd";
        const nameProperty = "ItemTypeCd";
        const localTextPrefix = "DWSupport.InvoiceItemType";
        const lookupKey = "DWSupport.GetInvoiceItemType";
        function getLookup(): Q.Lookup<InvoiceItemTypeRow>;
        const enum Fields {
            ItemTypeCd = "ItemTypeCd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace InvoiceItemTypeService {
        const baseUrl = "DWSupport/InvoiceItemType";
        function Create(request: Serenity.SaveRequest<InvoiceItemTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceItemTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/InvoiceItemType/Create",
            Update = "DWSupport/InvoiceItemType/Update",
            Delete = "DWSupport/InvoiceItemType/Delete",
            Retrieve = "DWSupport/InvoiceItemType/Retrieve",
            List = "DWSupport/InvoiceItemType/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface InvoiceItemTypeSuppForm {
        InvoiceClassType1Cd: Serenity.StringEditor;
        InvoiceClassType2Cd: Serenity.StringEditor;
        InvoiceClassType3Cd: Serenity.StringEditor;
        InvoiceClassType4Cd: Serenity.StringEditor;
        InvoiceItemSourceCd: Serenity.StringEditor;
        InvoiceItemTypeCd: Serenity.LookupEditor;
        InvoiceItemSubTypeCd: Serenity.LookupEditor;
        InvoiceItemSubType2Cd: Serenity.LookupEditor;
        InvoiceItemSubType3Cd: Serenity.LookupEditor;
        ComponentCd: Serenity.LookupEditor;
        ComponentDesc: Serenity.StringEditor;
        ChartOfAccountNbr: Serenity.StringEditor;
        CommentsTxt: Serenity.StringEditor;
        IsNtrCd: Serenity.StringEditor;
        IsGtrCd: Serenity.StringEditor;
        IsDilutionCd: Serenity.StringEditor;
        IsCostCd: Serenity.StringEditor;
        IsTaxCd: Serenity.StringEditor;
        IsCcCostCd: Serenity.StringEditor;
        IsAcctgAdjCd: Serenity.StringEditor;
        IsPioCd: Serenity.StringEditor;
        IsGroupAmenityCd: Serenity.StringEditor;
        AmenityCostAmt: Serenity.DecimalEditor;
        IsPerDiemCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        IsAcctgActualCd: Serenity.StringEditor;
        CasinoComponentCd: Serenity.StringEditor;
        CasinoComponentDesc: Serenity.StringEditor;
        DeptShortDesc: Serenity.StringEditor;
        IsSuppressBuiltCd: Serenity.StringEditor;
    }
    class InvoiceItemTypeSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface InvoiceItemTypeSuppRow {
        InvoiceItemTypeGenNatKey?: number;
        InvoiceClassType1Cd?: string;
        InvoiceClassType2Cd?: string;
        InvoiceClassType3Cd?: string;
        InvoiceClassType4Cd?: string;
        InvoiceItemSourceCd?: string;
        InvoiceItemTypeCd?: string;
        InvoiceItemSubTypeCd?: string;
        InvoiceItemSubType2Cd?: string;
        InvoiceItemSubType3Cd?: string;
        ComponentCd?: string;
        ComponentDesc?: string;
        ChartOfAccountNbr?: string;
        CommentsTxt?: string;
        IsNtrCd?: string;
        IsGtrCd?: string;
        IsDilutionCd?: string;
        IsCostCd?: string;
        IsTaxCd?: string;
        IsCcCostCd?: string;
        IsAcctgAdjCd?: string;
        IsPioCd?: string;
        IsGroupAmenityCd?: string;
        AmenityCostAmt?: number;
        IsPerDiemCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        IsAcctgActualCd?: string;
        CasinoComponentCd?: string;
        CasinoComponentDesc?: string;
        DeptShortDesc?: string;
        IsSuppressBuiltCd?: string;
        M1?: number;
        M2?: number;
        M3?: number;
        M4?: number;
    }
    namespace InvoiceItemTypeSuppRow {
        const idProperty = "InvoiceItemTypeGenNatKey";
        const nameProperty = "InvoiceClassType1Cd";
        const localTextPrefix = "DWSupport.InvoiceItemTypeSupp";
        const enum Fields {
            InvoiceItemTypeGenNatKey = "InvoiceItemTypeGenNatKey",
            InvoiceClassType1Cd = "InvoiceClassType1Cd",
            InvoiceClassType2Cd = "InvoiceClassType2Cd",
            InvoiceClassType3Cd = "InvoiceClassType3Cd",
            InvoiceClassType4Cd = "InvoiceClassType4Cd",
            InvoiceItemSourceCd = "InvoiceItemSourceCd",
            InvoiceItemTypeCd = "InvoiceItemTypeCd",
            InvoiceItemSubTypeCd = "InvoiceItemSubTypeCd",
            InvoiceItemSubType2Cd = "InvoiceItemSubType2Cd",
            InvoiceItemSubType3Cd = "InvoiceItemSubType3Cd",
            ComponentCd = "ComponentCd",
            ComponentDesc = "ComponentDesc",
            ChartOfAccountNbr = "ChartOfAccountNbr",
            CommentsTxt = "CommentsTxt",
            IsNtrCd = "IsNtrCd",
            IsGtrCd = "IsGtrCd",
            IsDilutionCd = "IsDilutionCd",
            IsCostCd = "IsCostCd",
            IsTaxCd = "IsTaxCd",
            IsCcCostCd = "IsCcCostCd",
            IsAcctgAdjCd = "IsAcctgAdjCd",
            IsPioCd = "IsPioCd",
            IsGroupAmenityCd = "IsGroupAmenityCd",
            AmenityCostAmt = "AmenityCostAmt",
            IsPerDiemCd = "IsPerDiemCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            IsAcctgActualCd = "IsAcctgActualCd",
            CasinoComponentCd = "CasinoComponentCd",
            CasinoComponentDesc = "CasinoComponentDesc",
            DeptShortDesc = "DeptShortDesc",
            IsSuppressBuiltCd = "IsSuppressBuiltCd",
            M1 = "M1",
            M2 = "M2",
            M3 = "M3",
            M4 = "M4"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace InvoiceItemTypeSuppService {
        const baseUrl = "DWSupport/InvoiceItemTypeSupp";
        function Create(request: Serenity.SaveRequest<InvoiceItemTypeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceItemTypeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemTypeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemTypeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/InvoiceItemTypeSupp/Create",
            Update = "DWSupport/InvoiceItemTypeSupp/Update",
            Delete = "DWSupport/InvoiceItemTypeSupp/Delete",
            Retrieve = "DWSupport/InvoiceItemTypeSupp/Retrieve",
            List = "DWSupport/InvoiceItemTypeSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface MasterComponentRow {
        MasterComponentCd?: string;
    }
    namespace MasterComponentRow {
        const idProperty = "MasterComponentCd";
        const nameProperty = "MasterComponentCd";
        const localTextPrefix = "DWSupport.MasterComponent";
        const lookupKey = "DWSupport.GetMasterComponent";
        function getLookup(): Q.Lookup<MasterComponentRow>;
        const enum Fields {
            MasterComponentCd = "MasterComponentCd"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace MasterComponentService {
        const baseUrl = "DWSupport/MasterComponent";
        function Create(request: Serenity.SaveRequest<MasterComponentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterComponentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterComponentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterComponentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/MasterComponent/Create",
            Update = "DWSupport/MasterComponent/Update",
            Delete = "DWSupport/MasterComponent/Delete",
            Retrieve = "DWSupport/MasterComponent/Retrieve",
            List = "DWSupport/MasterComponent/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface MinibarSetupSuppForm {
        ShipCd: Serenity.StringEditor;
        EffectiveDat: Serenity.DateEditor;
        MinibarSetupCostAmt: Serenity.DecimalEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class MinibarSetupSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface MinibarSetupSuppRow {
        MinibarSetupSurKey?: number;
        ShipCd?: string;
        EffectiveDat?: string;
        MinibarSetupCostAmt?: number;
        CommentTxt?: string;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace MinibarSetupSuppRow {
        const idProperty = "MinibarSetupSurKey";
        const nameProperty = "ShipCd";
        const localTextPrefix = "DWSupport.MinibarSetupSupp";
        const enum Fields {
            MinibarSetupSurKey = "MinibarSetupSurKey",
            ShipCd = "ShipCd",
            EffectiveDat = "EffectiveDat",
            MinibarSetupCostAmt = "MinibarSetupCostAmt",
            CommentTxt = "CommentTxt",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace MinibarSetupSuppService {
        const baseUrl = "DWSupport/MinibarSetupSupp";
        function Create(request: Serenity.SaveRequest<MinibarSetupSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MinibarSetupSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MinibarSetupSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MinibarSetupSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/MinibarSetupSupp/Create",
            Update = "DWSupport/MinibarSetupSupp/Update",
            Delete = "DWSupport/MinibarSetupSupp/Delete",
            Retrieve = "DWSupport/MinibarSetupSupp/Retrieve",
            List = "DWSupport/MinibarSetupSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface PackageTypeCodeSuppRow {
        TypeId?: number;
        TypeCode?: string;
    }
    namespace PackageTypeCodeSuppRow {
        const idProperty = "TypeCode";
        const nameProperty = "TypeCode";
        const localTextPrefix = "DWSupport.PackageTypeCodeSupp";
        const lookupKey = "DWSupport.PackageTypeCodeSupp";
        function getLookup(): Q.Lookup<PackageTypeCodeSuppRow>;
        const enum Fields {
            TypeId = "TypeId",
            TypeCode = "TypeCode"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace PackageTypeCodeSuppService {
        const baseUrl = "DWSupport/PackageTypeCodeSupp";
        function Create(request: Serenity.SaveRequest<PackageTypeCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PackageTypeCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PackageTypeCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PackageTypeCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/PackageTypeCodeSupp/Create",
            Update = "DWSupport/PackageTypeCodeSupp/Update",
            Delete = "DWSupport/PackageTypeCodeSupp/Delete",
            Retrieve = "DWSupport/PackageTypeCodeSupp/Retrieve",
            List = "DWSupport/PackageTypeCodeSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface PortSubstitutionSuppForm {
        PortCd: Serenity.LookupEditor;
        PortNam: Serenity.StringEditor;
        PortSubstitutonNam: Serenity.StringEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class PortSubstitutionSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface PortSubstitutionSuppRow {
        PortSubstitutonSurKey?: number;
        PortCd?: string;
        PortNam?: string;
        PortSubstitutonNam?: string;
        CommentTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace PortSubstitutionSuppRow {
        const idProperty = "PortSubstitutonSurKey";
        const nameProperty = "PortCd";
        const localTextPrefix = "DWSupport.PortSubstitutionSupp";
        const enum Fields {
            PortSubstitutonSurKey = "PortSubstitutonSurKey",
            PortCd = "PortCd",
            PortNam = "PortNam",
            PortSubstitutonNam = "PortSubstitutonNam",
            CommentTxt = "CommentTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace PortSubstitutionSuppService {
        const baseUrl = "DWSupport/PortSubstitutionSupp";
        function Create(request: Serenity.SaveRequest<PortSubstitutionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PortSubstitutionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PortSubstitutionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PortSubstitutionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/PortSubstitutionSupp/Create",
            Update = "DWSupport/PortSubstitutionSupp/Update",
            Delete = "DWSupport/PortSubstitutionSupp/Delete",
            Retrieve = "DWSupport/PortSubstitutionSupp/Retrieve",
            List = "DWSupport/PortSubstitutionSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface ProductCodeSuppForm {
        ProductCd: Serenity.StringEditor;
        ProductDesc: Serenity.StringEditor;
        ProductCodeId: Serenity.IntegerEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class ProductCodeSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface ProductCodeSuppRow {
        ProductSurKey?: number;
        ProductCd?: string;
        ProductDesc?: string;
        ProductCodeId?: number;
        CreatedByName?: string;
        CreatedTs?: string;
        ModifiedByName?: string;
        ModifiedTs?: string;
    }
    namespace ProductCodeSuppRow {
        const idProperty = "ProductCd";
        const nameProperty = "ProductDesc";
        const localTextPrefix = "DWSupport.ProductCodeSupp";
        const lookupKey = "DWSupport.ProductCodeSupp";
        function getLookup(): Q.Lookup<ProductCodeSuppRow>;
        const enum Fields {
            ProductSurKey = "ProductSurKey",
            ProductCd = "ProductCd",
            ProductDesc = "ProductDesc",
            ProductCodeId = "ProductCodeId",
            CreatedByName = "CreatedByName",
            CreatedTs = "CreatedTs",
            ModifiedByName = "ModifiedByName",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace ProductCodeSuppService {
        const baseUrl = "DWSupport/ProductCodeSupp";
        function Create(request: Serenity.SaveRequest<ProductCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/ProductCodeSupp/Create",
            Update = "DWSupport/ProductCodeSupp/Update",
            Delete = "DWSupport/ProductCodeSupp/Delete",
            Retrieve = "DWSupport/ProductCodeSupp/Retrieve",
            List = "DWSupport/ProductCodeSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface PsGlAccountSuppForm {
        SetId: Serenity.StringEditor;
        AccountId: Serenity.StringEditor;
        OlapAccountDesc: Serenity.StringEditor;
        GrossCostCd: Serenity.StringEditor;
        AccountClassType1Cd: Serenity.StringEditor;
        AccountClassType2Cd: Serenity.StringEditor;
        AccountClassType3Cd: Serenity.StringEditor;
        AccountClassType4Cd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class PsGlAccountSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface PsGlAccountSuppRow {
        AccountSurKey?: number;
        SetId?: string;
        AccountId?: string;
        OlapAccountDesc?: string;
        GrossCostCd?: string;
        AccountClassType1Cd?: string;
        AccountClassType2Cd?: string;
        AccountClassType3Cd?: string;
        AccountClassType4Cd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace PsGlAccountSuppRow {
        const idProperty = "AccountSurKey";
        const nameProperty = "SetId";
        const localTextPrefix = "DWSupport.PsGlAccountSupp";
        const enum Fields {
            AccountSurKey = "AccountSurKey",
            SetId = "SetId",
            AccountId = "AccountId",
            OlapAccountDesc = "OlapAccountDesc",
            GrossCostCd = "GrossCostCd",
            AccountClassType1Cd = "AccountClassType1Cd",
            AccountClassType2Cd = "AccountClassType2Cd",
            AccountClassType3Cd = "AccountClassType3Cd",
            AccountClassType4Cd = "AccountClassType4Cd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace PsGlAccountSuppService {
        const baseUrl = "DWSupport/PsGlAccountSupp";
        function Create(request: Serenity.SaveRequest<PsGlAccountSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PsGlAccountSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PsGlAccountSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PsGlAccountSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/PsGlAccountSupp/Create",
            Update = "DWSupport/PsGlAccountSupp/Update",
            Delete = "DWSupport/PsGlAccountSupp/Delete",
            Retrieve = "DWSupport/PsGlAccountSupp/Retrieve",
            List = "DWSupport/PsGlAccountSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface RegionForm {
        RegionCd: Serenity.StringEditor;
        RegionType: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface RegionRow {
        RegionId?: number;
        RegionCd?: string;
        RegionType?: string;
        CompanyCd?: string;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionId";
        const nameProperty = "RegionCd";
        const localTextPrefix = "DWSupport.Region";
        const enum Fields {
            RegionId = "RegionId",
            RegionCd = "RegionCd",
            RegionType = "RegionType",
            CompanyCd = "CompanyCd",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace RegionService {
        const baseUrl = "DWSupport/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/Region/Create",
            Update = "DWSupport/Region/Update",
            Delete = "DWSupport/Region/Delete",
            Retrieve = "DWSupport/Region/Retrieve",
            List = "DWSupport/Region/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface RevDetailFieldForm {
        RevdetailFieldNm: Serenity.StringEditor;
        RevdetailSegmentFieldNm: Serenity.StringEditor;
        RevdetailFieldCheck: Serenity.StringEditor;
        OdsFieldNm: Serenity.StringEditor;
        CubeInsInd: Serenity.IntegerEditor;
        LoadDt: Serenity.DateEditor;
    }
    class RevDetailFieldForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface RevDetailFieldRow {
        RevDetailFieldId?: number;
        RevdetailFieldNm?: string;
        RevdetailSegmentFieldNm?: string;
        RevdetailFieldCheck?: string;
        OdsFieldNm?: string;
        CubeInsInd?: number;
        LoadDt?: string;
    }
    namespace RevDetailFieldRow {
        const idProperty = "RevDetailFieldId";
        const nameProperty = "RevdetailFieldNm";
        const localTextPrefix = "DWSupport.RevDetailField";
        const enum Fields {
            RevDetailFieldId = "RevDetailFieldId",
            RevdetailFieldNm = "RevdetailFieldNm",
            RevdetailSegmentFieldNm = "RevdetailSegmentFieldNm",
            RevdetailFieldCheck = "RevdetailFieldCheck",
            OdsFieldNm = "OdsFieldNm",
            CubeInsInd = "CubeInsInd",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace RevDetailFieldService {
        const baseUrl = "DWSupport/RevDetailField";
        function Create(request: Serenity.SaveRequest<RevDetailFieldRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RevDetailFieldRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RevDetailFieldRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RevDetailFieldRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/RevDetailField/Create",
            Update = "DWSupport/RevDetailField/Update",
            Delete = "DWSupport/RevDetailField/Delete",
            Retrieve = "DWSupport/RevDetailField/Retrieve",
            List = "DWSupport/RevDetailField/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface RollupProductCodesSuppForm {
        ProductCd: Serenity.StringEditor;
        RmRollupProductCd: Serenity.StringEditor;
        RmRollupProductDesc: Serenity.StringEditor;
        BrochureRollupProductCd: Serenity.StringEditor;
        BrochureRollupProductDesc: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class RollupProductCodesSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface RollupProductCodesSuppRow {
        RollupProductSurKey?: number;
        ProductCd?: string;
        RmRollupProductCd?: string;
        RmRollupProductDesc?: string;
        BrochureRollupProductCd?: string;
        BrochureRollupProductDesc?: string;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace RollupProductCodesSuppRow {
        const idProperty = "RollupProductSurKey";
        const nameProperty = "ProductCd";
        const localTextPrefix = "DWSupport.RollupProductCodesSupp";
        const enum Fields {
            RollupProductSurKey = "RollupProductSurKey",
            ProductCd = "ProductCd",
            RmRollupProductCd = "RmRollupProductCd",
            RmRollupProductDesc = "RmRollupProductDesc",
            BrochureRollupProductCd = "BrochureRollupProductCd",
            BrochureRollupProductDesc = "BrochureRollupProductDesc",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace RollupProductCodesSuppService {
        const baseUrl = "DWSupport/RollupProductCodesSupp";
        function Create(request: Serenity.SaveRequest<RollupProductCodesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RollupProductCodesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RollupProductCodesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RollupProductCodesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/RollupProductCodesSupp/Create",
            Update = "DWSupport/RollupProductCodesSupp/Update",
            Delete = "DWSupport/RollupProductCodesSupp/Delete",
            Retrieve = "DWSupport/RollupProductCodesSupp/Retrieve",
            List = "DWSupport/RollupProductCodesSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface SailingExclusionSuppForm {
        ShipCd: Serenity.LookupEditor;
        MainSailId: Serenity.IntegerEditor;
        MainSailDt: Serenity.DateEditor;
        MainVoyageCd: Serenity.StringEditor;
        FromDataAsOfDt: Serenity.DateEditor;
        ToDataAsOfDt: Serenity.DateEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }
    class SailingExclusionSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface SailingExclusionSuppRow {
        SailingExclusionId?: number;
        ShipCd?: string;
        MainSailId?: number;
        MainSailDt?: string;
        MainVoyageCd?: string;
        FromDataAsOfDt?: string;
        ToDataAsOfDt?: string;
        CommentTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }
    namespace SailingExclusionSuppRow {
        const idProperty = "SailingExclusionId";
        const nameProperty = "ShipCd";
        const localTextPrefix = "DWSupport.SailingExclusionSupp";
        const enum Fields {
            SailingExclusionId = "SailingExclusionId",
            ShipCd = "ShipCd",
            MainSailId = "MainSailId",
            MainSailDt = "MainSailDt",
            MainVoyageCd = "MainVoyageCd",
            FromDataAsOfDt = "FromDataAsOfDt",
            ToDataAsOfDt = "ToDataAsOfDt",
            CommentTxt = "CommentTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace SailingExclusionSuppService {
        const baseUrl = "DWSupport/SailingExclusionSupp";
        function Create(request: Serenity.SaveRequest<SailingExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SailingExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SailingExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SailingExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/SailingExclusionSupp/Create",
            Update = "DWSupport/SailingExclusionSupp/Update",
            Delete = "DWSupport/SailingExclusionSupp/Delete",
            Retrieve = "DWSupport/SailingExclusionSupp/Retrieve",
            List = "DWSupport/SailingExclusionSupp/List",
            ExcelImport = "DWSupport/SailingExclusionSupp/ExcelImport"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface SailingMasterSuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class SailingMasterSuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface SailingMasterSuppForm {
        SailId: Serenity.IntegerEditor;
        PackageTypeCd: Serenity.LookupEditor;
        SailDat: Serenity.DateEditor;
        ShipCd: Serenity.LookupEditor;
        ShipNbr: Serenity.MaskedEditor;
        MandateWeeksQty: Serenity.IntegerEditor;
        ValidVoyageCd: SelectYNEditor;
        ProductCd: Serenity.LookupEditor;
        SlProductCd: Serenity.LookupEditor;
        FareFeedIncludeCd: SelectYNEditor;
        InactiveCd: SelectYNEditor;
        RmsSeasonCd: Serenity.StringEditor;
        MainVoyageCd: SelectYNEditor;
        InterportCd: SelectYNEditor;
        CharterCd: SelectYNEditor;
        RmsForecastCd: Serenity.IntegerEditor;
        RmsColorNameDesc: Serenity.StringEditor;
        RmsRefLinkSailId: Serenity.IntegerEditor;
        RmsParentSail1Id: Serenity.IntegerEditor;
        RmsParentSail2Id: Serenity.IntegerEditor;
        RmsParentSail3Id: Serenity.IntegerEditor;
        RmsParentSail4Id: Serenity.IntegerEditor;
        RmsParentSail5Id: Serenity.IntegerEditor;
        RmsParentSail6Id: Serenity.IntegerEditor;
        RmsParentSail7Id: Serenity.IntegerEditor;
        RmsParentSail8Id: Serenity.IntegerEditor;
        RmsParentSail9Id: Serenity.IntegerEditor;
        RmsParentSail10Id: Serenity.IntegerEditor;
        RmsParentSail11Id: Serenity.IntegerEditor;
        RmsParentSail12Id: Serenity.IntegerEditor;
        RmsParentSail13Id: Serenity.IntegerEditor;
        RmsParentSail14Id: Serenity.IntegerEditor;
        RmsParentSail15Id: Serenity.IntegerEditor;
        LatitudeCruiseCd: SelectYNEditor;
        BackToBackCd: SelectYNEditor;
        AmenityPtsQty: Serenity.DecimalEditor;
        JonesActSailId: Serenity.IntegerEditor;
        FsGrpAmenityAmt: Serenity.DecimalEditor;
        ObrTradeCd: Serenity.StringEditor;
        ObrSubTradeCd: Serenity.StringEditor;
        ObrSeasonCd: Serenity.StringEditor;
        ProxySailId: Serenity.IntegerEditor;
        OnSaleDat: Serenity.DateEditor;
        SeasonYearCd: Serenity.StringEditor;
        IsVoyageExceptionCd: SelectYNEditor;
        VoyageExceptionDesc: Serenity.StringEditor;
        ItineraryChangedDat: Serenity.DateEditor;
        IsHolidayCd: SelectYNEditor;
        ProxyBudgetSailId: Serenity.IntegerEditor;
        ProxyMetaWeightSailId: Serenity.IntegerEditor;
        IsFreeOpenBarCd: Serenity.StringEditor;
        CasinoCabinCapacityQty: Serenity.IntegerEditor;
        IsExtraordinaryCd: SelectYNEditor;
    }
    class SailingMasterSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface SailingMasterSuppRow {
        SailSurKey?: number;
        SailId?: number;
        PackageTypeCd?: string;
        ValidVoyageCd?: string;
        ShipCd?: string;
        SailDat?: string;
        ProductCd?: string;
        LatitudeCruiseCd?: string;
        FareFeedIncludeCd?: string;
        InactiveCd?: string;
        ShipNbr?: string;
        AmenityPtsQty?: number;
        RmsForecastCd?: number;
        RmsParentSail1Id?: number;
        RmsParentSail2Id?: number;
        RmsParentSail3Id?: number;
        RmsSeasonCd?: string;
        RmsColorNameDesc?: string;
        RmsRefLinkSailId?: number;
        BackToBackCd?: string;
        MainVoyageCd?: string;
        SlProductCd?: string;
        MandateWeeksQty?: number;
        InterportCd?: string;
        JonesActSailId?: number;
        RmsParentSail4Id?: number;
        RmsParentSail5Id?: number;
        RmsParentSail6Id?: number;
        RmsParentSail7Id?: number;
        RmsParentSail8Id?: number;
        RmsParentSail9Id?: number;
        RmsParentSail10Id?: number;
        RmsParentSail11Id?: number;
        RmsParentSail12Id?: number;
        RmsParentSail13Id?: number;
        RmsParentSail14Id?: number;
        RmsParentSail15Id?: number;
        FsGrpAmenityAmt?: number;
        ObrTradeCd?: string;
        ObrSubTradeCd?: string;
        ObrSeasonCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        ProxySailId?: number;
        OnSaleDat?: string;
        SeasonYearCd?: string;
        IsVoyageExceptionCd?: string;
        VoyageExceptionDesc?: string;
        ItineraryChangedDat?: string;
        CharterCd?: string;
        IsHolidayCd?: string;
        ProxyBudgetSailId?: number;
        ProxyMetaWeightSailId?: number;
        IsFreeOpenBarCd?: string;
        CasinoCabinCapacityQty?: number;
        IsExtraordinaryCd?: string;
        ProductCdProductSurKey?: number;
        ProductCdProductDesc?: string;
        ProductCdProductCodeId?: number;
        ProductCdCreatedByName?: string;
        ProductCdCreatedTs?: string;
        ProductCdModifiedByName?: string;
        ProductCdModifiedTs?: string;
        SlProductCdSlProductSurKey?: number;
        SlProductCdSlProductDesc?: string;
        SlProductCdCreatedByName?: string;
        SlProductCdCreatedTs?: string;
        SlProductCdModifiedByName?: string;
        SlProductCdModifiedTs?: string;
    }
    namespace SailingMasterSuppRow {
        const idProperty = "SailSurKey";
        const nameProperty = "PackageTypeCd";
        const localTextPrefix = "DWSupport.SailingMasterSupp";
        const enum Fields {
            SailSurKey = "SailSurKey",
            SailId = "SailId",
            PackageTypeCd = "PackageTypeCd",
            ValidVoyageCd = "ValidVoyageCd",
            ShipCd = "ShipCd",
            SailDat = "SailDat",
            ProductCd = "ProductCd",
            LatitudeCruiseCd = "LatitudeCruiseCd",
            FareFeedIncludeCd = "FareFeedIncludeCd",
            InactiveCd = "InactiveCd",
            ShipNbr = "ShipNbr",
            AmenityPtsQty = "AmenityPtsQty",
            RmsForecastCd = "RmsForecastCd",
            RmsParentSail1Id = "RmsParentSail1Id",
            RmsParentSail2Id = "RmsParentSail2Id",
            RmsParentSail3Id = "RmsParentSail3Id",
            RmsSeasonCd = "RmsSeasonCd",
            RmsColorNameDesc = "RmsColorNameDesc",
            RmsRefLinkSailId = "RmsRefLinkSailId",
            BackToBackCd = "BackToBackCd",
            MainVoyageCd = "MainVoyageCd",
            SlProductCd = "SlProductCd",
            MandateWeeksQty = "MandateWeeksQty",
            InterportCd = "InterportCd",
            JonesActSailId = "JonesActSailId",
            RmsParentSail4Id = "RmsParentSail4Id",
            RmsParentSail5Id = "RmsParentSail5Id",
            RmsParentSail6Id = "RmsParentSail6Id",
            RmsParentSail7Id = "RmsParentSail7Id",
            RmsParentSail8Id = "RmsParentSail8Id",
            RmsParentSail9Id = "RmsParentSail9Id",
            RmsParentSail10Id = "RmsParentSail10Id",
            RmsParentSail11Id = "RmsParentSail11Id",
            RmsParentSail12Id = "RmsParentSail12Id",
            RmsParentSail13Id = "RmsParentSail13Id",
            RmsParentSail14Id = "RmsParentSail14Id",
            RmsParentSail15Id = "RmsParentSail15Id",
            FsGrpAmenityAmt = "FsGrpAmenityAmt",
            ObrTradeCd = "ObrTradeCd",
            ObrSubTradeCd = "ObrSubTradeCd",
            ObrSeasonCd = "ObrSeasonCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            ProxySailId = "ProxySailId",
            OnSaleDat = "OnSaleDat",
            SeasonYearCd = "SeasonYearCd",
            IsVoyageExceptionCd = "IsVoyageExceptionCd",
            VoyageExceptionDesc = "VoyageExceptionDesc",
            ItineraryChangedDat = "ItineraryChangedDat",
            CharterCd = "CharterCd",
            IsHolidayCd = "IsHolidayCd",
            ProxyBudgetSailId = "ProxyBudgetSailId",
            ProxyMetaWeightSailId = "ProxyMetaWeightSailId",
            IsFreeOpenBarCd = "IsFreeOpenBarCd",
            CasinoCabinCapacityQty = "CasinoCabinCapacityQty",
            IsExtraordinaryCd = "IsExtraordinaryCd",
            ProductCdProductSurKey = "ProductCdProductSurKey",
            ProductCdProductDesc = "ProductCdProductDesc",
            ProductCdProductCodeId = "ProductCdProductCodeId",
            ProductCdCreatedByName = "ProductCdCreatedByName",
            ProductCdCreatedTs = "ProductCdCreatedTs",
            ProductCdModifiedByName = "ProductCdModifiedByName",
            ProductCdModifiedTs = "ProductCdModifiedTs",
            SlProductCdSlProductSurKey = "SlProductCdSlProductSurKey",
            SlProductCdSlProductDesc = "SlProductCdSlProductDesc",
            SlProductCdCreatedByName = "SlProductCdCreatedByName",
            SlProductCdCreatedTs = "SlProductCdCreatedTs",
            SlProductCdModifiedByName = "SlProductCdModifiedByName",
            SlProductCdModifiedTs = "SlProductCdModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace SailingMasterSuppService {
        const baseUrl = "DWSupport/SailingMasterSupp";
        function Create(request: Serenity.SaveRequest<SailingMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SailingMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SailingMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SailingMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/SailingMasterSupp/Create",
            Update = "DWSupport/SailingMasterSupp/Update",
            Delete = "DWSupport/SailingMasterSupp/Delete",
            Retrieve = "DWSupport/SailingMasterSupp/Retrieve",
            List = "DWSupport/SailingMasterSupp/List",
            ExcelImport = "DWSupport/SailingMasterSupp/ExcelImport"
        }
    }
}
declare namespace DAP.DWSupport {
    interface ShipRow {
        ShipCode?: string;
        ShipName?: string;
        Brand?: string;
        IsActive?: boolean;
    }
    namespace ShipRow {
        const idProperty = "ShipCode";
        const nameProperty = "ShipCode";
        const localTextPrefix = "DWSupport.Ship";
        const lookupKey = "DWSupport.ShipCode";
        function getLookup(): Q.Lookup<ShipRow>;
        const enum Fields {
            ShipCode = "ShipCode",
            ShipName = "ShipName",
            Brand = "Brand",
            IsActive = "IsActive"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace ShipService {
        const baseUrl = "DWSupport/Ship";
        function Create(request: Serenity.SaveRequest<ShipRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/Ship/Create",
            Update = "DWSupport/Ship/Update",
            Delete = "DWSupport/Ship/Delete",
            Retrieve = "DWSupport/Ship/Retrieve",
            List = "DWSupport/Ship/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface SlProductCodeSuppForm {
        SlProductCd: Serenity.StringEditor;
        SlProductDesc: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class SlProductCodeSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface SlProductCodeSuppRow {
        SlProductSurKey?: number;
        SlProductCd?: string;
        SlProductDesc?: string;
        CreatedByName?: string;
        CreatedTs?: string;
        ModifiedByName?: string;
        ModifiedTs?: string;
    }
    namespace SlProductCodeSuppRow {
        const idProperty = "SlProductCd";
        const nameProperty = "SlProductDesc";
        const localTextPrefix = "DWSupport.SlProductCodeSupp";
        const lookupKey = "DWSupport.SlProductCodeSupp";
        function getLookup(): Q.Lookup<SlProductCodeSuppRow>;
        const enum Fields {
            SlProductSurKey = "SlProductSurKey",
            SlProductCd = "SlProductCd",
            SlProductDesc = "SlProductDesc",
            CreatedByName = "CreatedByName",
            CreatedTs = "CreatedTs",
            ModifiedByName = "ModifiedByName",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace SlProductCodeSuppService {
        const baseUrl = "DWSupport/SlProductCodeSupp";
        function Create(request: Serenity.SaveRequest<SlProductCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SlProductCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SlProductCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SlProductCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/SlProductCodeSupp/Create",
            Update = "DWSupport/SlProductCodeSupp/Update",
            Delete = "DWSupport/SlProductCodeSupp/Delete",
            Retrieve = "DWSupport/SlProductCodeSupp/Retrieve",
            List = "DWSupport/SlProductCodeSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface StlyDatesForm {
        ReportDt: Serenity.DateEditor;
        DataAsOfDt: Serenity.DateEditor;
        StlyDt: Serenity.DateEditor;
        DayOfWeek: Serenity.StringEditor;
        WeekNum: Serenity.IntegerEditor;
        SystemIssuesInd: Serenity.BooleanEditor;
        HolidayInd: Serenity.BooleanEditor;
        DisasterInd: Serenity.BooleanEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }
    class StlyDatesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface StlyDatesRow {
        Stlyid?: number;
        ReportDt?: string;
        DataAsOfDt?: string;
        StlyDt?: string;
        DayOfWeek?: string;
        WeekNum?: number;
        SystemIssuesInd?: boolean;
        HolidayInd?: boolean;
        DisasterInd?: boolean;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }
    namespace StlyDatesRow {
        const idProperty = "Stlyid";
        const nameProperty = "DayOfWeek";
        const localTextPrefix = "DWSupport.StlyDates";
        const enum Fields {
            Stlyid = "Stlyid",
            ReportDt = "ReportDt",
            DataAsOfDt = "DataAsOfDt",
            StlyDt = "StlyDt",
            DayOfWeek = "DayOfWeek",
            WeekNum = "WeekNum",
            SystemIssuesInd = "SystemIssuesInd",
            HolidayInd = "HolidayInd",
            DisasterInd = "DisasterInd",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace StlyDatesService {
        const baseUrl = "DWSupport/StlyDates";
        function Create(request: Serenity.SaveRequest<StlyDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StlyDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StlyDatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StlyDatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/StlyDates/Create",
            Update = "DWSupport/StlyDates/Update",
            Delete = "DWSupport/StlyDates/Delete",
            Retrieve = "DWSupport/StlyDates/Retrieve",
            List = "DWSupport/StlyDates/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface SurveyFilterExclusionSuppForm {
        SurveyExclusionId: Serenity.StringEditor;
        ReasonDesc: Serenity.StringEditor;
        CommentsTxt: Serenity.StringEditor;
        SailId: Serenity.IntegerEditor;
        GuestId: Serenity.IntegerEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }
    class SurveyFilterExclusionSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface SurveyFilterExclusionSuppRow {
        SurveyExclusionSurKey?: number;
        SurveyExclusionId?: number;
        ReasonDesc?: string;
        CommentsTxt?: string;
        SailId?: number;
        GuestId?: number;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }
    namespace SurveyFilterExclusionSuppRow {
        const idProperty = "SurveyExclusionSurKey";
        const nameProperty = "ReasonDesc";
        const localTextPrefix = "DWSupport.SurveyFilterExclusionSupp";
        const enum Fields {
            SurveyExclusionSurKey = "SurveyExclusionSurKey",
            SurveyExclusionId = "SurveyExclusionId",
            ReasonDesc = "ReasonDesc",
            CommentsTxt = "CommentsTxt",
            SailId = "SailId",
            GuestId = "GuestId",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace SurveyFilterExclusionSuppService {
        const baseUrl = "DWSupport/SurveyFilterExclusionSupp";
        function Create(request: Serenity.SaveRequest<SurveyFilterExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SurveyFilterExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SurveyFilterExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SurveyFilterExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/SurveyFilterExclusionSupp/Create",
            Update = "DWSupport/SurveyFilterExclusionSupp/Update",
            Delete = "DWSupport/SurveyFilterExclusionSupp/Delete",
            Retrieve = "DWSupport/SurveyFilterExclusionSupp/Retrieve",
            List = "DWSupport/SurveyFilterExclusionSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface TblStrategicPriceControlExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class TblStrategicPriceControlExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface TblStrategicPriceControlForm {
        SailId: Serenity.StringEditor;
        CategoryCd: Serenity.StringEditor;
        EffectiveFromDat: Serenity.DateEditor;
        EffectiveToDat: Serenity.DateEditor;
        DiscPct: Serenity.IntegerEditor;
        CreatedDat: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedDat: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }
    class TblStrategicPriceControlForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface TblStrategicPriceControlRow {
        SailId?: number;
        CategoryCd?: string;
        EffectiveFromDat?: string;
        EffectiveToDat?: string;
        DiscPct?: number;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
        StrategicPriceControlId?: number;
    }
    namespace TblStrategicPriceControlRow {
        const idProperty = "StrategicPriceControlId";
        const nameProperty = "CategoryCd";
        const localTextPrefix = "DWSupport.TblStrategicPriceControl";
        const enum Fields {
            SailId = "SailId",
            CategoryCd = "CategoryCd",
            EffectiveFromDat = "EffectiveFromDat",
            EffectiveToDat = "EffectiveToDat",
            DiscPct = "DiscPct",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam",
            StrategicPriceControlId = "StrategicPriceControlId"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace TblStrategicPriceControlService {
        const baseUrl = "DWSupport/TblStrategicPriceControl";
        function Create(request: Serenity.SaveRequest<TblStrategicPriceControlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblStrategicPriceControlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblStrategicPriceControlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblStrategicPriceControlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/TblStrategicPriceControl/Create",
            Update = "DWSupport/TblStrategicPriceControl/Update",
            Delete = "DWSupport/TblStrategicPriceControl/Delete",
            Retrieve = "DWSupport/TblStrategicPriceControl/Retrieve",
            List = "DWSupport/TblStrategicPriceControl/List",
            ExcelImport = "DWSupport/TblStrategicPriceControl/ExcelImport"
        }
    }
}
declare namespace DAP.DWSupport {
}
declare namespace DAP.DWSupport {
    interface UpgradeAdvAdjSuppForm {
        UpgradeAmountMin: Serenity.DecimalEditor;
        UpgradeAmountMax: Serenity.DecimalEditor;
        CommissionPercent: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByName: Serenity.StringEditor;
    }
    class UpgradeAdvAdjSuppForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.DWSupport {
    interface UpgradeAdvAdjSuppRow {
        UpgradeAdvAdjId?: number;
        UpgradeAmountMin?: number;
        UpgradeAmountMax?: number;
        CommissionPercent?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByName?: string;
        ModifiedTs?: string;
        ModifiedByName?: string;
    }
    namespace UpgradeAdvAdjSuppRow {
        const idProperty = "UpgradeAdvAdjId";
        const nameProperty = "CreatedByName";
        const localTextPrefix = "DWSupport.UpgradeAdvAdjSupp";
        const enum Fields {
            UpgradeAdvAdjId = "UpgradeAdvAdjId",
            UpgradeAmountMin = "UpgradeAmountMin",
            UpgradeAmountMax = "UpgradeAmountMax",
            CommissionPercent = "CommissionPercent",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByName = "CreatedByName",
            ModifiedTs = "ModifiedTs",
            ModifiedByName = "ModifiedByName"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace UpgradeAdvAdjSuppService {
        const baseUrl = "DWSupport/UpgradeAdvAdjSupp";
        function Create(request: Serenity.SaveRequest<UpgradeAdvAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UpgradeAdvAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UpgradeAdvAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UpgradeAdvAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/UpgradeAdvAdjSupp/Create",
            Update = "DWSupport/UpgradeAdvAdjSupp/Update",
            Delete = "DWSupport/UpgradeAdvAdjSupp/Delete",
            Retrieve = "DWSupport/UpgradeAdvAdjSupp/Retrieve",
            List = "DWSupport/UpgradeAdvAdjSupp/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface VwGetSeaPortCodeRow {
        PortCode?: string;
        PortName?: string;
        CountryCode?: string;
    }
    namespace VwGetSeaPortCodeRow {
        const idProperty = "PortCode";
        const nameProperty = "PortCode";
        const localTextPrefix = "DWSupport.VwGetSeaPortCode";
        const lookupKey = "DWSupport.GetPortNames";
        function getLookup(): Q.Lookup<VwGetSeaPortCodeRow>;
        const enum Fields {
            PortCode = "PortCode",
            PortName = "PortName",
            CountryCode = "CountryCode"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace VwGetSeaPortCodeService {
        const baseUrl = "DWSupport/VwGetSeaPortCode";
        function Create(request: Serenity.SaveRequest<VwGetSeaPortCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VwGetSeaPortCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VwGetSeaPortCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VwGetSeaPortCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/VwGetSeaPortCode/Create",
            Update = "DWSupport/VwGetSeaPortCode/Update",
            Delete = "DWSupport/VwGetSeaPortCode/Delete",
            Retrieve = "DWSupport/VwGetSeaPortCode/Retrieve",
            List = "DWSupport/VwGetSeaPortCode/List"
        }
    }
}
declare namespace DAP.DWSupport {
    interface VwGetSeaSalesRepIdRow {
        UserId?: number;
        UserLoginName?: string;
        UserFullName?: string;
        Comments?: string;
        OfficeCode?: string;
    }
    namespace VwGetSeaSalesRepIdRow {
        const idProperty = "UserLoginName";
        const nameProperty = "UserLoginName";
        const localTextPrefix = "DWSupport.VwGetSeaSalesRepId";
        const lookupKey = "DWSupport.LoginName";
        function getLookup(): Q.Lookup<VwGetSeaSalesRepIdRow>;
        const enum Fields {
            UserId = "UserId",
            UserLoginName = "UserLoginName",
            UserFullName = "UserFullName",
            Comments = "Comments",
            OfficeCode = "OfficeCode"
        }
    }
}
declare namespace DAP.DWSupport {
    namespace VwGetSeaSalesRepIdService {
        const baseUrl = "DWSupport/VwGetSeaSalesRepId";
        function Create(request: Serenity.SaveRequest<VwGetSeaSalesRepIdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VwGetSeaSalesRepIdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VwGetSeaSalesRepIdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VwGetSeaSalesRepIdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DWSupport/VwGetSeaSalesRepId/Create",
            Update = "DWSupport/VwGetSeaSalesRepId/Update",
            Delete = "DWSupport/VwGetSeaSalesRepId/Delete",
            Retrieve = "DWSupport/VwGetSeaSalesRepId/Retrieve",
            List = "DWSupport/VwGetSeaSalesRepId/List"
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
}
declare namespace DAP.NCLHDSAR {
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
        LseIndex: Serenity.IntegerEditor;
        CeIndex: Serenity.IntegerEditor;
    }
    class DataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
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
        LseIndex?: number;
        CeIndex?: number;
    }
    namespace DataFlowRow {
        const idProperty = "Key";
        const nameProperty = "Source";
        const localTextPrefix = "NCLHDSAR.DataFlow";
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
            Cet = "Cet",
            LseIndex = "LseIndex",
            CeIndex = "CeIndex"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace DataFlowService {
        const baseUrl = "NCLHDSAR/DataFlow";
        function Create(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/DataFlow/Create",
            Update = "NCLHDSAR/DataFlow/Update",
            Delete = "NCLHDSAR/DataFlow/Delete",
            Retrieve = "NCLHDSAR/DataFlow/Retrieve",
            List = "NCLHDSAR/DataFlow/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestBrandsRow {
        Id?: number;
        Description?: string;
    }
    namespace MarketingRequestBrandsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "DWSupport.MarketingRequestBrands";
        const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace MarketingRequestBrandsService {
        const baseUrl = "NCLHDSAR/MarketingRequestBrands";
        function Create(request: Serenity.SaveRequest<MarketingRequestBrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MarketingRequestBrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestBrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestBrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/MarketingRequestBrands/Create",
            Update = "NCLHDSAR/MarketingRequestBrands/Update",
            Delete = "NCLHDSAR/MarketingRequestBrands/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestBrands/Retrieve",
            List = "NCLHDSAR/MarketingRequestBrands/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestChannelsRow {
        Id?: number;
        Description?: string;
    }
    namespace MarketingRequestChannelsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "DWSupport.MarketingRequestChannels";
        const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace MarketingRequestChannelsService {
        const baseUrl = "NCLHDSAR/MarketingRequestChannels";
        function Create(request: Serenity.SaveRequest<MarketingRequestChannelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MarketingRequestChannelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestChannelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestChannelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/MarketingRequestChannels/Create",
            Update = "NCLHDSAR/MarketingRequestChannels/Update",
            Delete = "NCLHDSAR/MarketingRequestChannels/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestChannels/Retrieve",
            List = "NCLHDSAR/MarketingRequestChannels/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class MarketingRequestExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestForm {
        RequestTypeId: Serenity.LookupEditor;
        SourceId: Serenity.LookupEditor;
        BrandId: Serenity.LookupEditor;
        ContactId: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        EmailAddress: Serenity.StringEditor;
        OptOutStatusID: Serenity.LookupEditor;
        ChannelId: Serenity.LookupEditor;
        IsReturnedMailCd: Serenity.BooleanEditor;
        Title: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Zip: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedDate: Serenity.DateEditor;
    }
    class MarketingRequestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestOptOutStatusRow {
        Id?: number;
        Description?: string;
    }
    namespace MarketingRequestOptOutStatusRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "DWSupport.MarketingRequestOptOutStatus";
        const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace MarketingRequestOptOutStatusService {
        const baseUrl = "NCLHDSAR/MarketingRequestOptOutStatus";
        function Create(request: Serenity.SaveRequest<MarketingRequestOptOutStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MarketingRequestOptOutStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestOptOutStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestOptOutStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/MarketingRequestOptOutStatus/Create",
            Update = "NCLHDSAR/MarketingRequestOptOutStatus/Update",
            Delete = "NCLHDSAR/MarketingRequestOptOutStatus/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestOptOutStatus/Retrieve",
            List = "NCLHDSAR/MarketingRequestOptOutStatus/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestRow {
        Id?: number;
        RequestTypeId?: number;
        BrandId?: number;
        ContactId?: string;
        ChannelId?: number;
        OptOutStatusID?: number;
        FirstName?: string;
        LastName?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zip?: string;
        Country?: string;
        Phone?: string;
        SourceId?: number;
        EmailAddress?: string;
        Title?: string;
        IsReturnedMailCd?: boolean;
        CreatedBy?: string;
        CreatedDate?: string;
        ModifiedBy?: string;
        ModifiedDate?: string;
        RequestTypeDescription?: string;
        BrandDescription?: string;
        ChannelDescription?: string;
        SourceDescription?: string;
    }
    namespace MarketingRequestRow {
        const idProperty = "Id";
        const nameProperty = "ContactId";
        const localTextPrefix = "DWSupport.MarketingRequest";
        const enum Fields {
            Id = "Id",
            RequestTypeId = "RequestTypeId",
            BrandId = "BrandId",
            ContactId = "ContactId",
            ChannelId = "ChannelId",
            OptOutStatusID = "OptOutStatusID",
            FirstName = "FirstName",
            LastName = "LastName",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zip = "Zip",
            Country = "Country",
            Phone = "Phone",
            SourceId = "SourceId",
            EmailAddress = "EmailAddress",
            Title = "Title",
            IsReturnedMailCd = "IsReturnedMailCd",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            ModifiedBy = "ModifiedBy",
            ModifiedDate = "ModifiedDate",
            RequestTypeDescription = "RequestTypeDescription",
            BrandDescription = "BrandDescription",
            ChannelDescription = "ChannelDescription",
            SourceDescription = "SourceDescription"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace MarketingRequestService {
        const baseUrl = "NCLHDSAR/MarketingRequest";
        function Create(request: Serenity.SaveRequest<MarketingRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MarketingRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImportChangeOfAddress(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImportReturnMail(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/MarketingRequest/Create",
            Update = "NCLHDSAR/MarketingRequest/Update",
            Delete = "NCLHDSAR/MarketingRequest/Delete",
            Retrieve = "NCLHDSAR/MarketingRequest/Retrieve",
            List = "NCLHDSAR/MarketingRequest/List",
            ExcelImportChangeOfAddress = "NCLHDSAR/MarketingRequest/ExcelImportChangeOfAddress",
            ExcelImportReturnMail = "NCLHDSAR/MarketingRequest/ExcelImportReturnMail"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestSourcesRow {
        Id?: number;
        Description?: string;
    }
    namespace MarketingRequestSourcesRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "DWSupport.MarketingRequestSources";
        const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace MarketingRequestSourcesService {
        const baseUrl = "NCLHDSAR/MarketingRequestSources";
        function Create(request: Serenity.SaveRequest<MarketingRequestSourcesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MarketingRequestSourcesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestSourcesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestSourcesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/MarketingRequestSources/Create",
            Update = "NCLHDSAR/MarketingRequestSources/Update",
            Delete = "NCLHDSAR/MarketingRequestSources/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestSources/Retrieve",
            List = "NCLHDSAR/MarketingRequestSources/List"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    interface MarketingRequestTypesRow {
        Id?: number;
        Description?: string;
    }
    namespace MarketingRequestTypesRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "DWSupport.MarketingRequestTypes";
        const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}
declare namespace DAP.NCLHDSAR {
    namespace MarketingRequestTypesService {
        const baseUrl = "NCLHDSAR/MarketingRequestTypes";
        function Create(request: Serenity.SaveRequest<MarketingRequestTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MarketingRequestTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/MarketingRequestTypes/Create",
            Update = "NCLHDSAR/MarketingRequestTypes/Update",
            Delete = "NCLHDSAR/MarketingRequestTypes/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestTypes/Retrieve",
            List = "NCLHDSAR/MarketingRequestTypes/List"
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
        function UpdateSP(request: Serenity.SaveRequest<RequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHDSAR/RequestAttributes/Create",
            Update = "NCLHDSAR/RequestAttributes/Update",
            UpdateSP = "NCLHDSAR/RequestAttributes/UpdateSP",
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
}
declare namespace DAP.NCLHODSMICROS {
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
        Lset: Serenity.DateTimeEditor;
        Cet: Serenity.DateTimeEditor;
    }
    class DataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
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
declare namespace DAP.NCLHODSMICROS {
    namespace DataFlowService {
        const baseUrl = "NCLHODSMICROS/DataFlow";
        function Create(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "NCLHODSMICROS/DataFlow/Create",
            Update = "NCLHODSMICROS/DataFlow/Update",
            Delete = "NCLHODSMICROS/DataFlow/Delete",
            Retrieve = "NCLHODSMICROS/DataFlow/Retrieve",
            List = "NCLHODSMICROS/DataFlow/List"
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
}
declare namespace DAP.NCLHODSSPENDVIS {
    interface DataFlowForm {
        Source: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        ProcessYn: Serenity.StringEditor;
        Target: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Package: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Lset: Serenity.DateTimeEditor;
        Cet: Serenity.DateTimeEditor;
    }
    class DataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
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
        const enum Fields {
            Key = "Key",
            Source = "Source",
            Name = "Name",
            ProcessYn = "ProcessYn",
            Target = "Target",
            Description = "Description",
            Package = "Package",
            Status = "Status",
            Lset = "Lset",
            Cet = "Cet"
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
        const enum Methods {
            Create = "NCLHODSSPENDVIS/DataFlow/Create",
            Update = "NCLHODSSPENDVIS/DataFlow/Update",
            Delete = "NCLHODSSPENDVIS/DataFlow/Delete",
            Retrieve = "NCLHODSSPENDVIS/DataFlow/Retrieve",
            List = "NCLHODSSPENDVIS/DataFlow/List"
        }
    }
}
declare namespace DAP.PCHDW {
}
declare namespace DAP.PCHDW {
    interface DimCruiseExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class DimCruiseExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHDW {
    interface DimCruiseForm {
        CruiseCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        CruiseName: Serenity.StringEditor;
        LocationName: Serenity.StringEditor;
        SeasonName: Serenity.StringEditor;
        RouteName: Serenity.StringEditor;
        MarketName: Serenity.StringEditor;
        CruiseDaysQty: Serenity.IntegerEditor;
        CruiseFromDt: Serenity.DateEditor;
        CruiseToDt: Serenity.DateEditor;
        CruiseSegmentDaysQty: Serenity.IntegerEditor;
        CruiseSegmentFromDt: Serenity.DateEditor;
        CruiseSegmentToDt: Serenity.DateEditor;
        IrsTaxInd: Serenity.BooleanEditor;
        IrsTaxAmt: Serenity.DecimalEditor;
        IufExemptFeeInd: Serenity.BooleanEditor;
        IufExemptQty: Serenity.IntegerEditor;
        IufExemptFeeAmt: Serenity.DecimalEditor;
        IufNonexemptFeeInd: Serenity.BooleanEditor;
        IufNonexemptQty: Serenity.IntegerEditor;
        IufNonexemptFeeAmt: Serenity.DecimalEditor;
        PpfExemptInd: Serenity.BooleanEditor;
        PpfExemptFeeAmt: Serenity.DecimalEditor;
        PpfNonexemptInd: Serenity.BooleanEditor;
        PpfNonexemptFeeAmt: Serenity.DecimalEditor;
        HmfFeeInd: Serenity.BooleanEditor;
        HmfPct: Serenity.DecimalEditor;
        CpvTaxInd: Serenity.BooleanEditor;
        CpvTaxAmt: Serenity.DecimalEditor;
        CruiseSailingStatusDesc: Serenity.StringEditor;
        CharterInd: Serenity.StringEditor;
        StatedCapacity: Serenity.IntegerEditor;
        CappedCapacity: Serenity.IntegerEditor;
        CruiseStatusCd: Serenity.StringEditor;
        MinisegInd: Serenity.StringEditor;
        OnbrdAvgPaxQty: Serenity.IntegerEditor;
        HighlightInd: Serenity.IntegerEditor;
        ColorInd: Serenity.StringEditor;
        DrydockInd: Serenity.IntegerEditor;
        AmenityPointsAllowedQty: Serenity.IntegerEditor;
        VarToCurve: Serenity.DecimalEditor;
        FinancialSuppressInd: Serenity.StringEditor;
        FromPortCd: Serenity.StringEditor;
        ToPortCd: Serenity.StringEditor;
        FromPortName: Serenity.StringEditor;
        ToPortName: Serenity.StringEditor;
        SegmentFromPortCd: Serenity.StringEditor;
        SegmentToPortCd: Serenity.StringEditor;
        SegmentFromPortName: Serenity.StringEditor;
        SegmentToPortName: Serenity.StringEditor;
        SuperMarketCd: Serenity.StringEditor;
        SuperMarketDesc: Serenity.StringEditor;
        CruiseSegmentName: Serenity.StringEditor;
        SegmentLocationName: Serenity.StringEditor;
        SegmentSeasonName: Serenity.StringEditor;
        SegmentRouteName: Serenity.StringEditor;
        SegmentMarketName: Serenity.StringEditor;
        SegmentSuperMarketCd: Serenity.StringEditor;
        SegmentSuperMarketDesc: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        ShowInReport: Serenity.StringEditor;
        CruiseFromDtMmddyyyy: Serenity.StringEditor;
        CruiseToDtMmddyyyy: Serenity.StringEditor;
        SegmentFromDtMmddyyyy: Serenity.StringEditor;
        SegmentToDtMmddyyyy: Serenity.StringEditor;
        OnboardAcctTrandate: Serenity.StringEditor;
        SegmentOnboardAcctTrandate: Serenity.StringEditor;
        RevenueMgmtMarketSegment: Serenity.StringEditor;
    }
    class DimCruiseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHDW {
    interface DimCruiseRow {
        CruiseTk?: number;
        CruiseCd?: string;
        CruiseSegmentCd?: string;
        CruiseName?: string;
        LocationName?: string;
        SeasonName?: string;
        RouteName?: string;
        MarketName?: string;
        CruiseDaysQty?: number;
        CruiseFromDt?: string;
        CruiseToDt?: string;
        CruiseSegmentDaysQty?: number;
        CruiseSegmentFromDt?: string;
        CruiseSegmentToDt?: string;
        IrsTaxInd?: boolean;
        IrsTaxAmt?: number;
        IufExemptFeeInd?: boolean;
        IufExemptQty?: number;
        IufExemptFeeAmt?: number;
        IufNonexemptFeeInd?: boolean;
        IufNonexemptQty?: number;
        IufNonexemptFeeAmt?: number;
        PpfExemptInd?: boolean;
        PpfExemptFeeAmt?: number;
        PpfNonexemptInd?: boolean;
        PpfNonexemptFeeAmt?: number;
        HmfFeeInd?: boolean;
        HmfPct?: number;
        CpvTaxInd?: boolean;
        CpvTaxAmt?: number;
        CruiseSailingStatusDesc?: string;
        FromPortCd?: string;
        ToPortCd?: string;
        FromPortName?: string;
        ToPortName?: string;
        SegmentFromPortCd?: string;
        SegmentToPortCd?: string;
        SegmentFromPortName?: string;
        SegmentToPortName?: string;
        SuperMarketCd?: string;
        SuperMarketDesc?: string;
        CruiseSegmentName?: string;
        SegmentLocationName?: string;
        SegmentSeasonName?: string;
        SegmentRouteName?: string;
        SegmentMarketName?: string;
        SegmentSuperMarketCd?: string;
        SegmentSuperMarketDesc?: string;
        CharterInd?: string;
        CompanyCd?: string;
        StatedCapacity?: number;
        CappedCapacity?: number;
        CruiseStatusCd?: string;
        ShipCd?: string;
        ShowInReport?: string;
        CruiseFromDtMmddyyyy?: string;
        CruiseToDtMmddyyyy?: string;
        SegmentFromDtMmddyyyy?: string;
        SegmentToDtMmddyyyy?: string;
        MinisegInd?: string;
        OnboardAcctTrandate?: string;
        SegmentOnboardAcctTrandate?: string;
        OnbrdAvgPaxQty?: number;
        HighlightInd?: number;
        ColorInd?: string;
        DrydockInd?: number;
        AmenityPointsAllowedQty?: number;
        VarToCurve?: number;
        RevenueMgmtMarketSegment?: string;
        FinancialSuppressInd?: string;
    }
    namespace DimCruiseRow {
        const idProperty = "CruiseTk";
        const nameProperty = "CruiseCd";
        const localTextPrefix = "PCHDW.DimCruise";
        const lookupKey = "PCHDW.GetDimCruise";
        function getLookup(): Q.Lookup<DimCruiseRow>;
        const enum Fields {
            CruiseTk = "CruiseTk",
            CruiseCd = "CruiseCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            CruiseName = "CruiseName",
            LocationName = "LocationName",
            SeasonName = "SeasonName",
            RouteName = "RouteName",
            MarketName = "MarketName",
            CruiseDaysQty = "CruiseDaysQty",
            CruiseFromDt = "CruiseFromDt",
            CruiseToDt = "CruiseToDt",
            CruiseSegmentDaysQty = "CruiseSegmentDaysQty",
            CruiseSegmentFromDt = "CruiseSegmentFromDt",
            CruiseSegmentToDt = "CruiseSegmentToDt",
            IrsTaxInd = "IrsTaxInd",
            IrsTaxAmt = "IrsTaxAmt",
            IufExemptFeeInd = "IufExemptFeeInd",
            IufExemptQty = "IufExemptQty",
            IufExemptFeeAmt = "IufExemptFeeAmt",
            IufNonexemptFeeInd = "IufNonexemptFeeInd",
            IufNonexemptQty = "IufNonexemptQty",
            IufNonexemptFeeAmt = "IufNonexemptFeeAmt",
            PpfExemptInd = "PpfExemptInd",
            PpfExemptFeeAmt = "PpfExemptFeeAmt",
            PpfNonexemptInd = "PpfNonexemptInd",
            PpfNonexemptFeeAmt = "PpfNonexemptFeeAmt",
            HmfFeeInd = "HmfFeeInd",
            HmfPct = "HmfPct",
            CpvTaxInd = "CpvTaxInd",
            CpvTaxAmt = "CpvTaxAmt",
            CruiseSailingStatusDesc = "CruiseSailingStatusDesc",
            FromPortCd = "FromPortCd",
            ToPortCd = "ToPortCd",
            FromPortName = "FromPortName",
            ToPortName = "ToPortName",
            SegmentFromPortCd = "SegmentFromPortCd",
            SegmentToPortCd = "SegmentToPortCd",
            SegmentFromPortName = "SegmentFromPortName",
            SegmentToPortName = "SegmentToPortName",
            SuperMarketCd = "SuperMarketCd",
            SuperMarketDesc = "SuperMarketDesc",
            CruiseSegmentName = "CruiseSegmentName",
            SegmentLocationName = "SegmentLocationName",
            SegmentSeasonName = "SegmentSeasonName",
            SegmentRouteName = "SegmentRouteName",
            SegmentMarketName = "SegmentMarketName",
            SegmentSuperMarketCd = "SegmentSuperMarketCd",
            SegmentSuperMarketDesc = "SegmentSuperMarketDesc",
            CharterInd = "CharterInd",
            CompanyCd = "CompanyCd",
            StatedCapacity = "StatedCapacity",
            CappedCapacity = "CappedCapacity",
            CruiseStatusCd = "CruiseStatusCd",
            ShipCd = "ShipCd",
            ShowInReport = "ShowInReport",
            CruiseFromDtMmddyyyy = "CruiseFromDtMmddyyyy",
            CruiseToDtMmddyyyy = "CruiseToDtMmddyyyy",
            SegmentFromDtMmddyyyy = "SegmentFromDtMmddyyyy",
            SegmentToDtMmddyyyy = "SegmentToDtMmddyyyy",
            MinisegInd = "MinisegInd",
            OnboardAcctTrandate = "OnboardAcctTrandate",
            SegmentOnboardAcctTrandate = "SegmentOnboardAcctTrandate",
            OnbrdAvgPaxQty = "OnbrdAvgPaxQty",
            HighlightInd = "HighlightInd",
            ColorInd = "ColorInd",
            DrydockInd = "DrydockInd",
            AmenityPointsAllowedQty = "AmenityPointsAllowedQty",
            VarToCurve = "VarToCurve",
            RevenueMgmtMarketSegment = "RevenueMgmtMarketSegment",
            FinancialSuppressInd = "FinancialSuppressInd"
        }
    }
}
declare namespace DAP.PCHDW {
    namespace DimCruiseService {
        const baseUrl = "PCHDW/DimCruise";
        function Create(request: Serenity.SaveRequest<DimCruiseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DimCruiseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DimCruiseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DimCruiseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHDW/DimCruise/Create",
            Update = "PCHDW/DimCruise/Update",
            Delete = "PCHDW/DimCruise/Delete",
            Retrieve = "PCHDW/DimCruise/Retrieve",
            List = "PCHDW/DimCruise/List",
            ExcelImport = "PCHDW/DimCruise/ExcelImport"
        }
    }
}
declare namespace DAP.PCHDW {
    interface DimCurrencyRow {
        Tk?: number;
        Cd?: string;
        Desc?: string;
    }
    namespace DimCurrencyRow {
        const idProperty = "Cd";
        const nameProperty = "Cd";
        const localTextPrefix = "PCHDW.DimCurrency";
        const lookupKey = "PCHDW.Currency";
        function getLookup(): Q.Lookup<DimCurrencyRow>;
        const enum Fields {
            Tk = "Tk",
            Cd = "Cd",
            Desc = "Desc"
        }
    }
}
declare namespace DAP.PCHDW {
    namespace DimCurrencyService {
        const baseUrl = "PCHDW/DimCurrency";
        function Create(request: Serenity.SaveRequest<DimCurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DimCurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DimCurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DimCurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHDW/DimCurrency/Create",
            Update = "PCHDW/DimCurrency/Update",
            Delete = "PCHDW/DimCurrency/Delete",
            Retrieve = "PCHDW/DimCurrency/Retrieve",
            List = "PCHDW/DimCurrency/List"
        }
    }
}
declare namespace DAP.PCHDW {
}
declare namespace DAP.PCHDW {
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
    class DimInvoiceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
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
        const enum Fields {
            InvoiceTk = "InvoiceTk",
            InvoiceNum = "InvoiceNum",
            CompanyCd = "CompanyCd",
            PassengerQty = "PassengerQty",
            NonrevPassengerQty = "NonrevPassengerQty",
            NontaxPassengerQty = "NontaxPassengerQty",
            OfficeCd = "OfficeCd",
            OfficeDesc = "OfficeDesc",
            CurrencyCd = "CurrencyCd",
            CurrencyDesc = "CurrencyDesc",
            StatusCd = "StatusCd",
            StatusDesc = "StatusDesc",
            ZipCd = "ZipCd",
            CityName = "CityName",
            StateCd = "StateCd",
            CountryName = "CountryName",
            CancellationDt = "CancellationDt",
            BonusSavingsCd = "BonusSavingsCd",
            BonusSavingsDesc = "BonusSavingsDesc",
            AirParticipationInd = "AirParticipationInd",
            HotelParticipationInd = "HotelParticipationInd",
            PaxAirClassCd = "PaxAirClassCd",
            DepositDt = "DepositDt",
            DepositAmt = "DepositAmt",
            UserId = "UserId",
            Pax1FirstName = "Pax1FirstName",
            Pax1LastName = "Pax1LastName",
            Pax2FirstName = "Pax2FirstName",
            Pax2LastName = "Pax2LastName",
            CruiseTk = "CruiseTk",
            ChangeDt = "ChangeDt",
            CreateDt = "CreateDt",
            FirstPaymentDt = "FirstPaymentDt",
            FinalPaymentDueDt = "FinalPaymentDueDt",
            InitialWaitlistInd = "InitialWaitlistInd",
            CancelBookingStatusCd = "CancelBookingStatusCd",
            SalesSourceCd = "SalesSourceCd",
            SalesSourceDesc = "SalesSourceDesc",
            OriginalConsortiumCd = "OriginalConsortiumCd",
            OriginalConsortiumDesc = "OriginalConsortiumDesc",
            UserName = "UserName",
            OriginalUserId = "OriginalUserId",
            OriginalUserName = "OriginalUserName",
            OriginalDeptCd = "OriginalDeptCd",
            OriginalDeptName = "OriginalDeptName",
            OriginalUserActiveInd = "OriginalUserActiveInd",
            WaitlistDt = "WaitlistDt",
            FirstConfirmDt = "FirstConfirmDt",
            PastGuestInd = "PastGuestInd",
            DirectBookingInd = "DirectBookingInd",
            AttnName = "AttnName",
            ComboBookingInd = "ComboBookingInd",
            OnboardTypeDesc = "OnboardTypeDesc",
            CruiseSvcMgmtCrNum = "CruiseSvcMgmtCrNum",
            PromoCd = "PromoCd",
            GdsSystemCd = "GdsSystemCd",
            GdsSystemDesc = "GdsSystemDesc",
            PromoDesc = "PromoDesc",
            CancellationType = "CancellationType",
            ChannelTk = "ChannelTk",
            PromoBonusComm = "PromoBonusComm",
            PromoCommAmt = "PromoCommAmt",
            ComboLegQty = "ComboLegQty",
            CancelReason = "CancelReason",
            PaidClassCd = "PaidClassCd",
            PaidClassCategoryDesc = "PaidClassCategoryDesc",
            OciOfficeCd = "OciOfficeCd",
            AirXferFeeAmt = "AirXferFeeAmt",
            CountryCd = "CountryCd",
            FutureDepositFlag = "FutureDepositFlag",
            PromotionalAmenityCd = "PromotionalAmenityCd",
            CruiseCommissionAmt = "CruiseCommissionAmt",
            PostedInvoiceDt = "PostedInvoiceDt",
            AgentTk = "AgentTk",
            Cinvoice1Num = "Cinvoice1Num",
            Cinvoice2Num = "Cinvoice2Num",
            Cinvoice3Num = "Cinvoice3Num",
            Cinvoice4Num = "Cinvoice4Num",
            Cinvoice5Num = "Cinvoice5Num",
            Cinvoice6Num = "Cinvoice6Num",
            PackageCd = "PackageCd",
            LandPackageParticipantQty = "LandPackageParticipantQty",
            LandPackageParticipantInd = "LandPackageParticipantInd",
            DptrFlightQty = "DptrFlightQty",
            RtrnFlightQty = "RtrnFlightQty",
            DptrFlightClassCd = "DptrFlightClassCd",
            RtrnFlightClassCd = "RtrnFlightClassCd",
            AirCostSourceCd = "AirCostSourceCd",
            ChannelCountryCd = "ChannelCountryCd",
            ChannelCountryName = "ChannelCountryName",
            Pax1AirportHome1Cd = "Pax1AirportHome1Cd",
            Pax1AirportRtrn1Cd = "Pax1AirportRtrn1Cd",
            Pax1FirstFlightClass = "Pax1FirstFlightClass",
            Pax1RtrnFlightClass = "Pax1RtrnFlightClass",
            Pax2AirportHome1Cd = "Pax2AirportHome1Cd",
            Pax2AirportRtrn1Cd = "Pax2AirportRtrn1Cd",
            Pax2FirstFlightClass = "Pax2FirstFlightClass",
            Pax2RtrnFlightClass = "Pax2RtrnFlightClass",
            Pax1LoyaltyLevelNm = "Pax1LoyaltyLevelNm",
            Pax2LoyaltyLevelNm = "Pax2LoyaltyLevelNm",
            InstallmentPlanInd = "InstallmentPlanInd",
            InstallmentPlanNum = "InstallmentPlanNum",
            CruiseSvcMgmtId = "CruiseSvcMgmtId",
            OutboundReportingRegionCd = "OutboundReportingRegionCd",
            CenturionCd = "CenturionCd",
            CenturionInd = "CenturionInd",
            PlatinumCd = "PlatinumCd",
            PlatinumInd = "PlatinumInd",
            DwPastGuestInd = "DwPastGuestInd",
            DwPastGuest1Ind = "DwPastGuest1Ind",
            DwPastGuest2Ind = "DwPastGuest2Ind",
            Pax1NvsPgInd = "Pax1NvsPgInd",
            Pax2NvsPgInd = "Pax2NvsPgInd",
            NvsPgInd = "NvsPgInd",
            CurrentPackageCd = "CurrentPackageCd",
            MpcardNumPax1 = "MpcardNumPax1",
            CurrentLoyaltyLevelPax1 = "CurrentLoyaltyLevelPax1",
            MpcardNumPax2 = "MpcardNumPax2",
            CurrentLoyaltyLevelPax2 = "CurrentLoyaltyLevelPax2",
            FccDeferredInd = "FccDeferredInd"
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
        const enum Methods {
            Create = "PCHDW/DimInvoice/Create",
            Update = "PCHDW/DimInvoice/Update",
            Delete = "PCHDW/DimInvoice/Delete",
            Retrieve = "PCHDW/DimInvoice/Retrieve",
            List = "PCHDW/DimInvoice/List"
        }
    }
}
declare namespace DAP.PCHDW {
    interface DimOfficeRow {
        Tk?: number;
        Cd?: string;
        Desc?: string;
    }
    namespace DimOfficeRow {
        const idProperty = "Tk";
        const nameProperty = "Desc";
        const localTextPrefix = "PCHDW.DimOffice";
        const lookupKey = "PCHDW.DimOffice";
        function getLookup(): Q.Lookup<DimOfficeRow>;
        const enum Fields {
            Tk = "Tk",
            Cd = "Cd",
            Desc = "Desc"
        }
    }
}
declare namespace DAP.PCHDW {
    namespace DimOfficeService {
        const baseUrl = "PCHDW/DimOffice";
        function Create(request: Serenity.SaveRequest<DimOfficeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DimOfficeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DimOfficeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DimOfficeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHDW/DimOffice/Create",
            Update = "PCHDW/DimOffice/Update",
            Delete = "PCHDW/DimOffice/Delete",
            Retrieve = "PCHDW/DimOffice/Retrieve",
            List = "PCHDW/DimOffice/List"
        }
    }
}
declare namespace DAP.PCHDW {
}
declare namespace DAP.PCHDW {
    interface ScheduledJobForm {
        JobName: Serenity.StringEditor;
        JobDescription: Serenity.TextAreaEditor;
    }
    class ScheduledJobForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHDW {
    interface ScheduledJobRow {
        ScheduledJobId?: number;
        JobName?: string;
        JobDescription?: string;
    }
    namespace ScheduledJobRow {
        const idProperty = "ScheduledJobId";
        const nameProperty = "JobName";
        const localTextPrefix = "PCHDW.ScheduledJob";
        const enum Fields {
            ScheduledJobId = "ScheduledJobId",
            JobName = "JobName",
            JobDescription = "JobDescription"
        }
    }
}
declare namespace DAP.PCHDW {
    namespace ScheduledJobService {
        const baseUrl = "PCHDW/ScheduledJob";
        function Create(request: Serenity.SaveRequest<ScheduledJobRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ScheduledJobRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ScheduledJobRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ScheduledJobRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHDW/ScheduledJob/Create",
            Update = "PCHDW/ScheduledJob/Update",
            Delete = "PCHDW/ScheduledJob/Delete",
            Retrieve = "PCHDW/ScheduledJob/Retrieve",
            List = "PCHDW/ScheduledJob/List"
        }
    }
}
declare namespace DAP.PCHDW {
}
declare namespace DAP.PCHDW {
    interface VwSqlJobListForm {
        Enabled: Serenity.IntegerEditor;
        DateCreated: Serenity.DateEditor;
        DateModified: Serenity.DateEditor;
    }
    class VwSqlJobListForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHDW {
    interface VwSqlJobListRow {
        Name?: string;
        JobDescription?: string;
        Enabled?: boolean;
        DateCreated?: string;
        DateModified?: string;
    }
    namespace VwSqlJobListRow {
        const idProperty = "Name";
        const nameProperty = "Name";
        const localTextPrefix = "PCHDW.VwSqlJobList";
        const enum Fields {
            Name = "Name",
            JobDescription = "JobDescription",
            Enabled = "Enabled",
            DateCreated = "DateCreated",
            DateModified = "DateModified"
        }
    }
}
declare namespace DAP.PCHDW {
    namespace VwSqlJobListService {
        const baseUrl = "PCHDW/VwSqlJobList";
        function Create(request: Serenity.SaveRequest<VwSqlJobListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VwSqlJobListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateWithSP(request: Serenity.SaveRequest<VwSqlJobListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VwSqlJobListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VwSqlJobListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHDW/VwSqlJobList/Create",
            Update = "PCHDW/VwSqlJobList/Update",
            UpdateWithSP = "PCHDW/VwSqlJobList/UpdateWithSP",
            Delete = "PCHDW/VwSqlJobList/Delete",
            Retrieve = "PCHDW/VwSqlJobList/Retrieve",
            List = "PCHDW/VwSqlJobList/List"
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
        CobrandInd: Serenity.StringEditor;
        TeamCompanyCd: CompanyEditor;
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
        CobrandInd?: string;
        TeamCompanyCd?: string;
        AgentLocationDescription?: string;
        Nm?: string;
        CompanyName?: string;
        TeamCompanyName?: string;
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
            CobrandInd = "CobrandInd",
            TeamCompanyCd = "TeamCompanyCd",
            AgentLocationDescription = "AgentLocationDescription",
            Nm = "Nm",
            CompanyName = "CompanyName",
            TeamCompanyName = "TeamCompanyName"
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
    interface OutboundCommissionBkGoalForm {
        CompanyCd: CompanyEditor;
        CommissionMonth: Serenity.DateEditor;
        NumOfBkGoal: Serenity.IntegerEditor;
        LoadDt: Serenity.DateEditor;
    }
    class OutboundCommissionBkGoalForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface OutboundCommissionBkGoalRow {
        CommissionTk?: number;
        CompanyCd?: number;
        CommissionMonth?: string;
        NumOfBkGoal?: number;
        LoadDt?: string;
        CompanyName?: string;
    }
    namespace OutboundCommissionBkGoalRow {
        const idProperty = "CommissionTk";
        const localTextPrefix = "PCHODS.OutboundCommissionBkGoal";
        const lookupKey = "PCHODS.OutboundAgentLocation";
        function getLookup(): Q.Lookup<OutboundCommissionBkGoalRow>;
        const enum Fields {
            CommissionTk = "CommissionTk",
            CompanyCd = "CompanyCd",
            CommissionMonth = "CommissionMonth",
            NumOfBkGoal = "NumOfBkGoal",
            LoadDt = "LoadDt",
            CompanyName = "CompanyName"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace OutboundCommissionBkGoalService {
        const baseUrl = "PCHODS/OutboundCommissionBkGoal";
        function Create(request: Serenity.SaveRequest<OutboundCommissionBkGoalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutboundCommissionBkGoalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionBkGoalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionBkGoalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/OutboundCommissionBkGoal/Create",
            Update = "PCHODS/OutboundCommissionBkGoal/Update",
            Delete = "PCHODS/OutboundCommissionBkGoal/Delete",
            Retrieve = "PCHODS/OutboundCommissionBkGoal/Retrieve",
            List = "PCHODS/OutboundCommissionBkGoal/List"
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
    interface SelectCompanyAuForm {
        CompanyCd: SelectCompanyAUEditor;
        EffectiveDt: Serenity.DateEditor;
    }
    class SelectCompanyAuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface SelectCompanyForm {
        CompanyCd: SelectCompanyEditor;
        EffectiveDt: Serenity.DateEditor;
    }
    class SelectCompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface UarEmployeeDirectreportsRow {
        EmployeeId?: string;
        EmployeeFirstName?: string;
        EmployeeLastName?: string;
        EmpCompanyCd?: string;
        EmpCompanyDesc?: string;
        EmpJobtitle?: string;
        EmpJobcode?: string;
        EmpEmail?: string;
        EmpStatus?: string;
        SupEmployeeId?: string;
        SupFirstName?: string;
        SupLastName?: string;
        SupJobtitle?: string;
        SupJobcode?: string;
        SupLevel?: number;
        IsSrDir?: number;
    }
    namespace UarEmployeeDirectreportsRow {
        const idProperty = "EmployeeId";
        const nameProperty = "EmployeeId";
        const localTextPrefix = "PCHODS.UarEmployeeDirectreports";
        const lookupKey = "PCHODS.UarEmployeeDirectreports";
        function getLookup(): Q.Lookup<UarEmployeeDirectreportsRow>;
        const enum Fields {
            EmployeeId = "EmployeeId",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeLastName = "EmployeeLastName",
            EmpCompanyCd = "EmpCompanyCd",
            EmpCompanyDesc = "EmpCompanyDesc",
            EmpJobtitle = "EmpJobtitle",
            EmpJobcode = "EmpJobcode",
            EmpEmail = "EmpEmail",
            EmpStatus = "EmpStatus",
            SupEmployeeId = "SupEmployeeId",
            SupFirstName = "SupFirstName",
            SupLastName = "SupLastName",
            SupJobtitle = "SupJobtitle",
            SupJobcode = "SupJobcode",
            SupLevel = "SupLevel",
            IsSrDir = "IsSrDir"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace UarEmployeeDirectreportsService {
        const baseUrl = "PCHODS/UarEmployeeDirectreports";
        function Create(request: Serenity.SaveRequest<UarEmployeeDirectreportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UarEmployeeDirectreportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UarEmployeeDirectreportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UarEmployeeDirectreportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/UarEmployeeDirectreports/Create",
            Update = "PCHODS/UarEmployeeDirectreports/Update",
            Delete = "PCHODS/UarEmployeeDirectreports/Delete",
            Retrieve = "PCHODS/UarEmployeeDirectreports/Retrieve",
            List = "PCHODS/UarEmployeeDirectreports/List"
        }
    }
}
declare namespace DAP.PCHODS {
}
declare namespace DAP.PCHODS {
    interface UarSrDirAboveListForm {
        Jobtitle: Serenity.StringEditor;
        IsSrDirAbove: Serenity.BooleanEditor;
        DateEffective: Serenity.DateEditor;
        DateExpires: Serenity.DateEditor;
        RowChangeReason: Serenity.StringEditor;
    }
    class UarSrDirAboveListForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface UarSrDirAboveListRow {
        Id?: number;
        Jobtitle?: string;
        IsSrDirAbove?: boolean;
        DateEffective?: string;
        DateExpires?: string;
        RowChangeReason?: string;
    }
    namespace UarSrDirAboveListRow {
        const idProperty = "Id";
        const nameProperty = "Jobtitle";
        const localTextPrefix = "PCHODS.UarSrDirAboveList";
        const enum Fields {
            Id = "Id",
            Jobtitle = "Jobtitle",
            IsSrDirAbove = "IsSrDirAbove",
            DateEffective = "DateEffective",
            DateExpires = "DateExpires",
            RowChangeReason = "RowChangeReason"
        }
    }
}
declare namespace DAP.PCHODS {
    namespace UarSrDirAboveListService {
        const baseUrl = "PCHODS/UarSrDirAboveList";
        function Create(request: Serenity.SaveRequest<UarSrDirAboveListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UarSrDirAboveListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UarSrDirAboveListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UarSrDirAboveListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/UarSrDirAboveList/Create",
            Update = "PCHODS/UarSrDirAboveList/Update",
            Delete = "PCHODS/UarSrDirAboveList/Delete",
            Retrieve = "PCHODS/UarSrDirAboveList/Retrieve",
            List = "PCHODS/UarSrDirAboveList/List"
        }
    }
}
declare namespace DAP.PCHODS {
}
declare namespace DAP.PCHODS {
    interface UarUnknownReviewerForm {
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
        ReviewerItCompliance: Serenity.LookupEditor;
    }
    class UarUnknownReviewerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODS {
    interface UarUnknownReviewerRow {
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
    namespace UarUnknownReviewerRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeId";
        const localTextPrefix = "PCHODS.UarUnknownReviewer";
        const enum Fields {
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
declare namespace DAP.PCHODS {
    namespace UarUnknownReviewerService {
        const baseUrl = "PCHODS/UarUnknownReviewer";
        function Create(request: Serenity.SaveRequest<UarUnknownReviewerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UarUnknownReviewerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UarUnknownReviewerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UarUnknownReviewerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODS/UarUnknownReviewer/Create",
            Update = "PCHODS/UarUnknownReviewer/Update",
            Delete = "PCHODS/UarUnknownReviewer/Delete",
            Retrieve = "PCHODS/UarUnknownReviewer/Retrieve",
            List = "PCHODS/UarUnknownReviewer/List"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    interface AgencyRow {
        CompanyCd?: string;
        AgencyCd?: string;
        AttnDesc?: string;
        AgencyNameDesc?: string;
        Addr1?: string;
        Addr2?: string;
        Addr3?: string;
        CityName?: string;
        StateNm?: string;
        ZipCd?: string;
        Zip2Cd?: string;
        Phone1Num?: string;
        Phone2Num?: string;
        FaxNum?: string;
        CommissionPct?: number;
        GsaInd?: string;
        NationalAcctInd?: string;
        GsaPriceLevelAmt?: number;
        Comment1Desc?: string;
        Comment2Desc?: string;
        ConsortiumCd?: string;
        IataNum?: string;
        CliaNum?: string;
        PreviousYrPaxQty?: number;
        PreviousYrRevAmt?: number;
        LastYearSalesAmt?: number;
        CurrentYearSalesAmt?: number;
        UserInUseById?: string;
        KeyAcctInd?: string;
        AgencyDefaultStatusInd?: string;
        LastYearKeyAcctCd?: string;
        SalesRegionCd?: string;
        RevLabelCd?: string;
        PseudoCityCd?: string;
        ApolloInd?: string;
        Country?: string;
        CorporationInd?: string;
        TaxIdNum?: string;
        CorpComDesc?: string;
        Prt1099Ind?: string;
        PrtD1099Dt?: string;
        TaxInfoReceivedDt?: string;
        InsDefaultCd?: string;
        GdsSysCd?: string;
        AllowPlatInd?: string;
        AllowSdbdInd?: string;
        AllowGpInd?: string;
        MahanaClubInd?: string;
        McActiveInd?: string;
        EMemberDesc?: string;
        AgencyStatusCd?: string;
        CurrencyCd?: string;
        SecondaryCurrencyCd?: string;
        OfficeCd?: string;
        AgencyEmail?: string;
        AgencyWebAddress?: string;
        PromoAdInd?: string;
        VatId?: string;
        SelfBillInd?: string;
        PreferredCommunicationCd?: string;
        PreferredLanguageDesc?: string;
        NactaNum?: string;
        ActiveInd?: string;
        BdmCd?: string;
        SendCustInvInd?: string;
        CreditAgtInd?: string;
        AgentNum?: string;
        PinClubInd?: string;
        FinHoldInd?: string;
        L7daysNum?: number;
        Option1DueDaysQty?: number;
        Option2DueDaysQty?: number;
        AutoCxlInd?: string;
        ConsortiumAddedDt?: string;
        MasterAgencyInd?: string;
        OwnerCd?: string;
        AutoEnvoInd?: string;
        OverVacSummInd?: string;
        VacSummEmailDesc?: string;
        TaxPayer1099Name?: string;
        AgentLinkDesc?: string;
        AllowBankInd?: string;
        BankAccountBalAmt?: number;
        BankAcct2Amt?: number;
        PaymentViaWireInd?: string;
        ConsortiumRegionCd?: string;
        ConsortRgnNum?: string;
        ConsortiumRegionAddedDt?: string;
        RequiredSecondaryAgentInd?: string;
        OverrideFinalDaysInd?: string;
        FinalDaysQty?: number;
        OverrideOption1DaysInd?: string;
        OverrideOption2DaysInd?: string;
        FirstBookingDt?: string;
        AgencyCreateDt?: string;
        BdmRepCd?: string;
        SsrRepCd?: string;
        NvsKeyAcctInd?: string;
        LastUpdated?: string;
        Key1?: string;
        SiblingId?: number;
        AgencyCdName?: string;
    }
    namespace AgencyRow {
        const idProperty = "AgencyCd";
        const nameProperty = "AgencyCdName";
        const localTextPrefix = "PCHODSNVS.Agency";
        const lookupKey = "PCHODSNVS.Agency";
        function getLookup(): Q.Lookup<AgencyRow>;
        const enum Fields {
            CompanyCd = "CompanyCd",
            AgencyCd = "AgencyCd",
            AttnDesc = "AttnDesc",
            AgencyNameDesc = "AgencyNameDesc",
            Addr1 = "Addr1",
            Addr2 = "Addr2",
            Addr3 = "Addr3",
            CityName = "CityName",
            StateNm = "StateNm",
            ZipCd = "ZipCd",
            Zip2Cd = "Zip2Cd",
            Phone1Num = "Phone1Num",
            Phone2Num = "Phone2Num",
            FaxNum = "FaxNum",
            CommissionPct = "CommissionPct",
            GsaInd = "GsaInd",
            NationalAcctInd = "NationalAcctInd",
            GsaPriceLevelAmt = "GsaPriceLevelAmt",
            Comment1Desc = "Comment1Desc",
            Comment2Desc = "Comment2Desc",
            ConsortiumCd = "ConsortiumCd",
            IataNum = "IataNum",
            CliaNum = "CliaNum",
            PreviousYrPaxQty = "PreviousYrPaxQty",
            PreviousYrRevAmt = "PreviousYrRevAmt",
            LastYearSalesAmt = "LastYearSalesAmt",
            CurrentYearSalesAmt = "CurrentYearSalesAmt",
            UserInUseById = "UserInUseById",
            KeyAcctInd = "KeyAcctInd",
            AgencyDefaultStatusInd = "AgencyDefaultStatusInd",
            LastYearKeyAcctCd = "LastYearKeyAcctCd",
            SalesRegionCd = "SalesRegionCd",
            RevLabelCd = "RevLabelCd",
            PseudoCityCd = "PseudoCityCd",
            ApolloInd = "ApolloInd",
            Country = "Country",
            CorporationInd = "CorporationInd",
            TaxIdNum = "TaxIdNum",
            CorpComDesc = "CorpComDesc",
            Prt1099Ind = "Prt1099Ind",
            PrtD1099Dt = "PrtD1099Dt",
            TaxInfoReceivedDt = "TaxInfoReceivedDt",
            InsDefaultCd = "InsDefaultCd",
            GdsSysCd = "GdsSysCd",
            AllowPlatInd = "AllowPlatInd",
            AllowSdbdInd = "AllowSdbdInd",
            AllowGpInd = "AllowGpInd",
            MahanaClubInd = "MahanaClubInd",
            McActiveInd = "McActiveInd",
            EMemberDesc = "EMemberDesc",
            AgencyStatusCd = "AgencyStatusCd",
            CurrencyCd = "CurrencyCd",
            SecondaryCurrencyCd = "SecondaryCurrencyCd",
            OfficeCd = "OfficeCd",
            AgencyEmail = "AgencyEmail",
            AgencyWebAddress = "AgencyWebAddress",
            PromoAdInd = "PromoAdInd",
            VatId = "VatId",
            SelfBillInd = "SelfBillInd",
            PreferredCommunicationCd = "PreferredCommunicationCd",
            PreferredLanguageDesc = "PreferredLanguageDesc",
            NactaNum = "NactaNum",
            ActiveInd = "ActiveInd",
            BdmCd = "BdmCd",
            SendCustInvInd = "SendCustInvInd",
            CreditAgtInd = "CreditAgtInd",
            AgentNum = "AgentNum",
            PinClubInd = "PinClubInd",
            FinHoldInd = "FinHoldInd",
            L7daysNum = "L7daysNum",
            Option1DueDaysQty = "Option1DueDaysQty",
            Option2DueDaysQty = "Option2DueDaysQty",
            AutoCxlInd = "AutoCxlInd",
            ConsortiumAddedDt = "ConsortiumAddedDt",
            MasterAgencyInd = "MasterAgencyInd",
            OwnerCd = "OwnerCd",
            AutoEnvoInd = "AutoEnvoInd",
            OverVacSummInd = "OverVacSummInd",
            VacSummEmailDesc = "VacSummEmailDesc",
            TaxPayer1099Name = "TaxPayer1099Name",
            AgentLinkDesc = "AgentLinkDesc",
            AllowBankInd = "AllowBankInd",
            BankAccountBalAmt = "BankAccountBalAmt",
            BankAcct2Amt = "BankAcct2Amt",
            PaymentViaWireInd = "PaymentViaWireInd",
            ConsortiumRegionCd = "ConsortiumRegionCd",
            ConsortRgnNum = "ConsortRgnNum",
            ConsortiumRegionAddedDt = "ConsortiumRegionAddedDt",
            RequiredSecondaryAgentInd = "RequiredSecondaryAgentInd",
            OverrideFinalDaysInd = "OverrideFinalDaysInd",
            FinalDaysQty = "FinalDaysQty",
            OverrideOption1DaysInd = "OverrideOption1DaysInd",
            OverrideOption2DaysInd = "OverrideOption2DaysInd",
            FirstBookingDt = "FirstBookingDt",
            AgencyCreateDt = "AgencyCreateDt",
            BdmRepCd = "BdmRepCd",
            SsrRepCd = "SsrRepCd",
            NvsKeyAcctInd = "NvsKeyAcctInd",
            LastUpdated = "LastUpdated",
            Key1 = "Key1",
            SiblingId = "SiblingId",
            AgencyCdName = "AgencyCdName"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace AgencyService {
        const baseUrl = "PCHODSNVS/Agency";
        function Create(request: Serenity.SaveRequest<AgencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/Agency/Create",
            Update = "PCHODSNVS/Agency/Update",
            Delete = "PCHODSNVS/Agency/Delete",
            Retrieve = "PCHODSNVS/Agency/Retrieve",
            List = "PCHODSNVS/Agency/List"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface ConsortiumExceptionListForm {
        CompanyCd: SelectPCHCompanyEditor;
        NewItemType: Serenity.LookupEditor;
        NewItemName: Serenity.StringEditor;
        ItemType: Serenity.LookupEditor;
        ItemCd: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        ExcludeInd: Serenity.BooleanEditor;
        CombineInd: Serenity.BooleanEditor;
        LoadDt: Serenity.DateEditor;
    }
    class ConsortiumExceptionListForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface ConsortiumExceptionListRow {
        ConsortiumExceptionListTk?: number;
        CompanyCd?: string;
        NewItemType?: string;
        NewItemName?: string;
        ItemType?: string;
        ItemCd?: string;
        ItemName?: string;
        ExcludeInd?: boolean;
        CombineInd?: boolean;
        LoadDt?: string;
        NewItemTypeTypeTk?: number;
        ItemTypeTypeTk?: number;
    }
    namespace ConsortiumExceptionListRow {
        const idProperty = "ConsortiumExceptionListTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.ConsortiumExceptionList";
        const enum Fields {
            ConsortiumExceptionListTk = "ConsortiumExceptionListTk",
            CompanyCd = "CompanyCd",
            NewItemType = "NewItemType",
            NewItemName = "NewItemName",
            ItemType = "ItemType",
            ItemCd = "ItemCd",
            ItemName = "ItemName",
            ExcludeInd = "ExcludeInd",
            CombineInd = "CombineInd",
            LoadDt = "LoadDt",
            NewItemTypeTypeTk = "NewItemTypeTypeTk",
            ItemTypeTypeTk = "ItemTypeTypeTk"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace ConsortiumExceptionListService {
        const baseUrl = "PCHODSNVS/ConsortiumExceptionList";
        function Create(request: Serenity.SaveRequest<ConsortiumExceptionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConsortiumExceptionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsortiumExceptionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsortiumExceptionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/ConsortiumExceptionList/Create",
            Update = "PCHODSNVS/ConsortiumExceptionList/Update",
            Delete = "PCHODSNVS/ConsortiumExceptionList/Delete",
            Retrieve = "PCHODSNVS/ConsortiumExceptionList/Retrieve",
            List = "PCHODSNVS/ConsortiumExceptionList/List"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    interface GetCruiseSegmentRow {
        CruiseSegmentCd?: string;
        ShipCd?: string;
        SegmentMarketName?: string;
    }
    namespace GetCruiseSegmentRow {
        const idProperty = "CruiseSegmentCd";
        const nameProperty = "CruiseSegmentCd";
        const localTextPrefix = "PCHODSNVS.GetCruiseSegment";
        const lookupKey = "PCHODSNVS.GetSegment";
        function getLookup(): Q.Lookup<GetCruiseSegmentRow>;
        const enum Fields {
            CruiseSegmentCd = "CruiseSegmentCd",
            ShipCd = "ShipCd",
            SegmentMarketName = "SegmentMarketName"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace GetCruiseSegmentService {
        const baseUrl = "PCHODSNVS/GetCruiseSegment";
        function Create(request: Serenity.SaveRequest<GetCruiseSegmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GetCruiseSegmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GetCruiseSegmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GetCruiseSegmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/GetCruiseSegment/Create",
            Update = "PCHODSNVS/GetCruiseSegment/Update",
            Delete = "PCHODSNVS/GetCruiseSegment/Delete",
            Retrieve = "PCHODSNVS/GetCruiseSegment/Retrieve",
            List = "PCHODSNVS/GetCruiseSegment/List"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface GsaDistributionListForm {
        CompanyCd: SelectPCHCompanyEditor;
        AgencyCd: Serenity.LookupEditor;
        AccountName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        LoadDt: Serenity.DateEditor;
    }
    class GsaDistributionListForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface GsaDistributionListRow {
        GsaDistributionListTk?: number;
        CompanyCd?: string;
        AgencyCd?: string;
        AccountName?: string;
        ContactName?: string;
        Email?: string;
        LoadDt?: string;
    }
    namespace GsaDistributionListRow {
        const idProperty = "GsaDistributionListTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.GsaDistributionList";
        const enum Fields {
            GsaDistributionListTk = "GsaDistributionListTk",
            CompanyCd = "CompanyCd",
            AgencyCd = "AgencyCd",
            AccountName = "AccountName",
            ContactName = "ContactName",
            Email = "Email",
            LoadDt = "LoadDt"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace GsaDistributionListService {
        const baseUrl = "PCHODSNVS/GsaDistributionList";
        function Create(request: Serenity.SaveRequest<GsaDistributionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GsaDistributionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GsaDistributionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GsaDistributionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/GsaDistributionList/Create",
            Update = "PCHODSNVS/GsaDistributionList/Update",
            Delete = "PCHODSNVS/GsaDistributionList/Delete",
            Retrieve = "PCHODSNVS/GsaDistributionList/Retrieve",
            List = "PCHODSNVS/GsaDistributionList/List"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    interface ItemTypeRow {
        TypeTk?: number;
        Type?: string;
    }
    namespace ItemTypeRow {
        const idProperty = "Type";
        const nameProperty = "Type";
        const localTextPrefix = "PCHODSNVS.ItemType";
        const lookupKey = "PCHODSNVS.Item_Type";
        function getLookup(): Q.Lookup<ItemTypeRow>;
        const enum Fields {
            TypeTk = "TypeTk",
            Type = "Type"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace ItemTypeService {
        const baseUrl = "PCHODSNVS/ItemType";
        function Create(request: Serenity.SaveRequest<ItemTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/ItemType/Create",
            Update = "PCHODSNVS/ItemType/Update",
            Delete = "PCHODSNVS/ItemType/Delete",
            Retrieve = "PCHODSNVS/ItemType/Retrieve",
            List = "PCHODSNVS/ItemType/List"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    interface KeyAcctTargetExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class KeyAcctTargetExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface NtrBudgetByChannelExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class NtrBudgetByChannelExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrBudgetByChannelForm {
        CompanyCd: SelectPCHCompanyEditor;
        AccountingYear: Serenity.IntegerEditor;
        ChannelSummDesc: Serenity.StringEditor;
        ChannelDesc: Serenity.StringEditor;
        NtrBudget: Serenity.DecimalEditor;
        PdsBudgetTotal: Serenity.DecimalEditor;
        NpdBudget: Serenity.DecimalEditor;
    }
    class NtrBudgetByChannelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrBudgetByChannelRow {
        CompanyCd?: string;
        AccountingYear?: number;
        ChannelSummDesc?: string;
        ChannelDesc?: string;
        NtrBudget?: number;
        PdsBudgetTotal?: number;
        NpdBudget?: number;
        BudgetbychannelTk?: number;
    }
    namespace NtrBudgetByChannelRow {
        const idProperty = "BudgetbychannelTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.NtrBudgetByChannel";
        const enum Fields {
            CompanyCd = "CompanyCd",
            AccountingYear = "AccountingYear",
            ChannelSummDesc = "ChannelSummDesc",
            ChannelDesc = "ChannelDesc",
            NtrBudget = "NtrBudget",
            PdsBudgetTotal = "PdsBudgetTotal",
            NpdBudget = "NpdBudget",
            BudgetbychannelTk = "BudgetbychannelTk"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace NtrBudgetByChannelService {
        const baseUrl = "PCHODSNVS/NtrBudgetByChannel";
        function Create(request: Serenity.SaveRequest<NtrBudgetByChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NtrBudgetByChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrBudgetByChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrBudgetByChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/NtrBudgetByChannel/Create",
            Update = "PCHODSNVS/NtrBudgetByChannel/Update",
            Delete = "PCHODSNVS/NtrBudgetByChannel/Delete",
            Retrieve = "PCHODSNVS/NtrBudgetByChannel/Retrieve",
            List = "PCHODSNVS/NtrBudgetByChannel/List",
            ExcelImport = "PCHODSNVS/NtrBudgetByChannel/ExcelImport"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface NtrBudgetExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class NtrBudgetExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrBudgetForm {
        CompanyCd: SelectPCHCompanyEditor;
        AccountPeriodNum: Serenity.StringEditor;
        NtrBudget: Serenity.DecimalEditor;
        PdsBudgetTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        NtrFinancialBudget: Serenity.DecimalEditor;
    }
    class NtrBudgetForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrBudgetRow {
        CompanyCd?: string;
        AccountPeriodNum?: string;
        NtrBudget?: number;
        PdsBudgetTotal?: number;
        ApcdFinal?: number;
        NtrFinancialBudget?: number;
        BudgetTk?: number;
    }
    namespace NtrBudgetRow {
        const idProperty = "BudgetTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.NtrBudget";
        const enum Fields {
            CompanyCd = "CompanyCd",
            AccountPeriodNum = "AccountPeriodNum",
            NtrBudget = "NtrBudget",
            PdsBudgetTotal = "PdsBudgetTotal",
            ApcdFinal = "ApcdFinal",
            NtrFinancialBudget = "NtrFinancialBudget",
            BudgetTk = "BudgetTk"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace NtrBudgetService {
        const baseUrl = "PCHODSNVS/NtrBudget";
        function Create(request: Serenity.SaveRequest<NtrBudgetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NtrBudgetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrBudgetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrBudgetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/NtrBudget/Create",
            Update = "PCHODSNVS/NtrBudget/Update",
            Delete = "PCHODSNVS/NtrBudget/Delete",
            Retrieve = "PCHODSNVS/NtrBudget/Retrieve",
            List = "PCHODSNVS/NtrBudget/List",
            ExcelImport = "PCHODSNVS/NtrBudget/ExcelImport"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface NtrFcstExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class NtrFcstExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrFcstForm {
        CompanyCd: SelectPCHCompanyEditor;
        AccountPeriodNum: Serenity.StringEditor;
        NtrFcst: Serenity.DecimalEditor;
        PdsFcstTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        NtrFinancialBudget: Serenity.DecimalEditor;
    }
    class NtrFcstForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrFcstRow {
        CompanyCd?: string;
        AccountPeriodNum?: string;
        NtrFcst?: number;
        PdsFcstTotal?: number;
        ApcdFinal?: number;
        NtrFinancialBudget?: number;
        FcstTk?: number;
    }
    namespace NtrFcstRow {
        const idProperty = "FcstTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.NtrFcst";
        const enum Fields {
            CompanyCd = "CompanyCd",
            AccountPeriodNum = "AccountPeriodNum",
            NtrFcst = "NtrFcst",
            PdsFcstTotal = "PdsFcstTotal",
            ApcdFinal = "ApcdFinal",
            NtrFinancialBudget = "NtrFinancialBudget",
            FcstTk = "FcstTk"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace NtrFcstService {
        const baseUrl = "PCHODSNVS/NtrFcst";
        function Create(request: Serenity.SaveRequest<NtrFcstRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NtrFcstRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrFcstRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrFcstRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/NtrFcst/Create",
            Update = "PCHODSNVS/NtrFcst/Update",
            Delete = "PCHODSNVS/NtrFcst/Delete",
            Retrieve = "PCHODSNVS/NtrFcst/Retrieve",
            List = "PCHODSNVS/NtrFcst/List",
            ExcelImport = "PCHODSNVS/NtrFcst/ExcelImport"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface NtrIntlDatelineCruisesForm {
        CompanyCd: SelectPCHCompanyEditor;
        CruiseSegmentCd: Serenity.LookupEditor;
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
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface NtrPastMonthsActualExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class NtrPastMonthsActualExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrPastMonthsActualForm {
        CompanyCd: SelectPCHCompanyEditor;
        YearMonth: Serenity.StringEditor;
        NtrFinal: Serenity.DecimalEditor;
        CxRev: Serenity.DecimalEditor;
        PdsFinalTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        BookedNumOfCabins: Serenity.DecimalEditor;
        AvailableNumOfCabins: Serenity.DecimalEditor;
        StlyBookedNumOfCabins: Serenity.DecimalEditor;
        StlyAvailableNumOfCabins: Serenity.DecimalEditor;
    }
    class NtrPastMonthsActualForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrPastMonthsActualRow {
        CompanyCd?: string;
        YearMonth?: string;
        NtrFinal?: number;
        CxRev?: number;
        PdsFinalTotal?: number;
        ApcdFinal?: number;
        BookedNumOfCabins?: number;
        AvailableNumOfCabins?: number;
        StlyBookedNumOfCabins?: number;
        StlyAvailableNumOfCabins?: number;
        PastmonthactualTk?: number;
    }
    namespace NtrPastMonthsActualRow {
        const idProperty = "PastmonthactualTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.NtrPastMonthsActual";
        const enum Fields {
            CompanyCd = "CompanyCd",
            YearMonth = "YearMonth",
            NtrFinal = "NtrFinal",
            CxRev = "CxRev",
            PdsFinalTotal = "PdsFinalTotal",
            ApcdFinal = "ApcdFinal",
            BookedNumOfCabins = "BookedNumOfCabins",
            AvailableNumOfCabins = "AvailableNumOfCabins",
            StlyBookedNumOfCabins = "StlyBookedNumOfCabins",
            StlyAvailableNumOfCabins = "StlyAvailableNumOfCabins",
            PastmonthactualTk = "PastmonthactualTk"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace NtrPastMonthsActualService {
        const baseUrl = "PCHODSNVS/NtrPastMonthsActual";
        function Create(request: Serenity.SaveRequest<NtrPastMonthsActualRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NtrPastMonthsActualRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrPastMonthsActualRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrPastMonthsActualRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/NtrPastMonthsActual/Create",
            Update = "PCHODSNVS/NtrPastMonthsActual/Update",
            Delete = "PCHODSNVS/NtrPastMonthsActual/Delete",
            Retrieve = "PCHODSNVS/NtrPastMonthsActual/Retrieve",
            List = "PCHODSNVS/NtrPastMonthsActual/List",
            ExcelImport = "PCHODSNVS/NtrPastMonthsActual/ExcelImport"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface NtrRptCommentForm {
        CompanyCd: SelectPCHCompanyEditor;
        ReportDate: Serenity.DateEditor;
        Comment: Serenity.TextAreaEditor;
        AccountPeriodNum: Serenity.StringEditor;
    }
    class NtrRptCommentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface NtrRptCommentRow {
        CommentTk?: number;
        CompanyCd?: string;
        ReportDate?: string;
        Comment?: string;
        AccountPeriodNum?: string;
    }
    namespace NtrRptCommentRow {
        const idProperty = "CommentTk";
        const nameProperty = "CompanyCd";
        const localTextPrefix = "PCHODSNVS.NtrRptComment";
        const enum Fields {
            CommentTk = "CommentTk",
            CompanyCd = "CompanyCd",
            ReportDate = "ReportDate",
            Comment = "Comment",
            AccountPeriodNum = "AccountPeriodNum"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace NtrRptCommentService {
        const baseUrl = "PCHODSNVS/NtrRptComment";
        function Create(request: Serenity.SaveRequest<NtrRptCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NtrRptCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrRptCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrRptCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/NtrRptComment/Create",
            Update = "PCHODSNVS/NtrRptComment/Update",
            Delete = "PCHODSNVS/NtrRptComment/Delete",
            Retrieve = "PCHODSNVS/NtrRptComment/Retrieve",
            List = "PCHODSNVS/NtrRptComment/List"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface RevenueAdhocManagementForm {
        DatabaseId: Serenity.StringEditor;
        CubeId: Serenity.StringEditor;
        CompanyCd: SelectPCHCompanyEditor;
        AdhocDate: Serenity.DateEditor;
        AdhocDateTk: Serenity.IntegerEditor;
        SqlJobName: Serenity.StringEditor;
        LastProcessedDateTime: Serenity.DateEditor;
    }
    class RevenueAdhocManagementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface RevenueAdhocManagementRow {
        Key?: number;
        DatabaseId?: string;
        CubeId?: string;
        AdhocDate?: string;
        AdhocDateTk?: number;
        LastUpdatedBy?: string;
        SqlJobName?: string;
        LastProcessedDateTime?: string;
        CompanyCd?: string;
    }
    namespace RevenueAdhocManagementRow {
        const idProperty = "Key";
        const nameProperty = "DatabaseId";
        const localTextPrefix = "PCHODSNVS.RevenueAdhocManagement";
        const enum Fields {
            Key = "Key",
            DatabaseId = "DatabaseId",
            CubeId = "CubeId",
            AdhocDate = "AdhocDate",
            AdhocDateTk = "AdhocDateTk",
            LastUpdatedBy = "LastUpdatedBy",
            SqlJobName = "SqlJobName",
            LastProcessedDateTime = "LastProcessedDateTime",
            CompanyCd = "CompanyCd"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace RevenueAdhocManagementService {
        const baseUrl = "PCHODSNVS/RevenueAdhocManagement";
        function Create(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RevenueAdhocManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RevenueAdhocManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExecuteSP(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/RevenueAdhocManagement/Create",
            Update = "PCHODSNVS/RevenueAdhocManagement/Update",
            Delete = "PCHODSNVS/RevenueAdhocManagement/Delete",
            Retrieve = "PCHODSNVS/RevenueAdhocManagement/Retrieve",
            List = "PCHODSNVS/RevenueAdhocManagement/List",
            ExecuteSP = "PCHODSNVS/RevenueAdhocManagement/ExecuteSP"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface SuppKeyAcctTargetForm {
        CompanyCd: SelectPCHCompanyEditor;
        AgencyCd: Serenity.LookupEditor;
        Year: Serenity.IntegerEditor;
        KeyAcctLink: Serenity.StringEditor;
        AccountType: Serenity.StringEditor;
        LoadDt: Serenity.DateEditor;
        CcfTargetQ1: Serenity.DecimalEditor;
        PrctTargetQ1: Serenity.DecimalEditor;
        CcfTargetQ12: Serenity.DecimalEditor;
        PrctTargetQ12: Serenity.DecimalEditor;
        CcfTargetQ13: Serenity.DecimalEditor;
        PrctTargetQ13: Serenity.DecimalEditor;
        CcfTargetQ14: Serenity.DecimalEditor;
        PrctTargetQ14: Serenity.DecimalEditor;
        CcfTargetQ15: Serenity.DecimalEditor;
        PrctTargetQ15: Serenity.DecimalEditor;
        CcfTargetQ2: Serenity.DecimalEditor;
        PrctTargetQ2: Serenity.DecimalEditor;
        CcfTargetQ22: Serenity.DecimalEditor;
        PrctTargetQ22: Serenity.DecimalEditor;
        CcfTargetQ23: Serenity.DecimalEditor;
        PrctTargetQ23: Serenity.DecimalEditor;
        CcfTargetQ24: Serenity.DecimalEditor;
        PrctTargetQ24: Serenity.DecimalEditor;
        CcfTargetQ25: Serenity.DecimalEditor;
        PrctTargetQ25: Serenity.DecimalEditor;
        CcfTargetQ3: Serenity.DecimalEditor;
        PrctTargetQ3: Serenity.DecimalEditor;
        CcfTargetQ32: Serenity.DecimalEditor;
        PrctTargetQ32: Serenity.DecimalEditor;
        CcfTargetQ33: Serenity.DecimalEditor;
        PrctTargetQ33: Serenity.DecimalEditor;
        CcfTargetQ34: Serenity.DecimalEditor;
        PrctTargetQ34: Serenity.DecimalEditor;
        CcfTargetQ35: Serenity.DecimalEditor;
        PrctTargetQ35: Serenity.DecimalEditor;
        CcfTargetQ4: Serenity.DecimalEditor;
        PrctTargetQ4: Serenity.DecimalEditor;
        CcfTargetQ42: Serenity.DecimalEditor;
        PrctTargetQ42: Serenity.DecimalEditor;
        CcfTargetQ43: Serenity.DecimalEditor;
        PrctTargetQ43: Serenity.DecimalEditor;
        CcfTargetQ44: Serenity.DecimalEditor;
        PrctTargetQ44: Serenity.DecimalEditor;
        CcfTargetQ45: Serenity.DecimalEditor;
        PrctTargetQ45: Serenity.DecimalEditor;
        CcfTargetFy1: Serenity.DecimalEditor;
        CcfTargetFy2: Serenity.DecimalEditor;
        CcfTargetFy3: Serenity.DecimalEditor;
        CcfTargetFy4: Serenity.DecimalEditor;
        CcfTargetFy5: Serenity.DecimalEditor;
    }
    class SuppKeyAcctTargetForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface SuppKeyAcctTargetRow {
        KeyAcctTk?: number;
        CompanyCd?: number;
        AgencyCd?: string;
        Year?: number;
        KeyAcctLink?: string;
        AccountType?: string;
        CcfTargetQ1?: number;
        CcfTargetQ12?: number;
        CcfTargetQ13?: number;
        CcfTargetQ14?: number;
        CcfTargetQ15?: number;
        CcfTargetQ2?: number;
        CcfTargetQ22?: number;
        CcfTargetQ23?: number;
        CcfTargetQ24?: number;
        CcfTargetQ25?: number;
        CcfTargetQ3?: number;
        CcfTargetQ32?: number;
        CcfTargetQ33?: number;
        CcfTargetQ34?: number;
        CcfTargetQ35?: number;
        CcfTargetQ4?: number;
        CcfTargetQ42?: number;
        CcfTargetQ43?: number;
        CcfTargetQ44?: number;
        CcfTargetQ45?: number;
        PrctTargetQ1?: number;
        PrctTargetQ12?: number;
        PrctTargetQ13?: number;
        PrctTargetQ14?: number;
        PrctTargetQ15?: number;
        PrctTargetQ2?: number;
        PrctTargetQ22?: number;
        PrctTargetQ23?: number;
        PrctTargetQ24?: number;
        PrctTargetQ25?: number;
        PrctTargetQ3?: number;
        PrctTargetQ32?: number;
        PrctTargetQ33?: number;
        PrctTargetQ34?: number;
        PrctTargetQ35?: number;
        PrctTargetQ4?: number;
        PrctTargetQ42?: number;
        PrctTargetQ43?: number;
        PrctTargetQ44?: number;
        PrctTargetQ45?: number;
        LoadDt?: string;
        CcfTargetFy1?: number;
        CcfTargetFy2?: number;
        CcfTargetFy3?: number;
        CcfTargetFy4?: number;
        CcfTargetFy5?: number;
    }
    namespace SuppKeyAcctTargetRow {
        const idProperty = "KeyAcctTk";
        const nameProperty = "KeyAcctLink";
        const localTextPrefix = "PCHODSNVS.SuppKeyAcctTarget";
        const enum Fields {
            KeyAcctTk = "KeyAcctTk",
            CompanyCd = "CompanyCd",
            AgencyCd = "AgencyCd",
            Year = "Year",
            KeyAcctLink = "KeyAcctLink",
            AccountType = "AccountType",
            CcfTargetQ1 = "CcfTargetQ1",
            CcfTargetQ12 = "CcfTargetQ12",
            CcfTargetQ13 = "CcfTargetQ13",
            CcfTargetQ14 = "CcfTargetQ14",
            CcfTargetQ15 = "CcfTargetQ15",
            CcfTargetQ2 = "CcfTargetQ2",
            CcfTargetQ22 = "CcfTargetQ22",
            CcfTargetQ23 = "CcfTargetQ23",
            CcfTargetQ24 = "CcfTargetQ24",
            CcfTargetQ25 = "CcfTargetQ25",
            CcfTargetQ3 = "CcfTargetQ3",
            CcfTargetQ32 = "CcfTargetQ32",
            CcfTargetQ33 = "CcfTargetQ33",
            CcfTargetQ34 = "CcfTargetQ34",
            CcfTargetQ35 = "CcfTargetQ35",
            CcfTargetQ4 = "CcfTargetQ4",
            CcfTargetQ42 = "CcfTargetQ42",
            CcfTargetQ43 = "CcfTargetQ43",
            CcfTargetQ44 = "CcfTargetQ44",
            CcfTargetQ45 = "CcfTargetQ45",
            PrctTargetQ1 = "PrctTargetQ1",
            PrctTargetQ12 = "PrctTargetQ12",
            PrctTargetQ13 = "PrctTargetQ13",
            PrctTargetQ14 = "PrctTargetQ14",
            PrctTargetQ15 = "PrctTargetQ15",
            PrctTargetQ2 = "PrctTargetQ2",
            PrctTargetQ22 = "PrctTargetQ22",
            PrctTargetQ23 = "PrctTargetQ23",
            PrctTargetQ24 = "PrctTargetQ24",
            PrctTargetQ25 = "PrctTargetQ25",
            PrctTargetQ3 = "PrctTargetQ3",
            PrctTargetQ32 = "PrctTargetQ32",
            PrctTargetQ33 = "PrctTargetQ33",
            PrctTargetQ34 = "PrctTargetQ34",
            PrctTargetQ35 = "PrctTargetQ35",
            PrctTargetQ4 = "PrctTargetQ4",
            PrctTargetQ42 = "PrctTargetQ42",
            PrctTargetQ43 = "PrctTargetQ43",
            PrctTargetQ44 = "PrctTargetQ44",
            PrctTargetQ45 = "PrctTargetQ45",
            LoadDt = "LoadDt",
            CcfTargetFy1 = "CcfTargetFy1",
            CcfTargetFy2 = "CcfTargetFy2",
            CcfTargetFy3 = "CcfTargetFy3",
            CcfTargetFy4 = "CcfTargetFy4",
            CcfTargetFy5 = "CcfTargetFy5"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace SuppKeyAcctTargetService {
        const baseUrl = "PCHODSNVS/SuppKeyAcctTarget";
        function Create(request: Serenity.SaveRequest<SuppKeyAcctTargetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuppKeyAcctTargetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppKeyAcctTargetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppKeyAcctTargetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport2(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/SuppKeyAcctTarget/Create",
            Update = "PCHODSNVS/SuppKeyAcctTarget/Update",
            Delete = "PCHODSNVS/SuppKeyAcctTarget/Delete",
            Retrieve = "PCHODSNVS/SuppKeyAcctTarget/Retrieve",
            List = "PCHODSNVS/SuppKeyAcctTarget/List",
            ExcelImport = "PCHODSNVS/SuppKeyAcctTarget/ExcelImport",
            ExcelImport2 = "PCHODSNVS/SuppKeyAcctTarget/ExcelImport2"
        }
    }
}
declare namespace DAP.PCHODSNVS {
}
declare namespace DAP.PCHODSNVS {
    interface TransferEstimateOciAmtExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class TransferEstimateOciAmtExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface TransferEstimateOciAmtForm {
        CruiseSegmentCd: Serenity.LookupEditor;
        SegmentMarketName: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        TransferCostPerPax: Serenity.DecimalEditor;
        LoadDt: Serenity.DateEditor;
    }
    class TransferEstimateOciAmtForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.PCHODSNVS {
    interface TransferEstimateOciAmtRow {
        SegmentMarketName?: string;
        CruiseSegmentCd?: string;
        ShipCd?: string;
        TransferCostPerPax?: number;
        LoadDt?: string;
        TransferId?: number;
    }
    namespace TransferEstimateOciAmtRow {
        const idProperty = "TransferId";
        const nameProperty = "SegmentMarketName";
        const localTextPrefix = "PCHODSNVS.TransferEstimateOciAmt";
        const enum Fields {
            SegmentMarketName = "SegmentMarketName",
            CruiseSegmentCd = "CruiseSegmentCd",
            ShipCd = "ShipCd",
            TransferCostPerPax = "TransferCostPerPax",
            LoadDt = "LoadDt",
            TransferId = "TransferId"
        }
    }
}
declare namespace DAP.PCHODSNVS {
    namespace TransferEstimateOciAmtService {
        const baseUrl = "PCHODSNVS/TransferEstimateOciAmt";
        function Create(request: Serenity.SaveRequest<TransferEstimateOciAmtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransferEstimateOciAmtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferEstimateOciAmtRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferEstimateOciAmtRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PCHODSNVS/TransferEstimateOciAmt/Create",
            Update = "PCHODSNVS/TransferEstimateOciAmt/Update",
            Delete = "PCHODSNVS/TransferEstimateOciAmt/Delete",
            Retrieve = "PCHODSNVS/TransferEstimateOciAmt/Retrieve",
            List = "PCHODSNVS/TransferEstimateOciAmt/List",
            ExcelImport = "PCHODSNVS/TransferEstimateOciAmt/ExcelImport"
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
        Lset: Serenity.DateTimeEditor;
        Cet: Serenity.DateTimeEditor;
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
}
declare namespace DAP.SSISConfig {
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
        Lset: Serenity.DateTimeEditor;
        Cet: Serenity.DateTimeEditor;
        LseIndex: Serenity.IntegerEditor;
        CeIndex: Serenity.IntegerEditor;
    }
    class MicrosDataFlowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
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
            Cet = "Cet",
            LseIndex = "LseIndex",
            CeIndex = "CeIndex"
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
        const enum Methods {
            Create = "SSISConfig/MicrosDataFlow/Create",
            Update = "SSISConfig/MicrosDataFlow/Update",
            Delete = "SSISConfig/MicrosDataFlow/Delete",
            Retrieve = "SSISConfig/MicrosDataFlow/Retrieve",
            List = "SSISConfig/MicrosDataFlow/List"
        }
    }
}
declare namespace DAP.SSISConfig {
}
declare namespace DAP.SSISConfig {
    interface NclhShipForm {
        ShipAbbreviation: Serenity.StringEditor;
        ShipFullName: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        DepartmentCd: Serenity.StringEditor;
        LocationCd: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        ShipTk: Serenity.IntegerEditor;
        HasMerged: Serenity.BooleanEditor;
    }
    class NclhShipForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DAP.SSISConfig {
    interface NclhShipRow {
        ShipId?: number;
        ShipAbbreviation?: string;
        ShipFullName?: string;
        CompanyCd?: string;
        DepartmentCd?: string;
        LocationCd?: string;
        IsActive?: boolean;
        ShipTk?: number;
        HasMerged?: boolean;
    }
    namespace NclhShipRow {
        const idProperty = "ShipId";
        const nameProperty = "ShipAbbreviation";
        const localTextPrefix = "SSISConfig.NclhShip";
        const enum Fields {
            ShipId = "ShipId",
            ShipAbbreviation = "ShipAbbreviation",
            ShipFullName = "ShipFullName",
            CompanyCd = "CompanyCd",
            DepartmentCd = "DepartmentCd",
            LocationCd = "LocationCd",
            IsActive = "IsActive",
            ShipTk = "ShipTk",
            HasMerged = "HasMerged"
        }
    }
}
declare namespace DAP.SSISConfig {
    namespace NclhShipService {
        const baseUrl = "SSISConfig/NclhShip";
        function Create(request: Serenity.SaveRequest<NclhShipRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NclhShipRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NclhShipRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NclhShipRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SSISConfig/NclhShip/Create",
            Update = "SSISConfig/NclhShip/Update",
            Delete = "SSISConfig/NclhShip/Delete",
            Retrieve = "SSISConfig/NclhShip/Retrieve",
            List = "SSISConfig/NclhShip/List"
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
declare namespace DAP.Avaya {
    class SkillSplitMappingDialog extends Serenity.EntityDialog<SkillSplitMappingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SkillSplitMappingForm;
    }
}
declare namespace DAP.Avaya {
    class SkillSplitMappingGrid extends Serenity.EntityGrid<SkillSplitMappingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SkillSplitMappingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
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
    class AgencySnapshotRequestDialog extends Serenity.EntityDialog<AgencySnapshotRequestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AgencySnapshotRequestForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace DAP.DWSupport {
    class AgencySnapshotRequestGrid extends Serenity.EntityGrid<AgencySnapshotRequestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AgencySnapshotRequestDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.DWSupport {
    class AirCostAdjSuppDialog extends Serenity.EntityDialog<AirCostAdjSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AirCostAdjSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class AirCostAdjSuppGrid extends Serenity.EntityGrid<AirCostAdjSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AirCostAdjSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class AmenitiesSuppDialog extends Serenity.EntityDialog<AmenitiesSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AmenitiesSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class AmenitiesSuppGrid extends Serenity.EntityGrid<AmenitiesSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AmenitiesSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class AmenityDetailsSuppDialog extends Serenity.EntityDialog<AmenityDetailsSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AmenityDetailsSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class AmenityDetailDialog extends AmenityDetailsSuppDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace DAP.DWSupport {
    class AmenityDetailsSuppGrid extends Serenity.EntityGrid<AmenityDetailsSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AmenityDetailsSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected addButtonClick(): void;
    }
}
declare namespace DAP.DWSupport {
    class AmenityDetailGrid extends AmenityDetailsSuppGrid {
        protected getDialogType(): typeof AmenityDetailDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _amenityID;
        amenityID: number;
    }
}
declare namespace DAP.DWSupport {
    class SplitDetailGrid extends DWSupport.AmenityDetailGrid {
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace DAP.DWSupport {
    class SplitMasterDetailPane extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class SplitMasterGrid extends AmenitiesSuppGrid {
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.DWSupport {
    class CasinoSlotMasterDescSuppDialog extends Serenity.EntityDialog<CasinoSlotMasterDescSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CasinoSlotMasterDescSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class CasinoSlotMasterDescSuppGrid extends Serenity.EntityGrid<CasinoSlotMasterDescSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CasinoSlotMasterDescSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class CategoryMasterSuppDialog extends Serenity.EntityDialog<CategoryMasterSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryMasterSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class CategoryMasterSuppGrid extends Serenity.EntityGrid<CategoryMasterSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryMasterSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class CmiSuppDialog extends Serenity.EntityDialog<CmiSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CmiSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class CmiSuppGrid extends Serenity.EntityGrid<CmiSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CmiSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class CreditCardAdjSuppDialog extends Serenity.EntityDialog<CreditCardAdjSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CreditCardAdjSuppForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class CreditCardAdjSuppGrid extends Serenity.EntityGrid<CreditCardAdjSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CreditCardAdjSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class CruiseSegmentDaysOverrideDialog extends Serenity.EntityDialog<CruiseSegmentDaysOverrideRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CruiseSegmentDaysOverrideForm;
    }
}
declare namespace DAP.DWSupport {
    class CruiseSegmentDaysOverrideGrid extends Serenity.EntityGrid<CruiseSegmentDaysOverrideRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CruiseSegmentDaysOverrideDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class CurrencyExchangeRateSuppDialog extends Serenity.EntityDialog<CurrencyExchangeRateSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CurrencyExchangeRateSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class CurrencyExchangeRateSuppGrid extends Serenity.EntityGrid<CurrencyExchangeRateSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrencyExchangeRateSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class DimCruiseFlagsDialog extends Serenity.EntityDialog<DimCruiseFlagsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DimCruiseFlagsForm;
    }
}
declare namespace DAP.DWSupport {
    class DimCruiseFlagsGrid extends Serenity.EntityGrid<DimCruiseFlagsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DimCruiseFlagsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class DistrictMasterSuppDialog extends Serenity.EntityDialog<DistrictMasterSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DistrictMasterSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class DistrictMasterSuppGrid extends Serenity.EntityGrid<DistrictMasterSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistrictMasterSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createQuickFilters(): void;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.DWSupport {
    class ExchangeFixedRateDialog extends Serenity.EntityDialog<ExchangeFixedRateRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ExchangeFixedRateForm;
    }
}
declare namespace DAP.DWSupport {
    class ExchangeFixedRateGrid extends Serenity.EntityGrid<ExchangeFixedRateRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExchangeFixedRateDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class FinPlannedCapacitySuppDialog extends Serenity.EntityDialog<FinPlannedCapacitySuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FinPlannedCapacitySuppForm;
    }
}
declare namespace DAP.DWSupport {
    class FinPlannedCapacitySuppGrid extends Serenity.EntityGrid<FinPlannedCapacitySuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FinPlannedCapacitySuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
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
declare namespace DAP.DWSupport {
    class FullShipChartersSuppDialog extends Serenity.EntityDialog<FullShipChartersSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FullShipChartersSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class FullShipChartersSuppGrid extends Serenity.EntityGrid<FullShipChartersSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FullShipChartersSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class GTFCategoryEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class GtfSuppDialog extends Serenity.EntityDialog<GtfSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GtfSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class GtfSuppGrid extends Serenity.EntityGrid<GtfSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GtfSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class GuestPreventDepartureDialog extends Serenity.EntityDialog<GuestPreventDepartureRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GuestPreventDepartureForm;
    }
}
declare namespace DAP.DWSupport {
    class GuestPreventDepartureGrid extends Serenity.EntityGrid<GuestPreventDepartureRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GuestPreventDepartureDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace DAP.DWSupport {
    class ImportErrorLogDialog extends Serenity.EntityDialog<ImportErrorLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ImportErrorLogForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace DAP.DWSupport {
    class ImportErrorLogGrid extends Serenity.EntityGrid<ImportErrorLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportErrorLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class ImportErrorLogGridDialog extends Serenity.EntityDialog<ImportErrorLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ImportErrorLogForm;
        private aGrid;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class ImportErrorLogListGrid extends Serenity.EntityGrid<ImportErrorLogRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getDialogType(): typeof ImportErrorLogDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbar(): void;
        protected createQuickSearchInput(): void;
    }
}
declare namespace DAP.DWSupport {
    class InvoiceItemTypeSuppGrid extends Serenity.EntityGrid<InvoiceItemTypeSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceItemTypeSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _invoiceItemTypeCd;
        invoiceItemTypeCd: number;
    }
}
declare namespace DAP.DWSupport {
    class InvoiceItemTypeSplitDetailGrid extends DWSupport.InvoiceItemTypeSuppGrid {
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace DAP.DWSupport {
    class InvoiceItemTypeSplitMasterDetailPane extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class InvoiceItemTypeMasterSuppGrid extends Serenity.EntityGrid<InvoiceItemTypeMasterSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceItemTypeMasterSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class InvoiceItemTypeSplitMasterGrid extends InvoiceItemTypeMasterSuppGrid {
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace DAP.DWSupport {
    class InvoiceItemTypeMasterSuppDialog extends Serenity.EntityDialog<InvoiceItemTypeMasterSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: InvoiceItemTypeMasterSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class InvoiceItemTypeSuppDialog extends Serenity.EntityDialog<InvoiceItemTypeSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: InvoiceItemTypeSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class MinibarSetupSuppDialog extends Serenity.EntityDialog<MinibarSetupSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MinibarSetupSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class MinibarSetupSuppGrid extends Serenity.EntityGrid<MinibarSetupSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MinibarSetupSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class PortSubstitutionSuppDialog extends Serenity.EntityDialog<PortSubstitutionSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PortSubstitutionSuppForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class PortSubstitutionSuppGrid extends Serenity.EntityGrid<PortSubstitutionSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PortSubstitutionSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class ProductCodeSuppDialog extends Serenity.EntityDialog<ProductCodeSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductCodeSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class ProductCodeSuppGrid extends Serenity.EntityGrid<ProductCodeSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductCodeSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace DAP.DWSupport {
    class PsGlAccountSuppDialog extends Serenity.EntityDialog<PsGlAccountSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PsGlAccountSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class PsGlAccountSuppGrid extends Serenity.EntityGrid<PsGlAccountSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PsGlAccountSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
    }
}
declare namespace DAP.DWSupport {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class RevDetailFieldDialog extends Serenity.EntityDialog<RevDetailFieldRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RevDetailFieldForm;
    }
}
declare namespace DAP.DWSupport {
    class RevDetailFieldGrid extends Serenity.EntityGrid<RevDetailFieldRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RevDetailFieldDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class RollupProductCodesSuppDialog extends Serenity.EntityDialog<RollupProductCodesSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RollupProductCodesSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class RollupProductCodesSuppGrid extends Serenity.EntityGrid<RollupProductCodesSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RollupProductCodesSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class SailingExclusionSuppDialog extends Serenity.EntityDialog<SailingExclusionSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SailingExclusionSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class SailingExclusionSuppGrid extends Serenity.EntityGrid<SailingExclusionSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SailingExclusionSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class SailingMasterSuppDialog extends Serenity.EntityDialog<SailingMasterSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SailingMasterSuppForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class SailingMasterSuppExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.DWSupport {
    class SailingMasterSuppGrid extends Serenity.EntityGrid<SailingMasterSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SailingMasterSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<SailingMasterSuppRow>;
        private setSaveButtonState;
        private getEffectiveValue;
        private numericInputFormatter;
        private stringInputFormatter;
        private selectYNFormatter;
        private selectFormatter;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private saveClick;
        private showErrorLogClick;
    }
}
declare namespace DAP.DWSupport {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class SelectYNEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class SlProductCodeSuppDialog extends Serenity.EntityDialog<SlProductCodeSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SlProductCodeSuppForm;
    }
}
declare namespace DAP.DWSupport {
    class SlProductCodeSuppGrid extends Serenity.EntityGrid<SlProductCodeSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SlProductCodeSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class StlyDatesDialog extends Serenity.EntityDialog<StlyDatesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StlyDatesForm;
    }
}
declare namespace DAP.DWSupport {
    class StlyDatesGrid extends Serenity.EntityGrid<StlyDatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StlyDatesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class SurveyFilterExclusionSuppDialog extends Serenity.EntityDialog<SurveyFilterExclusionSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SurveyFilterExclusionSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class SurveyFilterExclusionSuppGrid extends Serenity.EntityGrid<SurveyFilterExclusionSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SurveyFilterExclusionSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.DWSupport {
    class TblStrategicPriceControlDialog extends Serenity.EntityDialog<TblStrategicPriceControlRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblStrategicPriceControlForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class TblStrategicPriceControlExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.DWSupport {
    class TblStrategicPriceControlGrid extends Serenity.EntityGrid<TblStrategicPriceControlRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblStrategicPriceControlDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class UpgradeAdvAdjSuppDialog extends Serenity.EntityDialog<UpgradeAdvAdjSuppRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UpgradeAdvAdjSuppForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.DWSupport {
    class UpgradeAdvAdjSuppGrid extends Serenity.EntityGrid<UpgradeAdvAdjSuppRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UpgradeAdvAdjSuppDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
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
declare namespace DAP.NCLHDSAR {
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
declare namespace DAP.NCLHDSAR {
    class MarketingRequestDialog extends Serenity.EntityDialog<MarketingRequestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MarketingRequestForm;
        protected updateTitle(): void;
        constructor();
        updateInterface(): void;
    }
}
declare namespace DAP.NCLHDSAR {
    class MarketingRequestExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        private index;
        constructor(i: number);
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.NCLHDSAR {
    class MarketingRequestGrid extends Serenity.EntityGrid<MarketingRequestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MarketingRequestDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
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
        protected updateInterface(): void;
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
    class DimCruiseDialog extends Serenity.EntityDialog<DimCruiseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DimCruiseForm;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHDW {
    class DimCruiseExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.PCHDW {
    class DimCruiseGrid extends Serenity.EntityGrid<DimCruiseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DimCruiseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
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
declare namespace DAP.PCHDW {
    class ScheduledJobDialog extends Serenity.EntityDialog<ScheduledJobRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ScheduledJobForm;
    }
}
declare namespace DAP.PCHDW {
    class ScheduledJobGrid extends Serenity.EntityGrid<ScheduledJobRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ScheduledJobDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHDW {
    class VwSqlJobListDialog extends Serenity.EntityDialog<VwSqlJobListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VwSqlJobListForm;
    }
}
declare namespace DAP.PCHDW {
    class VwSqlJobListGrid extends Serenity.EntityGrid<VwSqlJobListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VwSqlJobListDialog;
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
    class OutboundCommissionBkGoalDialog extends Serenity.EntityDialog<OutboundCommissionBkGoalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: OutboundCommissionBkGoalForm;
    }
}
declare namespace DAP.PCHODS {
    class OutboundCommissionBkGoalGrid extends Serenity.EntityGrid<OutboundCommissionBkGoalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutboundCommissionBkGoalDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
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
        private _CompanyID;
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
    class SelectComapanyAUDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        returnData: (dataList: string) => void;
        protected form: SelectCompanyAuForm;
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
    class SelectCompanyAUEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
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
        protected createSlickGrid(): Slick.Grid;
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
declare namespace DAP.PCHODS {
    class UarSrDirAboveListDialog extends Serenity.EntityDialog<UarSrDirAboveListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UarSrDirAboveListForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODS {
    class UarSrDirAboveListGrid extends Serenity.EntityGrid<UarSrDirAboveListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UarSrDirAboveListDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODS {
    class UarUnknownReviewerDialog extends Serenity.EntityDialog<UarUnknownReviewerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UarUnknownReviewerForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODS {
    class UarUnknownReviewerGrid extends Serenity.EntityGrid<UarUnknownReviewerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UarUnknownReviewerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class ConsortiumExceptionListDialog extends Serenity.EntityDialog<ConsortiumExceptionListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ConsortiumExceptionListForm;
    }
}
declare namespace DAP.PCHODSNVS {
    class ConsortiumExceptionListGrid extends Serenity.EntityGrid<ConsortiumExceptionListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsortiumExceptionListDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODSNVS {
    class GsaDistributionListDialog extends Serenity.EntityDialog<GsaDistributionListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GsaDistributionListForm;
    }
}
declare namespace DAP.PCHODSNVS {
    class GsaDistributionListGrid extends Serenity.EntityGrid<GsaDistributionListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GsaDistributionListDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODSNVS {
    class JobManagemetGrid extends Serenity.EntityGrid<DAP.PCHDW.VwSqlJobListRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getDialogType(): typeof PCHDW.VwSqlJobListDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODSNVS {
    /**
    * Our select editor with hardcoded values.
    *
    * When you define a new editor type, make sure you build
    * and transform templates for it to be available
    * in server side forms, e.g. [HardCodedValuesEditor]
    */
    class SelectPCHCompanyEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrBudgetDialog extends Serenity.EntityDialog<NtrBudgetRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NtrBudgetForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrBudgetExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrBudgetGrid extends Serenity.EntityGrid<NtrBudgetRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NtrBudgetDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrBudgetByChannelDialog extends Serenity.EntityDialog<NtrBudgetByChannelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NtrBudgetByChannelForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrBudgetByChannelExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrBudgetByChannelGrid extends Serenity.EntityGrid<NtrBudgetByChannelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NtrBudgetByChannelDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrFcstDialog extends Serenity.EntityDialog<NtrFcstRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NtrFcstForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrFcstExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrFcstGrid extends Serenity.EntityGrid<NtrFcstRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NtrFcstDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
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
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
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
declare namespace DAP.PCHODSNVS {
    class NtrPastMonthsActualDialog extends Serenity.EntityDialog<NtrPastMonthsActualRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NtrPastMonthsActualForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrPastMonthsActualExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrPastMonthsActualGrid extends Serenity.EntityGrid<NtrPastMonthsActualRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NtrPastMonthsActualDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrRptCommentDialog extends Serenity.EntityDialog<NtrRptCommentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NtrRptCommentForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
    }
}
declare namespace DAP.PCHODSNVS {
    class NtrRptCommentGrid extends Serenity.EntityGrid<NtrRptCommentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NtrRptCommentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DAP.PCHODSNVS {
    class RevenueAdhocManagementDialog extends Serenity.EntityDialog<RevenueAdhocManagementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RevenueAdhocManagementForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
        protected afterLoadEntity(): void;
    }
}
declare namespace DAP.PCHODSNVS {
    class RevenueAdhocManagementGrid extends Serenity.EntityGrid<RevenueAdhocManagementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RevenueAdhocManagementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace DAP.PCHODSNVS {
    class KeyAcctTargetExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class SuppKeyAcctTargetDialog extends Serenity.EntityDialog<SuppKeyAcctTargetRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SuppKeyAcctTargetForm;
    }
}
declare namespace DAP.PCHODSNVS {
    class SuppKeyAcctTargetGrid extends Serenity.EntityGrid<SuppKeyAcctTargetRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppKeyAcctTargetDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class TransferEstimateOciAmtDialog extends Serenity.EntityDialog<TransferEstimateOciAmtRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TransferEstimateOciAmtForm;
        constructor();
    }
}
declare namespace DAP.PCHODSNVS {
    class TransferEstimateOciAmtExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace DAP.PCHODSNVS {
    class TransferEstimateOciAmtGrid extends Serenity.EntityGrid<TransferEstimateOciAmtRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransferEstimateOciAmtDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
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
    class NclhShipDialog extends Serenity.EntityDialog<NclhShipRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NclhShipForm;
    }
}
declare namespace DAP.SSISConfig {
    class NclhShipGrid extends Serenity.EntityGrid<NclhShipRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NclhShipDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
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

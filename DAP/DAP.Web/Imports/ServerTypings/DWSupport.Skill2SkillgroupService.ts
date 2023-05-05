namespace DAP.DWSupport {
    export namespace Skill2SkillgroupService {
        export const baseUrl = 'DWSupport/Skill2Skillgroup';

        export declare function Create(request: Serenity.SaveRequest<Skill2SkillgroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<Skill2SkillgroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Skill2SkillgroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Skill2SkillgroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/Skill2Skillgroup/Create",
            Update = "DWSupport/Skill2Skillgroup/Update",
            Delete = "DWSupport/Skill2Skillgroup/Delete",
            Retrieve = "DWSupport/Skill2Skillgroup/Retrieve",
            List = "DWSupport/Skill2Skillgroup/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>Skill2SkillgroupService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


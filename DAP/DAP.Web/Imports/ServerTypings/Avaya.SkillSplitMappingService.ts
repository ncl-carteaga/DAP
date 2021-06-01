namespace DAP.Avaya {
    export namespace SkillSplitMappingService {
        export const baseUrl = 'Avaya/SkillSplitMapping';

        export declare function Create(request: Serenity.SaveRequest<SkillSplitMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SkillSplitMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SkillSplitMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SkillSplitMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Avaya/SkillSplitMapping/Create",
            Update = "Avaya/SkillSplitMapping/Update",
            Delete = "Avaya/SkillSplitMapping/Delete",
            Retrieve = "Avaya/SkillSplitMapping/Retrieve",
            List = "Avaya/SkillSplitMapping/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SkillSplitMappingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


namespace DAP.DWSupport {
    export namespace SurveyFilterExclusionSuppService {
        export const baseUrl = 'DWSupport/SurveyFilterExclusionSupp';

        export declare function Create(request: Serenity.SaveRequest<SurveyFilterExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SurveyFilterExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SurveyFilterExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SurveyFilterExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/SurveyFilterExclusionSupp/Create",
            Update = "DWSupport/SurveyFilterExclusionSupp/Update",
            Delete = "DWSupport/SurveyFilterExclusionSupp/Delete",
            Retrieve = "DWSupport/SurveyFilterExclusionSupp/Retrieve",
            List = "DWSupport/SurveyFilterExclusionSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SurveyFilterExclusionSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


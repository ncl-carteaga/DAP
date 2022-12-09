namespace DAP.DWSupport {
    export namespace PsGlAccountSuppService {
        export const baseUrl = 'DWSupport/PsGlAccountSupp';

        export declare function Create(request: Serenity.SaveRequest<PsGlAccountSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PsGlAccountSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PsGlAccountSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PsGlAccountSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/PsGlAccountSupp/Create",
            Update = "DWSupport/PsGlAccountSupp/Update",
            Delete = "DWSupport/PsGlAccountSupp/Delete",
            Retrieve = "DWSupport/PsGlAccountSupp/Retrieve",
            List = "DWSupport/PsGlAccountSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PsGlAccountSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


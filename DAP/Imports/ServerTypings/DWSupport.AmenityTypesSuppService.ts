namespace DAP.DWSupport {
    export namespace AmenityTypesSuppService {
        export const baseUrl = 'DWSupport/AmenityTypesSupp';

        export declare function Create(request: Serenity.SaveRequest<AmenityTypesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AmenityTypesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmenityTypesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmenityTypesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/AmenityTypesSupp/Create",
            Update = "DWSupport/AmenityTypesSupp/Update",
            Delete = "DWSupport/AmenityTypesSupp/Delete",
            Retrieve = "DWSupport/AmenityTypesSupp/Retrieve",
            List = "DWSupport/AmenityTypesSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AmenityTypesSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


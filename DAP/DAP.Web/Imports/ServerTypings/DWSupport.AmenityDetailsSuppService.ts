namespace DAP.DWSupport {
    export namespace AmenityDetailsSuppService {
        export const baseUrl = 'DWSupport/AmenityDetailsSupp';

        export declare function Create(request: Serenity.SaveRequest<AmenityDetailsSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AmenityDetailsSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmenityDetailsSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmenityDetailsSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/AmenityDetailsSupp/Create",
            Update = "DWSupport/AmenityDetailsSupp/Update",
            Delete = "DWSupport/AmenityDetailsSupp/Delete",
            Retrieve = "DWSupport/AmenityDetailsSupp/Retrieve",
            List = "DWSupport/AmenityDetailsSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AmenityDetailsSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


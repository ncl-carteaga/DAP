namespace DAP.NCLHDSAR {
    export namespace RequestAttributesService {
        export const baseUrl = 'NCLHDSAR/RequestAttributes';

        export declare function Create(request: Serenity.SaveRequest<RequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateSP(request: Serenity.SaveRequest<RequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHDSAR/RequestAttributes/Create",
            Update = "NCLHDSAR/RequestAttributes/Update",
            UpdateSP = "NCLHDSAR/RequestAttributes/UpdateSP",
            Delete = "NCLHDSAR/RequestAttributes/Delete",
            Retrieve = "NCLHDSAR/RequestAttributes/Retrieve",
            List = "NCLHDSAR/RequestAttributes/List"
        }

        [
            'Create', 
            'Update', 
            'UpdateSP', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RequestAttributesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


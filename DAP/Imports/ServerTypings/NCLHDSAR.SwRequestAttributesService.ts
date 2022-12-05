namespace DAP.NCLHDSAR {
    export namespace SwRequestAttributesService {
        export const baseUrl = 'NCLHDSAR/SwRequestAttributes';

        export declare function Create(request: Serenity.SaveRequest<SwRequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SwRequestAttributesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SwRequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SwRequestAttributesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHDSAR/SwRequestAttributes/Create",
            Update = "NCLHDSAR/SwRequestAttributes/Update",
            Delete = "NCLHDSAR/SwRequestAttributes/Delete",
            Retrieve = "NCLHDSAR/SwRequestAttributes/Retrieve",
            List = "NCLHDSAR/SwRequestAttributes/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SwRequestAttributesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


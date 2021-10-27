namespace DAP.DWSupport {
    export namespace SlProductCodeSuppService {
        export const baseUrl = 'DWSupport/SlProductCodeSupp';

        export declare function Create(request: Serenity.SaveRequest<SlProductCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SlProductCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SlProductCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SlProductCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/SlProductCodeSupp/Create",
            Update = "DWSupport/SlProductCodeSupp/Update",
            Delete = "DWSupport/SlProductCodeSupp/Delete",
            Retrieve = "DWSupport/SlProductCodeSupp/Retrieve",
            List = "DWSupport/SlProductCodeSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SlProductCodeSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


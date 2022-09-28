namespace DAP.DWSupport {
    export namespace RollupProductCodesSuppService {
        export const baseUrl = 'DWSupport/RollupProductCodesSupp';

        export declare function Create(request: Serenity.SaveRequest<RollupProductCodesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RollupProductCodesSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RollupProductCodesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RollupProductCodesSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/RollupProductCodesSupp/Create",
            Update = "DWSupport/RollupProductCodesSupp/Update",
            Delete = "DWSupport/RollupProductCodesSupp/Delete",
            Retrieve = "DWSupport/RollupProductCodesSupp/Retrieve",
            List = "DWSupport/RollupProductCodesSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RollupProductCodesSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


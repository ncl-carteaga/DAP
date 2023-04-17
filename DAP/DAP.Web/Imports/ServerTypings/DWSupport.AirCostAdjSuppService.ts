namespace DAP.DWSupport {
    export namespace AirCostAdjSuppService {
        export const baseUrl = 'DWSupport/AirCostAdjSupp';

        export declare function Create(request: Serenity.SaveRequest<AirCostAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AirCostAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AirCostAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AirCostAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/AirCostAdjSupp/Create",
            Update = "DWSupport/AirCostAdjSupp/Update",
            Delete = "DWSupport/AirCostAdjSupp/Delete",
            Retrieve = "DWSupport/AirCostAdjSupp/Retrieve",
            List = "DWSupport/AirCostAdjSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AirCostAdjSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


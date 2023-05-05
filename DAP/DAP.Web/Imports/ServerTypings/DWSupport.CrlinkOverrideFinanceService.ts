namespace DAP.DWSupport {
    export namespace CrlinkOverrideFinanceService {
        export const baseUrl = 'DWSupport/CrlinkOverrideFinance';

        export declare function Create(request: Serenity.SaveRequest<CrlinkOverrideFinanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CrlinkOverrideFinanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrlinkOverrideFinanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrlinkOverrideFinanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/CrlinkOverrideFinance/Create",
            Update = "DWSupport/CrlinkOverrideFinance/Update",
            Delete = "DWSupport/CrlinkOverrideFinance/Delete",
            Retrieve = "DWSupport/CrlinkOverrideFinance/Retrieve",
            List = "DWSupport/CrlinkOverrideFinance/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CrlinkOverrideFinanceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


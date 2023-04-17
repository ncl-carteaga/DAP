namespace DAP.DWSupport {
    export namespace ExchangeFixedRateService {
        export const baseUrl = 'DWSupport/ExchangeFixedRate';

        export declare function Create(request: Serenity.SaveRequest<ExchangeFixedRateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ExchangeFixedRateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExchangeFixedRateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExchangeFixedRateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/ExchangeFixedRate/Create",
            Update = "DWSupport/ExchangeFixedRate/Update",
            Delete = "DWSupport/ExchangeFixedRate/Delete",
            Retrieve = "DWSupport/ExchangeFixedRate/Retrieve",
            List = "DWSupport/ExchangeFixedRate/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ExchangeFixedRateService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


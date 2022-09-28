namespace DAP.DWSupport {
    export namespace CurrencyExchangeRateSuppService {
        export const baseUrl = 'DWSupport/CurrencyExchangeRateSupp';

        export declare function Create(request: Serenity.SaveRequest<CurrencyExchangeRateSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CurrencyExchangeRateSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrencyExchangeRateSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrencyExchangeRateSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/CurrencyExchangeRateSupp/Create",
            Update = "DWSupport/CurrencyExchangeRateSupp/Update",
            Delete = "DWSupport/CurrencyExchangeRateSupp/Delete",
            Retrieve = "DWSupport/CurrencyExchangeRateSupp/Retrieve",
            List = "DWSupport/CurrencyExchangeRateSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CurrencyExchangeRateSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


namespace DAP.DWSupport {
    export namespace CreditCardAdjSuppService {
        export const baseUrl = 'DWSupport/CreditCardAdjSupp';

        export declare function Create(request: Serenity.SaveRequest<CreditCardAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CreditCardAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CreditCardAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CreditCardAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/CreditCardAdjSupp/Create",
            Update = "DWSupport/CreditCardAdjSupp/Update",
            Delete = "DWSupport/CreditCardAdjSupp/Delete",
            Retrieve = "DWSupport/CreditCardAdjSupp/Retrieve",
            List = "DWSupport/CreditCardAdjSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CreditCardAdjSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


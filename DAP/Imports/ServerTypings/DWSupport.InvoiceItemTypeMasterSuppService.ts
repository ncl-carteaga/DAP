namespace DAP.DWSupport {
    export namespace InvoiceItemTypeMasterSuppService {
        export const baseUrl = 'DWSupport/InvoiceItemTypeMasterSupp';

        export declare function Create(request: Serenity.SaveRequest<InvoiceItemTypeMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoiceItemTypeMasterSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemTypeMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemTypeMasterSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/InvoiceItemTypeMasterSupp/Create",
            Update = "DWSupport/InvoiceItemTypeMasterSupp/Update",
            Delete = "DWSupport/InvoiceItemTypeMasterSupp/Delete",
            Retrieve = "DWSupport/InvoiceItemTypeMasterSupp/Retrieve",
            List = "DWSupport/InvoiceItemTypeMasterSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceItemTypeMasterSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


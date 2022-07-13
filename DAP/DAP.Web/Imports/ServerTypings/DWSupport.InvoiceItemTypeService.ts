namespace DAP.DWSupport {
    export namespace InvoiceItemTypeService {
        export const baseUrl = 'DWSupport/InvoiceItemType';

        export declare function Create(request: Serenity.SaveRequest<InvoiceItemTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoiceItemTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/InvoiceItemType/Create",
            Update = "DWSupport/InvoiceItemType/Update",
            Delete = "DWSupport/InvoiceItemType/Delete",
            Retrieve = "DWSupport/InvoiceItemType/Retrieve",
            List = "DWSupport/InvoiceItemType/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceItemTypeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


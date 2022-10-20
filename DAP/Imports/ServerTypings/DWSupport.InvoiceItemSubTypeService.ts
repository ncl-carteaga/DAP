namespace DAP.DWSupport {
    export namespace InvoiceItemSubTypeService {
        export const baseUrl = 'DWSupport/InvoiceItemSubType';

        export declare function Create(request: Serenity.SaveRequest<InvoiceItemSubTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoiceItemSubTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemSubTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemSubTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/InvoiceItemSubType/Create",
            Update = "DWSupport/InvoiceItemSubType/Update",
            Delete = "DWSupport/InvoiceItemSubType/Delete",
            Retrieve = "DWSupport/InvoiceItemSubType/Retrieve",
            List = "DWSupport/InvoiceItemSubType/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceItemSubTypeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


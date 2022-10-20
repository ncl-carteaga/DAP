namespace DAP.DWSupport {
    export namespace InvoiceItemSubType2Service {
        export const baseUrl = 'DWSupport/InvoiceItemSubType2';

        export declare function Create(request: Serenity.SaveRequest<InvoiceItemSubType2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoiceItemSubType2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemSubType2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemSubType2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/InvoiceItemSubType2/Create",
            Update = "DWSupport/InvoiceItemSubType2/Update",
            Delete = "DWSupport/InvoiceItemSubType2/Delete",
            Retrieve = "DWSupport/InvoiceItemSubType2/Retrieve",
            List = "DWSupport/InvoiceItemSubType2/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceItemSubType2Service)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


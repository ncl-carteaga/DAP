namespace DAP.DWSupport {
    export namespace InvoiceItemSubType3Service {
        export const baseUrl = 'DWSupport/InvoiceItemSubType3';

        export declare function Create(request: Serenity.SaveRequest<InvoiceItemSubType3Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoiceItemSubType3Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceItemSubType3Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceItemSubType3Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/InvoiceItemSubType3/Create",
            Update = "DWSupport/InvoiceItemSubType3/Update",
            Delete = "DWSupport/InvoiceItemSubType3/Delete",
            Retrieve = "DWSupport/InvoiceItemSubType3/Retrieve",
            List = "DWSupport/InvoiceItemSubType3/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceItemSubType3Service)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


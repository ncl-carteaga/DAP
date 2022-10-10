namespace DAP.DWSupport {
    export namespace FullShipChartersSuppService {
        export const baseUrl = 'DWSupport/FullShipChartersSupp';

        export declare function Create(request: Serenity.SaveRequest<FullShipChartersSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FullShipChartersSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FullShipChartersSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FullShipChartersSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/FullShipChartersSupp/Create",
            Update = "DWSupport/FullShipChartersSupp/Update",
            Delete = "DWSupport/FullShipChartersSupp/Delete",
            Retrieve = "DWSupport/FullShipChartersSupp/Retrieve",
            List = "DWSupport/FullShipChartersSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FullShipChartersSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


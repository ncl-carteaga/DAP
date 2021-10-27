namespace DAP.DWSupport {
    export namespace VwGetSeaSalesRepIdService {
        export const baseUrl = 'DWSupport/VwGetSeaSalesRepId';

        export declare function Create(request: Serenity.SaveRequest<VwGetSeaSalesRepIdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VwGetSeaSalesRepIdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VwGetSeaSalesRepIdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VwGetSeaSalesRepIdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/VwGetSeaSalesRepId/Create",
            Update = "DWSupport/VwGetSeaSalesRepId/Update",
            Delete = "DWSupport/VwGetSeaSalesRepId/Delete",
            Retrieve = "DWSupport/VwGetSeaSalesRepId/Retrieve",
            List = "DWSupport/VwGetSeaSalesRepId/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VwGetSeaSalesRepIdService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


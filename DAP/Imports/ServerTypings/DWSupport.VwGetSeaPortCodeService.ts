namespace DAP.DWSupport {
    export namespace VwGetSeaPortCodeService {
        export const baseUrl = 'DWSupport/VwGetSeaPortCode';

        export declare function Create(request: Serenity.SaveRequest<VwGetSeaPortCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VwGetSeaPortCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VwGetSeaPortCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VwGetSeaPortCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/VwGetSeaPortCode/Create",
            Update = "DWSupport/VwGetSeaPortCode/Update",
            Delete = "DWSupport/VwGetSeaPortCode/Delete",
            Retrieve = "DWSupport/VwGetSeaPortCode/Retrieve",
            List = "DWSupport/VwGetSeaPortCode/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VwGetSeaPortCodeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


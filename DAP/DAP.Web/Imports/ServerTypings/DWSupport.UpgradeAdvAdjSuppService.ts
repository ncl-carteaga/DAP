namespace DAP.DWSupport {
    export namespace UpgradeAdvAdjSuppService {
        export const baseUrl = 'DWSupport/UpgradeAdvAdjSupp';

        export declare function Create(request: Serenity.SaveRequest<UpgradeAdvAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UpgradeAdvAdjSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UpgradeAdvAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UpgradeAdvAdjSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/UpgradeAdvAdjSupp/Create",
            Update = "DWSupport/UpgradeAdvAdjSupp/Update",
            Delete = "DWSupport/UpgradeAdvAdjSupp/Delete",
            Retrieve = "DWSupport/UpgradeAdvAdjSupp/Retrieve",
            List = "DWSupport/UpgradeAdvAdjSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UpgradeAdvAdjSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


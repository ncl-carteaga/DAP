namespace DAP.DWSupport {
    export namespace MinibarSetupSuppService {
        export const baseUrl = 'DWSupport/MinibarSetupSupp';

        export declare function Create(request: Serenity.SaveRequest<MinibarSetupSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MinibarSetupSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MinibarSetupSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MinibarSetupSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/MinibarSetupSupp/Create",
            Update = "DWSupport/MinibarSetupSupp/Update",
            Delete = "DWSupport/MinibarSetupSupp/Delete",
            Retrieve = "DWSupport/MinibarSetupSupp/Retrieve",
            List = "DWSupport/MinibarSetupSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MinibarSetupSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


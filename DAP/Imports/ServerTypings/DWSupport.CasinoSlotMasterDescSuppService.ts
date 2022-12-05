namespace DAP.DWSupport {
    export namespace CasinoSlotMasterDescSuppService {
        export const baseUrl = 'DWSupport/CasinoSlotMasterDescSupp';

        export declare function Create(request: Serenity.SaveRequest<CasinoSlotMasterDescSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CasinoSlotMasterDescSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CasinoSlotMasterDescSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CasinoSlotMasterDescSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/CasinoSlotMasterDescSupp/Create",
            Update = "DWSupport/CasinoSlotMasterDescSupp/Update",
            Delete = "DWSupport/CasinoSlotMasterDescSupp/Delete",
            Retrieve = "DWSupport/CasinoSlotMasterDescSupp/Retrieve",
            List = "DWSupport/CasinoSlotMasterDescSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CasinoSlotMasterDescSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


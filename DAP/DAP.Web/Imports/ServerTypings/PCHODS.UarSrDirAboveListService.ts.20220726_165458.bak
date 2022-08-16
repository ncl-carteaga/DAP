namespace DAP.PCHODS {
    export namespace UarSrDirAboveListService {
        export const baseUrl = 'PCHODS/UarSrDirAboveList';

        export declare function Create(request: Serenity.SaveRequest<UarSrDirAboveListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UarSrDirAboveListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UarSrDirAboveListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UarSrDirAboveListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/UarSrDirAboveList/Create",
            Update = "PCHODS/UarSrDirAboveList/Update",
            Delete = "PCHODS/UarSrDirAboveList/Delete",
            Retrieve = "PCHODS/UarSrDirAboveList/Retrieve",
            List = "PCHODS/UarSrDirAboveList/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UarSrDirAboveListService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


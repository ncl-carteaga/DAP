namespace DAP.DWSupport {
    export namespace AgencySnapshotRequestService {
        export const baseUrl = 'DWSupport/AgencySnapshotRequest';

        export declare function Create(request: Serenity.SaveRequest<AgencySnapshotRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AgencySnapshotRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgencySnapshotRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgencySnapshotRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/AgencySnapshotRequest/Create",
            Update = "DWSupport/AgencySnapshotRequest/Update",
            Delete = "DWSupport/AgencySnapshotRequest/Delete",
            Retrieve = "DWSupport/AgencySnapshotRequest/Retrieve",
            List = "DWSupport/AgencySnapshotRequest/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AgencySnapshotRequestService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


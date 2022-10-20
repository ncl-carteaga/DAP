namespace DAP.NCLHODSSPENDVIS {
    export namespace DataFlowService {
        export const baseUrl = 'NCLHODSSPENDVIS/DataFlow';

        export declare function Create(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DataFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHODSSPENDVIS/DataFlow/Create",
            Update = "NCLHODSSPENDVIS/DataFlow/Update",
            Delete = "NCLHODSSPENDVIS/DataFlow/Delete",
            Retrieve = "NCLHODSSPENDVIS/DataFlow/Retrieve",
            List = "NCLHODSSPENDVIS/DataFlow/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DataFlowService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


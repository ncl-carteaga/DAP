namespace DAP.DWSupport {
    export namespace FinPlannedCapacitySuppService {
        export const baseUrl = 'DWSupport/FinPlannedCapacitySupp';

        export declare function Create(request: Serenity.SaveRequest<FinPlannedCapacitySuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FinPlannedCapacitySuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinPlannedCapacitySuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinPlannedCapacitySuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/FinPlannedCapacitySupp/Create",
            Update = "DWSupport/FinPlannedCapacitySupp/Update",
            Delete = "DWSupport/FinPlannedCapacitySupp/Delete",
            Retrieve = "DWSupport/FinPlannedCapacitySupp/Retrieve",
            List = "DWSupport/FinPlannedCapacitySupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FinPlannedCapacitySuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


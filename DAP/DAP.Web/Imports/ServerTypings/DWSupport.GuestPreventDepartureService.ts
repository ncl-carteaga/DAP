namespace DAP.DWSupport {
    export namespace GuestPreventDepartureService {
        export const baseUrl = 'DWSupport/GuestPreventDeparture';

        export declare function Create(request: Serenity.SaveRequest<GuestPreventDepartureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GuestPreventDepartureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GuestPreventDepartureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GuestPreventDepartureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/GuestPreventDeparture/Create",
            Update = "DWSupport/GuestPreventDeparture/Update",
            Delete = "DWSupport/GuestPreventDeparture/Delete",
            Retrieve = "DWSupport/GuestPreventDeparture/Retrieve",
            List = "DWSupport/GuestPreventDeparture/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>GuestPreventDepartureService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


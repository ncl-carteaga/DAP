namespace DAP.SSISConfig {
    export namespace GpInterfaceLogService {
        export const baseUrl = 'SSISConfig/GpInterfaceLog';

        export declare function Create(request: Serenity.SaveRequest<GpInterfaceLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GpInterfaceLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GpInterfaceLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GpInterfaceLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "SSISConfig/GpInterfaceLog/Create",
            Update = "SSISConfig/GpInterfaceLog/Update",
            Delete = "SSISConfig/GpInterfaceLog/Delete",
            Retrieve = "SSISConfig/GpInterfaceLog/Retrieve",
            List = "SSISConfig/GpInterfaceLog/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>GpInterfaceLogService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


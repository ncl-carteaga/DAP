namespace DAP.DWSupport {
    export namespace DimCruiseFlagsService {
        export const baseUrl = 'DWSupport/DimCruiseFlags';

        export declare function Create(request: Serenity.SaveRequest<DimCruiseFlagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DimCruiseFlagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DimCruiseFlagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DimCruiseFlagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/DimCruiseFlags/Create",
            Update = "DWSupport/DimCruiseFlags/Update",
            Delete = "DWSupport/DimCruiseFlags/Delete",
            Retrieve = "DWSupport/DimCruiseFlags/Retrieve",
            List = "DWSupport/DimCruiseFlags/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DimCruiseFlagsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


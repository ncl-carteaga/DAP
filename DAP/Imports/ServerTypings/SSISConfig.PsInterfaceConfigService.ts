namespace DAP.SSISConfig {
    export namespace PsInterfaceConfigService {
        export const baseUrl = 'SSISConfig/PsInterfaceConfig';

        export declare function Create(request: Serenity.SaveRequest<PsInterfaceConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PsInterfaceConfigRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PsInterfaceConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PsInterfaceConfigRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "SSISConfig/PsInterfaceConfig/Create",
            Update = "SSISConfig/PsInterfaceConfig/Update",
            Delete = "SSISConfig/PsInterfaceConfig/Delete",
            Retrieve = "SSISConfig/PsInterfaceConfig/Retrieve",
            List = "SSISConfig/PsInterfaceConfig/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PsInterfaceConfigService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


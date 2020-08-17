namespace DAP.SSISConfig {
    export namespace SsisConfigBaseService {
        export const baseUrl = 'SSISConfig/SsisConfigBase';

        export declare function Create(request: Serenity.SaveRequest<SsisConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SsisConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SsisConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SsisConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "SSISConfig/SsisConfigBase/Create",
            Update = "SSISConfig/SsisConfigBase/Update",
            Delete = "SSISConfig/SsisConfigBase/Delete",
            Retrieve = "SSISConfig/SsisConfigBase/Retrieve",
            List = "SSISConfig/SsisConfigBase/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SsisConfigBaseService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


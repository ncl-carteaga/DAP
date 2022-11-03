namespace DAP.SSISConfig {
    export namespace INTConfigBaseService {
        export const baseUrl = 'SSISConfig/INTConfigBase';

        export declare function Create(request: Serenity.SaveRequest<INTConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<INTConfigBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<INTConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<INTConfigBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "SSISConfig/INTConfigBase/Create",
            Update = "SSISConfig/INTConfigBase/Update",
            Delete = "SSISConfig/INTConfigBase/Delete",
            Retrieve = "SSISConfig/INTConfigBase/Retrieve",
            List = "SSISConfig/INTConfigBase/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>INTConfigBaseService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


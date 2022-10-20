namespace DAP.PCHODS {
    export namespace OutboundNvsUsersService {
        export const baseUrl = 'PCHODS/OutboundNvsUsers';

        export declare function Create(request: Serenity.SaveRequest<OutboundNvsUsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutboundNvsUsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundNvsUsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundNvsUsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/OutboundNvsUsers/Create",
            Update = "PCHODS/OutboundNvsUsers/Update",
            Delete = "PCHODS/OutboundNvsUsers/Delete",
            Retrieve = "PCHODS/OutboundNvsUsers/Retrieve",
            List = "PCHODS/OutboundNvsUsers/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutboundNvsUsersService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


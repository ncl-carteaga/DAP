namespace DAP.PCHODS {
    export namespace InboundUserOverrideDescriptionService {
        export const baseUrl = 'PCHODS/InboundUserOverrideDescription';

        export declare function Create(request: Serenity.SaveRequest<InboundUserOverrideDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InboundUserOverrideDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InboundUserOverrideDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InboundUserOverrideDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/InboundUserOverrideDescription/Create",
            Update = "PCHODS/InboundUserOverrideDescription/Update",
            Delete = "PCHODS/InboundUserOverrideDescription/Delete",
            Retrieve = "PCHODS/InboundUserOverrideDescription/Retrieve",
            List = "PCHODS/InboundUserOverrideDescription/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InboundUserOverrideDescriptionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


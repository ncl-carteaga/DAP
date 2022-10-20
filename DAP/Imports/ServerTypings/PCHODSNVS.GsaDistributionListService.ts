namespace DAP.PCHODSNVS {
    export namespace GsaDistributionListService {
        export const baseUrl = 'PCHODSNVS/GsaDistributionList';

        export declare function Create(request: Serenity.SaveRequest<GsaDistributionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GsaDistributionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GsaDistributionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GsaDistributionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/GsaDistributionList/Create",
            Update = "PCHODSNVS/GsaDistributionList/Update",
            Delete = "PCHODSNVS/GsaDistributionList/Delete",
            Retrieve = "PCHODSNVS/GsaDistributionList/Retrieve",
            List = "PCHODSNVS/GsaDistributionList/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>GsaDistributionListService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


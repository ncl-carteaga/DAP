namespace DAP.PCHODSNVS {
    export namespace NtrRptCommentService {
        export const baseUrl = 'PCHODSNVS/NtrRptComment';

        export declare function Create(request: Serenity.SaveRequest<NtrRptCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NtrRptCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrRptCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrRptCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/NtrRptComment/Create",
            Update = "PCHODSNVS/NtrRptComment/Update",
            Delete = "PCHODSNVS/NtrRptComment/Delete",
            Retrieve = "PCHODSNVS/NtrRptComment/Retrieve",
            List = "PCHODSNVS/NtrRptComment/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>NtrRptCommentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


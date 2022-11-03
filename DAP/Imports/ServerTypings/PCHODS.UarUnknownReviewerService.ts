namespace DAP.PCHODS {
    export namespace UarUnknownReviewerService {
        export const baseUrl = 'PCHODS/UarUnknownReviewer';

        export declare function Create(request: Serenity.SaveRequest<UarUnknownReviewerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UarUnknownReviewerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UarUnknownReviewerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UarUnknownReviewerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/UarUnknownReviewer/Create",
            Update = "PCHODS/UarUnknownReviewer/Update",
            Delete = "PCHODS/UarUnknownReviewer/Delete",
            Retrieve = "PCHODS/UarUnknownReviewer/Retrieve",
            List = "PCHODS/UarUnknownReviewer/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UarUnknownReviewerService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


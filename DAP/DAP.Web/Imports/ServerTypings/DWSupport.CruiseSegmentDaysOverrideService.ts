﻿namespace DAP.DWSupport {
    export namespace CruiseSegmentDaysOverrideService {
        export const baseUrl = 'DWSupport/CruiseSegmentDaysOverride';

        export declare function Create(request: Serenity.SaveRequest<CruiseSegmentDaysOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CruiseSegmentDaysOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CruiseSegmentDaysOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CruiseSegmentDaysOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/CruiseSegmentDaysOverride/Create",
            Update = "DWSupport/CruiseSegmentDaysOverride/Update",
            Delete = "DWSupport/CruiseSegmentDaysOverride/Delete",
            Retrieve = "DWSupport/CruiseSegmentDaysOverride/Retrieve",
            List = "DWSupport/CruiseSegmentDaysOverride/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CruiseSegmentDaysOverrideService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


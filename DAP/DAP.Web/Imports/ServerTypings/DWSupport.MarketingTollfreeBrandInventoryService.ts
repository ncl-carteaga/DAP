namespace DAP.DWSupport {
    export namespace MarketingTollfreeBrandInventoryService {
        export const baseUrl = 'DWSupport/MarketingTollfreeBrandInventory';

        export declare function Create(request: Serenity.SaveRequest<MarketingTollfreeBrandInventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MarketingTollfreeBrandInventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingTollfreeBrandInventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingTollfreeBrandInventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/MarketingTollfreeBrandInventory/Create",
            Update = "DWSupport/MarketingTollfreeBrandInventory/Update",
            Delete = "DWSupport/MarketingTollfreeBrandInventory/Delete",
            Retrieve = "DWSupport/MarketingTollfreeBrandInventory/Retrieve",
            List = "DWSupport/MarketingTollfreeBrandInventory/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MarketingTollfreeBrandInventoryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


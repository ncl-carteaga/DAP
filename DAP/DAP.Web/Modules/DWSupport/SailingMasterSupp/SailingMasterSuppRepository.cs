
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.SailingMasterSuppRow;
    using MyPackageRow = Entities.PackageTypeCodeSuppRow;
    using MyProductRow = Entities.ProductCodeSuppRow;
    using MySlProductRow = Entities.SlProductCodeSuppRow;

    public class SailingMasterSuppRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {
                base.BeforeSave();

                //Sail dates of a main voyage sailing for a ship should not overlap with another main voyage of the same ship

                //SELECT SHIP_CD, SAIL_DAT, MAIN_VOYAGE_CD, *
                //  FROM[DW_Support].[dbo].[SAILING_MASTER_SUPP]
                //WHERE INACTIVE_CD = 'N'
                //AND MAIN_VOYAGE_CD = 'Y'

                //if (IsUpdate)
                //{
                //    if (this.Connection.Exists<SailingMasterSuppRow>(MyRow.Fields.ShipCd == Row.ShipCd && 
                //                                                     MyRow.Fields.SailDat == Row.SailDat.Value && 
                //                                                     MyRow.Fields.MainVoyageCd == Row.MainVoyageCd && 
                //                                                     MyRow.Fields.InactiveCd == Row.InactiveCd &&
                //                                                     MyRow.Fields.ModifiedTs == "12/31/9999" &&
                //                                                     MyRow.Fields.SailSurKey != Row.SailSurKey.Value) && Row.MainVoyageCd == "Y" && Row.InactiveCd == "N")
                //    {
                //        throw new ValidationError("Main Voyage Already Exists for this hip on this Sail Date");
                //    }
                //}

                if (IsUpdate)
                {
                    if (!this.Connection.Exists<PackageTypeCodeSuppRow>(MyPackageRow.Fields.TypeCode == this.Row.PackageTypeCd))
                    {
                        throw new ValidationError("Package Type Code does not exits.");
                    }
                    if (!this.Connection.Exists<ProductCodeSuppRow>(MyProductRow.Fields.ProductCd == this.Row.ProductCd))
                    {
                        throw new ValidationError("Product Code does not exits.");
                    }
                    if (!this.Connection.Exists<SlProductCodeSuppRow>(MySlProductRow.Fields.SlProductCd == this.Row.SlProductCd))
                    {
                        throw new ValidationError("SL Product Code does not exits.");
                    }
                    if (this.Row.FareFeedIncludeCd.ToUpper() != "Y" && this.Row.FareFeedIncludeCd.ToUpper() != "N")
                    {
                        throw new ValidationError("Fare Feed Include Code should be Y (Yes) or N (No).");
                    }
                    if (this.Row.InactiveCd.ToUpper() != "Y" && this.Row.InactiveCd.ToUpper() != "N")
                    {
                        throw new ValidationError("Inactive Code should be Y (Yes) or N (No).");
                    }
                    if (this.Row.MainVoyageCd.ToUpper() != "Y" && this.Row.MainVoyageCd.ToUpper() != "N")
                    {
                        throw new ValidationError("Main Voyage Code should be Y (Yes) or N (No).");
                    }
                    if (this.Row.InterportCd.ToUpper() != "Y" && this.Row.InterportCd.ToUpper() != "N")
                    {
                        throw new ValidationError("Interport Code should be Y (Yes) or N (No).");
                    }
                    if (this.Row.ValidVoyageCd.ToUpper() != "Y" && this.Row.ValidVoyageCd.ToUpper() != "N")
                    {
                        throw new ValidationError("Valid Voyage Code should be Y (Yes) or N (No).");
                    }
                    if (this.Row.CharterCd.ToUpper() != "Y" && this.Row.CharterCd.ToUpper() != "N")
                    {
                        throw new ValidationError("Charter Code should be Y (Yes) or N (No).");
                    }
                }


            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                Row.CreatedByNam = user.Username.ToUpper();
                Row.CreatedTs = DateTime.Now;
                if (IsUpdate)
                {
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.ModifiedTs = DateTime.Now;

                    //Database trigger will create a new record at the same time
                }
            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {

            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                // Filter by ModifiedTs
                query.Where(fld.ModifiedTs == new DateTime(9999, 12, 31));     

            }

        }
    }
}
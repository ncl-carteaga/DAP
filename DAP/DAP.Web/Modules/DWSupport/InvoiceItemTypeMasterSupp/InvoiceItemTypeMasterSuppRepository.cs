
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.InvoiceItemTypeMasterSuppRow;

    public class InvoiceItemTypeMasterSuppRepository
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

                if (IsUpdate)
                {
                    if (this.Connection.Exists<InvoiceItemTypeMasterSuppRow>(MyRow.Fields.InvoiceItemTypeCd == Row.InvoiceItemTypeCd &&
                                                      MyRow.Fields.InvoiceItemSubTypeCd == Row.InvoiceItemSubTypeCd &&
                                                      MyRow.Fields.InvoiceItemSubType2Cd == Row.InvoiceItemSubType2Cd &&
                                                      MyRow.Fields.InvoiceItemSubType3Cd == Row.InvoiceItemSubType3Cd &&
                                                      MyRow.Fields.InvoiceItemSourceCd == Row.InvoiceItemSourceCd &&
                                                      MyRow.Fields.MasterComponentCd == Row.MasterComponentCd &&
                                                      MyRow.Fields.ModifiedTs == "12/31/9999" && 
                                                      MyRow.Fields.InvoiceItemTypeMasterId != Row.InvoiceItemTypeMasterId.Value))
                    {
                        throw new ValidationError("These Invoice Item Type Combination Already Exists!");
                    }
                }

                if (IsCreate)
                {
                    if (this.Connection.Exists<InvoiceItemTypeMasterSuppRow>(MyRow.Fields.InvoiceItemTypeCd == Row.InvoiceItemTypeCd &&
                                                      MyRow.Fields.InvoiceItemSubTypeCd == Row.InvoiceItemSubTypeCd &&
                                                      MyRow.Fields.InvoiceItemSubType2Cd == Row.InvoiceItemSubType2Cd &&
                                                      MyRow.Fields.InvoiceItemSubType3Cd == Row.InvoiceItemSubType3Cd &&
                                                      MyRow.Fields.InvoiceItemSourceCd == Row.InvoiceItemSourceCd &&
                                                      MyRow.Fields.MasterComponentCd == Row.MasterComponentCd &&
                                                      MyRow.Fields.ModifiedTs == "12/31/9999" ))
                    {
                        throw new ValidationError("These Invoice Item Type Combination Already Exists!");
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

                query.Where(fld.ModifiedTs == new DateTime(9999, 12, 31));

            }
        }
    }
}
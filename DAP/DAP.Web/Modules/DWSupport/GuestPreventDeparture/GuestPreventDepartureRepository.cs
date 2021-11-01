
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.GuestPreventDepartureRow;

    public class GuestPreventDepartureRepository
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
                    if (this.Connection.Exists<GuestPreventDepartureRow>(MyRow.Fields.GuestFirstNam == Row.GuestFirstNam && MyRow.Fields.GuestLastNam == Row.GuestLastNam && MyRow.Fields.GuestPreventDepartureKey != Row.GuestPreventDepartureKey.Value))
                    {
                        throw new ValidationError("Guest Already Exists (First Name, Last Name)");
                    }
                }

                if (IsCreate)
                {
                    if (this.Connection.Exists<GuestPreventDepartureRow>(MyRow.Fields.GuestFirstNam == Row.GuestFirstNam && MyRow.Fields.GuestLastNam == Row.GuestLastNam))
                    {
                        throw new ValidationError("Guest Already Exists (First Name, Last Name)");
                    }
                }


            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate)
                {
                    Row.CreatedByNam = user.Username.ToUpper();
                    Row.CreatedTs = DateTime.Now;
                }
                if (IsUpdate)
                {
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.CreatedTs = DateTime.Now;                    
                }
            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}
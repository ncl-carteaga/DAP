
namespace DAP.NCLHODSSPENDVIS.Repositories
{
    using DAP.NCLHODSSPENDVIS.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.AmoslevelRow;

    public class AmoslevelRepository
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
                    if (this.Connection.Exists<AmoslevelRow>(MyRow.Fields.AccountId == Row.AccountId && MyRow.Fields.IdNum != Row.IdNum.Value))
                    {
                        throw new ValidationError("There is already an entry wiht this Account Id");
                    }
                }

                if (IsCreate)
                {
                    if (this.Connection.Exists<AmoslevelRow>(MyRow.Fields.AccountId == Row.AccountId))
                    {
                        throw new ValidationError("There is already an entry with this Account Id");
                    }
                }


            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;
                
                Row.ModifiedBy = user.Username;
                Row.ModifiedDate = DateTime.Now;
                                
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}
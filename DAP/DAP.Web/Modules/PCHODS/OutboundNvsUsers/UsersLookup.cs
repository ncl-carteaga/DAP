namespace DAP.PCHODS.Lookups
{
    using DAP.PCHODS.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class UsersLookup : RowLookupScript<OutboundNvsUsersRow>
    {
        public UsersLookup()
        {
            IdField = OutboundNvsUsersRow.Fields.UserId.PropertyName;
            TextField = OutboundNvsUsersRow.Fields.UserId.PropertyName;
        }
    }
}

namespace DAP.Administration
{
    using Newtonsoft.Json;
    using Serenity.Services;

    public class UserListRequest : ListRequest
    {
        [JsonIgnore]
        internal byte[] ClientHash;
    }
}

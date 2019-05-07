
using Serenity.Data;

namespace DAP.Administration.Behaviors
{
    public interface IDataAuditLogHandler
    {
        void Log(IUnitOfWork uow, Row old, Row row, object userId);
    }
}
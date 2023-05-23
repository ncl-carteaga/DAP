
namespace DAP.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("NCL username")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("NCL network password"), Required(true)]
        public string Password { get; set; }
        [Placeholder("example: nclmiami.ncl.com"), Required(true)]
        public string Domain { get; set; }
        [Ignore]
        public string TwoFactorGuid { get; set; }
        [Ignore]
        public int? TwoFactorCode { get; set; }
    }
}
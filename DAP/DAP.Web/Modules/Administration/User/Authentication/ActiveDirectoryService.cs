﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.DirectoryServices.AccountManagement;

namespace DAP.Administration
{
    public class ActiveDirectoryService : IDirectoryService
    {
        public DirectoryEntry Validate(string username, string password, string domain)
        {
            //var config = Config.Get<Settings>();        

            using (var context = new PrincipalContext(ContextType.Domain, domain /* config.Domain */))
            {
                bool isValid;
                try
                {
                    isValid = context.ValidateCredentials(username, password, ContextOptions.Negotiate);
                }
                catch (Exception ex)
                {
                    Log.Error("Error authenticating user", ex, this.GetType());
                    return null;
                }

                if (!isValid)
                    return null;

                var identity = UserPrincipal.FindByIdentity(context, IdentityType.SamAccountName, username);
                return new DirectoryEntry
                {
                    Username = identity.SamAccountName,
                    Email = identity.EmailAddress.TrimToNull(),
                    FirstName = identity.GivenName,
                    LastName = identity.Surname
                };
            }
        }

        [Hidden, SettingScope("Application"), SettingKey("ActiveDirectory")]
        private class Settings
        {
            public string Domain { get; set; }
        }
    }
}
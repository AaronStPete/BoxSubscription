using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoxSubscription.Context
{
    public class StarContext : IdentityDbContext<IdentityUser>
    {
        public StarContext()
            : base("DefaultConnection")
        {

        }
    }
}
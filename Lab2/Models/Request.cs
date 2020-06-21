using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2.Models
{
    public partial class Request
    {
        public Request() => ServiceRequest = new HashSet<ServiceRequest>();

        public int Id { get; set; }

        public int ClientId { get; set; }

        public virtual Client Сlient { get; set; }

        public virtual ICollection<ServiceRequest> ServiceRequest { get; set; }
    }
}

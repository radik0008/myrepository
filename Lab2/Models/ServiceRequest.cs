using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2.Models
{
    public partial class ServiceRequest
    {
        public int ServiceId { get; set; }

        public int RequestId { get; set; }

        public virtual Service Service { get; set; }

        public virtual Request Request { get; set; }

    }
}

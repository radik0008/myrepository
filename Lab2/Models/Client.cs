using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2.Models
{
    public partial class Client
    {
        public Client() => Requests = new HashSet<Request>();

        public int Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public string Сountry { get; set; }

        public virtual ICollection<Request> Requests { get; set; }
    }
}

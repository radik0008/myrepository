﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2.Models
{
    public partial class Service
    {
        public Service() => ServiceRequest = new HashSet<ServiceRequest>();

        public int Id { get; set; }

        public string Name { get; set; }

        public string Сomplexity { get; set; }

        public virtual ICollection<ServiceRequest> ServiceRequest { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    [ServiceContract]
    public interface IApiService
    {
        [OperationContract]
        Task<string> GetResponseAsync();
    }
}

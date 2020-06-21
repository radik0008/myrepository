using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lab2.Models;

namespace Lab2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly LabTwoProjPractice labTwo;

        public ServiceController(LabTwoProjPractice _labTwo) => labTwo = _labTwo;

        // GET: api/Service
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Service/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if (id > 0)
            {
                return Ok(labTwo.Services.Include(s => s.ServiceRequest).FirstOrDefault(r => r.Id == id));
            }
            return BadRequest("Not a valid " + id);
        }

        // POST: api/Service
        [HttpPost]
        public IActionResult Post(Service service)
        {
            if (ModelState.IsValid)
            {
                labTwo.Services.Add(new Service()
                {
                    Name = service.Name,
                    Сomplexity = service.Сomplexity,
                    ServiceRequest = service.ServiceRequest
                });
                labTwo.SaveChanges();

                return Ok();
            }
            return BadRequest("Invalid data");
        }

        // PUT: api/Service/5
        [HttpPut]
        public IActionResult Put(Service service)
        {
            if (ModelState.IsValid)
            {
                Service newService = labTwo.Services.Find(service.Id);
                if (newService != null)
                {
                    newService.Name = service.Name;
                    newService.Сomplexity = service.Сomplexity;
                    labTwo.SaveChanges();
                }
                else
                {
                    return NotFound();
                }

                return Ok();
            }
            return BadRequest("Not a valid model");
        }

        // DELETE: api/Service/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id > 0)
            {
                Service newService = labTwo.Services.Find(id);
                if (newService != null)
                {
                    labTwo.Remove(newService);
                    labTwo.SaveChanges();
                }

                return Ok();
            }
            return BadRequest("Not a valid" + id);
        }
    }
}

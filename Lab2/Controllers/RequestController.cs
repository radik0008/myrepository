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
    public class RequestController : ControllerBase
    {
        private readonly LabTwoProjPractice labTwo;

        public RequestController(LabTwoProjPractice _labTwo) => labTwo = _labTwo;

        // GET: api/Request
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Request/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if (id > 0)
            {
                return Ok(labTwo.Requests.Include(r => r.ServiceRequest).FirstOrDefault(s => s.Id == id));
            }
            return BadRequest("Not a valid " + id);
        }

        // POST: api/Request
        [HttpPost]
        public IActionResult Post(Request request)
        {
            if (ModelState.IsValid)
            {
                labTwo.Requests.Add(new Request()
                {
                    ClientId = request.ClientId,
                    ServiceRequest = request.ServiceRequest
                });
                labTwo.SaveChanges();

                return Ok();
            }
            return BadRequest("Invalid data");
        }

        // PUT: api/Request/5
        [HttpPut]
        public IActionResult Put(Request request)
        {
            if (ModelState.IsValid)
            {
                Request newRequest = labTwo.Requests.Find(request.Id);
                if (newRequest != null)
                {
                    newRequest.ClientId = request.ClientId;
                    newRequest.ServiceRequest = request.ServiceRequest;
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

        // DELETE: api/Request/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id > 0)
            {
                Request newRequest = labTwo.Requests.Find(id);
                if (newRequest != null)
                {
                    labTwo.Remove(newRequest);
                    labTwo.SaveChanges();
                }

                return Ok();
            }
            return BadRequest("Not a valid" + id);
        }
    }
}

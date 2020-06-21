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
    public class ClientController : ControllerBase
    {
        private readonly LabTwoProjPractice labTwo;

        public ClientController(LabTwoProjPractice _labTwo) => labTwo = _labTwo;

        // GET: api/Client
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Client/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if (id > 0)
            {
                return Ok(labTwo.Clients.FirstOrDefault(c => c.Id == id));
            }
            return BadRequest("Not a valid " + id);
        }

        // POST: api/Client
        [HttpPost]
        public IActionResult Post(Client client)
        {
            if (ModelState.IsValid)
            {
                labTwo.Clients.Add(new Client()
                {
                    Name = client.Name,
                    Age = client.Age,
                    Сountry = client.Сountry,
                    Requests = client.Requests
                });
                labTwo.SaveChanges();

                return Ok();
            }
            return BadRequest("Invalid data");
        }

        // PUT: api/Client/5
        [HttpPut]
        public IActionResult Put(Client client)
        {
            if (ModelState.IsValid)
            {
                Client newClient = labTwo.Clients.Find(client.Id);
                if (newClient != null)
                {
                    newClient.Name = client.Name;
                    newClient.Age = client.Age;
                    newClient.Сountry = client.Сountry;
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

        // DELETE: api/Client/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id > 0)
            {
                Client newClient = labTwo.Clients.Find(id);
                if (newClient != null)
                {
                    labTwo.Remove(newClient);
                    labTwo.SaveChanges();
                }

                return Ok();
            }
            return BadRequest("Not a valid" + id);
        }
    }
}

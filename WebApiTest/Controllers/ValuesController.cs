using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSDemo
{
    public class MyModel
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string author { get; set; }
        public int rating { get; set; }
        public int category { get; set; }
    }

    public class ValuesController : ApiController
    {
        List<MyModel> data = new List<MyModel> {
            new MyModel {id = 1, title = "a", description =  "a", author="a", category=1, rating = 11},
            new MyModel {id = 2, title = "a", description =  "b", author="a", category=2, rating = 12},
            new MyModel {id = 3, title = "a", description =  "c", author="a", category=3, rating = 13},
            new MyModel {id = 4, title = "a", description =  "d", author="a", category=4, rating = 14},
            new MyModel {id = 5, title = "a", description =  "e", author="a", category=5, rating = 15},
            new MyModel {id = 6, title = "a", description =  "f", author="a", category=6, rating = 16}
        };

        // GET api/<controller>
        public IEnumerable<MyModel> Get()
        {
            return data;
        }

        // GET api/<controller>/5
        public MyModel Get(int id)
        {
            return data[id];
        }

        // POST api/<controller>
        public void Post([FromBody]MyModel value)
        {

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]MyModel value)
        {
            data[id] = value;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            data.Remove(data[id]);
        }
    }
}
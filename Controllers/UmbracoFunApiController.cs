using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Fun.Models;
using Umbraco.Fun.Services;

namespace Umbraco.Fun.Controllers
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "Umbraco.Fun")]
    public class UmbracoFunApiController : UmbracoFunApiControllerBase
    {
        private readonly IJokeApiClient _client;

        public UmbracoFunApiController(IJokeApiClient client)
        {
            _client = client;
        }

        [HttpGet("jokes")]
        [ProducesResponseType<List<Joke>>(StatusCodes.Status200OK)]
        public async Task<List<Joke>> GetJokes()
        {
            var jokes = await _client.GetTenJokes();
            return jokes ?? new();
        }
    }
}

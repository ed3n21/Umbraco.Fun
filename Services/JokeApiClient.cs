using Microsoft.Extensions.Options;
using System.Text.Json;
using Umbraco.Fun.Configuration;
using Umbraco.Fun.Models;

namespace Umbraco.Fun.Services
{
    public interface IJokeApiClient
    {
        Task<List<Joke>> GetTenJokes(CancellationToken cancellationToken);
        Task<List<string>> GetJokeTypes();
    }

    public class JokeApiClient : IJokeApiClient
    {
        private readonly HttpClient _client;
        private readonly JokeConfiguration _config;

        public JokeApiClient(HttpClient client, IOptions<JokeConfiguration> options)
        {
            _client = client;
            _config = options.Value;
        }

        public async Task<List<Joke>> GetTenJokes(CancellationToken cancellationToken)
        {
            var response = await _client.GetAsync($"jokes/random/{_config.BatchSize}", cancellationToken);
            response.EnsureSuccessStatusCode();

            var json = await response.Content.ReadAsStringAsync();
            var jokes = JsonSerializer.Deserialize<List<Joke>>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (jokes == null)
                throw new InvalidOperationException("Failed to deserialize jokes");

            return jokes;
        }
        
        public async Task<List<string>> GetJokeTypes()
        {
            var response = await _client.GetAsync("types");
            response.EnsureSuccessStatusCode();

            var json = await response.Content.ReadAsStringAsync();
            var jokeTypes = JsonSerializer.Deserialize<List<string>>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (jokeTypes == null)
                throw new InvalidOperationException("Failed to deserialize jokes");

            return jokeTypes;
        }
    }
}

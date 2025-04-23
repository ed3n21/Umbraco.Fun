namespace Umbraco.Fun.Configuration
{
    public class JokeConfiguration
    {
        public string BaseUrl { get; set; } = "https://official-joke-api.appspot.com/";
        public int BatchSize { get; set; } = 10;
    }
}

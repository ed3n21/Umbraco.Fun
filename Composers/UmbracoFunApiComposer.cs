using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Fun.Configuration;
using Umbraco.Fun.Services;

namespace Umbraco.Fun.Composers
{
    public class UmbracoFunApiComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.Services.Configure<JokeConfiguration>(
                builder.Config.GetSection("JokeApi")
            );

            builder.Services.AddHttpClient<IJokeApiClient, JokeApiClient>((sp, client) =>
            {
                var config = sp.GetRequiredService<IOptions<JokeConfiguration>>().Value;
                client.BaseAddress = new Uri(config.BaseUrl);
            });
        }
    }
}

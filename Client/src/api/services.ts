import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { JokesResponse, JokesError, JokeTypesResponse, JokeTypesError } from './types';

export const client = createClient(createConfig());

var getJokesController: AbortController | undefined = undefined;

export class JokesService {
    public static getJokes<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        if (getJokesController)
            getJokesController.abort();

        getJokesController = new AbortController();
        const { signal } = getJokesController;

        return (options?.client ?? client).get<JokesResponse, JokesError, ThrowOnError>({
            ...options,
            url: '/umbraco/umbracofun/api/v1/jokes',
            signal,
        });
    }
    
    public static getJokeTypes<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<JokeTypesResponse, JokeTypesError, ThrowOnError>({
            ...options,
          url: '/umbraco/umbracofun/api/v1/jokes/types'
        });
    }
}

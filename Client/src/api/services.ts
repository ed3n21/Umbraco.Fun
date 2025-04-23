import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { JokesResponse, JokesError } from './types';

export const client = createClient(createConfig());

export class JokesService {
    public static getJokes<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<JokesResponse, JokesError, ThrowOnError>({
            ...options,
          url: '/umbraco/umbracofun/api/v1/jokes'
        });
    }
}

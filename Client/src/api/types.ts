export type Joke = {
    type: string;
    setup: string;
    punchline: string;
    id: number;
};

export type JokesResponse = Joke[];

export type JokesError = (unknown);

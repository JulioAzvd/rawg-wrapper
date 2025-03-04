/**
 * Represents a game belonging to a specific genre.
 */
declare interface GamesOnThisGenre {
    /**
     * Unique game ID.
     */
    id: number;
    /**
     * Unique game slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Game name.
     */
    name: string;
    /**
     * Number of users who added this game to their collection.
     */
    added: number;
}
/**
 * Represents a game genre.
 */
declare interface GenresArray {
    /**
     * Unique genre ID.
     */
    id: number;
    /**
     * Genre name.
     */
    name: string;
    /**
     * Unique genre slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games associated with this genre.
     */
    games_count: number;
    /**
     * Background image URL representing the genre (if available).
     */
    image_background: string | null;
    /**
     * List of popular games belonging to this genre.
     */
    games: GamesOnThisGenre[];
}
/**
 * Represents the API response when retrieving a list of genres.
 */
declare interface GenresList {
    /**
     * Total number of available genres.
     */
    count: number;
    /**
     * URL for the next page of results (if pagination exists).
     */
    next: string | null;
    /**
     * URL for the previous page of results (if pagination exists).
     */
    previous: string | null;
    /**
     * List of genres returned in the request.
     */
    results: GenresArray[];
}
/**
 * Represents the details of a specific genre.
 */
declare interface GenreDetailsList {
    /**
     * Unique genre ID.
     */
    id: number;
    /**
     * Genre name.
     */
    name: string;
    /**
     * Unique genre slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games associated with this genre.
     */
    games_count: number;
    /**
     * Background image URL representing the genre.
     */
    image_background: string;
    /**
     * Detailed description of the genre.
     */
    description: string;
}
export { GenresList, GenreDetailsList };

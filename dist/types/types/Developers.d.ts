/**
 * Represents a game developed by a specific studio.
 */
declare interface DevelopersGamesArrayList {
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
 * Represents a game developer and the most popular titles developed by them.
 */
declare interface DevelopersListResults {
    /**
     * Unique developer ID.
     */
    id: number;
    /**
     * Developer name.
     */
    name: string;
    /**
     * Unique developer slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games developed by this studio.
     */
    games_count: number;
    /**
     * Background image URL representing the developer.
     */
    image_background: string;
    /**
     * List of popular games developed by this studio.
     */
    games: DevelopersGamesArrayList[];
}
/**
 * Represents the API response when retrieving a list of developers.
 */
declare interface DevelopersList {
    /**
     * Total number of available developers.
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
     * List of developers returned in the request.
     */
    results: DevelopersListResults[];
}
/**
 * Represents the details of a specific developer.
 */
declare interface DeveloperDetails {
    /**
     * Unique developer ID.
     */
    id: number;
    /**
     * Developer name.
     */
    name: string;
    /**
     * Unique developer slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games developed by this studio.
     */
    games_count: number;
    /**
     * Background image URL representing the developer (if available).
     */
    image_background?: string;
    /**
     * Detailed description about the developer (if available).
     */
    description?: string;
}
export { DevelopersList, DeveloperDetails };

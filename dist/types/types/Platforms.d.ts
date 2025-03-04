/**
 * Represents a game available on a specific platform.
 */
declare interface Platform_GamesArrayInterface {
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
 * Represents a gaming platform.
 */
declare interface PlatformArray {
    /**
     * Unique platform ID.
     */
    id: number;
    /**
     * Platform name.
     */
    name: string;
    /**
     * Unique platform slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games available on this platform.
     */
    games_count: number;
    /**
     * Background image URL representing the platform.
     */
    image_background: string;
    /**
     * Image URL for the platform (if available).
     */
    image: string | null;
    /**
     * Year the platform was launched (if available).
     */
    year_start: number | null;
    /**
     * Year the platform was discontinued (if applicable).
     */
    year_end: number | null;
    /**
     * List of games available on this platform.
     */
    games: Platform_GamesArrayInterface[];
}
/**
 * Represents the API response when retrieving a list of platforms.
 */
declare interface PlatformList {
    /**
     * Total number of available platforms.
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
     * List of platforms returned in the request.
     */
    results: PlatformArray[];
}
/**
 * Represents a group of platforms belonging to a parent platform.
 */
declare interface PlatformParentArray {
    /**
     * Unique parent platform ID.
     */
    id: number;
    /**
     * Parent platform name.
     */
    name: string;
    /**
     * Unique parent platform slug (used in URLs and searches).
     */
    slug: string;
    /**
     * List of platforms associated with this parent platform.
     */
    platforms: PlatformDetailsList[];
}
/**
 * Represents the API response when retrieving a list of parent platforms.
 */
declare interface PlatformParentList {
    /**
     * Total number of available parent platforms.
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
     * List of parent platforms returned in the request.
     */
    results: PlatformParentArray[];
}
/**
 * Represents the details of a specific platform.
 */
declare interface PlatformDetailsList {
    /**
     * Unique platform ID.
     */
    id: number;
    /**
     * Platform name.
     */
    name: string;
    /**
     * Unique platform slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games available on this platform.
     */
    games_count: number;
    /**
     * Background image URL representing the platform.
     */
    image_background: string;
    /**
     * Detailed description of the platform.
     */
    description: string;
    /**
     * Image URL for the platform (if available).
     */
    image: string | null;
    /**
     * Year the platform was launched (if available).
     */
    year_start: number | null;
    /**
     * Year the platform was discontinued (if applicable).
     */
    year_end: number | null;
}
export { PlatformList, PlatformParentList, PlatformDetailsList };

/**
 * Represents a game associated with a store.
 */
declare interface Stores_GamesArrayInterface {
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
 * Represents a store where games can be purchased.
 */
declare interface StoresArray {
    /**
     * Unique store ID.
     */
    id: number;
    /**
     * Store name.
     */
    name: string;
    /**
     * Store website domain (may be `null` if unavailable).
     */
    domain: string | null;
    /**
     * Unique store slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games available in this store.
     */
    games_count: number;
    /**
     * Background image URL representing the store.
     */
    image_background: string;
    /**
     * List of some games available in this store.
     */
    games: Stores_GamesArrayInterface[];
}
/**
 * Represents the API response when retrieving a list of stores.
 */
declare interface StoresList {
    /**
     * Total number of available stores.
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
     * List of stores returned in the request.
     */
    results: StoresArray[];
}
/**
 * Represents the details of a specific store.
 */
declare interface StoreDetailsList {
    /**
     * Unique store ID.
     */
    id: number;
    /**
     * Store name.
     */
    name: string;
    /**
     * Store website domain (may be `null` if unavailable).
     */
    domain: string | null;
    /**
     * Unique store slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games available in this store.
     */
    games_count: number;
    /**
     * Background image URL representing the store.
     */
    image_background: string;
    /**
     * Detailed description of the store.
     */
    description: string;
}
export { StoresList, StoreDetailsList };

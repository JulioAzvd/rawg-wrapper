/**
 * Represents a game associated with a publisher.
 */
declare interface Publishers_GamesArray {
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
 * Represents a game publisher.
 */
declare interface PublisherArrayInterface {
    /**
     * Unique publisher ID.
     */
    id: number;
    /**
     * Publisher name.
     */
    name: string;
    /**
     * Unique publisher slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games published by this publisher.
     */
    games_count: number;
    /**
     * Background image URL representing the publisher.
     */
    image_background: string;
    /**
     * List of some games published by this publisher.
     */
    games: Publishers_GamesArray[];
}
/**
 * Represents the API response when retrieving a list of publishers.
 */
declare interface PublishersList {
    /**
     * Total number of available publishers.
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
     * List of publishers returned in the request.
     */
    results: PublisherArrayInterface[];
}
/**
 * Represents the details of a specific publisher.
 */
declare interface PublisherDetailsList {
    /**
     * Unique publisher ID.
     */
    id: number;
    /**
     * Publisher name.
     */
    name: string;
    /**
     * Unique publisher slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games published by this publisher.
     */
    games_count: number;
    /**
     * Background image URL representing the publisher.
     */
    image_background: string;
    /**
     * Detailed description of the publisher.
     */
    description: string;
}
export { PublishersList, PublisherDetailsList };

/**
 * Represents a game associated with a tag.
 */
declare interface Tags_GamesArrayInterface {
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
 * Represents a tag used to categorize games.
 */
declare interface TagsArrayInterface {
    /**
     * Unique tag ID.
     */
    id: number;
    /**
     * Tag name.
     */
    name: string;
    /**
     * Unique tag slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games associated with this tag.
     */
    games_count: number;
    /**
     * Background image URL representing the tag.
     */
    image_background: string;
    /**
     * Primary language of the tag.
     */
    language: string;
    /**
     * List of some games that have this tag.
     */
    games: Tags_GamesArrayInterface[];
}
/**
 * Represents the API response when retrieving a list of tags.
 */
declare interface TagsList {
    /**
     * Total number of available tags.
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
     * List of tags returned in the request.
     */
    results: TagsArrayInterface[];
}
/**
 * Represents the details of a specific tag.
 */
declare interface TagsDetailsList {
    /**
     * Unique tag ID.
     */
    id: number;
    /**
     * Tag name.
     */
    name: string;
    /**
     * Unique tag slug (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games associated with this tag.
     */
    games_count: number;
    /**
     * Background image URL representing the tag.
     */
    image_background: string;
    /**
     * Detailed description of the tag (may be `null` if no description is available).
     */
    description: string | null;
}
export { TagsList, TagsDetailsList };

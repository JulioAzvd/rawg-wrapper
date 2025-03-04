import * as RawgTypes from "./types";
declare interface GameQueryParams {
    /**
     * Page number within the paginated set of results.
     */
    page: number;
    /**
     * Number of results per page.
     */
    page_size: number;
    /**
     * Search query to find games by name.
     */
    search: string;
    /**
     * Disables fuzzy search for the query, making it more precise.
     */
    search_precise: boolean;
    /**
     * Marks the search query as exact, requiring an exact name match.
     */
    search_exact: boolean;
    /**
     * Filters by parent platforms. Example: "1,2,3".
     */
    parent_platforms: string;
    /**
     * Filters by specific platforms. Example: "4,5".
     */
    platforms: string;
    /**
     * Filters by stores where games are available. Example: "5,6".
     */
    stores: string;
    /**
     * Filters by developers. Can be an ID or name. Example: "1612,18893" or "valve-software".
     */
    developers: string;
    /**
     * Filters by publishers. Can be an ID or name. Example: "354,20987" or "electronic-arts".
     */
    publishers: string;
    /**
     * Filters by genres. Can be an ID or name. Example: "4,51" or "action,rpg".
     */
    genres: string;
    /**
     * Filters by tags associated with the game. Example: "31,7" or "singleplayer,multiplayer".
     */
    tags: string;
    /**
     * Filters by content creators. Can be an ID or name. Example: "78,28" or "cris-valasco".
     */
    creators: string;
    /**
     * Filters by release date. Example: "2010-01-01,2018-12-31".
     */
    dates: string;
    /**
     * Filters by last updated date. Example: "2020-12-01,2020-12-31".
     */
    updated: string;
    /**
     * Filters by the number of platforms the game is available on. Example: "1".
     */
    platforms_count: number;
    /**
     * Filters by Metacritic score. Example: "80,100".
     */
    metacritic: string;
    /**
     * Excludes games from a specific collection. Example: "123".
     */
    exclude_collection: number;
    /**
     * Excludes DLCs and expansions from the results.
     */
    exclude_additions: boolean;
    /**
     * Excludes games that have DLCs or expansions.
     */
    exclude_parents: boolean;
    /**
     * Excludes games that are part of a series.
     */
    exclude_game_series: boolean;
    /**
     * Excludes games available in specific stores. Example: "5,6".
     */
    exclude_stores: string;
    /**
     * Defines the sorting order of results. Can be "name", "released", "added", "created", "updated", "rating", or "metacritic".
     * For descending order, use a hyphen before the field, e.g., "-released".
     */
    ordering: string;
}
declare class RawgWrapper {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    /**
     * ### This method handles and logs errors that may occur during Axios requests.
     * * If the error is a server response (HTTP error), it displays the HTTP status code, status message, and response details.
     * * If the error is related to the request (e.g., network issues), it shows a message indicating that no response was received from the server.
     * * If the error is related to the request configuration (e.g., URL or parameter issues), it displays the configuration error message.
     * * If the error is not an AxiosError, it shows a generic "unknown error" message along with the error details.
     */
    private handleError;
    /**
     * ### Method responsible for fetching data from a given API endpoint.
     * @param params Additional parameters for the request (optional).
     * @returns The data received from the API, or `undefined` if an error occurs.
     */
    private getDataFromEndpoint;
    roles: {
        /**
         * ### Retrieves the roles of game creators.
         * @param page The page number for the data request (optional).
         * @param pageSize The number of results per page (optional).
         * @returns An object containing the list of creator roles, or `undefined` in case of an error.
         */
        getCreatorRoles: (page?: number, pageSize?: number) => Promise<RawgTypes.CreatorRolesList | undefined>;
    };
    creators: {
        /**
         * ### Retrieves the list of game creators.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of game creators or `undefined` in case of an error.
         */
        getCreatorsList: (page?: number, page_size?: number) => Promise<RawgTypes.CreatorsList | undefined>;
        /**
         * ### Retrieves the details of a specific game creator.
         * @param creatorId The ID or slug of the game creator.
         * @returns The details of the game creator or `undefined` in case of error.
         */
        getCreatorDetails: (creatorId: number | string) => Promise<RawgTypes.CreatorDetails | undefined>;
    };
    developers: {
        /**
         * ### Retrieves the list of game developers.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of game developers or `undefined` in case of an error.
         */
        getDevelopersList: (page?: number, page_size?: number) => Promise<RawgTypes.DevelopersList | undefined>;
        /**
         * ### Retrieves the details of a specific game developer.
         * @param developerId The ID or slug of the game developer.
         * @returns The details of the game developer or `undefined` in case of error.
         */
        getDeveloperDetails: (developerId: number | string) => Promise<RawgTypes.DeveloperDetails | undefined>;
    };
    games: {
        /**
         * ### Retrieves the list of games based on the provided parameters.
         * @param params Query parameters for the game search (optional).
         * @returns A list of games or `undefined` in case of error.
         */
        getGamesList: (params?: Partial<GameQueryParams>) => Promise<RawgTypes.GamesList | undefined>;
        /**
         * ### Retrieves the list of additions (expansions, DLCs, etc.) for a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of additions or `undefined` in case of error.
         */
        getAdditionsList: (gameId: number | string, page?: number, page_size?: number) => Promise<RawgTypes.AdditionsList | undefined>;
        /**
         * ### Retrieves the development team list for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of the development team or `undefined` in case of error.
         */
        getDevelopmentTeamList: (gameId: number | string, ordering?: string, page?: number, page_size?: number) => Promise<RawgTypes.GameDevelopmentTeamList | undefined>;
        /**
         * ### Retrieves the list of games in the same series as a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of games in the same series or `undefined` in case of error.
         */
        getSameSeriesList: (gameId: number | string, page?: number, page_size?: number) => Promise<RawgTypes.GamesSameSeriesList | undefined>;
        /**
         * ### Retrieves the list of parent games through DLCs and additions for a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of parent games or `undefined` in case of error.
         */
        getParentGamesThroughDlcAndAdditionsList: (gameId: number | string, page?: number, page_size?: number) => Promise<RawgTypes.GameParentsForDlcAndEditionsList | undefined>;
        /**
         * ### Retrieves the list of screenshots for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of screenshots or `undefined` in case of error.
         */
        getGameScreenshots: (gameId: number | string, ordering?: string, page?: number, page_size?: number) => Promise<RawgTypes.GameScreenshotsList | undefined>;
        /**
         * ### Retrieves the store links for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of store links or `undefined` in case of error.
         */
        getGameStoreLinks: (gameId: number | string, ordering?: string, page?: number, page_size?: number) => Promise<RawgTypes.GameStoreLinksList | undefined>;
        /**
         * ### Retrieves the details of a specific game.
         * @param gameId The ID or slug of the game.
         * @returns The details of the game or `undefined` in case of error.
         */
        getGameDetails: (gameId: number | string) => Promise<RawgTypes.GameDetailsList | undefined>;
        /**
         * ### Retrieves the list of achievements for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of achievements for the game or `undefined` in case of error.
         */
        getGameAchievements: (gameId: number | string) => Promise<RawgTypes.GameAchievementList | undefined>;
        /**
         * ### Retrieves the list of trailers for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of trailers for the game or `undefined` in case of error.
         */
        getGameTrailers: (gameId: number | string) => Promise<RawgTypes.GameTrailerList | undefined>;
        /**
         * ### Retrieves the recent Reddit posts for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of recent Reddit posts for the game or `undefined` in case of error.
         */
        getGameRecentPostOnReddit: (gameId: number | string) => Promise<RawgTypes.GameRecentPostOnRedditList | undefined>;
        /**
         * ### Retrieves a list of games similar to a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of similar games or `undefined` in case of error.
         */
        getSimilarGames: (gameId: number | string) => Promise<RawgTypes.GameSimilarGamesList | undefined>;
        /**
         * ### Retrieves a list of live Twitch streams for a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of live Twitch streams for the game or `undefined` in case of error.
         */
        getTwitchStreams: (gameId: number | string) => Promise<RawgTypes.GameTwitchStreamsList | undefined>;
        /**
         * ### Retrieves a list of YouTube videos related to a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of YouTube videos for the game or `undefined` in case of error.
         */
        getYoutubeVideos: (gameId: number | string) => Promise<RawgTypes.GameYoutubeVideosList | undefined>;
    };
    genres: {
        /**
         * ### Retrieves the list of game genres.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of genres or `undefined` in case of error.
         */
        getGenresList: (page?: number, page_size?: number, ordering?: number) => Promise<RawgTypes.GenresList | undefined>;
        /**
         * ### Retrieves the details of a specific genre.
         * @param genreId The ID or slug of the genre.
         * @returns The details of the genre or `undefined` in case of error.
         */
        getGenreDetails: (genreId: number | string) => Promise<RawgTypes.GenreDetailsList | undefined>;
    };
    platforms: {
        /**
         * ### Retrieves the list of available platforms.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of platforms or `undefined` in case of error.
         */
        getPlatformsList: (page?: number, page_size?: number, ordering?: string) => Promise<RawgTypes.PlatformList | undefined>;
        /**
         * ### Retrieves the list of parent platforms (main or supporting platforms).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of parent platforms or `undefined` in case of error.
         */
        getPlatformParentList: (page?: number, page_size?: number, ordering?: string) => Promise<RawgTypes.PlatformParentList | undefined>;
        /**
         * ### Retrieves the details of a specific platform.
         * @param platformId The ID or slug of the platform.
         * @returns The details of the platform or `undefined` in case of error.
         */
        getPlatformDetails: (platformId: number | string) => Promise<RawgTypes.PlatformDetailsList | undefined>;
    };
    publishers: {
        /**
         * ### Retrieves the list of available publishers.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of publishers or `undefined` in case of error.
         */
        getPublishersList: (page?: number, page_size?: number) => Promise<RawgTypes.PublishersList | undefined>;
        /**
         * ### Retrieves the details of a specific publisher.
         * @param publisherId The ID or slug of the publisher.
         * @returns The details of the publisher or `undefined` in case of error.
         */
        getPublishersDetails: (publisherId: number | string) => Promise<RawgTypes.PublisherDetailsList | undefined>;
    };
    stores: {
        /**
         * ### Retrieves the list of available stores.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sort order for the results, e.g., by name or date (optional).
         * @returns A list of stores or `undefined` in case of error.
         */
        getStoresList: (page?: number, page_size?: number, ordering?: string) => Promise<RawgTypes.StoresList | undefined>;
        /**
         * ### Retrieves the details of a specific store.
         * @param storeId The ID or slug of the store.
         * @returns The details of the store or `undefined` in case of error.
         */
        getStoreDetails: (storeId: number | string) => Promise<RawgTypes.StoreDetailsList | undefined>;
    };
    tags: {
        /**
         * ### Retrieves the list of available tags.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of tags or `undefined` in case of error.
         */
        getTagsList: (page?: number, page_size?: number) => Promise<RawgTypes.TagsList | undefined>;
        /**
         * ### Retrieves the details of a specific tag.
         * @param tagId The ID or slug of the tag.
         * @returns The details of the tag or `undefined` in case of error.
         */
        getTagDetails: (tagId: number | string) => Promise<RawgTypes.TagsDetailsList | undefined>;
    };
}
export default RawgWrapper;
export { RawgTypes };

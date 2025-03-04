import { CreatorRoles } from "./Creators.js";
/**
 * Represents a short screenshot of a game.
 */
declare interface GameShortScreenshots {
    /**
     * Unique identifier for the screenshot.
     */
    id: number;
    /**
     * URL of the screenshot image.
     */
    image: string;
}
/**
 * Represents the ESRB (Entertainment Software Rating Board) rating of a game.
 */
declare interface ESRBRating {
    /**
     * Unique identifier for the ESRB rating.
     */
    id: number;
    /**
     * Name of the rating.
     */
    name: string;
    /**
     * Slug identifier for the rating (used in URLs and searches).
     */
    slug: string;
}
/**
 * Represents a tag associated with a game.
 */
declare interface GameTags {
    /**
     * Unique identifier for the tag.
     */
    id: number;
    /**
     * Name of the tag.
     */
    name: string;
    /**
     * Slug identifier for the tag (used in URLs and searches).
     */
    slug: string;
    /**
     * Language of the tag.
     */
    language: string;
    /**
     * Number of games associated with the tag.
     */
    games_count: number;
    /**
     * URL for the background image of the tag.
     */
    image_background: string | null;
}
/**
 * Represents a store where the game is available.
 */
declare interface GameStores {
    /**
     * Unique identifier for the store.
     */
    id: number;
    /**
     * Name of the store.
     */
    name: string;
    /**
     * Slug identifier for the store (used in URLs and searches).
     */
    slug: string;
    /**
     * Store domain (if available).
     */
    domain: string;
    /**
     * Number of games available in the store.
     */
    games_count: number;
    /**
     * URL for the background image of the store.
     */
    image_background: string | null;
}
/**
 * Represents a game genre.
 */
declare interface GameGenres {
    /**
     * Unique identifier for the genre.
     */
    id: number;
    /**
     * Name of the genre.
     */
    name: string;
    /**
     * Slug identifier for the genre (used in URLs and searches).
     */
    slug: string;
    /**
     * Number of games associated with the genre.
     */
    games_count: number;
    /**
     * URL for the background image of the genre.
     */
    image_background: string | null;
}
/**
 * Represents the parent platform of a game, like PC, PlayStation, etc.
 */
declare interface GameParentPlatform {
    /**
     * Information about the platform associated with the game.
     */
    platform: {
        /**
         * Unique identifier for the platform.
         */
        id: number;
        /**
         * Name of the platform.
         */
        name: string;
        /**
         * Slug identifier for the platform (used in URLs and searches).
         */
        slug: string;
    };
}
/**
 * Represents the minimum and recommended requirements of a game.
 */
declare interface GameRequirements {
    /**
     * Minimum system requirements to run the game.
     */
    minimum: string;
    /**
     * Recommended system requirements to run the game.
     */
    recommended: string;
}
/**
 * Represents a platform for a game, like PC, PlayStation, etc.
 */
declare interface GamePlatform {
    /**
     * Unique identifier for the platform.
     */
    id: number;
    /**
     * Name of the platform.
     */
    name: string;
    /**
     * Slug identifier for the platform (used in URLs and searches).
     */
    slug: string;
    /**
     * URL for the image of the platform.
     */
    image: string | null;
    /**
     * Release year of the platform.
     */
    year_end: string | null;
    /**
     * Start year of the platform.
     */
    year_start: string | null;
    /**
     * Number of games available on this platform.
     */
    games_count: number;
    /**
     * URL for the background image of the platform.
     */
    image_background: string | null;
}
/**
 * Represents a game platform with additional information such as requirements and release date.
 */
declare interface GamePlatformsList {
    /**
     * Platform associated with the game.
     */
    platform: GamePlatform;
    /**
     * Release date of the game on this platform.
     */
    released_at: string | null;
    /**
     * Minimum requirements to run the game on the platform, in English version.
     */
    requirements_en: GameRequirements | null;
    /**
     * Minimum requirements to run the game on the platform, in Russian version.
     */
    requirements_ru: GameRequirements | null;
}
/**
 * Represents a video clip related to the game.
 */
declare interface GameClip {
    /**
     * Link to the video clip.
     */
    clip: string;
    /**
     * Links for different resolutions of the video clip.
     */
    clips: {
        320: string;
        640: string;
        full: string;
    };
    /**
     * URL for the full video.
     */
    video: string;
    /**
     * URL for the preview of the clip.
     */
    preview: string;
}
/**
 * Represents user game information, such as whether they own the game or not.
 */
declare interface Game_UserGame {
    /**
     * Unique identifier for the game.
     */
    id: number;
    /**
     * Whether the user owns the game or not.
     */
    owned: boolean;
}
/**
 * Represents the status of a game's addition to the catalog, including games the user hasn't played, has beaten, or is currently playing.
 */
declare interface GameAddedByStatus {
    /**
     * Number of games the user hasn't played yet.
     */
    yet?: number;
    /**
     * Number of games the user owns.
     */
    owned?: number;
    /**
     * Number of games the user has beaten.
     */
    beaten?: number;
    /**
     * Number of games the user plans to play.
     */
    toplay?: number;
    /**
     * Number of games the user has dropped.
     */
    dropped?: number;
    /**
     * Number of games the user is currently playing.
     */
    playing?: number;
}
/**
 * Represents the rating of a game, such as vote count and rating percentage.
 */
declare interface GameRatings {
    /**
     * Unique identifier for the rating.
     */
    id: number;
    /**
     * Title of the rating.
     */
    title: string;
    /**
     * Number of votes received for this rating.
     */
    count: number;
    /**
     * Percentage of positive reviews for the game.
     */
    percent: number;
}
/**
 * Represents a game in the list of games returned by the API.
 */
declare interface GamesListResults {
    /**
     * Unique identifier for the game.
     */
    id: number;
    /**
     * Slug identifier for the game (used in URLs and searches).
     */
    slug: string;
    /**
     * Name of the game.
     */
    name: string;
    /**
     * Release date of the game.
     */
    released: string;
    /**
     * Indicates if the game is listed as "to be announced" (TBA).
     */
    tba: boolean;
    /**
     * Background image of the game.
     */
    background_image: string;
    /**
     * Rating of the game.
     */
    rating: number;
    /**
     * The highest possible rating for the game.
     */
    rating_top: number;
    /**
     * The ratings for the game.
     */
    ratings: GameRatings[];
    /**
     * Total number of reviews for the game.
     */
    ratings_count: number;
    /**
     * Review text count for the game.
     */
    reviews_text_count: string;
    /**
     * Number of times the game has been added to a list.
     */
    added: number;
    /**
     * Game addition status by category.
     */
    added_by_status: GameAddedByStatus;
    /**
     * Game rating on Metacritic.
     */
    metacritic: number;
    /**
     * Average playtime for the game.
     */
    playtime: number;
    /**
     * Number of game suggestions.
     */
    suggestions_count: number;
    /**
     * Date of the last update for the game.
     */
    updated: string;
    /**
     * User game information (whether the user owns the game).
     */
    user_game: Game_UserGame | null;
    /**
     * Total review count for the game.
     */
    reviews_count: number;
    /**
     * Saturated color of the game.
     */
    saturated_color: string;
    /**
     * Dominant color of the game.
     */
    dominant_color: string;
    /**
     * Platforms the game is available on.
     */
    platforms: GamePlatformsList[];
    /**
     * Parent platforms for the game.
     */
    parent_platforms: GameParentPlatform[];
    /**
     * Genres of the game.
     */
    genres: GameGenres[];
    /**
     * Stores where the game is available.
     */
    stores: GameStores[];
    /**
     * Video clip of the game.
     */
    clip: GameClip | null;
    /**
     * Tags associated with the game.
     */
    tags: GameTags[];
    /**
     * ESRB rating of the game.
     */
    esrb_rating: ESRBRating;
    /**
     * Short screenshots of the game.
     */
    short_screenshots: GameShortScreenshots[];
}
/**
 * Represents a list of games returned by the API.
 */
declare interface GamesList {
    /**
     * Total number of games in the list.
     */
    count: number;
    /**
     * URL for the next page of games.
     */
    next: string | null;
    /**
     * URL for the previous page of games.
     */
    previous: string | null;
    /**
     * List of game results.
     */
    results: GamesListResults[];
}
/**
 * Represents the details of a game added to the list, including data like rating, platforms, and others.
 */
declare interface AdditionsListResults {
    /**
     * Unique identifier for the game.
     */
    id: number;
    /**
     * Slug identifier for the game (used in URLs and searches).
     */
    slug: string;
    /**
     * Name of the game.
     */
    name: string;
    /**
     * Release date of the game.
     */
    released: string;
    /**
     * Indicates if the game is listed as "to be announced" (TBA).
     */
    tba: boolean;
    /**
     * Background image of the game.
     */
    background_image: string | null;
    /**
     * Rating of the game.
     */
    rating: number;
    /**
     * The highest possible rating for the game.
     */
    rating_top: number;
    /**
     * The ratings for the game.
     */
    ratings: GameRatings[];
    /**
     * Total number of reviews for the game.
     */
    ratings_count: number;
    /**
     * Review text count for the game.
     */
    reviews_text_count: number;
    /**
     * Number of times the game has been added to a list.
     */
    added: number;
    /**
     * Game addition status by category.
     */
    added_by_status: GameAddedByStatus[];
    /**
     * Game rating on Metacritic.
     */
    metacritic: number | null;
    /**
     * Average playtime for the game.
     */
    playtime: number;
    /**
     * Number of game suggestions.
     */
    suggestions_count: number;
    /**
     * Date of the last update for the game.
     */
    updated: string;
    /**
     * User game information (whether the user owns the game).
     */
    user_game: Game_UserGame | null;
    /**
     * Total review count for the game.
     */
    reviews_count: number;
    /**
     * Saturated color of the game.
     */
    saturated_color: string;
    /**
     * Dominant color of the game.
     */
    dominant_color: string;
    /**
     * Platforms the game is available on.
     */
    platforms: GamePlatformsList[];
    /**
     * Parent platforms for the game.
     */
    parent_platforms: GameParentPlatform[];
    /**
     * Genres of the game.
     */
    genres: GameGenres[];
    /**
     * Stores where the game is available.
     */
    stores: GameStores[];
    /**
     * Video clip of the game.
     */
    clip: GameClip | null;
    /**
     * Tags associated with the game.
     */
    tags: GameTags[];
    /**
     * ESRB rating of the game.
     */
    esrb_rating: ESRBRating[] | null;
    /**
     * Short screenshots of the game.
     */
    short_screenshots: GameShortScreenshots[];
}
/**
 * Represents a list of added games, returned by the API.
 */
declare interface AdditionsList {
    /**
     * Total number of games in the list.
     */
    count: number;
    /**
     * URL for the next page of games.
     */
    next: string | null;
    /**
     * URL for the previous page of games.
     */
    previous: string | null;
    /**
     * List of game results.
     */
    results: AdditionsListResults[];
}
/**
 * Represents a game development team, including the games produced and the roles of the creators.
 */
declare interface GameDevelopmentTeamArray {
    /**
     * Unique identifier for the development team.
     */
    id: number;
    /**
     * Name of the development team.
     */
    name: string;
    /**
     * Slug identifier for the team (used in URLs and searches).
     */
    slug: string;
    /**
     * Image of the development team.
     */
    image: string | null;
    /**
     * Background image associated with the development team.
     */
    image_background: string | null;
    /**
     * Number of games developed by the team.
     */
    games_count: number;
    /**
     * List of games developed by the team.
     */
    games: GamesListResults[];
    /**
     * Roles of creators associated with the development team.
     */
    positions: CreatorRoles[];
}
/**
 * Represents a list of game development teams, returned by the API.
 */
declare interface GameDevelopmentTeamList {
    /**
     * Total number of development teams in the list.
     */
    count: number;
    /**
     * URL for the next page of development teams.
     */
    next: string | null;
    /**
     * URL for the previous page of development teams.
     */
    previous: string | null;
    /**
     * List of development team results.
     */
    results: GameDevelopmentTeamArray[];
}
/**
 * Represents a list of games that are part of the same game series.
 */
declare interface GamesSameSeriesList {
    /**
     * Total number of games in the list.
     */
    count: number;
    /**
     * URL for the next page of games in the same series.
     */
    next: string | null;
    /**
     * URL for the previous page of games in the same series.
     */
    previous: string | null;
    /**
     * 🇺🇸 List of games that are part of the same series.
     */
    results: GamesListResults[];
}
/**
 * Represents a list of parent games for DLCs (Downloadable Content) and editions.
 */
declare interface GameParentsForDlcAndEditionsList {
    /**
     * Total number of parent games in the list.
     */
    count: number;
    /**
     * URL for the next page of parent games for DLCs and editions.
     */
    next: string | null;
    /**
     * URL for the previous page of parent games for DLCs and editions.
     */
    previous: string | null;
    /**
     * List of parent games for DLCs and editions.
     */
    results: GamesListResults[];
}
/**
 * Represents a screenshot of a game.
 */
declare interface GameScreenshotsArray {
    /**
     * Unique identifier for the screenshot.
     */
    id: number;
    /**
     * URL for the screenshot image.
     */
    image: string;
    /**
     * Width of the screenshot in pixels.
     */
    width: number;
    /**
     * Height of the screenshot in pixels.
     */
    height: number;
    /**
     * Indicates whether the screenshot has been deleted.
     */
    is_deleted: boolean;
}
/**
 * Represents a list of game screenshots.
 */
declare interface GameScreenshotsList {
    /**
     * Total number of screenshots in the list.
     */
    count: number;
    /**
     * URL for the next page of screenshots.
     */
    next: string | null;
    /**
     * URL for the previous page of screenshots.
     */
    previous: string | null;
    /**
     * List of screenshots.
     */
    results: GameScreenshotsArray[];
}
/**
 * Represents a game link to a specific store.
 */
declare interface GameStoreLinksArray {
    /**
     * Unique identifier for the link.
     */
    id: number;
    /**
     * Identifier of the game related to the link.
     */
    game_id: string;
    /**
     * Identifier of the store where the game is available.
     */
    store_id: string;
    /**
     * URL to the game's store.
     */
    url: string;
}
/**
 * Represents a list of game links to specific stores.
 */
declare interface GameStoreLinksList {
    /**
     * Total number of game store links in the list.
     */
    count: number;
    /**
     * URL for the next page of game links.
     */
    next: string | null;
    /**
     * URL for the previous page of game links.
     */
    previous: string | null;
    /**
     * List of game links to stores.
     */
    results: GameStoreLinksArray[];
}
/**
 * Represents the details of a game's store.
 */
declare interface GameDetails_Store {
    /**
     * Unique identifier of the store link.
     */
    id: number;
    /**
     * URL to the game's store.
     */
    url: string;
    /**
     * Details of the store where the game is available.
     */
    store: {
        /**
         * Unique identifier of the store.
         */
        id: number;
        /**
         * Name of the store.
         */
        name: string;
        /**
         * Slug of the store.
         */
        slug: string;
        /**
         * Domain of the store.
         */
        domain: string;
        /**
         * Number of games available in the store.
         */
        games_count: number;
        /**
         * Background image of the store.
         */
        image_background: string;
    };
}
/**
 * Represents a game publisher.
 */
declare interface GamePublishers {
    /**
     * Unique identifier of the publisher.
     */
    id: number;
    /**
     * Name of the publisher.
     */
    name: string;
    /**
     * Slug of the publisher.
     */
    slug: string;
    /**
     * Number of games published by the publisher.
     */
    games_count: number;
    /**
     * Background image of the publisher.
     */
    image_background: string;
}
/**
 * Represents a game developer.
 */
declare interface GameDevelopers {
    /**
     * Unique identifier of the developer.
     */
    id: number;
    /**
     * Name of the developer.
     */
    name: string;
    /**
     * Slug of the developer.
     */
    slug: string;
    /**
     * Number of games developed by the developer.
     */
    games_count: number;
    /**
     * Background image of the developer.
     */
    image_background: string;
}
/**
 * Represents the Metacritic score of a game.
 */
declare interface GameMetacriticPlatforms {
    /**
     * Metacritic score of the game.
     */
    metascore: number;
    /**
     * URL to the game's page on Metacritic.
     */
    url: string;
}
/**
 * Represents the full details of a specific game.
 */
declare interface GameDetailsList {
    /**
     * Unique identifier of the game.
     */
    id: number;
    /**
     * Slug of the game (part of the URL).
     */
    slug: string;
    /**
     * Name of the game.
     */
    name: string;
    /**
     * Original name of the game.
     */
    name_original: string;
    /**
     * Description of the game.
     */
    description: string;
    /**
     * Metacritic score of the game.
     */
    metacritic: number;
    /**
     * Metacritic platforms' details for the game.
     */
    metacritic_platforms: GameMetacriticPlatforms[];
    /**
     * Release date of the game.
     */
    released: string;
    /**
     * Indicates whether the release is yet to come.
     */
    tba: boolean;
    /**
     * Date of the game's last update.
     */
    updated: string;
    /**
     * Main background image of the game.
     */
    background_image: string;
    /**
     * Additional background image of the game.
     */
    background_image_additional: string;
    /**
     * URL to the official website of the game.
     */
    website: string;
    /**
     * Overall rating of the game.
     */
    rating: number;
    /**
     * Top rating the game can achieve.
     */
    rating_top: number;
    /**
     * Detailed ratings of the game.
     */
    ratings: GameRatings[];
    /**
     * Player reactions to the game, represented as an object where the key is the reaction ID and the value is the number of votes.
     */
    reactions: Record<string, number>;
    /**
     * Number of times the game has been added to lists.
     */
    added: number;
    /**
     * Game addition status (e.g., played, to play, etc.).
     */
    added_by_status: GameAddedByStatus[];
    /**
     * Average playtime.
     */
    playtime: number;
    /**
     * Number of screenshots available for the game.
     */
    screenshots_count: number;
    /**
     * Number of movies (trailers, videos, etc.) of the game.
     */
    movies_count: number;
    /**
     * Number of creators involved in the game.
     */
    creators_count: number;
    /**
     * Number of achievements in the game.
     */
    achievements_count: number;
    /**
     * Number of main achievements of the game.
     */
    parent_achievement_count: number;
    /**
     * URL to the game's subreddit.
     */
    reddit_url: string;
    /**
     * Name of the game's subreddit.
     */
    reddit_name: string;
    /**
     * Description of the game's subreddit.
     */
    reddit_description: string;
    /**
     * Logo of the game's subreddit.
     */
    reddit_logo: string;
    /**
     * Number of interactions on the game's subreddit.
     */
    reddit_count: number;
    /**
     * Number of views on Twitch for the game.
     */
    twitch_count: string;
    /**
     * Number of views on YouTube for the game.
     */
    youtube_count: string;
    /**
     * Count of text reviews about the game.
     */
    reviews_text_count: string;
    /**
     * Number of overall reviews for the game.
     */
    ratings_count: number;
    /**
     * Number of related game suggestions.
     */
    suggestions_count: number;
    /**
     * Alternative names for the game.
     */
    alternative_names: string[];
    /**
     * URL to the game's page on Metacritic.
     */
    metacritic_url: string;
    /**
     * Number of main games related.
     */
    parents_count: number;
    /**
     * Number of related editions of the game.
     */
    additions_count: number;
    /**
     * Number of games in the same series.
     */
    game_series_count: number;
    /**
     * User-specific game information.
     */
    user_game: Game_UserGame | null;
    /**
     * Number of reviews for the game.
     */
    reviews_count: number;
    /**
     * Dominant saturated color in the game's image.
     */
    saturated_color: string;
    /**
     * Dominant color in the game's image.
     */
    dominant_color: string;
    /**
     * Details about the main platforms of the game.
     */
    parent_platforms: GamePlatformsList[];
    /**
     * Details about the platforms for the game.
     */
    platforms: GamePlatformsList[];
    /**
     * Details of stores where the game is available.
     */
    stores: GameDetails_Store[];
    /**
     * Developers of the game.
     */
    developers: GameDevelopers[];
    /**
     * Genres of the game.
     */
    genres: GameGenres[];
    /**
     * Tags related to the game.
     */
    tags: GameTags[];
    /**
     * Publishers of the game.
     */
    publishers: GamePublishers[];
    /**
     * ESRB rating of the game.
     */
    esrb_rating: ESRBRating[] | null;
    /**
     * Video clips related to the game.
     */
    clip: GameClip | null;
    /**
     * Raw text description of the game.
     */
    description_raw: string;
}
/**
 * Represents the list of achievements for a game.
 */
declare interface GameAchievementList {
    /**
     * Unique identifier for the achievement.
     */
    id: number;
    /**
     * Name of the achievement.
     */
    name: string;
    /**
     * Description of the achievement.
     */
    description: string;
    /**
     * Image associated with the achievement.
     */
    image: string;
    /**
     * Percentage of players who unlocked the achievement.
     */
    percent: string;
}
/**
 * Represents the trailers for a game.
 */
declare interface GameTrailerArray {
    /**
     * Unique identifier for the trailer.
     */
    id: number;
    /**
     * Name of the trailer.
     */
    name: string;
    /**
     * URL of the trailer for preview.
     */
    preview: string;
    /**
     * Variants of the trailer in different resolutions.
     */
    data: {
        /**
         * Trailer in 240p, if available.
         */
        240?: string;
        /**
         * Trailer in 360p, if available.
         */
        360?: string;
        /**
         * Trailer in 480p, if available.
         */
        480?: string;
        /**
         * Trailer in the maximum available resolution.
         */
        max?: string;
    };
}
/**
 * Represents the list of trailers for a game.
 */
declare interface GameTrailerList {
    /**
     * Number of trailers in the list.
     */
    count: number;
    /**
     * URL for the next page of trailers, if available.
     */
    next: string | null;
    /**
     * URL for the previous page of trailers, if available.
     */
    previous: string | null;
    /**
     * List of trailers.
     */
    results: GameTrailerArray[];
}
/**
 * Represents a recent post about the game on Reddit.
 */
declare interface GameRecentPostOnRedditArray {
    /**
     * Unique identifier for the post.
     */
    id: number;
    /**
     * Name of the post (usually the title or topic of the post).
     */
    name: string;
    /**
     * Text content of the post.
     */
    text: string;
    /**
     * URL of the image associated with the post (if any).
     */
    image: string;
    /**
     * URL to the post on Reddit.
     */
    url: string;
    /**
     * Username of the person who made the post.
     */
    username: string;
    /**
     * URL to the profile of the user who made the post.
     */
    username_url: string;
    /**
     * Date when the post was created.
     */
    created: string;
}
/**
 * Represents a list of recent posts about the game on Reddit.
 */
declare interface GameRecentPostOnRedditList {
    /**
     * Number of posts in the list.
     */
    count: number;
    /**
     * URL for the next page of posts, if available.
     */
    next: string | null;
    /**
     * URL for the previous page of posts, if available.
     */
    previous: string | null;
    /**
     * List of recent posts about the game on Reddit.
     */
    results: GameRecentPostOnRedditArray[];
}
/**
 * Type that represents a list of games similar to the current game, using the structure of `GameDetailsList`.
 */
declare type GameSimilarGamesList = GameDetailsList;
/**
 * Type that represents a game stream on Twitch, with detailed information such as title, description, view count, and more.
 */
declare interface GameTwitchStreamsList {
    /**
     * Unique ID of the stream on Twitch.
     */
    id: number;
    /**
     * External ID of the stream, used for integration with other platforms.
     */
    external_id: number;
    /**
     * Name of the stream displayed on Twitch.
     */
    name: string;
    /**
     * Description of the stream, providing additional information about the content.
     */
    description: string;
    /**
     * Date and time when the stream was created.
     */
    created: string;
    /**
     * Date and time when the stream was published on Twitch.
     */
    published: string;
    /**
     * URL of the stream's thumbnail image.
     */
    thumbnail: string;
    /**
     * View count of the stream up to the moment.
     */
    view_count: number;
    /**
     * Main language of the stream.
     */
    languague: string;
}
/**
 * Type that represents a YouTube video related to a game, with detailed information such as title, description, view count, and more.
 */
declare interface GameYoutubeVideosList {
    /**
     * Unique ID of the video on YouTube.
     */
    id: number;
    /**
     * External ID of the video on YouTube, typically used in links to identify the video.
     */
    external_id: string;
    /**
     * ID of the channel that published the video.
     */
    channel_id: string;
    /**
     * Title of the channel that published the video.
     */
    channel_title: string;
    /**
     * Name of the video.
     */
    name: string;
    /**
     * Description of the video, providing more information about the content.
     */
    description: string;
    /**
     * Date and time when the video was created.
     */
    created: string;
    /**
     * View count of the video.
     */
    view_count: number;
    /**
     * Comments count on the video.
     */
    comments_count: number;
    /**
     * Like count of the video.
     */
    like_count: number;
    /**
     * Dislike count of the video.
     */
    dislike_count: number;
    /**
     * Favorite count of the video.
     */
    favorite_count: number;
    /**
     * Thumbnails of the video. Contains different image sizes.
     */
    thumbnails: object;
}
export { AdditionsList, GameAchievementList, GameDetailsList, GameDevelopmentTeamList, GameParentsForDlcAndEditionsList, GameScreenshotsList, GamesList, GamesSameSeriesList, GameStoreLinksList, GameTrailerList, GameRecentPostOnRedditList, GameSimilarGamesList, GameTwitchStreamsList, GameYoutubeVideosList };

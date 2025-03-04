"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawgTypes = void 0;
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
const consola_1 = require("consola");
const RawgTypes = __importStar(require("./types"));
exports.RawgTypes = RawgTypes;
class RawgWrapper {
    apiKey;
    baseUrl = "https://api.rawg.io/api";
    constructor(apiKey) {
        if (!apiKey) {
            throw consola_1.consola.warn(chalk_1.default.bold("RAWG API key missing."));
        }
        this.apiKey = apiKey;
    }
    ;
    /**
     * ### This method handles and logs errors that may occur during Axios requests.
     * * If the error is a server response (HTTP error), it displays the HTTP status code, status message, and response details.
     * * If the error is related to the request (e.g., network issues), it shows a message indicating that no response was received from the server.
     * * If the error is related to the request configuration (e.g., URL or parameter issues), it displays the configuration error message.
     * * If the error is not an AxiosError, it shows a generic "unknown error" message along with the error details.
     */
    handleError(error) {
        if (axios_1.default.isAxiosError(error)) {
            if (error.response) {
                consola_1.consola.error(`${chalk_1.default.red(`HTTP Error: ${error.response.status}`)} - ${chalk_1.default.bold(error.response.statusText)}`);
                consola_1.consola.log(`${chalk_1.default.bgBlue(" DETAILS ")} ${JSON.stringify(error.response.data)}`);
            }
            else if (error.request) {
                consola_1.consola.error("Request error. No response was received.");
                consola_1.consola.log(`${chalk_1.default.bgBlue(" DETAILS ")}`, error.request);
            }
            else {
                consola_1.consola.error("Error configuring the request.");
                consola_1.consola.log(`${chalk_1.default.bgBlue(" DETAILS ")}`, error.message);
            }
        }
        else {
            consola_1.consola.error("Unknown error.");
            consola_1.consola.log(`${chalk_1.default.bgBlue(" DETAILS ")}`, error);
        }
    }
    ;
    /**
     * ### Method responsible for fetching data from a given API endpoint.
     * @param params Additional parameters for the request (optional).
     * @returns The data received from the API, or `undefined` if an error occurs.
     */
    async getDataFromEndpoint(endpoint, params) {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}${endpoint}`, {
                params: {
                    key: this.apiKey,
                    ...params,
                },
            });
            return response.data;
        }
        catch (error) {
            this.handleError(error);
            return undefined;
        }
    }
    ;
    roles = {
        /**
         * ### Retrieves the roles of game creators.
         * @param page The page number for the data request (optional).
         * @param pageSize The number of results per page (optional).
         * @returns An object containing the list of creator roles, or `undefined` in case of an error.
         */
        getCreatorRoles: async (page, pageSize) => {
            return this.getDataFromEndpoint('/creator-roles', { page, pageSize });
        }
    };
    creators = {
        /**
         * ### Retrieves the list of game creators.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of game creators or `undefined` in case of an error.
         */
        getCreatorsList: async (page, page_size) => {
            return this.getDataFromEndpoint('/creators', { page, page_size });
        },
        /**
         * ### Retrieves the details of a specific game creator.
         * @param creatorId The ID or slug of the game creator.
         * @returns The details of the game creator or `undefined` in case of error.
         */
        getCreatorDetails: async (creatorId) => {
            return this.getDataFromEndpoint(`/creators/${creatorId}`);
        }
    };
    developers = {
        /**
         * ### Retrieves the list of game developers.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of game developers or `undefined` in case of an error.
         */
        getDevelopersList: async (page, page_size) => {
            return this.getDataFromEndpoint('/developers', { page, page_size });
        },
        /**
         * ### Retrieves the details of a specific game developer.
         * @param developerId The ID or slug of the game developer.
         * @returns The details of the game developer or `undefined` in case of error.
         */
        getDeveloperDetails: async (developerId) => {
            return this.getDataFromEndpoint(`/developers/${developerId}`);
        }
    };
    games = {
        /**
         * ### Retrieves the list of games based on the provided parameters.
         * @param params Query parameters for the game search (optional).
         * @returns A list of games or `undefined` in case of error.
         */
        getGamesList: async (params) => {
            return this.getDataFromEndpoint('/games', { params });
        },
        /**
         * ### Retrieves the list of additions (expansions, DLCs, etc.) for a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of additions or `undefined` in case of error.
         */
        getAdditionsList: async (gameId, page, page_size) => {
            return this.getDataFromEndpoint(`/games/${gameId}/additions`, { page, page_size });
        },
        /**
         * ### Retrieves the development team list for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of the development team or `undefined` in case of error.
         */
        getDevelopmentTeamList: async (gameId, ordering, page, page_size) => {
            return this.getDataFromEndpoint(`/games/${gameId}/development-team`, { page, page_size, ordering });
        },
        /**
         * ### Retrieves the list of games in the same series as a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of games in the same series or `undefined` in case of error.
         */
        getSameSeriesList: async (gameId, page, page_size) => {
            return this.getDataFromEndpoint(`/games/${gameId}/game-series`, { page, page_size });
        },
        /**
         * ### Retrieves the list of parent games through DLCs and additions for a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of parent games or `undefined` in case of error.
         */
        getParentGamesThroughDlcAndAdditionsList: async (gameId, page, page_size) => {
            return this.getDataFromEndpoint(`/games/${gameId}/parent-games`, { page, page_size });
        },
        /**
         * ### Retrieves the list of screenshots for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of screenshots or `undefined` in case of error.
         */
        getGameScreenshots: async (gameId, ordering, page, page_size) => {
            return this.getDataFromEndpoint(`/games/${gameId}/screenshots`, { page, page_size, ordering });
        },
        /**
         * ### Retrieves the store links for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of store links or `undefined` in case of error.
         */
        getGameStoreLinks: async (gameId, ordering, page, page_size) => {
            return this.getDataFromEndpoint(`/games/${gameId}/stores`, { page, page_size, ordering });
        },
        /**
         * ### Retrieves the details of a specific game.
         * @param gameId The ID or slug of the game.
         * @returns The details of the game or `undefined` in case of error.
         */
        getGameDetails: async (gameId) => {
            return this.getDataFromEndpoint(`/games/${gameId}`);
        },
        /**
         * ### Retrieves the list of achievements for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of achievements for the game or `undefined` in case of error.
         */
        getGameAchievements: async (gameId) => {
            return this.getDataFromEndpoint(`/games/${gameId}/achievements`);
        },
        /**
         * ### Retrieves the list of trailers for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of trailers for the game or `undefined` in case of error.
         */
        getGameTrailers: async (gameId) => {
            return this.getDataFromEndpoint(`/games/${gameId}/movies`);
        },
        /**
         * ### Retrieves the recent Reddit posts for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of recent Reddit posts for the game or `undefined` in case of error.
         */
        getGameRecentPostOnReddit: async (gameId) => {
            return this.getDataFromEndpoint(`/games/${gameId}/reddit`);
        },
        /**
         * ### Retrieves a list of games similar to a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of similar games or `undefined` in case of error.
         */
        getSimilarGames: async (gameId) => {
            return this.getDataFromEndpoint(`/games/${gameId}/suggested`);
        },
        /**
         * ### Retrieves a list of live Twitch streams for a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of live Twitch streams for the game or `undefined` in case of error.
         */
        getTwitchStreams: async (gameId) => {
            return this.getDataFromEndpoint(`/games/${gameId}/twitch`);
        },
        /**
         * ### Retrieves a list of YouTube videos related to a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of YouTube videos for the game or `undefined` in case of error.
         */
        getYoutubeVideos: async (gameId) => {
            return this.getDataFromEndpoint(`/games/${gameId}/youtube`);
        }
    };
    genres = {
        /**
         * ### Retrieves the list of game genres.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of genres or `undefined` in case of error.
         */
        getGenresList: async (page, page_size, ordering) => {
            return this.getDataFromEndpoint('/genres', { page, page_size, ordering });
        },
        /**
         * ### Retrieves the details of a specific genre.
         * @param genreId The ID or slug of the genre.
         * @returns The details of the genre or `undefined` in case of error.
         */
        getGenreDetails: async (genreId) => {
            return this.getDataFromEndpoint(`/genres/${genreId}`);
        }
    };
    platforms = {
        /**
         * ### Retrieves the list of available platforms.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of platforms or `undefined` in case of error.
         */
        getPlatformsList: async (page, page_size, ordering) => {
            return this.getDataFromEndpoint('/platforms', { page, page_size, ordering });
        },
        /**
         * ### Retrieves the list of parent platforms (main or supporting platforms).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of parent platforms or `undefined` in case of error.
         */
        getPlatformParentList: async (page, page_size, ordering) => {
            return this.getDataFromEndpoint('/platforms/lists/parents', { page, page_size, ordering });
        },
        /**
         * ### Retrieves the details of a specific platform.
         * @param platformId The ID or slug of the platform.
         * @returns The details of the platform or `undefined` in case of error.
         */
        getPlatformDetails: async (platformId) => {
            return this.getDataFromEndpoint(`/platforms/${platformId}`);
        }
    };
    publishers = {
        /**
         * ### Retrieves the list of available publishers.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of publishers or `undefined` in case of error.
         */
        getPublishersList: async (page, page_size) => {
            return this.getDataFromEndpoint('/publishers', { page, page_size });
        },
        /**
         * ### Retrieves the details of a specific publisher.
         * @param publisherId The ID or slug of the publisher.
         * @returns The details of the publisher or `undefined` in case of error.
         */
        getPublishersDetails: async (publisherId) => {
            return this.getDataFromEndpoint(`/publishers/${publisherId}`);
        }
    };
    stores = {
        /**
         * ### Retrieves the list of available stores.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sort order for the results, e.g., by name or date (optional).
         * @returns A list of stores or `undefined` in case of error.
         */
        getStoresList: async (page, page_size, ordering) => {
            return this.getDataFromEndpoint('/stores', { page, page_size, ordering });
        },
        /**
         * ### Retrieves the details of a specific store.
         * @param storeId The ID or slug of the store.
         * @returns The details of the store or `undefined` in case of error.
         */
        getStoreDetails: async (storeId) => {
            return this.getDataFromEndpoint(`/stores/${storeId}`);
        }
    };
    tags = {
        /**
         * ### Retrieves the list of available tags.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of tags or `undefined` in case of error.
         */
        getTagsList: async (page, page_size) => {
            return this.getDataFromEndpoint('/tags', { page, page_size });
        },
        /**
         * ### Retrieves the details of a specific tag.
         * @param tagId The ID or slug of the tag.
         * @returns The details of the tag or `undefined` in case of error.
         */
        getTagDetails: async (tagId) => {
            return this.getDataFromEndpoint(`/tags/${tagId}`);
        }
    };
}
exports.default = RawgWrapper;

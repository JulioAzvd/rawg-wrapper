import * as RawgTypes from "./types";
declare interface GameQueryParams {
    /**
     * 🇧🇷 Número da página dentro do conjunto paginado de resultados.
     *
     * 🇺🇸 Page number within the paginated set of results.
     */
    page: number;
    /**
     * 🇧🇷 Número de resultados por página.
     *
     * 🇺🇸 Number of results per page.
     */
    page_size: number;
    /**
     * 🇧🇷 Consulta de busca para encontrar jogos pelo nome.
     *
     * 🇺🇸 Search query to find games by name.
     */
    search: string;
    /**
     * 🇧🇷 Desativa a busca aproximada para a consulta, tornando-a mais precisa.
     *
     * 🇺🇸 Disables fuzzy search for the query, making it more precise.
     */
    search_precise: boolean;
    /**
     * 🇧🇷 Marca a consulta de busca como exata, exigindo correspondência exata no nome.
     *
     * 🇺🇸 Marks the search query as exact, requiring an exact name match.
     */
    search_exact: boolean;
    /**
     * 🇧🇷 Filtra por plataformas principais (parent platforms). Exemplo: "1,2,3".
     *
     * 🇺🇸 Filters by parent platforms. Example: "1,2,3".
     */
    parent_platforms: string;
    /**
     * 🇧🇷 Filtra por plataformas específicas. Exemplo: "4,5".
     *
     * 🇺🇸 Filters by specific platforms. Example: "4,5".
     */
    platforms: string;
    /**
     * 🇧🇷 Filtra por lojas onde os jogos estão disponíveis. Exemplo: "5,6".
     *
     * 🇺🇸 Filters by stores where games are available. Example: "5,6".
     */
    stores: string;
    /**
     * 🇧🇷 Filtra por desenvolvedores. Pode ser um ID ou nome. Exemplo: "1612,18893" ou "valve-software".
     *
     * 🇺🇸 Filters by developers. Can be an ID or name. Example: "1612,18893" or "valve-software".
     */
    developers: string;
    /**
     * 🇧🇷 Filtra por publicadoras. Pode ser um ID ou nome. Exemplo: "354,20987" ou "electronic-arts".
     *
     * 🇺🇸 Filters by publishers. Can be an ID or name. Example: "354,20987" or "electronic-arts".
     */
    publishers: string;
    /**
     * 🇧🇷 Filtra por gêneros. Pode ser um ID ou nome. Exemplo: "4,51" ou "action,rpg".
     *
     * 🇺🇸 Filters by genres. Can be an ID or name. Example: "4,51" or "action,rpg".
     */
    genres: string;
    /**
     * 🇧🇷 Filtra por tags associadas ao jogo. Exemplo: "31,7" ou "singleplayer,multiplayer".
     *
     * 🇺🇸 Filters by tags associated with the game. Example: "31,7" or "singleplayer,multiplayer".
     */
    tags: string;
    /**
     * 🇧🇷 Filtra por criadores de conteúdo. Pode ser um ID ou nome. Exemplo: "78,28" ou "cris-valasco".
     *
     * 🇺🇸 Filters by content creators. Can be an ID or name. Example: "78,28" or "cris-valasco".
     */
    creators: string;
    /**
     * 🇧🇷 Filtra por data de lançamento. Exemplo: "2010-01-01,2018-12-31".
     *
     * 🇺🇸 Filters by release date. Example: "2010-01-01,2018-12-31".
     */
    dates: string;
    /**
     * 🇧🇷 Filtra por data de atualização. Exemplo: "2020-12-01,2020-12-31".
     *
     * 🇺🇸 Filters by last updated date. Example: "2020-12-01,2020-12-31".
     */
    updated: string;
    /**
     * 🇧🇷 Filtra por número de plataformas em que o jogo está disponível. Exemplo: "1".
     *
     * 🇺🇸 Filters by the number of platforms the game is available on. Example: "1".
     */
    platforms_count: number;
    /**
     * 🇧🇷 Filtra por pontuação no Metacritic. Exemplo: "80,100".
     *
     * 🇺🇸 Filters by Metacritic score. Example: "80,100".
     */
    metacritic: string;
    /**
     * 🇧🇷 Exclui jogos de uma coleção específica. Exemplo: "123".
     *
     * 🇺🇸 Excludes games from a specific collection. Example: "123".
     */
    exclude_collection: number;
    /**
     * 🇧🇷 Exclui DLCs e expansões dos resultados.
     *
     * 🇺🇸 Excludes DLCs and expansions from the results.
     */
    exclude_additions: boolean;
    /**
     * 🇧🇷 Exclui jogos que possuem DLCs ou expansões.
     *
     * 🇺🇸 Excludes games that have DLCs or expansions.
     */
    exclude_parents: boolean;
    /**
     * 🇧🇷 Exclui jogos que fazem parte de uma série.
     *
     * 🇺🇸 Excludes games that are part of a series.
     */
    exclude_game_series: boolean;
    /**
     * 🇧🇷 Exclui jogos disponíveis em lojas específicas. Exemplo: "5,6".
     *
     * 🇺🇸 Excludes games available in specific stores. Example: "5,6".
     */
    exclude_stores: string;
    /**
     * 🇧🇷 Define a ordenação dos resultados. Pode ser por "name", "released", "added", "created", "updated", "rating" ou "metacritic".
     * Para ordem decrescente, use um hífen antes do campo, ex: "-released".
     *
     * 🇺🇸 Defines the sorting order of results. Can be "name", "released", "added", "created", "updated", "rating", or "metacritic".
     * For descending order, use a hyphen before the field, e.g., "-released".
     */
    ordering: string;
}
declare class RawgWrapper {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    /**
     * 🇧🇷 Método responsável por tratar e exibir erros que possam ocorrer durante as requisições feitas com o Axios.
     * * Caso o erro seja uma resposta do servidor (erro HTTP), ele exibe o código de status HTTP, a mensagem de erro e os detalhes da resposta.
     * * Se o erro for relacionado à requisição (ex.: problemas de rede), exibe uma mensagem indicando que não houve resposta do servidor.
     * * Se o erro for relacionado à configuração da requisição (erro na configuração da URL, parâmetros, etc.), exibe a mensagem de erro da configuração.
     * * Caso o erro não seja um AxiosError, exibe uma mensagem padrão de "erro desconhecido" junto com os detalhes do erro.
     *
     * 🇺🇸 This method handles and logs errors that may occur during Axios requests.
     * * If the error is a server response (HTTP error), it displays the HTTP status code, status message, and response details.
     * * If the error is related to the request (e.g., network issues), it shows a message indicating that no response was received from the server.
     * * If the error is related to the request configuration (e.g., URL or parameter issues), it displays the configuration error message.
     * * If the error is not an AxiosError, it shows a generic "unknown error" message along with the error details.
     */
    private handleError(error: unknown): void;
    /**
     * 🇧🇷 Método responsável por obter dados de um endpoint da API.
     *
     * Este método faz uma requisição GET para o endpoint fornecido, passando a chave da API e parâmetros adicionais, se houver. Se a requisição for bem-sucedida, ele retorna os dados recebidos da API no formato esperado. Caso ocorra um erro, o método chama o manipulador de erro e retorna `undefined`.
     * @param endpoint O endpoint da API que será consultado.
     * @param params Parâmetros adicionais para a requisição (opcional).
     * @returns Os dados recebidos da API, ou `undefined` se houver um erro.
     *
     * 🇺🇸 This method is responsible for fetching data from a given API endpoint.
     *
     * The method performs a GET request to the provided endpoint, passing the API key and any additional parameters if provided. If the request is successful, it returns the data received from the API in the expected format. In case of an error, the method calls the error handler and returns `undefined`.
     * @param endpoint The API endpoint to be queried.
     * @param params Additional parameters for the request (optional).
     * @returns The data received from the API, or `undefined` if an error occurs.
     */
    private getDataFromEndpoint<T>(endpoint: string, params?: object): Promise<T | undefined>;
    roles: {
        /**
         * ### 🇧🇷 Obtém as funções dos criadores de jogos.
         * @param page Número da página para a requisição de dados (opcional).
         * @param pageSize Número de resultados por página (opcional).
         * @returns Um objeto com a lista das funções dos criadores ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the roles of game creators.
         * @param page The page number for the data request (optional).
         * @param pageSize The number of results per page (optional).
         * @returns An object containing the list of creator roles, or `undefined` in case of an error.
         */
        getCreatorRoles: (page?: number, pageSize?: number) => Promise<RawgTypes.CreatorRolesList | undefined>;
    };
    creators: {
        /**
         * 🇧🇷 Obtém a lista de criadores de jogos.
         *
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de criadores de jogos ou `undefined` em caso de erro.
         *
         * 🇺🇸 Retrieves the list of game creators.
         *
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of game creators or `undefined` in case of an error.
         */
        getCreatorsList: (page?: number, page_size?: number) => Promise<RawgTypes.CreatorsList | undefined>;
        /**
         * 🇧🇷 Obtém os detalhes de um criador de jogos específico.
         *
         * @param creatorId ID ou slug do criador de jogos.
         * @returns Detalhes do criador de jogos ou `undefined` em caso de erro.
         *
         * 🇺🇸 Retrieves the details of a specific game creator.
         *
         * @param creatorId The ID or slug of the game creator.
         * @returns The details of the game creator or `undefined` in case of error.
         */
        getCreatorDetails: (creatorId: number | string) => Promise<RawgTypes.CreatorDetails | undefined>;
    };
    developers: {
        /**
         * 🇧🇷 Obtém a lista de desenvolvedores de jogos.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de desenvolvedores de jogos ou `undefined` em caso de erro.
         *
         * 🇺🇸 Retrieves the list of game developers.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of game developers or `undefined` in case of an error.
         */
        getDevelopersList: (page?: number, page_size?: number) => Promise<RawgTypes.DevelopersList | undefined>;
        /**
         * 🇧🇷 Obtém os detalhes de um desenvolvedor de jogos específico.
         *
         * @param developerId ID ou slug do desenvolvedor de jogos.
         * @returns Detalhes do desenvolvedor de jogos ou `undefined` em caso de erro.
         *
         * 🇺🇸 Retrieves the details of a specific game developer.
         *
         * @param developerId The ID or slug of the game developer.
         * @returns The details of the game developer or `undefined` in case of error.
         */
        getDeveloperDetails: (developerId: number | string) => Promise<RawgTypes.DeveloperDetails | undefined>;
    };
    games: {
        /**
         * ### 🇧🇷 Obtém a lista de jogos com base nos parâmetros fornecidos.
         * @param params Parâmetros de consulta para a busca de jogos (opcional).
         * @returns Lista de jogos ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of games based on the provided parameters.
         * @param params Query parameters for the game search (optional).
         * @returns A list of games or `undefined` in case of error.
         */
        getGamesList: (params?: Partial<GameQueryParams>) => Promise<RawgTypes.GamesList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista de adições (expansões, DLCs, etc.) de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de adições ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of additions (expansions, DLCs, etc.) for a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of additions or `undefined` in case of error.
         */
        getAdditionsList: (gameId: number | string, page?: number, page_size?: number) => Promise<RawgTypes.AdditionsList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista da equipe de desenvolvimento de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @param ordering Ordenação dos resultados (opcional).
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista da equipe de desenvolvimento ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the development team list for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of the development team or `undefined` in case of error.
         */
        getDevelopmentTeamList: (gameId: number | string, ordering?: string, page?: number, page_size?: number) => Promise<RawgTypes.GameDevelopmentTeamList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista de jogos da mesma série de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de jogos da mesma série ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of games in the same series as a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of games in the same series or `undefined` in case of error.
         */
        getSameSeriesList: (gameId: number | string, page?: number, page_size?: number) => Promise<RawgTypes.GamesSameSeriesList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista de jogos pais através de DLCs e adições de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de jogos pais ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of parent games through DLCs and additions for a specific game.
         * @param gameId The ID or slug of the game.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of parent games or `undefined` in case of error.
         */
        getParentGamesThroughDlcAndAdditionsList: (gameId: number | string, page?: number, page_size?: number) => Promise<RawgTypes.GameParentsForDlcAndEditionsList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista de capturas de tela de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @param ordering Ordenação dos resultados (opcional).
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de capturas de tela ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of screenshots for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of screenshots or `undefined` in case of error.
         */
        getGameScreenshots: (gameId: number | string, ordering?: string, page?: number, page_size?: number) => Promise<RawgTypes.GameScreenshotsList | undefined>;
        /**
         * ### 🇧🇷 Obtém os links de lojas para um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @param ordering Ordenação dos resultados (opcional).
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de links de lojas ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the store links for a specific game.
         * @param gameId The ID or slug of the game.
         * @param ordering Sorting of the results (optional).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of store links or `undefined` in case of error.
         */
        getGameStoreLinks: (gameId: number | string, ordering?: string, page?: number, page_size?: number) => Promise<RawgTypes.GameStoreLinksList | undefined>;
        /**
         * ### 🇧🇷 Obtém os detalhes de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @returns Detalhes do jogo ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the details of a specific game.
         * @param gameId The ID or slug of the game.
         * @returns The details of the game or `undefined` in case of error.
         */
        getGameDetails: (gameId: number | string) => Promise<RawgTypes.GameDetailsList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista de conquistas de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @returns Lista de conquistas do jogo ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of achievements for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of achievements for the game or `undefined` in case of error.
         */
        getGameAchievements: (gameId: number | string) => Promise<RawgTypes.GameAchievementList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista de trailers de um jogo específico.
         * @param gameId ID ou slug do jogo.
         * @returns Lista de trailers do jogo ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of trailers for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of trailers for the game or `undefined` in case of error.
         */
        getGameTrailers: (gameId: number | string) => Promise<RawgTypes.GameTrailerList | undefined>;
        /**
         * ### 🇧🇷 Obtém as postagens recentes sobre um jogo no Reddit.
         * @param gameId ID ou slug do jogo.
         * @returns Lista de postagens recentes sobre o jogo no Reddit ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the recent Reddit posts for a specific game.
         * @param gameId The ID or slug of the game.
         * @returns A list of recent Reddit posts for the game or `undefined` in case of error.
         */
        getGameRecentPostOnReddit: (gameId: number | string) => Promise<RawgTypes.GameRecentPostOnRedditList | undefined>;
        /**
         * ### 🇧🇷 Obtém uma lista de jogos semelhantes a um jogo específico (⭐ recurso premium).
         * @param gameId ID ou slug do jogo.
         * @returns Lista de jogos semelhantes ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves a list of games similar to a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of similar games or `undefined` in case of error.
         */
        getSimilarGames: (gameId: number | string) => Promise<RawgTypes.GameSimilarGamesList | undefined>;
        /**
         * ### 🇧🇷 Obtém uma lista de streams ao vivo no Twitch para um jogo específico (⭐ recurso premium).
         * @param gameId ID ou slug do jogo.
         * @returns Lista de streams no Twitch do jogo ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves a list of live Twitch streams for a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of live Twitch streams for the game or `undefined` in case of error.
         */
        getTwitchStreams: (gameId: number | string) => Promise<RawgTypes.GameTwitchStreamsList | undefined>;
        /**
         * ### 🇧🇷 Obtém uma lista de vídeos do YouTube relacionados a um jogo específico (⭐ recurso premium).
         * @param gameId ID ou slug do jogo.
         * @returns Lista de vídeos do YouTube do jogo ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves a list of YouTube videos related to a specific game (⭐ premium feature).
         * @param gameId The ID or slug of the game.
         * @returns A list of YouTube videos for the game or `undefined` in case of error.
         */
        getYoutubeVideos: (gameId: number | string) => Promise<RawgTypes.GameYoutubeVideosList | undefined>;
    };
    genres: {
        /**
         * ### 🇧🇷 Obtém a lista de gêneros de jogos.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @param ordering Ordenação dos resultados (opcional).
         * @returns Lista de gêneros ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of game genres.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of genres or `undefined` in case of error.
         */
        getGenresList: (page?: number, page_size?: number, ordering?: number) => Promise<RawgTypes.GenresList | undefined>;
        /**
         * ### 🇧🇷 Obtém os detalhes de um gênero específico.
         * @param genreId ID ou slug do gênero.
         * @returns Detalhes do gênero ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the details of a specific genre.
         * @param genreId The ID or slug of the genre.
         * @returns The details of the genre or `undefined` in case of error.
         */
        getGenreDetails: (genreId: number | string) => Promise<RawgTypes.GenreDetailsList | undefined>;
    };
    platforms: {
        /**
         * ### 🇧🇷 Obtém a lista de plataformas disponíveis.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @param ordering Ordenação dos resultados (opcional).
         * @returns Lista de plataformas ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of available platforms.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of platforms or `undefined` in case of error.
         */
        getPlatformsList: (page?: number, page_size?: number, ordering?: string) => Promise<RawgTypes.PlatformList | undefined>;
        /**
         * ### 🇧🇷 Obtém a lista de plataformas parentais (plataformas principais ou de suporte).
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @param ordering Ordenação dos resultados (opcional).
         * @returns Lista de plataformas parentais ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of parent platforms (main or supporting platforms).
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sorting of the results (optional).
         * @returns A list of parent platforms or `undefined` in case of error.
         */
        getPlatformParentList: (page?: number, page_size?: number, ordering?: string) => Promise<RawgTypes.PlatformParentList | undefined>;
        /**
         * ### 🇧🇷 Obtém os detalhes de uma plataforma específica.
         * @param platformId ID ou slug da plataforma.
         * @returns Detalhes da plataforma ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the details of a specific platform.
         * @param platformId The ID or slug of the platform.
         * @returns The details of the platform or `undefined` in case of error.
         */
        getPlatformDetails: (platformId: number | string) => Promise<RawgTypes.PlatformDetailsList | undefined>;
    };
    publishers: {
        /**
         * ### 🇧🇷 Obtém a lista de publicadoras disponíveis.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de publicadoras ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of available publishers.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of publishers or `undefined` in case of error.
         */
        getPublishersList: (page?: number, page_size?: number) => Promise<RawgTypes.PublishersList | undefined>;
        /**
         * ### 🇧🇷 Obtém os detalhes de uma publicadora específica.
         * @param publisherId ID ou slug da publicadora.
         * @returns Detalhes da publicadora ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the details of a specific publisher.
         * @param publisherId The ID or slug of the publisher.
         * @returns The details of the publisher or `undefined` in case of error.
         */
        getPublishersDetails: (publisherId: number | string) => Promise<RawgTypes.PublisherDetailsList | undefined>;
    };
    stores: {
        /**
         * ### 🇧🇷 Obtém a lista de lojas disponíveis.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @param ordering Ordenação dos resultados, por exemplo, por nome ou data (opcional).
         * @returns Lista de lojas ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of available stores.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @param ordering Sort order for the results, e.g., by name or date (optional).
         * @returns A list of stores or `undefined` in case of error.
         */
        getStoresList: (page?: number, page_size?: number, ordering?: string) => Promise<RawgTypes.StoresList | undefined>;
        /**
         * ### 🇧🇷 Obtém os detalhes de uma loja específica.
         * @param storeId ID ou slug da loja.
         * @returns Detalhes da loja ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the details of a specific store.
         * @param storeId The ID or slug of the store.
         * @returns The details of the store or `undefined` in case of error.
         */
        getStoreDetails: (storeId: number | string) => Promise<RawgTypes.StoreDetailsList | undefined>;
    };
    tags: {
        /**
         * ### 🇧🇷 Obtém a lista de tags disponíveis.
         * @param page Número da página dentro do conjunto paginado de resultados (opcional).
         * @param page_size Número de resultados por página (opcional).
         * @returns Lista de tags ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the list of available tags.
         * @param page The page number within the paginated results (optional).
         * @param page_size The number of results per page (optional).
         * @returns A list of tags or `undefined` in case of error.
         */
        getTagsList: (page?: number, page_size?: number) => Promise<RawgTypes.TagsList | undefined>;
        /**
         * ### 🇧🇷 Obtém os detalhes de uma tag específica.
         * @param tagId ID ou slug da tag.
         * @returns Detalhes da tag ou `undefined` em caso de erro.
         *
         * ### 🇺🇸 Retrieves the details of a specific tag.
         * @param tagId The ID or slug of the tag.
         * @returns The details of the tag or `undefined` in case of error.
         */
        getTagDetails: (tagId: number | string) => Promise<RawgTypes.TagsDetailsList | undefined>;
    };
}
export default RawgWrapper;

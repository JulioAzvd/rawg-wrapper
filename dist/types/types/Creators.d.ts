/**
 * Type that represents a creator's role in the RAWG API, such as "developer", "designer", etc.
 */
declare interface CreatorRoles {
    /**
     * 🇧🇷 ID único para a função do criador.
     *
     * 🇺🇸 Unique ID for the creator's role.
     */
    id: number;
    /**
     * 🇧🇷 Nome da função do criador.
     *
     * 🇺🇸 Name of the creator's role.
     */
    name: string;
    /**
     * 🇧🇷 Slug (identificador único em URL) da função do criador.
     *
     * 🇺🇸 Slug (unique URL identifier) for the creator's role.
     */
    slug: string;
}
/**
 * Type that represents the API response for the list of creator roles.
 */
declare interface CreatorRolesList {
    /**
     * 🇧🇷 Contagem de funções de criadores retornadas.
     *
     * 🇺🇸 Count of creator roles returned.
     */
    count: number;
    /**
     * 🇧🇷 Link para a próxima página de resultados (se houver).
     *
     * 🇺🇸 Link to the next page of results (if any).
     */
    next: string | null;
    /**
     * 🇧🇷 Link para a página anterior de resultados (se houver).
     *
     * 🇺🇸 Link to the previous page of results (if any).
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de funções de criadores.
     *
     * 🇺🇸 List of creator roles.
     */
    results: CreatorRoles[];
}
/**
 * Type that represents a game creator in the RAWG API, with basic information like name, image, and the count of games created.
 */
declare interface Creator {
    /**
     * 🇧🇷 ID único do criador.
     *
     * 🇺🇸 Unique ID of the creator.
     */
    id: number;
    /**
     * 🇧🇷 Nome do criador.
     *
     * 🇺🇸 Name of the creator.
     */
    name: string;
    /**
     * 🇧🇷 Slug (identificador único em URL) do criador.
     *
     * 🇺🇸 Slug (unique URL identifier) of the creator.
     */
    slug: string;
    /**
     * 🇧🇷 URL da imagem do criador.
     *
     * 🇺🇸 URL of the creator's image.
     */
    image: string;
    /**
     * 🇧🇷 URL da imagem de fundo do criador.
     *
     * 🇺🇸 URL of the creator's background image.
     */
    image_background: string;
    /**
     * 🇧🇷 Contagem de jogos criados pelo criador.
     *
     * 🇺🇸 Count of games created by the creator.
     */
    game_count: number;
}
/**
 * Type that represents the list of creators, with pagination.
 */
declare interface CreatorsList {
    /**
     * 🇧🇷 Contagem total de criadores retornados.
     *
     * 🇺🇸 Total count of creators returned.
     */
    count: number;
    /**
     * 🇧🇷 Link para a próxima página de resultados (se houver).
     *
     * 🇺🇸 Link to the next page of results (if any).
     */
    next: string | null;
    /**
     * 🇧🇷 Link para a página anterior de resultados (se houver).
     *
     * 🇺🇸 Link to the previous page of results (if any).
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de criadores com detalhes adicionais.
     *
     * 🇺🇸 List of creators with additional details.
     */
    results: CreatorDetailsFromCreatorsList[];
}
/**
 * Type that represents the details of a game creator in the RAWG API.
 */
declare interface CreatorDetails {
    /**
     * 🇧🇷 ID único do criador.
     *
     * 🇺🇸 Unique ID of the creator.
     */
    id: number;
    /**
     * 🇧🇷 Nome do criador.
     *
     * 🇺🇸 Name of the creator.
     */
    name: string;
    /**
     * 🇧🇷 Slug (identificador único em URL) do criador.
     *
     * 🇺🇸 Slug (unique URL identifier) of the creator.
     */
    slug: string;
    /**
     * 🇧🇷 URL da imagem do criador.
     *
     * 🇺🇸 URL of the creator's image.
     */
    image: string;
    /**
     * 🇧🇷 URL da imagem de fundo do criador.
     *
     * 🇺🇸 URL of the creator's background image.
     */
    image_background: string;
    /**
     * 🇧🇷 Descrição do criador.
     *
     * 🇺🇸 Description of the creator.
     */
    description: string;
    /**
     * 🇧🇷 Contagem de jogos criados pelo criador.
     *
     * 🇺🇸 Count of games created by the creator.
     */
    game_count: number;
    /**
     * 🇧🇷 Contagem de avaliações feitas pelo criador.
     *
     * 🇺🇸 Count of reviews written by the creator.
     */
    reviews_count: number;
    /**
     * 🇧🇷 Avaliação média do criador.
     *
     * 🇺🇸 Average rating of the creator.
     */
    rating: number;
    /**
     * 🇧🇷 Avaliação máxima do criador.
     *
     * 🇺🇸 Top rating of the creator.
     */
    rating_top: number;
    /**
     * 🇧🇷 Data da última atualização dos detalhes do criador.
     *
     * 🇺🇸 Date of the last update to the creator's details.
     */
    updated: string;
    /**
     * 🇧🇷 Lista de posições (funções) que o criador ocupa.
     *
     * 🇺🇸 List of positions (roles) the creator holds.
     */
    positions: CreatorRoles[];
    /**
     * 🇧🇷 Informações sobre as plataformas associadas ao criador.
     *
     * 🇺🇸 Information about the platforms associated with the creator.
     */
    platforms: CreatorPlatforms;
    /**
     * 🇧🇷 Avaliações detalhadas do criador.
     *
     * 🇺🇸 Detailed ratings of the creator.
     */
    ratings: CreatorRatings[];
    /**
     * 🇧🇷 Linha do tempo de atividades do criador.
     *
     * 🇺🇸 Timeline of the creator's activities.
     */
    timeline: CreatorTimeline[];
}
/**
 * Type that represents the count and percentage of a platform associated with the creator.
 */
declare interface Platforms {
    /**
     * 🇧🇷 Contagem de jogos associados à plataforma.
     *
     * 🇺🇸 Count of games associated with the platform.
     */
    count: number;
    /**
     * 🇧🇷 Percentual de jogos associados à plataforma.
     *
     * 🇺🇸 Percentage of games associated with the platform.
     */
    percent: number;
    /**
     * 🇧🇷 Informações sobre a plataforma.
     *
     * 🇺🇸 Information about the platform.
     */
    platform: Platform;
}
/**
 * Type that represents information about a platform.
 */
declare interface Platform {
    /**
     * 🇧🇷 ID único da plataforma.
     *
     * 🇺🇸 Unique ID of the platform.
     */
    id: number;
    /**
     * 🇧🇷 Nome da plataforma.
     *
     * 🇺🇸 Name of the platform.
     */
    name: string;
    /**
     * 🇧🇷 Slug (identificador único em URL) da plataforma.
     *
     * 🇺🇸 Slug (unique URL identifier) of the platform.
     */
    slug: string;
}
/**
 * Type that represents platforms associated with a creator, including total games and results.
 */
declare interface CreatorPlatforms {
    /**
     * 🇧🇷 Número total de plataformas associadas ao criador.
     *
     * 🇺🇸 Total number of platforms associated with the creator.
     */
    total: number;
    /**
     * 🇧🇷 Lista das plataformas associadas ao criador.
     *
     * 🇺🇸 List of platforms associated with the creator.
     */
    results: Platforms[];
    /**
     * 🇧🇷 Número de plataformas específicas para o criador.
     *
     * 🇺🇸 Number of specific platforms for the creator.
     */
    count: number;
}
/**
 * Type that represents a game creator in a creators list (with summarized information).
 */
declare interface CreatorDetailsFromCreatorsList {
    /**
     * 🇧🇷 ID único do criador.
     *
     * 🇺🇸 Unique ID of the creator.
     */
    id: number;
    /**
     * 🇧🇷 Nome do criador.
     *
     * 🇺🇸 Name of the creator.
     */
    name: string;
    /**
     * 🇧🇷 Slug (identificador único em URL) do criador.
     *
     * 🇺🇸 Slug (unique URL identifier) of the creator.
     */
    slug: string;
    /**
     * 🇧🇷 URL da imagem do criador.
     *
     * 🇺🇸 URL of the creator's image.
     */
    image: string;
    /**
     * 🇧🇷 URL da imagem de fundo do criador.
     *
     * 🇺🇸 URL of the creator's background image.
     */
    image_background: string;
    /**
     * 🇧🇷 Quantidade de jogos criados por este criador.
     *
     * 🇺🇸 Number of games created by this creator.
     */
    game_count: number;
    /**
     * 🇧🇷 Lista de posições (funções) ocupadas pelo criador.
     *
     * 🇺🇸 List of positions (roles) held by the creator.
     */
    positions: CreatorRoles[];
    /**
     * 🇧🇷 Lista de jogos criados por este criador.
     *
     * 🇺🇸 List of games created by this creator.
     */
    games: CreatorGames[];
}
/**
 * Type that represents ratings about a creator.
 */
declare interface CreatorRatings {
    /**
     * 🇧🇷 ID único da avaliação.
     *
     * 🇺🇸 Unique ID of the rating.
     */
    id: number;
    /**
     * 🇧🇷 Título da avaliação.
     *
     * 🇺🇸 Title of the rating.
     */
    title: string;
    /**
     * 🇧🇷 Quantidade de avaliações feitas.
     *
     * 🇺🇸 Count of ratings made.
     */
    count: number;
    /**
     * 🇧🇷 Percentual de avaliação do criador.
     *
     * 🇺🇸 Rating percentage for the creator.
     */
    percent: number;
}
/**
 * Type that represents the timeline of activities of a creator.
 */
declare interface CreatorTimeline {
    /**
     * Year of the recorded activity.
     */
    year: number;
    /**
     * Number of activities recorded in that year.
     */
    count: number;
}
/**
 * Type that represents a game associated with a creator.
 */
declare interface CreatorGames {
    /**
     * Unique ID of the game.
     */
    id: number;
    /**
     * Slug (unique URL identifier) of the game.
     */
    slug: string;
    /**
     * Name of the game.
     */
    name: string;
    /**
     * Number of times the game has been added to the database.
     */
    added: number;
}
export { Creator, CreatorDetails, CreatorDetailsFromCreatorsList, CreatorGames, CreatorRatings, CreatorRoles, CreatorRolesList, CreatorsList, CreatorTimeline };

/**
 * 🇧🇷 Representa um jogo disponível em uma determinada plataforma.
 *
 * 🇺🇸 Represents a game available on a specific platform.
 */
declare interface Platform_GamesArrayInterface {
    /**
     * 🇧🇷 ID único do jogo.
     *
     * 🇺🇸 Unique game ID.
     */
    id: number;
    /**
     * 🇧🇷 Slug identificador do jogo (usado em URLs e buscas).
     *
     * 🇺🇸 Unique game slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Nome do jogo.
     *
     * 🇺🇸 Game name.
     */
    name: string;
    /**
     * 🇧🇷 Número de usuários que adicionaram este jogo à coleção.
     *
     * 🇺🇸 Number of users who added this game to their collection.
     */
    added: number;
}
/**
 * 🇧🇷 Representa uma plataforma de jogos.
 *
 * 🇺🇸 Represents a gaming platform.
 */
declare interface PlatformArray {
    /**
     * 🇧🇷 ID único da plataforma.
     *
     * 🇺🇸 Unique platform ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da plataforma.
     *
     * 🇺🇸 Platform name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da plataforma (usado em URLs e buscas).
     *
     * 🇺🇸 Unique platform slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos disponíveis nesta plataforma.
     *
     * 🇺🇸 Number of games available on this platform.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da plataforma.
     *
     * 🇺🇸 Background image URL representing the platform.
     */
    image_background: string;
    /**
     * 🇧🇷 URL de uma imagem da plataforma (caso disponível).
     *
     * 🇺🇸 Image URL for the platform (if available).
     */
    image: string | null;
    /**
     * 🇧🇷 Ano de início da plataforma (caso disponível).
     *
     * 🇺🇸 Year the platform was launched (if available).
     */
    year_start: number | null;
    /**
     * 🇧🇷 Ano de encerramento da plataforma (caso aplicável).
     *
     * 🇺🇸 Year the platform was discontinued (if applicable).
     */
    year_end: number | null;
    /**
     * 🇧🇷 Lista de jogos disponíveis nesta plataforma.
     *
     * 🇺🇸 List of games available on this platform.
     */
    games: Platform_GamesArrayInterface[];
}
/**
 * 🇧🇷 Representa a resposta da API ao buscar uma lista de plataformas.
 *
 * 🇺🇸 Represents the API response when retrieving a list of platforms.
 */
declare interface PlatformList {
    /**
     * 🇧🇷 Número total de plataformas disponíveis.
     *
     * 🇺🇸 Total number of available platforms.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de resultados (caso haja paginação).
     *
     * 🇺🇸 URL for the next page of results (if pagination exists).
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de resultados (caso haja paginação).
     *
     * 🇺🇸 URL for the previous page of results (if pagination exists).
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista das plataformas retornadas na requisição.
     *
     * 🇺🇸 List of platforms returned in the request.
     */
    results: PlatformArray[];
}
/**
 * 🇧🇷 Representa um grupo de plataformas pertencentes a uma plataforma-mãe.
 *
 * 🇺🇸 Represents a group of platforms belonging to a parent platform.
 */
declare interface PlatformParentArray {
    /**
     * 🇧🇷 ID único da plataforma-mãe.
     *
     * 🇺🇸 Unique parent platform ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da plataforma-mãe.
     *
     * 🇺🇸 Parent platform name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da plataforma-mãe (usado em URLs e buscas).
     *
     * 🇺🇸 Unique parent platform slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Lista de plataformas associadas a esta plataforma-mãe.
     *
     * 🇺🇸 List of platforms associated with this parent platform.
     */
    platforms: PlatformDetailsList[];
}
/**
 * 🇧🇷 Representa a resposta da API ao buscar uma lista de plataformas-mãe.
 *
 * 🇺🇸 Represents the API response when retrieving a list of parent platforms.
 */
declare interface PlatformParentList {
    /**
     * 🇧🇷 Número total de plataformas-mãe disponíveis.
     *
     * 🇺🇸 Total number of available parent platforms.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de resultados (caso haja paginação).
     *
     * 🇺🇸 URL for the next page of results (if pagination exists).
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de resultados (caso haja paginação).
     *
     * 🇺🇸 URL for the previous page of results (if pagination exists).
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista das plataformas-mãe retornadas na requisição.
     *
     * 🇺🇸 List of parent platforms returned in the request.
     */
    results: PlatformParentArray[];
}
/**
 * 🇧🇷 Representa os detalhes de uma plataforma específica.
 *
 * 🇺🇸 Represents the details of a specific platform.
 */
declare interface PlatformDetailsList {
    /**
     * 🇧🇷 ID único da plataforma.
     *
     * 🇺🇸 Unique platform ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da plataforma.
     *
     * 🇺🇸 Platform name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da plataforma (usado em URLs e buscas).
     *
     * 🇺🇸 Unique platform slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos disponíveis nesta plataforma.
     *
     * 🇺🇸 Number of games available on this platform.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da plataforma.
     *
     * 🇺🇸 Background image URL representing the platform.
     */
    image_background: string;
    /**
     * 🇧🇷 Descrição detalhada da plataforma.
     *
     * 🇺🇸 Detailed description of the platform.
     */
    description: string;
    /**
     * 🇧🇷 URL de uma imagem da plataforma (caso disponível).
     *
     * 🇺🇸 Image URL for the platform (if available).
     */
    image: string | null;
    /**
     * 🇧🇷 Ano de início da plataforma (caso disponível).
     *
     * 🇺🇸 Year the platform was launched (if available).
     */
    year_start: number | null;
    /**
     * 🇧🇷 Ano de encerramento da plataforma (caso aplicável).
     *
     * 🇺🇸 Year the platform was discontinued (if applicable).
     */
    year_end: number | null;
}
export { PlatformList, PlatformParentList, PlatformDetailsList };

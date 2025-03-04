/**
 * 🇧🇷 Representa um jogo desenvolvido por um determinado estúdio.
 *
 * 🇺🇸 Represents a game developed by a specific studio.
 */
interface DevelopersGamesArrayList {
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
 * 🇧🇷 Representa um desenvolvedor de jogos e os títulos mais populares desenvolvidos por ele.
 *
 * 🇺🇸 Represents a game developer and the most popular titles developed by them.
 */
interface DevelopersListResults {
    /**
     * 🇧🇷 ID único do desenvolvedor.
     *
     * 🇺🇸 Unique developer ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome do desenvolvedor.
     *
     * 🇺🇸 Developer name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador do desenvolvedor (usado em URLs e buscas).
     *
     * 🇺🇸 Unique developer slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos desenvolvidos por este estúdio.
     *
     * 🇺🇸 Number of games developed by this studio.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa do desenvolvedor.
     *
     * 🇺🇸 Background image URL representing the developer.
     */
    image_background: string;
    /**
     * 🇧🇷 Lista dos jogos populares desenvolvidos por este estúdio.
     *
     * 🇺🇸 List of popular games developed by this studio.
     */
    games: DevelopersGamesArrayList[];
}
/**
 * 🇧🇷 Representa a resposta da API ao buscar uma lista de desenvolvedores.
 *
 * 🇺🇸 Represents the API response when retrieving a list of developers.
 */
interface DevelopersList {
    /**
     * 🇧🇷 Número total de desenvolvedores disponíveis.
     *
     * 🇺🇸 Total number of available developers.
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
     * 🇧🇷 Lista dos desenvolvedores retornados na requisição.
     *
     * 🇺🇸 List of developers returned in the request.
     */
    results: DevelopersListResults[];
}
/**
 * 🇧🇷 Representa os detalhes de um desenvolvedor específico.
 *
 * 🇺🇸 Represents the details of a specific developer.
 */
interface DeveloperDetails {
    /**
     * 🇧🇷 ID único do desenvolvedor.
     *
     * 🇺🇸 Unique developer ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome do desenvolvedor.
     *
     * 🇺🇸 Developer name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador do desenvolvedor (usado em URLs e buscas).
     *
     * 🇺🇸 Unique developer slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos desenvolvidos por este estúdio.
     *
     * 🇺🇸 Number of games developed by this studio.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa do desenvolvedor (caso disponível).
     *
     * 🇺🇸 Background image URL representing the developer (if available).
     */
    image_background?: string;
    /**
     * 🇧🇷 Descrição detalhada sobre o desenvolvedor (caso disponível).
     *
     * 🇺🇸 Detailed description about the developer (if available).
     */
    description?: string;
}
export { DevelopersList, DeveloperDetails };

/**
 * 🇧🇷 Representa um jogo pertencente a um determinado gênero.
 *
 * 🇺🇸 Represents a game belonging to a specific genre.
 */
interface GamesOnThisGenre {
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
 * 🇧🇷 Representa um gênero de jogos.
 *
 * 🇺🇸 Represents a game genre.
 */
interface GenresArray {
    /**
     * 🇧🇷 ID único do gênero.
     *
     * 🇺🇸 Unique genre ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome do gênero.
     *
     * 🇺🇸 Genre name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador do gênero (usado em URLs e buscas).
     *
     * 🇺🇸 Unique genre slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos associados a este gênero.
     *
     * 🇺🇸 Number of games associated with this genre.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa do gênero (caso disponível).
     *
     * 🇺🇸 Background image URL representing the genre (if available).
     */
    image_background: string | null;
    /**
     * 🇧🇷 Lista de jogos populares pertencentes a este gênero.
     *
     * 🇺🇸 List of popular games belonging to this genre.
     */
    games: GamesOnThisGenre[];
}
/**
 * 🇧🇷 Representa a resposta da API ao buscar uma lista de gêneros.
 *
 * 🇺🇸 Represents the API response when retrieving a list of genres.
 */
interface GenresList {
    /**
     * 🇧🇷 Número total de gêneros disponíveis.
     *
     * 🇺🇸 Total number of available genres.
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
     * 🇧🇷 Lista dos gêneros retornados na requisição.
     *
     * 🇺🇸 List of genres returned in the request.
     */
    results: GenresArray[];
}
/**
 * 🇧🇷 Representa os detalhes de um gênero específico.
 *
 * 🇺🇸 Represents the details of a specific genre.
 */
interface GenreDetailsList {
    /**
     * 🇧🇷 ID único do gênero.
     *
     * 🇺🇸 Unique genre ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome do gênero.
     *
     * 🇺🇸 Genre name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador do gênero (usado em URLs e buscas).
     *
     * 🇺🇸 Unique genre slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos associados a este gênero.
     *
     * 🇺🇸 Number of games associated with this genre.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa do gênero.
     *
     * 🇺🇸 Background image URL representing the genre.
     */
    image_background: string;
    /**
     * 🇧🇷 Descrição detalhada do gênero.
     *
     * 🇺🇸 Detailed description of the genre.
     */
    description: string;
}
export { GenresList, GenreDetailsList };

/**
 * 🇧🇷 Representa um jogo associado a uma publicadora.
 *
 * 🇺🇸 Represents a game associated with a publisher.
 */
declare interface Publishers_GamesArray {
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
 * 🇧🇷 Representa uma publicadora de jogos.
 *
 * 🇺🇸 Represents a game publisher.
 */
declare interface PublisherArrayInterface {
    /**
     * 🇧🇷 ID único da publicadora.
     *
     * 🇺🇸 Unique publisher ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da publicadora.
     *
     * 🇺🇸 Publisher name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da publicadora (usado em URLs e buscas).
     *
     * 🇺🇸 Unique publisher slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos publicados por essa publicadora.
     *
     * 🇺🇸 Number of games published by this publisher.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da publicadora.
     *
     * 🇺🇸 Background image URL representing the publisher.
     */
    image_background: string;
    /**
     * 🇧🇷 Lista de alguns jogos publicados por esta publicadora.
     *
     * 🇺🇸 List of some games published by this publisher.
     */
    games: Publishers_GamesArray[];
}
/**
 * 🇧🇷 Representa a resposta da API ao buscar uma lista de publicadoras.
 *
 * 🇺🇸 Represents the API response when retrieving a list of publishers.
 */
declare interface PublishersList {
    /**
     * 🇧🇷 Número total de publicadoras disponíveis.
     *
     * 🇺🇸 Total number of available publishers.
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
     * 🇧🇷 Lista das publicadoras retornadas na requisição.
     *
     * 🇺🇸 List of publishers returned in the request.
     */
    results: PublisherArrayInterface[];
}
/**
 * 🇧🇷 Representa os detalhes de uma publicadora específica.
 *
 * 🇺🇸 Represents the details of a specific publisher.
 */
declare interface PublisherDetailsList {
    /**
     * 🇧🇷 ID único da publicadora.
     *
     * 🇺🇸 Unique publisher ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da publicadora.
     *
     * 🇺🇸 Publisher name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da publicadora (usado em URLs e buscas).
     *
     * 🇺🇸 Unique publisher slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos publicados por essa publicadora.
     *
     * 🇺🇸 Number of games published by this publisher.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da publicadora.
     *
     * 🇺🇸 Background image URL representing the publisher.
     */
    image_background: string;
    /**
     * 🇧🇷 Descrição detalhada da publicadora.
     *
     * 🇺🇸 Detailed description of the publisher.
     */
    description: string;
}
export { PublishersList, PublisherDetailsList };

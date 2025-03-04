/**
 * 🇧🇷 Representa um jogo associado a uma tag.
 *
 * 🇺🇸 Represents a game associated with a tag.
 */
interface Tags_GamesArrayInterface {
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
 * 🇧🇷 Representa uma tag usada para categorizar jogos.
 *
 * 🇺🇸 Represents a tag used to categorize games.
 */
interface TagsArrayInterface {
    /**
     * 🇧🇷 ID único da tag.
     *
     * 🇺🇸 Unique tag ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da tag.
     *
     * 🇺🇸 Tag name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da tag (usado em URLs e buscas).
     *
     * 🇺🇸 Unique tag slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos associados a esta tag.
     *
     * 🇺🇸 Number of games associated with this tag.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da tag.
     *
     * 🇺🇸 Background image URL representing the tag.
     */
    image_background: string;
    /**
     * 🇧🇷 Idioma principal da tag.
     *
     * 🇺🇸 Primary language of the tag.
     */
    language: string;
    /**
     * 🇧🇷 Lista de alguns jogos que possuem essa tag.
     *
     * 🇺🇸 List of some games that have this tag.
     */
    games: Tags_GamesArrayInterface[];
}
/**
 * 🇧🇷 Representa a resposta da API ao buscar uma lista de tags.
 *
 * 🇺🇸 Represents the API response when retrieving a list of tags.
 */
interface TagsList {
    /**
     * 🇧🇷 Número total de tags disponíveis.
     *
     * 🇺🇸 Total number of available tags.
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
     * 🇧🇷 Lista das tags retornadas na requisição.
     *
     * 🇺🇸 List of tags returned in the request.
     */
    results: TagsArrayInterface[];
}
/**
 * 🇧🇷 Representa os detalhes de uma tag específica.
 *
 * 🇺🇸 Represents the details of a specific tag.
 */
interface TagsDetailsList {
    /**
     * 🇧🇷 ID único da tag.
     *
     * 🇺🇸 Unique tag ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da tag.
     *
     * 🇺🇸 Tag name.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da tag (usado em URLs e buscas).
     *
     * 🇺🇸 Unique tag slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos associados a esta tag.
     *
     * 🇺🇸 Number of games associated with this tag.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da tag.
     *
     * 🇺🇸 Background image URL representing the tag.
     */
    image_background: string;
    /**
     * 🇧🇷 Descrição detalhada da tag (pode ser `null` se não houver descrição disponível).
     *
     * 🇺🇸 Detailed description of the tag (may be `null` if no description is available).
     */
    description: string | null;
}
export { TagsList, TagsDetailsList };

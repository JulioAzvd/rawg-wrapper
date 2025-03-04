/**
 * 🇧🇷 Representa um jogo associado a uma loja.
 *
 * 🇺🇸 Represents a game associated with a store.
 */
declare interface Stores_GamesArrayInterface {
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
 * 🇧🇷 Representa uma loja onde jogos podem ser adquiridos.
 *
 * 🇺🇸 Represents a store where games can be purchased.
 */
declare interface StoresArray {
    /**
     * 🇧🇷 ID único da loja.
     *
     * 🇺🇸 Unique store ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da loja.
     *
     * 🇺🇸 Store name.
     */
    name: string;
    /**
     * 🇧🇷 Domínio do site da loja (pode ser `null` se não disponível).
     *
     * 🇺🇸 Store website domain (may be `null` if unavailable).
     */
    domain: string | null;
    /**
     * 🇧🇷 Slug identificador da loja (usado em URLs e buscas).
     *
     * 🇺🇸 Unique store slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos disponíveis nesta loja.
     *
     * 🇺🇸 Number of games available in this store.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da loja.
     *
     * 🇺🇸 Background image URL representing the store.
     */
    image_background: string;
    /**
     * 🇧🇷 Lista de alguns jogos disponíveis nesta loja.
     *
     * 🇺🇸 List of some games available in this store.
     */
    games: Stores_GamesArrayInterface[];
}
/**
 * 🇧🇷 Representa a resposta da API ao buscar uma lista de lojas.
 *
 * 🇺🇸 Represents the API response when retrieving a list of stores.
 */
declare interface StoresList {
    /**
     * 🇧🇷 Número total de lojas disponíveis.
     *
     * 🇺🇸 Total number of available stores.
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
     * 🇧🇷 Lista das lojas retornadas na requisição.
     *
     * 🇺🇸 List of stores returned in the request.
     */
    results: StoresArray[];
}
/**
 * 🇧🇷 Representa os detalhes de uma loja específica.
 *
 * 🇺🇸 Represents the details of a specific store.
 */
declare interface StoreDetailsList {
    /**
     * 🇧🇷 ID único da loja.
     *
     * 🇺🇸 Unique store ID.
     */
    id: number;
    /**
     * 🇧🇷 Nome da loja.
     *
     * 🇺🇸 Store name.
     */
    name: string;
    /**
     * 🇧🇷 Domínio do site da loja (pode ser `null` se não disponível).
     *
     * 🇺🇸 Store website domain (may be `null` if unavailable).
     */
    domain: string | null;
    /**
     * 🇧🇷 Slug identificador da loja (usado em URLs e buscas).
     *
     * 🇺🇸 Unique store slug (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Quantidade de jogos disponíveis nesta loja.
     *
     * 🇺🇸 Number of games available in this store.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo representativa da loja.
     *
     * 🇺🇸 Background image URL representing the store.
     */
    image_background: string;
    /**
     * 🇧🇷 Descrição detalhada da loja.
     *
     * 🇺🇸 Detailed description of the store.
     */
    description: string;
}
export { StoresList, StoreDetailsList };

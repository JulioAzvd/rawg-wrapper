import { CreatorRoles } from "./Creators.js";
/**
 * 🇧🇷 Representa uma captura de tela curta de um jogo.
 *
 * 🇺🇸 Represents a short screenshot of a game.
 */
declare interface GameShortScreenshots {
    /**
     * 🇧🇷 Identificador único da captura de tela.
     *
     * 🇺🇸 Unique identifier for the screenshot.
     */
    id: number;
    /**
     * 🇧🇷 URL da imagem da captura de tela.
     *
     * 🇺🇸 URL of the screenshot image.
     */
    image: string;
}
/**
 * 🇧🇷 Representa a classificação ESRB (Entertainment Software Rating Board) de um jogo.
 *
 * 🇺🇸 Represents the ESRB (Entertainment Software Rating Board) rating of a game.
 */
declare interface ESRBRating {
    /**
     * 🇧🇷 Identificador único da classificação ESRB.
     *
     * 🇺🇸 Unique identifier for the ESRB rating.
     */
    id: number;
    /**
     * 🇧🇷 Nome da classificação.
     *
     * 🇺🇸 Name of the rating.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da classificação (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the rating (used in URLs and searches).
     */
    slug: string;
}
/**
 * 🇧🇷 Representa uma tag associada a um jogo.
 *
 * 🇺🇸 Represents a tag associated with a game.
 */
declare interface GameTags {
    /**
     * 🇧🇷 Identificador único da tag.
     *
     * 🇺🇸 Unique identifier for the tag.
     */
    id: number;
    /**
     * 🇧🇷 Nome da tag.
     *
     * 🇺🇸 Name of the tag.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da tag (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the tag (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Idioma da tag.
     *
     * 🇺🇸 Language of the tag.
     */
    language: string;
    /**
     * 🇧🇷 Número de jogos associados à tag.
     *
     * 🇺🇸 Number of games associated with the tag.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo da tag.
     *
     * 🇺🇸 URL for the background image of the tag.
     */
    image_background: string | null;
}
/**
 * 🇧🇷 Representa uma loja onde o jogo está disponível.
 *
 * 🇺🇸 Represents a store where the game is available.
 */
declare interface GameStores {
    /**
     * 🇧🇷 Identificador único da loja.
     *
     * 🇺🇸 Unique identifier for the store.
     */
    id: number;
    /**
     * 🇧🇷 Nome da loja.
     *
     * 🇺🇸 Name of the store.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da loja (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the store (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Domínio da loja (se disponível).
     *
     * 🇺🇸 Store domain (if available).
     */
    domain: string;
    /**
     * 🇧🇷 Número de jogos disponíveis na loja.
     *
     * 🇺🇸 Number of games available in the store.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo da loja.
     *
     * 🇺🇸 URL for the background image of the store.
     */
    image_background: string | null;
}
/**
 * 🇧🇷 Representa um gênero de jogo.
 *
 * 🇺🇸 Represents a game genre.
 */
declare interface GameGenres {
    /**
     * 🇧🇷 Identificador único do gênero.
     *
     * 🇺🇸 Unique identifier for the genre.
     */
    id: number;
    /**
     * 🇧🇷 Nome do gênero.
     *
     * 🇺🇸 Name of the genre.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador do gênero (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the genre (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Número de jogos associados ao gênero.
     *
     * 🇺🇸 Number of games associated with the genre.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo do gênero.
     *
     * 🇺🇸 URL for the background image of the genre.
     */
    image_background: string | null;
}
/**
 * 🇧🇷 Representa a plataforma pai de um jogo, como PC, PlayStation, etc.
 *
 * 🇺🇸 Represents the parent platform of a game, like PC, PlayStation, etc.
 */
declare interface GameParentPlatform {
    /**
     * 🇧🇷 Informações sobre a plataforma associada ao jogo.
     *
     * 🇺🇸 Information about the platform associated with the game.
     */
    platform: {
        /**
         * 🇧🇷 Identificador único da plataforma.
         *
         * 🇺🇸 Unique identifier for the platform.
         */
        id: number;
        /**
         * 🇧🇷 Nome da plataforma.
         *
         * 🇺🇸 Name of the platform.
         */
        name: string;
        /**
         * 🇧🇷 Slug identificador da plataforma (usado em URLs e buscas).
         *
         * 🇺🇸 Slug identifier for the platform (used in URLs and searches).
         */
        slug: string;
    };
}
/**
 * 🇧🇷 Representa os requisitos mínimos e recomendados de um jogo.
 *
 * 🇺🇸 Represents the minimum and recommended requirements of a game.
 */
declare interface GameRequirements {
    /**
     * 🇧🇷 Requisitos mínimos necessários para rodar o jogo.
     *
     * 🇺🇸 Minimum system requirements to run the game.
     */
    minimum: string;
    /**
     * 🇧🇷 Requisitos recomendados para rodar o jogo.
     *
     * 🇺🇸 Recommended system requirements to run the game.
     */
    recommended: string;
}
/**
 * 🇧🇷 Representa uma plataforma de um jogo, como PC, PlayStation, etc.
 *
 * 🇺🇸 Represents a platform for a game, like PC, PlayStation, etc.
 */
declare interface GamePlatform {
    /**
     * 🇧🇷 Identificador único da plataforma.
     *
     * 🇺🇸 Unique identifier for the platform.
     */
    id: number;
    /**
     * 🇧🇷 Nome da plataforma.
     *
     * 🇺🇸 Name of the platform.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da plataforma (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the platform (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 URL da imagem da plataforma.
     *
     * 🇺🇸 URL for the image of the platform.
     */
    image: string | null;
    /**
     * 🇧🇷 Ano de lançamento da plataforma.
     *
     * 🇺🇸 Release year of the platform.
     */
    year_end: string | null;
    /**
     * 🇧🇷 Ano de início da plataforma.
     *
     * 🇺🇸 Start year of the platform.
     */
    year_start: string | null;
    /**
     * 🇧🇷 Número de jogos disponíveis para essa plataforma.
     *
     * 🇺🇸 Number of games available on this platform.
     */
    games_count: number;
    /**
     * 🇧🇷 URL da imagem de fundo da plataforma.
     *
     * 🇺🇸 URL for the background image of the platform.
     */
    image_background: string | null;
}
/**
 * 🇧🇷 Representa uma plataforma de um jogo com informações adicionais como requisitos e data de lançamento.
 *
 * 🇺🇸 Represents a game platform with additional information such as requirements and release date.
 */
declare interface GamePlatformsList {
    /**
     * 🇧🇷 Plataforma associada ao jogo.
     *
     * 🇺🇸 Platform associated with the game.
     */
    platform: GamePlatform;
    /**
     * 🇧🇷 Data de lançamento do jogo nessa plataforma.
     *
     * 🇺🇸 Release date of the game on this platform.
     */
    released_at: string | null;
    /**
     * 🇧🇷 Requisitos mínimos para rodar o jogo na plataforma, na versão em inglês.
     *
     * 🇺🇸 Minimum requirements to run the game on the platform, in English version.
     */
    requirements_en: GameRequirements | null;
    /**
     * 🇧🇷 Requisitos mínimos para rodar o jogo na plataforma, na versão em russo.
     *
     * 🇺🇸 Minimum requirements to run the game on the platform, in Russian version.
     */
    requirements_ru: GameRequirements | null;
}
/**
 * 🇧🇷 Representa um clipe de vídeo relacionado ao jogo.
 *
 * 🇺🇸 Represents a video clip related to the game.
 */
declare interface GameClip {
    /**
     * 🇧🇷 Link para o clipe de vídeo.
     *
     * 🇺🇸 Link to the video clip.
     */
    clip: string;
    /**
     * 🇧🇷 Links para versões em diferentes resoluções do clipe de vídeo.
     *
     * 🇺🇸 Links for different resolutions of the video clip.
     */
    clips: {
        320: string;
        640: string;
        full: string;
    };
    /**
     * 🇧🇷 URL do vídeo completo.
     *
     * 🇺🇸 URL for the full video.
     */
    video: string;
    /**
     * 🇧🇷 URL da pré-visualização do clipe.
     *
     * 🇺🇸 URL for the preview of the clip.
     */
    preview: string;
}
/**
 * 🇧🇷 Representa informações sobre o jogo do usuário, como se ele possui o jogo ou não.
 *
 * 🇺🇸 Represents user game information, such as whether they own the game or not.
 */
declare interface Game_UserGame {
    /**
     * 🇧🇷 Identificador único do jogo.
     *
     * 🇺🇸 Unique identifier for the game.
     */
    id: number;
    /**
     * 🇧🇷 Se o usuário possui o jogo.
     *
     * 🇺🇸 Whether the user owns the game or not.
     */
    owned: boolean;
}
/**
 * 🇧🇷 Representa o status de adição de um jogo ao catálogo, incluindo jogos que o usuário ainda não jogou, já completou ou está jogando.
 *
 * 🇺🇸 Represents the status of a game's addition to the catalog, including games the user hasn't played, has beaten, or is currently playing.
 */
declare interface GameAddedByStatus {
    /**
     * 🇧🇷 Número de jogos que o usuário ainda não jogou.
     *
     * 🇺🇸 Number of games the user hasn't played yet.
     */
    yet?: number;
    /**
     * 🇧🇷 Número de jogos que o usuário possui.
     *
     * 🇺🇸 Number of games the user owns.
     */
    owned?: number;
    /**
     * 🇧🇷 Número de jogos que o usuário já completou.
     *
     * 🇺🇸 Number of games the user has beaten.
     */
    beaten?: number;
    /**
     * 🇧🇷 Número de jogos que o usuário planeja jogar.
     *
     * 🇺🇸 Number of games the user plans to play.
     */
    toplay?: number;
    /**
     * 🇧🇷 Número de jogos que o usuário abandonou.
     *
     * 🇺🇸 Number of games the user has dropped.
     */
    dropped?: number;
    /**
     * 🇧🇷 Número de jogos que o usuário está jogando atualmente.
     *
     * 🇺🇸 Number of games the user is currently playing.
     */
    playing?: number;
}
/**
 * 🇧🇷 Representa a classificação de um jogo, como a contagem de votos e a porcentagem de avaliação.
 *
 * 🇺🇸 Represents the rating of a game, such as vote count and rating percentage.
 */
declare interface GameRatings {
    /**
     * 🇧🇷 Identificador único da classificação.
     *
     * 🇺🇸 Unique identifier for the rating.
     */
    id: number;
    /**
     * 🇧🇷 Título da classificação.
     *
     * 🇺🇸 Title of the rating.
     */
    title: string;
    /**
     * 🇧🇷 Número de votos recebidos para essa classificação.
     *
     * 🇺🇸 Number of votes received for this rating.
     */
    count: number;
    /**
     * 🇧🇷 Percentual de avaliações positivas para o jogo.
     *
     * 🇺🇸 Percentage of positive reviews for the game.
     */
    percent: number;
}
/**
 * 🇧🇷 Representa um jogo na lista de jogos retornada pela API.
 *
 * 🇺🇸 Represents a game in the list of games returned by the API.
 */
declare interface GamesListResults {
    /**
     * 🇧🇷 Identificador único do jogo.
     *
     * 🇺🇸 Unique identifier for the game.
     */
    id: number;
    /**
     * 🇧🇷 Slug identificador do jogo (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the game (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Nome do jogo.
     *
     * 🇺🇸 Name of the game.
     */
    name: string;
    /**
     * 🇧🇷 Data de lançamento do jogo.
     *
     * 🇺🇸 Release date of the game.
     */
    released: string;
    /**
     * 🇧🇷 Indica se o jogo está listado como "a ser anunciado" (TBA).
     *
     * 🇺🇸 Indicates if the game is listed as "to be announced" (TBA).
     */
    tba: boolean;
    /**
     * 🇧🇷 Imagem de fundo do jogo.
     *
     * 🇺🇸 Background image of the game.
     */
    background_image: string;
    /**
     * 🇧🇷 Avaliação do jogo.
     *
     * 🇺🇸 Rating of the game.
     */
    rating: number;
    /**
     * 🇧🇷 A avaliação máxima possível para o jogo.
     *
     * 🇺🇸 The highest possible rating for the game.
     */
    rating_top: number;
    /**
     * 🇧🇷 As avaliações do jogo.
     *
     * 🇺🇸 The ratings for the game.
     */
    ratings: GameRatings[];
    /**
     * 🇧🇷 Número total de avaliações do jogo.
     *
     * 🇺🇸 Total number of reviews for the game.
     */
    ratings_count: number;
    /**
     * 🇧🇷 Contagem de textos de avaliação do jogo.
     *
     * 🇺🇸 Review text count for the game.
     */
    reviews_text_count: string;
    /**
     * 🇧🇷 Número de vezes que o jogo foi adicionado à lista.
     *
     * 🇺🇸 Number of times the game has been added to a list.
     */
    added: number;
    /**
     * 🇧🇷 Status de adição do jogo por categoria.
     *
     * 🇺🇸 Game addition status by category.
     */
    added_by_status: GameAddedByStatus;
    /**
     * 🇧🇷 Nota do jogo no Metacritic.
     *
     * 🇺🇸 Game rating on Metacritic.
     */
    metacritic: number;
    /**
     * 🇧🇷 Tempo médio de jogo.
     *
     * 🇺🇸 Average playtime for the game.
     */
    playtime: number;
    /**
     * 🇧🇷 Número de sugestões de jogos.
     *
     * 🇺🇸 Number of game suggestions.
     */
    suggestions_count: number;
    /**
     * 🇧🇷 Data da última atualização do jogo.
     *
     * 🇺🇸 Date of the last update for the game.
     */
    updated: string;
    /**
     * 🇧🇷 Informações do jogo para o usuário (se o usuário possui o jogo).
     *
     * 🇺🇸 User game information (whether the user owns the game).
     */
    user_game: Game_UserGame | null;
    /**
     * 🇧🇷 Contagem total de avaliações do jogo.
     *
     * 🇺🇸 Total review count for the game.
     */
    reviews_count: number;
    /**
     * 🇧🇷 Cor saturada do jogo.
     *
     * 🇺🇸 Saturated color of the game.
     */
    saturated_color: string;
    /**
     * 🇧🇷 Cor dominante do jogo.
     *
     * 🇺🇸 Dominant color of the game.
     */
    dominant_color: string;
    /**
     * 🇧🇷 Plataformas em que o jogo está disponível.
     *
     * 🇺🇸 Platforms the game is available on.
     */
    platforms: GamePlatformsList[];
    /**
     * 🇧🇷 Plataformas principais do jogo.
     *
     * 🇺🇸 Parent platforms for the game.
     */
    parent_platforms: GameParentPlatform[];
    /**
     * 🇧🇷 Gêneros do jogo.
     *
     * 🇺🇸 Genres of the game.
     */
    genres: GameGenres[];
    /**
     * 🇧🇷 Lojas onde o jogo está disponível.
     *
     * 🇺🇸 Stores where the game is available.
     */
    stores: GameStores[];
    /**
     * 🇧🇷 Clipe de vídeo do jogo.
     *
     * 🇺🇸 Video clip of the game.
     */
    clip: GameClip | null;
    /**
     * 🇧🇷 Tags associadas ao jogo.
     *
     * 🇺🇸 Tags associated with the game.
     */
    tags: GameTags[];
    /**
     * 🇧🇷 Classificação ESRB do jogo.
     *
     * 🇺🇸 ESRB rating of the game.
     */
    esrb_rating: ESRBRating;
    /**
     * 🇧🇷 Capturas de tela curtas do jogo.
     *
     * 🇺🇸 Short screenshots of the game.
     */
    short_screenshots: GameShortScreenshots[];
}
/**
 * 🇧🇷 Representa uma lista de jogos retornada pela API.
 *
 * 🇺🇸 Represents a list of games returned by the API.
 */
declare interface GamesList {
    /**
     * 🇧🇷 Número total de jogos na lista.
     *
     * 🇺🇸 Total number of games in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL da próxima página de jogos.
     *
     * 🇺🇸 URL for the next page of games.
     */
    next: string | null;
    /**
     * 🇧🇷 URL da página anterior de jogos.
     *
     * 🇺🇸 URL for the previous page of games.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de resultados de jogos.
     *
     * 🇺🇸 List of game results.
     */
    results: GamesListResults[];
}
/**
 * 🇧🇷 Representa os detalhes de um jogo adicionado à lista, incluindo dados como rating, plataformas, e outros.
 *
 * 🇺🇸 Represents the details of a game added to the list, including data like rating, platforms, and others.
 */
declare interface AdditionsListResults {
    /**
     * 🇧🇷 Identificador único do jogo.
     *
     * 🇺🇸 Unique identifier for the game.
     */
    id: number;
    /**
     * 🇧🇷 Slug identificador do jogo (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the game (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Nome do jogo.
     *
     * 🇺🇸 Name of the game.
     */
    name: string;
    /**
     * 🇧🇷 Data de lançamento do jogo.
     *
     * 🇺🇸 Release date of the game.
     */
    released: string;
    /**
     * 🇧🇷 Indica se o jogo está listado como "a ser anunciado" (TBA).
     *
     * 🇺🇸 Indicates if the game is listed as "to be announced" (TBA).
     */
    tba: boolean;
    /**
     * 🇧🇷 Imagem de fundo do jogo.
     *
     * 🇺🇸 Background image of the game.
     */
    background_image: string | null;
    /**
     * 🇧🇷 Avaliação do jogo.
     *
     * 🇺🇸 Rating of the game.
     */
    rating: number;
    /**
     * 🇧🇷 A avaliação máxima possível para o jogo.
     *
     * 🇺🇸 The highest possible rating for the game.
     */
    rating_top: number;
    /**
     * 🇧🇷 As avaliações do jogo.
     *
     * 🇺🇸 The ratings for the game.
     */
    ratings: GameRatings[];
    /**
     * 🇧🇷 Número total de avaliações do jogo.
     *
     * 🇺🇸 Total number of reviews for the game.
     */
    ratings_count: number;
    /**
     * 🇧🇷 Contagem de textos de avaliação do jogo.
     *
     * 🇺🇸 Review text count for the game.
     */
    reviews_text_count: number;
    /**
     * 🇧🇷 Número de vezes que o jogo foi adicionado à lista.
     *
     * 🇺🇸 Number of times the game has been added to a list.
     */
    added: number;
    /**
     * 🇧🇷 Status de adição do jogo por categoria.
     *
     * 🇺🇸 Game addition status by category.
     */
    added_by_status: GameAddedByStatus[];
    /**
     * 🇧🇷 Nota do jogo no Metacritic.
     *
     * 🇺🇸 Game rating on Metacritic.
     */
    metacritic: number | null;
    /**
     * 🇧🇷 Tempo médio de jogo.
     *
     * 🇺🇸 Average playtime for the game.
     */
    playtime: number;
    /**
     * 🇧🇷 Número de sugestões de jogos.
     *
     * 🇺🇸 Number of game suggestions.
     */
    suggestions_count: number;
    /**
     * 🇧🇷 Data da última atualização do jogo.
     *
     * 🇺🇸 Date of the last update for the game.
     */
    updated: string;
    /**
     * 🇧🇷 Informações do jogo para o usuário (se o usuário possui o jogo).
     *
     * 🇺🇸 User game information (whether the user owns the game).
     */
    user_game: Game_UserGame | null;
    /**
     * 🇧🇷 Contagem total de avaliações do jogo.
     *
     * 🇺🇸 Total review count for the game.
     */
    reviews_count: number;
    /**
     * 🇧🇷 Cor saturada do jogo.
     *
     * 🇺🇸 Saturated color of the game.
     */
    saturated_color: string;
    /**
     * 🇧🇷 Cor dominante do jogo.
     *
     * 🇺🇸 Dominant color of the game.
     */
    dominant_color: string;
    /**
     * 🇧🇷 Plataformas em que o jogo está disponível.
     *
     * 🇺🇸 Platforms the game is available on.
     */
    platforms: GamePlatformsList[];
    /**
     * 🇧🇷 Plataformas principais do jogo.
     *
     * 🇺🇸 Parent platforms for the game.
     */
    parent_platforms: GameParentPlatform[];
    /**
     * 🇧🇷 Gêneros do jogo.
     *
     * 🇺🇸 Genres of the game.
     */
    genres: GameGenres[];
    /**
     * 🇧🇷 Lojas onde o jogo está disponível.
     *
     * 🇺🇸 Stores where the game is available.
     */
    stores: GameStores[];
    /**
     * 🇧🇷 Clipe de vídeo do jogo.
     *
     * 🇺🇸 Video clip of the game.
     */
    clip: GameClip | null;
    /**
     * 🇧🇷 Tags associadas ao jogo.
     *
     * 🇺🇸 Tags associated with the game.
     */
    tags: GameTags[];
    /**
     * 🇧🇷 Classificação ESRB do jogo.
     *
     * 🇺🇸 ESRB rating of the game.
     */
    esrb_rating: ESRBRating[] | null;
    /**
     * 🇧🇷 Capturas de tela curtas do jogo.
     *
     * 🇺🇸 Short screenshots of the game.
     */
    short_screenshots: GameShortScreenshots[];
}
/**
 * 🇧🇷 Representa uma lista de jogos adicionados, retornada pela API.
 *
 * 🇺🇸 Represents a list of added games, returned by the API.
 */
declare interface AdditionsList {
    /**
     * 🇧🇷 Número total de jogos na lista.
     *
     * 🇺🇸 Total number of games in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL da próxima página de jogos.
     *
     * 🇺🇸 URL for the next page of games.
     */
    next: string | null;
    /**
     * 🇧🇷 URL da página anterior de jogos.
     *
     * 🇺🇸 URL for the previous page of games.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de resultados de jogos.
     *
     * 🇺🇸 List of game results.
     */
    results: AdditionsListResults[];
}
/**
 * 🇧🇷 Representa uma equipe de desenvolvimento de jogos, incluindo os jogos produzidos e as funções dos criadores.
 *
 * 🇺🇸 Represents a game development team, including the games produced and the roles of the creators.
 */
declare interface GameDevelopmentTeamArray {
    /**
     * 🇧🇷 Identificador único da equipe de desenvolvimento.
     *
     * 🇺🇸 Unique identifier for the development team.
     */
    id: number;
    /**
     * 🇧🇷 Nome da equipe de desenvolvimento.
     *
     * 🇺🇸 Name of the development team.
     */
    name: string;
    /**
     * 🇧🇷 Slug identificador da equipe (usado em URLs e buscas).
     *
     * 🇺🇸 Slug identifier for the team (used in URLs and searches).
     */
    slug: string;
    /**
     * 🇧🇷 Imagem da equipe de desenvolvimento.
     *
     * 🇺🇸 Image of the development team.
     */
    image: string | null;
    /**
     * 🇧🇷 Imagem de fundo associada à equipe de desenvolvimento.
     *
     * 🇺🇸 Background image associated with the development team.
     */
    image_background: string | null;
    /**
     * 🇧🇷 Quantidade de jogos desenvolvidos pela equipe.
     *
     * 🇺🇸 Number of games developed by the team.
     */
    games_count: number;
    /**
     * 🇧🇷 Lista de jogos desenvolvidos pela equipe.
     *
     * 🇺🇸 List of games developed by the team.
     */
    games: GamesListResults[];
    /**
     * 🇧🇷 Funções de criadores associadas à equipe de desenvolvimento.
     *
     * 🇺🇸 Roles of creators associated with the development team.
     */
    positions: CreatorRoles[];
}
/**
 * 🇧🇷 Representa uma lista de equipes de desenvolvimento de jogos, retornada pela API.
 *
 * 🇺🇸 Represents a list of game development teams, returned by the API.
 */
declare interface GameDevelopmentTeamList {
    /**
     * 🇧🇷 Número total de equipes de desenvolvimento na lista.
     *
     * 🇺🇸 Total number of development teams in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL da próxima página de equipes de desenvolvimento.
     *
     * 🇺🇸 URL for the next page of development teams.
     */
    next: string | null;
    /**
     * 🇧🇷 URL da página anterior de equipes de desenvolvimento.
     *
     * 🇺🇸 URL for the previous page of development teams.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de resultados de equipes de desenvolvimento.
     *
     * 🇺🇸 List of development team results.
     */
    results: GameDevelopmentTeamArray[];
}
/**
 * 🇧🇷 Representa uma lista de jogos que fazem parte da mesma série de jogos.
 *
 * 🇺🇸 Represents a list of games that are part of the same game series.
 */
declare interface GamesSameSeriesList {
    /**
     * 🇧🇷 Número total de jogos na lista.
     *
     * 🇺🇸 Total number of games in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de jogos da mesma série.
     *
     * 🇺🇸 URL for the next page of games in the same series.
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de jogos da mesma série.
     *
     * 🇺🇸 URL for the previous page of games in the same series.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de jogos que fazem parte da mesma série.
     *
     * 🇺🇸 List of games that are part of the same series.
     */
    results: GamesListResults[];
}
/**
 * 🇧🇷 Representa uma lista de jogos pais para DLCs (conteúdos adicionais) e edições.
 *
 * 🇺🇸 Represents a list of parent games for DLCs (Downloadable Content) and editions.
 */
declare interface GameParentsForDlcAndEditionsList {
    /**
     * 🇧🇷 Número total de jogos pais na lista.
     *
     * 🇺🇸 Total number of parent games in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de jogos pais para DLCs e edições.
     *
     * 🇺🇸 URL for the next page of parent games for DLCs and editions.
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de jogos pais para DLCs e edições.
     *
     * 🇺🇸 URL for the previous page of parent games for DLCs and editions.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de jogos pais para DLCs e edições.
     *
     * 🇺🇸 List of parent games for DLCs and editions.
     */
    results: GamesListResults[];
}
/**
 * 🇧🇷 Representa uma captura de tela de um jogo.
 *
 * 🇺🇸 Represents a screenshot of a game.
 */
declare interface GameScreenshotsArray {
    /**
     * 🇧🇷 Identificador único da captura de tela.
     *
     * 🇺🇸 Unique identifier for the screenshot.
     */
    id: number;
    /**
     * 🇧🇷 URL da imagem da captura de tela.
     *
     * 🇺🇸 URL for the screenshot image.
     */
    image: string;
    /**
     * 🇧🇷 Largura da captura de tela em pixels.
     *
     * 🇺🇸 Width of the screenshot in pixels.
     */
    width: number;
    /**
     * 🇧🇷 Altura da captura de tela em pixels.
     *
     * 🇺🇸 Height of the screenshot in pixels.
     */
    height: number;
    /**
     * 🇧🇷 Indica se a captura de tela foi deletada.
     *
     * 🇺🇸 Indicates whether the screenshot has been deleted.
     */
    is_deleted: boolean;
}
/**
 * 🇧🇷 Representa uma lista de capturas de tela de jogos.
 *
 * 🇺🇸 Represents a list of game screenshots.
 */
declare interface GameScreenshotsList {
    /**
     * 🇧🇷 Número total de capturas de tela na lista.
     *
     * 🇺🇸 Total number of screenshots in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de capturas de tela.
     *
     * 🇺🇸 URL for the next page of screenshots.
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de capturas de tela.
     *
     * 🇺🇸 URL for the previous page of screenshots.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de capturas de tela.
     *
     * 🇺🇸 List of screenshots.
     */
    results: GameScreenshotsArray[];
}
/**
 * 🇧🇷 Representa o link de um jogo para uma loja específica.
 *
 * 🇺🇸 Represents a game link to a specific store.
 */
declare interface GameStoreLinksArray {
    /**
     * 🇧🇷 Identificador único do link.
     *
     * 🇺🇸 Unique identifier for the link.
     */
    id: number;
    /**
     * 🇧🇷 Identificador do jogo relacionado ao link.
     *
     * 🇺🇸 Identifier of the game related to the link.
     */
    game_id: string;
    /**
     * 🇧🇷 Identificador da loja onde o jogo está disponível.
     *
     * 🇺🇸 Identifier of the store where the game is available.
     */
    store_id: string;
    /**
     * 🇧🇷 URL para a loja do jogo.
     *
     * 🇺🇸 URL to the game's store.
     */
    url: string;
}
/**
 * 🇧🇷 Representa uma lista de links de jogos para lojas específicas.
 *
 * 🇺🇸 Represents a list of game links to specific stores.
 */
declare interface GameStoreLinksList {
    /**
     * 🇧🇷 Número total de links de jogos para lojas na lista.
     *
     * 🇺🇸 Total number of game store links in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de links de jogos.
     *
     * 🇺🇸 URL for the next page of game links.
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de links de jogos.
     *
     * 🇺🇸 URL for the previous page of game links.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de links de jogos para lojas.
     *
     * 🇺🇸 List of game links to stores.
     */
    results: GameStoreLinksArray[];
}
/**
 * 🇧🇷 Representa os detalhes de uma loja de um jogo específico.
 *
 * 🇺🇸 Represents the details of a game's store.
 */
declare interface GameDetails_Store {
    /**
     * 🇧🇷 Identificador único do link de loja.
     *
     * 🇺🇸 Unique identifier of the store link.
     */
    id: number;
    /**
     * 🇧🇷 URL para a loja do jogo.
     *
     * 🇺🇸 URL to the game's store.
     */
    url: string;
    /**
     * 🇧🇷 Detalhes da loja onde o jogo está disponível.
     *
     * 🇺🇸 Details of the store where the game is available.
     */
    store: {
        /**
         * 🇧🇷 Identificador único da loja.
         *
         * 🇺🇸 Unique identifier of the store.
         */
        id: number;
        /**
         * 🇧🇷 Nome da loja.
         *
         * 🇺🇸 Name of the store.
         */
        name: string;
        /**
         * 🇧🇷 Slug da loja.
         *
         * 🇺🇸 Slug of the store.
         */
        slug: string;
        /**
         * 🇧🇷 Domínio da loja.
         *
         * 🇺🇸 Domain of the store.
         */
        domain: string;
        /**
         * 🇧🇷 Número de jogos disponíveis na loja.
         *
         * 🇺🇸 Number of games available in the store.
         */
        games_count: number;
        /**
         * 🇧🇷 Imagem de fundo da loja.
         *
         * 🇺🇸 Background image of the store.
         */
        image_background: string;
    };
}
/**
 * 🇧🇷 Representa um publisher de jogos.
 *
 * 🇺🇸 Represents a game publisher.
 */
declare interface GamePublishers {
    /**
     * 🇧🇷 Identificador único do publisher.
     *
     * 🇺🇸 Unique identifier of the publisher.
     */
    id: number;
    /**
     * 🇧🇷 Nome do publisher.
     *
     * 🇺🇸 Name of the publisher.
     */
    name: string;
    /**
     * 🇧🇷 Slug do publisher.
     *
     * 🇺🇸 Slug of the publisher.
     */
    slug: string;
    /**
     * 🇧🇷 Número de jogos publicados pelo publisher.
     *
     * 🇺🇸 Number of games published by the publisher.
     */
    games_count: number;
    /**
     * 🇧🇷 Imagem de fundo do publisher.
     *
     * 🇺🇸 Background image of the publisher.
     */
    image_background: string;
}
/**
 * 🇧🇷 Representa um desenvolvedor de jogos.
 *
 * 🇺🇸 Represents a game developer.
 */
declare interface GameDevelopers {
    /**
     * 🇧🇷 Identificador único do desenvolvedor.
     *
     * 🇺🇸 Unique identifier of the developer.
     */
    id: number;
    /**
     * 🇧🇷 Nome do desenvolvedor.
     *
     * 🇺🇸 Name of the developer.
     */
    name: string;
    /**
     * 🇧🇷 Slug do desenvolvedor.
     *
     * 🇺🇸 Slug of the developer.
     */
    slug: string;
    /**
     * 🇧🇷 Número de jogos desenvolvidos pelo desenvolvedor.
     *
     * 🇺🇸 Number of games developed by the developer.
     */
    games_count: number;
    /**
     * 🇧🇷 Imagem de fundo do desenvolvedor.
     *
     * 🇺🇸 Background image of the developer.
     */
    image_background: string;
}
/**
 * 🇧🇷 Representa a avaliação de um jogo na plataforma Metacritic.
 *
 * 🇺🇸 Represents the Metacritic score of a game.
 */
declare interface GameMetacriticPlatforms {
    /**
     * 🇧🇷 Pontuação do jogo na Metacritic.
     *
     * 🇺🇸 Metacritic score of the game.
     */
    metascore: number;
    /**
     * 🇧🇷 URL para a página do jogo na Metacritic.
     *
     * 🇺🇸 URL to the game's page on Metacritic.
     */
    url: string;
}
/**
 * 🇧🇷 Representa os detalhes completos de um jogo específico.
 *
 * 🇺🇸 Represents the full details of a specific game.
 */
declare interface GameDetailsList {
    /**
     * 🇧🇷 Identificador único do jogo.
     *
     * 🇺🇸 Unique identifier of the game.
     */
    id: number;
    /**
     * 🇧🇷 Slug do jogo (parte da URL).
     *
     * 🇺🇸 Slug of the game (part of the URL).
     */
    slug: string;
    /**
     * 🇧🇷 Nome do jogo.
     *
     * 🇺🇸 Name of the game.
     */
    name: string;
    /**
     * 🇧🇷 Nome original do jogo.
     *
     * 🇺🇸 Original name of the game.
     */
    name_original: string;
    /**
     * 🇧🇷 Descrição do jogo.
     *
     * 🇺🇸 Description of the game.
     */
    description: string;
    /**
     * 🇧🇷 Pontuação do jogo na Metacritic.
     *
     * 🇺🇸 Metacritic score of the game.
     */
    metacritic: number;
    /**
     * 🇧🇷 Detalhes das plataformas com avaliação no Metacritic.
     *
     * 🇺🇸 Metacritic platforms' details for the game.
     */
    metacritic_platforms: GameMetacriticPlatforms[];
    /**
     * 🇧🇷 Data de lançamento do jogo.
     *
     * 🇺🇸 Release date of the game.
     */
    released: string;
    /**
     * 🇧🇷 Indica se o lançamento ainda está por vir.
     *
     * 🇺🇸 Indicates whether the release is yet to come.
     */
    tba: boolean;
    /**
     * 🇧🇷 Data da última atualização do jogo.
     *
     * 🇺🇸 Date of the game's last update.
     */
    updated: string;
    /**
     * 🇧🇷 Imagem de fundo principal do jogo.
     *
     * 🇺🇸 Main background image of the game.
     */
    background_image: string;
    /**
     * 🇧🇷 Imagem de fundo adicional do jogo.
     *
     * 🇺🇸 Additional background image of the game.
     */
    background_image_additional: string;
    /**
     * 🇧🇷 URL para o site oficial do jogo.
     *
     * 🇺🇸 URL to the official website of the game.
     */
    website: string;
    /**
     * 🇧🇷 Avaliação geral do jogo.
     *
     * 🇺🇸 Overall rating of the game.
     */
    rating: number;
    /**
     * 🇧🇷 Avaliação máxima possível do jogo.
     *
     * 🇺🇸 Top rating the game can achieve.
     */
    rating_top: number;
    /**
     * 🇧🇷 Avaliações detalhadas do jogo.
     *
     * 🇺🇸 Detailed ratings of the game.
     */
    ratings: GameRatings[];
    /**
     * 🇧🇷 Reações dos jogadores ao jogo, representadas por um objeto onde a chave é o ID da reação e o valor é a quantidade de votos.
     *
     * 🇺🇸 Player reactions to the game, represented as an object where the key is the reaction ID and the value is the number of votes.
     */
    reactions: Record<string, number>;
    /**
     * 🇧🇷 Número de vezes que o jogo foi adicionado a listas.
     *
     * 🇺🇸 Number of times the game has been added to lists.
     */
    added: number;
    /**
     * 🇧🇷 Status de adição do jogo (ex: jogado, a jogar, etc.).
     *
     * 🇺🇸 Game addition status (e.g., played, to play, etc.).
     */
    added_by_status: GameAddedByStatus[];
    /**
     * 🇧🇷 Tempo de jogo médio.
     *
     * 🇺🇸 Average playtime.
     */
    playtime: number;
    /**
     * 🇧🇷 Número de capturas de tela disponíveis do jogo.
     *
     * 🇺🇸 Number of screenshots available for the game.
     */
    screenshots_count: number;
    /**
     * 🇧🇷 Número de filmes (trailers, vídeos, etc.) do jogo.
     *
     * 🇺🇸 Number of movies (trailers, videos, etc.) of the game.
     */
    movies_count: number;
    /**
     * 🇧🇷 Número de criadores envolvidos no jogo.
     *
     * 🇺🇸 Number of creators involved in the game.
     */
    creators_count: number;
    /**
     * 🇧🇷 Número de conquistas do jogo.
     *
     * 🇺🇸 Number of achievements in the game.
     */
    achievements_count: number;
    /**
     * 🇧🇷 Número de conquistas principais do jogo.
     *
     * 🇺🇸 Number of main achievements of the game.
     */
    parent_achievement_count: number;
    /**
     * 🇧🇷 URL para o subreddit do jogo.
     *
     * 🇺🇸 URL to the game's subreddit.
     */
    reddit_url: string;
    /**
     * 🇧🇷 Nome do subreddit do jogo.
     *
     * 🇺🇸 Name of the game's subreddit.
     */
    reddit_name: string;
    /**
     * 🇧🇷 Descrição do subreddit do jogo.
     *
     * 🇺🇸 Description of the game's subreddit.
     */
    reddit_description: string;
    /**
     * 🇧🇷 Logo do subreddit do jogo.
     *
     * 🇺🇸 Logo of the game's subreddit.
     */
    reddit_logo: string;
    /**
     * 🇧🇷 Número de interações no subreddit do jogo.
     *
     * 🇺🇸 Number of interactions on the game's subreddit.
     */
    reddit_count: number;
    /**
     * 🇧🇷 Número de visualizações do jogo na Twitch.
     *
     * 🇺🇸 Number of views on Twitch for the game.
     */
    twitch_count: string;
    /**
     * 🇧🇷 Número de visualizações do jogo no YouTube.
     *
     * 🇺🇸 Number of views on YouTube for the game.
     */
    youtube_count: string;
    /**
     * 🇧🇷 Contagem de avaliações de texto sobre o jogo.
     *
     * 🇺🇸 Count of text reviews about the game.
     */
    reviews_text_count: string;
    /**
     * 🇧🇷 Número de avaliações gerais do jogo.
     *
     * 🇺🇸 Number of overall reviews for the game.
     */
    ratings_count: number;
    /**
     * 🇧🇷 Número de sugestões de jogos relacionadas.
     *
     * 🇺🇸 Number of related game suggestions.
     */
    suggestions_count: number;
    /**
     * 🇧🇷 Nomes alternativos do jogo.
     *
     * 🇺🇸 Alternative names for the game.
     */
    alternative_names: string[];
    /**
     * 🇧🇷 URL para a página do jogo no Metacritic.
     *
     * 🇺🇸 URL to the game's page on Metacritic.
     */
    metacritic_url: string;
    /**
     * 🇧🇷 Número de jogos principais relacionados.
     *
     * 🇺🇸 Number of main games related.
     */
    parents_count: number;
    /**
     * 🇧🇷 Número de edições relacionadas ao jogo.
     *
     * 🇺🇸 Number of related editions of the game.
     */
    additions_count: number;
    /**
     * 🇧🇷 Número de jogos na mesma série.
     *
     * 🇺🇸 Number of games in the same series.
     */
    game_series_count: number;
    /**
     * 🇧🇷 Informações sobre o jogo do ponto de vista do usuário.
     *
     * 🇺🇸 User-specific game information.
     */
    user_game: Game_UserGame | null;
    /**
     * 🇧🇷 Número de avaliações do jogo.
     *
     * 🇺🇸 Number of reviews for the game.
     */
    reviews_count: number;
    /**
     * 🇧🇷 Cor saturada predominante da imagem do jogo.
     *
     * 🇺🇸 Dominant saturated color in the game's image.
     */
    saturated_color: string;
    /**
     * 🇧🇷 Cor dominante da imagem do jogo.
     *
     * 🇺🇸 Dominant color in the game's image.
     */
    dominant_color: string;
    /**
     * 🇧🇷 Detalhes sobre as plataformas principais do jogo.
     *
     * 🇺🇸 Details about the main platforms of the game.
     */
    parent_platforms: GamePlatformsList[];
    /**
     * 🇧🇷 Detalhes sobre as plataformas do jogo.
     *
     * 🇺🇸 Details about the platforms for the game.
     */
    platforms: GamePlatformsList[];
    /**
     * 🇧🇷 Detalhes das lojas onde o jogo está disponível.
     *
     * 🇺🇸 Details of stores where the game is available.
     */
    stores: GameDetails_Store[];
    /**
     * 🇧🇷 Desenvolvedores do jogo.
     *
     * 🇺🇸 Developers of the game.
     */
    developers: GameDevelopers[];
    /**
     * 🇧🇷 Gêneros do jogo.
     *
     * 🇺🇸 Genres of the game.
     */
    genres: GameGenres[];
    /**
     * 🇧🇷 Tags relacionadas ao jogo.
     *
     * 🇺🇸 Tags related to the game.
     */
    tags: GameTags[];
    /**
     * 🇧🇷 Publicadores do jogo.
     *
     * 🇺🇸 Publishers of the game.
     */
    publishers: GamePublishers[];
    /**
     * 🇧🇷 Avaliação ESRB do jogo.
     *
     * 🇺🇸 ESRB rating of the game.
     */
    esrb_rating: ESRBRating[] | null;
    /**
     * 🇧🇷 Clipes de vídeo relacionados ao jogo.
     *
     * 🇺🇸 Video clips related to the game.
     */
    clip: GameClip | null;
    /**
     * 🇧🇷 Descrição em texto bruto do jogo.
     *
     * 🇺🇸 Raw text description of the game.
     */
    description_raw: string;
}
/**
 * 🇧🇷 Representa a lista de conquistas de um jogo.
 *
 * 🇺🇸 Represents the list of achievements for a game.
 */
declare interface GameAchievementList {
    /**
     * 🇧🇷 Identificador único da conquista.
     *
     * 🇺🇸 Unique identifier for the achievement.
     */
    id: number;
    /**
     * 🇧🇷 Nome da conquista.
     *
     * 🇺🇸 Name of the achievement.
     */
    name: string;
    /**
     * 🇧🇷 Descrição da conquista.
     *
     * 🇺🇸 Description of the achievement.
     */
    description: string;
    /**
     * 🇧🇷 Imagem associada à conquista.
     *
     * 🇺🇸 Image associated with the achievement.
     */
    image: string;
    /**
     * 🇧🇷 Percentual de jogadores que conseguiram a conquista.
     *
     * 🇺🇸 Percentage of players who unlocked the achievement.
     */
    percent: string;
}
/**
 * 🇧🇷 Representa os trailers de um jogo.
 *
 * 🇺🇸 Represents the trailers for a game.
 */
declare interface GameTrailerArray {
    /**
     * 🇧🇷 Identificador único do trailer.
     *
     * 🇺🇸 Unique identifier for the trailer.
     */
    id: number;
    /**
     * 🇧🇷 Nome do trailer.
     *
     * 🇺🇸 Name of the trailer.
     */
    name: string;
    /**
     * 🇧🇷 URL do trailer para visualização.
     *
     * 🇺🇸 URL of the trailer for preview.
     */
    preview: string;
    /**
     * 🇧🇷 Variantes do trailer em diferentes resoluções.
     *
     * 🇺🇸 Variants of the trailer in different resolutions.
     */
    data: {
        /**
         * 🇧🇷 Trailer em 240p, se disponível.
         *
         * 🇺🇸 Trailer in 240p, if available.
         */
        240?: string;
        /**
         * 🇧🇷 Trailer em 360p, se disponível.
         *
         * 🇺🇸 Trailer in 360p, if available.
         */
        360?: string;
        /**
         * 🇧🇷 Trailer em 480p, se disponível.
         *
         * 🇺🇸 Trailer in 480p, if available.
         */
        480?: string;
        /**
         * 🇧🇷 Trailer na resolução máxima disponível.
         *
         * 🇺🇸 Trailer in the maximum available resolution.
         */
        max?: string;
    };
}
/**
 * 🇧🇷 Representa a lista de trailers de um jogo.
 *
 * 🇺🇸 Represents the list of trailers for a game.
 */
declare interface GameTrailerList {
    /**
     * 🇧🇷 Quantidade de trailers na lista.
     *
     * 🇺🇸 Number of trailers in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de trailers, se disponível.
     *
     * 🇺🇸 URL for the next page of trailers, if available.
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de trailers, se disponível.
     *
     * 🇺🇸 URL for the previous page of trailers, if available.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de trailers.
     *
     * 🇺🇸 List of trailers.
     */
    results: GameTrailerArray[];
}
/**
 * 🇧🇷 Representa um post recente sobre o jogo no Reddit.
 *
 * 🇺🇸 Represents a recent post about the game on Reddit.
 */
declare interface GameRecentPostOnRedditArray {
    /**
     * 🇧🇷 Identificador único do post.
     *
     * 🇺🇸 Unique identifier for the post.
     */
    id: number;
    /**
     * 🇧🇷 Nome do post (geralmente o título ou tópico do post).
     *
     * 🇺🇸 Name of the post (usually the title or topic of the post).
     */
    name: string;
    /**
     * 🇧🇷 Texto do post.
     *
     * 🇺🇸 Text content of the post.
     */
    text: string;
    /**
     * 🇧🇷 URL da imagem associada ao post (se houver).
     *
     * 🇺🇸 URL of the image associated with the post (if any).
     */
    image: string;
    /**
     * 🇧🇷 URL para o post no Reddit.
     *
     * 🇺🇸 URL to the post on Reddit.
     */
    url: string;
    /**
     * 🇧🇷 Nome de usuário de quem fez o post.
     *
     * 🇺🇸 Username of the person who made the post.
     */
    username: string;
    /**
     * 🇧🇷 URL do perfil do usuário que fez o post.
     *
     * 🇺🇸 URL to the profile of the user who made the post.
     */
    username_url: string;
    /**
     * 🇧🇷 Data de criação do post.
     *
     * 🇺🇸 Date when the post was created.
     */
    created: string;
}
/**
 * 🇧🇷 Representa uma lista de posts recentes sobre o jogo no Reddit.
 *
 * 🇺🇸 Represents a list of recent posts about the game on Reddit.
 */
declare interface GameRecentPostOnRedditList {
    /**
     * 🇧🇷 Quantidade de posts na lista.
     *
     * 🇺🇸 Number of posts in the list.
     */
    count: number;
    /**
     * 🇧🇷 URL para a próxima página de posts, se disponível.
     *
     * 🇺🇸 URL for the next page of posts, if available.
     */
    next: string | null;
    /**
     * 🇧🇷 URL para a página anterior de posts, se disponível.
     *
     * 🇺🇸 URL for the previous page of posts, if available.
     */
    previous: string | null;
    /**
     * 🇧🇷 Lista de posts recentes sobre o jogo no Reddit.
     *
     * 🇺🇸 List of recent posts about the game on Reddit.
     */
    results: GameRecentPostOnRedditArray[];
}
/**
 * 🇧🇷 Tipo que representa uma lista de jogos similares ao jogo atual, utilizando a estrutura de `GameDetailsList`.
 *
 * 🇺🇸 Type that represents a list of games similar to the current game, using the structure of `GameDetailsList`.
 */
declare type GameSimilarGamesList = GameDetailsList;
/**
 * 🇧🇷 Tipo que representa um stream de jogo no Twitch, com informações detalhadas como título, descrição, contagem de visualizações, entre outras.
 *
 * 🇺🇸 Type that represents a game stream on Twitch, with detailed information such as title, description, view count, and more.
 */
declare interface GameTwitchStreamsList {
    /**
     * 🇧🇷 ID único do stream no Twitch.
     *
     * 🇺🇸 Unique ID of the stream on Twitch.
     */
    id: number;
    /**
     * 🇧🇷 ID externo do stream, utilizado para integrar com outras plataformas.
     *
     * 🇺🇸 External ID of the stream, used for integration with other platforms.
     */
    external_id: number;
    /**
     * 🇧🇷 Nome do stream exibido no Twitch.
     *
     * 🇺🇸 Name of the stream displayed on Twitch.
     */
    name: string;
    /**
     * 🇧🇷 Descrição do stream, fornecendo informações adicionais sobre o conteúdo.
     *
     * 🇺🇸 Description of the stream, providing additional information about the content.
     */
    description: string;
    /**
     * 🇧🇷 Data e hora em que o stream foi criado.
     *
     * 🇺🇸 Date and time when the stream was created.
     */
    created: string;
    /**
     * 🇧🇷 Data e hora em que o stream foi publicado no Twitch.
     *
     * 🇺🇸 Date and time when the stream was published on Twitch.
     */
    published: string;
    /**
     * 🇧🇷 URL da miniatura do stream.
     *
     * 🇺🇸 URL of the stream's thumbnail image.
     */
    thumbnail: string;
    /**
     * 🇧🇷 Contagem de visualizações do stream até o momento.
     *
     * 🇺🇸 View count of the stream up to the moment.
     */
    view_count: number;
    /**
     * 🇧🇷 Idioma principal do stream.
     *
     * 🇺🇸 Main language of the stream.
     */
    languague: string;
}
/**
 * 🇧🇷 Tipo que representa um vídeo do YouTube relacionado a um jogo, com informações detalhadas como título, descrição, contagem de visualizações, entre outras.
 *
 * 🇺🇸 Type that represents a YouTube video related to a game, with detailed information such as title, description, view count, and more.
 */
declare interface GameYoutubeVideosList {
    /**
     * 🇧🇷 ID único do vídeo no YouTube.
     *
     * 🇺🇸 Unique ID of the video on YouTube.
     */
    id: number;
    /**
     * 🇧🇷 ID externo do vídeo no YouTube, geralmente usado em links para identificar o vídeo.
     *
     * 🇺🇸 External ID of the video on YouTube, typically used in links to identify the video.
     */
    external_id: string;
    /**
     * 🇧🇷 ID do canal que publicou o vídeo.
     *
     * 🇺🇸 ID of the channel that published the video.
     */
    channel_id: string;
    /**
     * 🇧🇷 Título do canal que publicou o vídeo.
     *
     * 🇺🇸 Title of the channel that published the video.
     */
    channel_title: string;
    /**
     * 🇧🇷 Nome do vídeo.
     *
     * 🇺🇸 Name of the video.
     */
    name: string;
    /**
     * 🇧🇷 Descrição do vídeo, fornecendo mais informações sobre o conteúdo.
     *
     * 🇺🇸 Description of the video, providing more information about the content.
     */
    description: string;
    /**
     * 🇧🇷 Data e hora em que o vídeo foi criado.
     *
     * 🇺🇸 Date and time when the video was created.
     */
    created: string;
    /**
     * 🇧🇷 Contagem de visualizações do vídeo.
     *
     * 🇺🇸 View count of the video.
     */
    view_count: number;
    /**
     * 🇧🇷 Contagem de comentários no vídeo.
     *
     * 🇺🇸 Comments count on the video.
     */
    comments_count: number;
    /**
     * 🇧🇷 Contagem de likes do vídeo.
     *
     * 🇺🇸 Like count of the video.
     */
    like_count: number;
    /**
     * 🇧🇷 Contagem de dislikes do vídeo.
     *
     * 🇺🇸 Dislike count of the video.
     */
    dislike_count: number;
    /**
     * 🇧🇷 Contagem de favoritos do vídeo.
     *
     * 🇺🇸 Favorite count of the video.
     */
    favorite_count: number;
    /**
     * 🇧🇷 Miniaturas do vídeo. Contém diferentes tamanhos de imagem.
     *
     * 🇺🇸 Thumbnails of the video. Contains different image sizes.
     */
    thumbnails: object;
}
export { AdditionsList, GameAchievementList, GameDetailsList, GameDevelopmentTeamList, GameParentsForDlcAndEditionsList, GameScreenshotsList, GamesList, GamesSameSeriesList, GameStoreLinksList, GameTrailerList, GameRecentPostOnRedditList, GameSimilarGamesList, GameTwitchStreamsList, GameYoutubeVideosList };

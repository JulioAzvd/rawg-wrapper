# 🎮 RAWG API Wrapper for TypeScript

Welcome to **RAWG API Wrapper**! 🚀 This is a powerful and easy-to-use TypeScript wrapper for the RAWG API, allowing you to fetch gaming-related data like games, developers, platforms, and much more! 🎯

---

## ✨ Features

✅ Fetch game details, screenshots, and trailers  
✅ Retrieve developer and publisher information  
✅ Get genre and platform details  
✅ Retrieve creators and their roles  
✅ Fetch related games, series, and DLCs  
✅ Get store links, Twitch streams, and YouTube videos  

---

## 📦 Installation

Install the wrapper using npm:

```sh
npm install rawg-api-wrapper
```

---

## 🚀 Usage

### 📥 Importing the Wrapper

```ts
import RawgWrapper from "rawg-wrapper";

const rawg = new RawgWrapper("YOUR_API_KEY");
```

### 🎮 Fetching Game Details

```ts
(async () => {
    const gameDetails = await rawg.games.getGameDetails(3498);
    console.log(gameDetails);
})();
```

### 🔎 Searching for Games

```ts
(async () => {
    const games = await rawg.games.getGamesList({ search: "The Witcher" });
    console.log(games);
})();
```

### 🏗️ Getting a List of Developers

```ts
(async () => {
    const developers = await rawg.developers.getDevelopersList();
    console.log(developers);
})();
```

### 📸 Fetching a Game's Screenshots

```ts
(async () => {
    const screenshots = await rawg.games.getGameScreenshots(3498);
    console.log(screenshots);
})();
```

---

## 📖 API Methods

### 🎮 Games
- `getGamesList(params?: Partial<GameQueryParams>)` - 🔍 Fetches a list of games
- `getGameDetails(gameId: number | string)` - 📋 Retrieves detailed game info
- `getGameScreenshots(gameId: number | string)` - 📸 Gets in-game screenshots
- `getGameTrailers(gameId: number | string)` - 🎬 Fetches game trailers
- `getGameStoreLinks(gameId: number | string)` - 🏪 Retrieves store links
- `getSimilarGames(gameId: number | string)` - 🔄 Finds similar games
- `getTwitchStreams(gameId: number | string)` - 🎥 Gets live Twitch streams
- `getYoutubeVideos(gameId: number | string)` - ▶️ Fetches related YouTube videos

### 🏗️ Developers
- `getDevelopersList(page?: number, page_size?: number)` - 📜 Retrieves a list of developers
- `getDeveloperDetails(developerId: number | string)` - 🔍 Fetches details of a developer

### 📚 Publishers
- `getPublishersList(page?: number, page_size?: number)` - 📰 Retrieves a list of publishers
- `getPublishersDetails(publisherId: number | string)` - 📋 Gets publisher details

### 🎮 Platforms
- `getPlatformsList(page?: number, page_size?: number, ordering?: string)` - 🖥️ Retrieves platforms
- `getPlatformDetails(platformId: number | string)` - 📝 Fetches platform details

### 🏪 Stores
- `getStoresList(page?: number, page_size?: number, ordering?: string)` - 🏬 Fetches stores list
- `getStoreDetails(storeId: number | string)` - 🛒 Retrieves store details

### 🎭 Creators
- `getCreatorsList(page?: number, page_size?: number)` - 🎤 Lists game creators
- `getCreatorDetails(creatorId: number | string)` - 🧐 Fetches creator details

### 🎨 Genres & Tags
- `getGenresList(page?: number, page_size?: number, ordering?: number)` - 🎭 Retrieves game genres
- `getGenreDetails(genreId: number | string)` - 🗂️ Fetches genre details
- `getTagsList(page?: number, page_size?: number)` - 🔖 Retrieves game tags
- `getTagDetails(tagId: number | string)` - 🏷️ Fetches tag details

### 🏆 Creator Roles
- `getCreatorRoles(page?: number, pageSize?: number)` - 🎬 Retrieves creator roles

---

## ⚠️ Error Handling

This wrapper includes robust error handling using `consola`. If an error occurs, it will output relevant details for debugging. 🛠️

---

## 🤝 Contributing

Contributions are always welcome! 🏆 If you have suggestions, feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**. 📄

---

Made with ❤️ for developers! 🎮🚀
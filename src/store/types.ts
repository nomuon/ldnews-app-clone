export type RootState = {
  version: string;
}

export type Article = {
  id: string;
  title: string;
  venderName: string;
  venderImageUrl: string;
  thumbnailUrl: string | null;
}

export type FavoritesState = {
  favorites: Array<Article>;
}

export type ReadLatersState = {
  readLaters: Array<Article>;
}

export type HistoriesState = {
  histories: Array<Article>;
}
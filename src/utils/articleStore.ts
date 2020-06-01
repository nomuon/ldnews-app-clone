import store from "../store";
import { Article } from "@/store/types";

/**
 * 不要な key を除去して、適したフォーマットに変換する
 */
const formatToArticle = (content: Article): Article => {
  const article = {
    id: content.id,
    title: content.title,
    thumbnailUrl: content.thumbnailUrl,
    venderName: content.venderName,
    venderImageUrl: content.venderImageUrl
  };
  return article;
};

/**
 * 記事idから "履歴" に追加済みか判定
 */
export const checkIsRead = (articleId: string): boolean => {
  const state = store.getters["histories/all"];
  const index = state.findIndex((elm: Article) => {
    return elm.id === articleId;
  });
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * "履歴" に記事を追加する
 */
export const addHistory = (content: Article): void => {
  const article = formatToArticle(content);
  store.dispatch("histories/add", article);
};

/**
 * "履歴" から記事を削除する
 */
export const removeHistory = (content: Article): void => {
  const article = formatToArticle(content);
  store.dispatch("histories/remove", article);
};

/**
 * 記事idから "お気に入り" に追加済みか判定
 */
export const checkIsFavorite = (articleId: string): boolean => {
  const state = store.getters["favorites/all"];
  const index = state.findIndex((elm: Article) => {
    return elm.id === articleId;
  });
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * "お気に入り" の更新（追加 / 削除）
 */
export const updateFavorite = (content: Article, isFavorite: boolean): void => {
  const article = formatToArticle(content);
  if (isFavorite) {
    store.dispatch("favorites/remove", article);
  } else {
    store.dispatch("favorites/add", article);
  }
};

/**
 * 記事idから "あとで読む" に追加済みか判定
 */
export const checkIsReadLater = (articleId: string): boolean => {
  const state = store.getters["readLaters/all"];
  const index = state.findIndex((elm: Article) => {
    return elm.id === articleId;
  });
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * "あとで読む" の更新（追加 / 削除）
 */
export const updateReadLater = (
  content: Article,
  isReadLater: boolean
): void => {
  const article = formatToArticle(content);
  if (isReadLater) {
    store.dispatch("readLaters/remove", article);
  } else {
    store.dispatch("readLaters/add", article);
  }
};

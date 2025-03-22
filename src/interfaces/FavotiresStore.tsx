import DogResponse from "./DogResponse";

export default interface FavoriteStore {
  favorites: DogResponse[];
  addFavorite: (dog: DogResponse) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (dog: DogResponse) => void;
}
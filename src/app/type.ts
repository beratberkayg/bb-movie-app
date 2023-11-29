import { Timestamp } from "firebase/firestore";

export interface MovieType {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  runtime?: number;
}

export interface initialStateProps {
  name: string;
  email: string;
  password: string;
}

export type YorumlarProps = {
  id: string;
  yorum: string;
  kullaniciAd: string;
  kullaniciId: string;
  tarih: Timestamp;
  movieId: number;
  movie: MovieType;
};

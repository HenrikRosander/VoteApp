import { Person } from "./Person";

export interface TripSuggestion {
  _id: string;
  city: string;
  image: string;
  country: string;
  votes?: Person[];
}

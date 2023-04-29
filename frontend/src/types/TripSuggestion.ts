import { Person } from "./person";

export interface TripSuggestion {
  _id: string;
  city: string;
  image: string;
  country: string;
  votes?: Person[];
}

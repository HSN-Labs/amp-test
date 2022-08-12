import { Country } from "../country/Country";

export type League = {
  country?: Country | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};

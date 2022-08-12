import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type LeagueCreateInput = {
  country?: CountryWhereUniqueInput | null;
  name?: string | null;
};

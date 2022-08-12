import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type LeagueUpdateInput = {
  country?: CountryWhereUniqueInput | null;
  name?: string | null;
};

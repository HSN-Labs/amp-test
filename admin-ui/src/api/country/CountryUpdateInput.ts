import { LeagueUpdateManyWithoutCountriesInput } from "./LeagueUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  leagues?: LeagueUpdateManyWithoutCountriesInput;
  name?: string | null;
};

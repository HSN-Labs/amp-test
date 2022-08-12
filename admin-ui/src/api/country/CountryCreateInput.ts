import { LeagueCreateNestedManyWithoutCountriesInput } from "./LeagueCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  leagues?: LeagueCreateNestedManyWithoutCountriesInput;
  name?: string | null;
};

import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeagueWhereInput = {
  country?: CountryWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};

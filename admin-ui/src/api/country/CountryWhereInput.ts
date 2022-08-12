import { StringFilter } from "../../util/StringFilter";
import { LeagueListRelationFilter } from "../league/LeagueListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CountryWhereInput = {
  id?: StringFilter;
  leagues?: LeagueListRelationFilter;
  name?: StringNullableFilter;
};

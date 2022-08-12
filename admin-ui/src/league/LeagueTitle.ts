import { League as TLeague } from "../api/league/League";

export const LEAGUE_TITLE_FIELD = "name";

export const LeagueTitle = (record: TLeague): string => {
  return record.name || record.id;
};

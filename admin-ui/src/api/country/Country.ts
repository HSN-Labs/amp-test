import { League } from "../league/League";

export type Country = {
  createdAt: Date;
  id: string;
  leagues?: Array<League>;
  name: string | null;
  updatedAt: Date;
};

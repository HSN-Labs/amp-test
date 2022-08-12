import { Module } from "@nestjs/common";
import { LeagueModuleBase } from "./base/league.module.base";
import { LeagueService } from "./league.service";
import { LeagueController } from "./league.controller";
import { LeagueResolver } from "./league.resolver";

@Module({
  imports: [LeagueModuleBase],
  controllers: [LeagueController],
  providers: [LeagueService, LeagueResolver],
  exports: [LeagueService],
})
export class LeagueModule {}

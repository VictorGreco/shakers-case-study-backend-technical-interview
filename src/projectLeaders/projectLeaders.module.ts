import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectLeadersControllerV1 } from './projectLeaders.controller';
import { ProjectLeadersService } from './projectLeaders.service';
import {
  ProjectLeader,
  ProjectLeaderSchema,
} from './schemas/projectLeader.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProjectLeader.name, schema: ProjectLeaderSchema },
    ]),
  ],
  controllers: [ProjectLeadersControllerV1],
  providers: [ProjectLeadersService],
})
export class ProjectLeadersModule {}

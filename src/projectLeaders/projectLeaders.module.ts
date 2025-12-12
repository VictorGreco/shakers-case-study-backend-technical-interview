import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectLeadersController } from './projectLeaders.controller';
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
  controllers: [ProjectLeadersController],
  providers: [ProjectLeadersService],
})
export class ProjectLeadersModule {}

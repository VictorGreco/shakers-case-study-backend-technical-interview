import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsControllerV1 } from './skills.controller';
import { SkillsService } from './skills.service';
import { Skill, SkillSchema } from './schemas/skill.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema }]),
  ],
  controllers: [SkillsControllerV1],
  providers: [SkillsService],
})
export class SkillsModule {}

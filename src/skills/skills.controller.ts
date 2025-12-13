import { Body, Controller, Get, Param } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skill } from './schemas/skill.schema';

@Controller({
  path: 'skills',
  version: '1',
})
export class SkillsControllerV1 {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async findAll(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Skill | null> {
    return this.skillsService.findOne(id);
  }
}

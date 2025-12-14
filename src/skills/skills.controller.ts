import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skill } from './schemas/skill.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'skills',
  version: '1',
})
export class SkillsControllerV1 {
  constructor(private readonly skillsService: SkillsService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Skill | null> {
    return this.skillsService.findOne(id);
  }
}

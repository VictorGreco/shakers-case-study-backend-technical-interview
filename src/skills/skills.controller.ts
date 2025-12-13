import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './schemas/skill.schema';

@Controller({
  path: 'skills',
  version: '1',
})
export class SkillsControllerV1 {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  async create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  async findAll(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Skill | null> {
    return this.skillsService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSkillDto: UpdateSkillDto,
  ) {
    return this.skillsService.update(id, updateSkillDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.skillsService.delete(id);
  }
}

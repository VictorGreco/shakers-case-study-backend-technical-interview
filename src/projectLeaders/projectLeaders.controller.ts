import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProjectLeadersService } from './projectLeaders.service';
import { CreateProjectLeaderDto } from './dto/create-projectLeader.dto';
import { UpdateProjectLeaderDto } from './dto/update-projectLeader.dto';
import { ProjectLeader } from './schemas/projectLeader.schema';

@Controller({
  path: 'projectLeaders',
  version: '1',
})
export class ProjectLeadersControllerV1 {
  constructor(private readonly projectLeadersService: ProjectLeadersService) {}

  @Post()
  async create(@Body() createProjectLeaderDto: CreateProjectLeaderDto) {
    return this.projectLeadersService.create(createProjectLeaderDto);
  }

  @Get()
  async findAll(): Promise<ProjectLeader[]> {
    return this.projectLeadersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ProjectLeader | null> {
    return this.projectLeadersService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProjectLeaderDto: UpdateProjectLeaderDto,
  ) {
    return this.projectLeadersService.update(id, updateProjectLeaderDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.projectLeadersService.delete(id);
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';

@Controller({
  path: 'projects',
  version: '1',
})
export class ProjectsControllerV1 {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectsDto: CreateProjectDto) {
    return this.projectsService.create(createProjectsDto);
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project | null> {
    return this.projectsService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProjectsDto: UpdateProjectDto,
  ) {
    return this.projectsService.update(id, updateProjectsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.projectsService.delete(id);
  }
}

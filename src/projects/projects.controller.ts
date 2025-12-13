import { Body, Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';

@Controller({
  path: 'projects',
  version: '1',
})
export class ProjectsControllerV1 {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project | null> {
    return this.projectsService.findOne(id);
  }
}

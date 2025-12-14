import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'projects',
  version: '1',
})
export class ProjectsControllerV1 {
  constructor(private readonly projectsService: ProjectsService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project | null> {
    return this.projectsService.findOne(id);
  }
}

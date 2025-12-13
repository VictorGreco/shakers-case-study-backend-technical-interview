import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';

@Controller('projects')
export class ProjectsController {
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
  async findOne(@Param('id') id: string): Promise<Project | null> {
    return this.projectsService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectsDto: UpdateProjectDto,
  ) {
    return this.projectsService.update(id, updateProjectsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.projectsService.delete(id);
  }
}

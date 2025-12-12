import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';

@Controller('projectss')
export class ProjectsController {
  constructor(private readonly projectssService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectsDto: CreateProjectDto) {
    return this.projectssService.create(createProjectsDto);
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectssService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project | null> {
    return this.projectssService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectsDto: UpdateProjectDto,
  ) {
    return this.projectssService.update(id, updateProjectsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.projectssService.delete(id);
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProjectLeadersService } from './projectLeaders.service';
import { CreateProjectLeaderDto } from './dto/create-projectLeader.dto';
import { UpdateProjectLeaderDto } from './dto/update-projectLeader.dto';
import { ProjectLeader } from './schemas/projectLeader.schema';

@Controller('projectLeaders')
export class ProjectLeadersController {
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
  async findOne(@Param('id') id: string): Promise<ProjectLeader | null> {
    return this.projectLeadersService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectLeaderDto: UpdateProjectLeaderDto,
  ) {
    return this.projectLeadersService.update(id, updateProjectLeaderDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.projectLeadersService.delete(id);
  }
}

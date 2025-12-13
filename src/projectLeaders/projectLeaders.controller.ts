import { Body, Controller, Get, Param } from '@nestjs/common';
import { ProjectLeadersService } from './projectLeaders.service';
import { ProjectLeader } from './schemas/projectLeader.schema';

@Controller({
  path: 'projectLeaders',
  version: '1',
})
export class ProjectLeadersControllerV1 {
  constructor(private readonly projectLeadersService: ProjectLeadersService) {}

  @Get()
  async findAll(): Promise<ProjectLeader[]> {
    return this.projectLeadersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ProjectLeader | null> {
    return this.projectLeadersService.findOne(id);
  }
}

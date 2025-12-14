import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProjectLeadersService } from './projectLeaders.service';
import { ProjectLeader } from './schemas/projectLeader.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'projectLeaders',
  version: '1',
})
export class ProjectLeadersControllerV1 {
  constructor(private readonly projectLeadersService: ProjectLeadersService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<ProjectLeader[]> {
    return this.projectLeadersService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ProjectLeader | null> {
    return this.projectLeadersService.findOne(id);
  }
}

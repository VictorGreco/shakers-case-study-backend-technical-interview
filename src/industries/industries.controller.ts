import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { IndustriesService } from './industries.service';
import { Industrie } from './schemas/industrie.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'industries',
  version: '1',
})
export class IndustriesControllerV1 {
  constructor(private readonly industriesService: IndustriesService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Industrie[]> {
    return this.industriesService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Industrie | null> {
    return this.industriesService.findOne(id);
  }
}

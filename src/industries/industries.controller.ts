import { Body, Controller, Get, Param } from '@nestjs/common';
import { IndustriesService } from './industries.service';
import { Industrie } from './schemas/industrie.schema';

@Controller({
  path: 'industries',
  version: '1',
})
export class IndustriesControllerV1 {
  constructor(private readonly industriesService: IndustriesService) {}

  @Get()
  async findAll(): Promise<Industrie[]> {
    return this.industriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Industrie | null> {
    return this.industriesService.findOne(id);
  }
}

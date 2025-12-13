import { Body, Controller, Get, Param } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { Position } from './schemas/position.schema';

@Controller({
  path: 'positions',
  version: '1',
})
export class PositionsControllerV1 {
  constructor(private readonly positionsService: PositionsService) {}

  @Get()
  async findAll(): Promise<Position[]> {
    return this.positionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Position | null> {
    return this.positionsService.findOne(id);
  }
}

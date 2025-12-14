import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { Position } from './schemas/position.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'positions',
  version: '1',
})
export class PositionsControllerV1 {
  constructor(private readonly positionsService: PositionsService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Position[]> {
    return this.positionsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Position | null> {
    return this.positionsService.findOne(id);
  }
}

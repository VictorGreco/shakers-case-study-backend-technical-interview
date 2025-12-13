import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './schemas/position.schema';

@Controller({
  path: 'positions',
  version: '1',
})
export class PositionsControllerV1 {
  constructor(private readonly positionsService: PositionsService) {}

  @Post()
  async create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionsService.create(createPositionDto);
  }

  @Get()
  async findAll(): Promise<Position[]> {
    return this.positionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Position | null> {
    return this.positionsService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionsService.update(id, updatePositionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.positionsService.delete(id);
  }
}

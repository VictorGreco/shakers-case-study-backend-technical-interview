import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { Subcategorie } from './schemas/subcategorie.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'subcategories',
  version: '1',
})
export class SubcategoriesControllerV1 {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Subcategorie[]> {
    return this.subcategoriesService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Subcategorie | null> {
    return this.subcategoriesService.findOne(id);
  }
}

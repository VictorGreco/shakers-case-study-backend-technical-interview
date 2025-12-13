import { Body, Controller, Get, Param } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { Subcategorie } from './schemas/subcategorie.schema';

@Controller({
  path: 'subcategories',
  version: '1',
})
export class SubcategoriesControllerV1 {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Get()
  async findAll(): Promise<Subcategorie[]> {
    return this.subcategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Subcategorie | null> {
    return this.subcategoriesService.findOne(id);
  }
}

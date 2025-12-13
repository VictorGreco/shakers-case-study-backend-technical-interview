import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './schemas/organization.schema';

@Controller({
  path: 'organizations',
  version: '1',
})
export class OrganizationsControllerV1 {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  async create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  async findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Organization | null> {
    return this.organizationsService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationsService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.organizationsService.delete(id);
  }
}

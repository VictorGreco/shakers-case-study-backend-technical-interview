import { Body, Controller, Get, Param } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization } from './schemas/organization.schema';

@Controller({
  path: 'organizations',
  version: '1',
})
export class OrganizationsControllerV1 {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  async findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Organization | null> {
    return this.organizationsService.findOne(id);
  }
}

import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization } from './schemas/organization.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'organizations',
  version: '1',
})
export class OrganizationsControllerV1 {
  constructor(private readonly organizationsService: OrganizationsService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Organization | null> {
    return this.organizationsService.findOne(id);
  }
}

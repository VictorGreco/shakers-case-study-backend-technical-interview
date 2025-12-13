import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './schemas/organization.schema';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<Organization>,
  ) {}

  async create(
    createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    const createdOrganization = await this.organizationModel.create(
      createOrganizationDto,
    );
    return createdOrganization;
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationModel.find().exec();
  }

  async findOne(id: number): Promise<Organization | null> {
    return this.organizationModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateOrganizationDto: UpdateOrganizationDto,
  ): Promise<Organization | null> {
    return this.organizationModel
      .findByIdAndUpdate({ id }, updateOrganizationDto, { new: true })
      .exec();
  }

  async delete(id: number): Promise<Organization | null> {
    const deletedOrganization = await this.organizationModel
      .findByIdAndDelete({ id })
      .exec();
    return deletedOrganization;
  }
}

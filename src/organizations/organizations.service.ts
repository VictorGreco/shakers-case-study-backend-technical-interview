import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from './schemas/organization.schema';

@Injectable()
export class OrganizationsService {
  private readonly logger = new Logger(OrganizationsService.name);

  constructor(
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<Organization>,
  ) {}

  async findAll(): Promise<Organization[]> {
    this.logger.log('Called find all');

    return this.organizationModel.find().exec();
  }

  async findOne(id: number): Promise<Organization | null> {
    this.logger.log('Called find single');

    return this.organizationModel.findOne({ id }).exec();
  }
}

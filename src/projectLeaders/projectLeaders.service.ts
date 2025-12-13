import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectLeader } from './schemas/projectLeader.schema';

@Injectable()
export class ProjectLeadersService {
  private readonly logger = new Logger(ProjectLeadersService.name);

  constructor(
    @InjectModel(ProjectLeader.name)
    private readonly projectLeaderModel: Model<ProjectLeader>,
  ) {}

  async findAll(): Promise<ProjectLeader[]> {
    this.logger.log('Called find all');

    return this.projectLeaderModel.find().exec();
  }

  async findOne(id: number): Promise<ProjectLeader | null> {
    this.logger.log('Called find single');

    return this.projectLeaderModel.findOne({ id }).exec();
  }
}

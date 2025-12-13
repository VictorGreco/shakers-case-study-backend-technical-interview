import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectsService {
  private readonly logger = new Logger(ProjectsService.name);

  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    this.logger.log('Called find all');

    return this.projectModel.find().exec();
  }

  async findOne(id: number): Promise<Project | null> {
    this.logger.log('Called find single');

    return this.projectModel.findOne({ id }).exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectLeaderDto } from './dto/create-projectLeader.dto';
import { UpdateProjectLeaderDto } from './dto/update-projectLeader.dto';
import { ProjectLeader } from './schemas/projectLeader.schema';

@Injectable()
export class ProjectLeadersService {
  constructor(
    @InjectModel(ProjectLeader.name)
    private readonly projectLeaderModel: Model<ProjectLeader>,
  ) {}

  async create(
    createProjectLeaderDto: CreateProjectLeaderDto,
  ): Promise<ProjectLeader> {
    const createdProjectLeader = await this.projectLeaderModel.create(
      createProjectLeaderDto,
    );
    return createdProjectLeader;
  }

  async findAll(): Promise<ProjectLeader[]> {
    return this.projectLeaderModel.find().exec();
  }

  async findOne(id: number): Promise<ProjectLeader | null> {
    return this.projectLeaderModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateProjectLeaderDto: UpdateProjectLeaderDto,
  ): Promise<ProjectLeader | null> {
    return this.projectLeaderModel
      .findByIdAndUpdate({ id }, updateProjectLeaderDto, { new: true })
      .exec();
  }

  async delete(id: number): Promise<ProjectLeader | null> {
    const deletedProjectLeader = await this.projectLeaderModel
      .findByIdAndDelete({ id })
      .exec();
    return deletedProjectLeader;
  }
}

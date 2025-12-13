import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProject = await this.projectModel.create(createProjectDto);
    return createdProject;
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async findOne(id: number): Promise<Project | null> {
    return this.projectModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project | null> {
    return this.projectModel
      .findByIdAndUpdate({ id }, updateProjectDto, { new: true })
      .exec();
  }

  async delete(id: number): Promise<Project | null> {
    const deletedProject = await this.projectModel
      .findByIdAndDelete({ id })
      .exec();
    return deletedProject;
  }
}

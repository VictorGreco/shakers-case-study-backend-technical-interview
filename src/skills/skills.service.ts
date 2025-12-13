import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './schemas/skill.schema';

@Injectable()
export class SkillsService {
  private readonly logger = new Logger(SkillsService.name);

  constructor(
    @InjectModel(Skill.name) private readonly skillModel: Model<Skill>,
  ) {}

  async findAll(): Promise<Skill[]> {
    this.logger.log('Called find all');

    return this.skillModel.find().exec();
  }

  async findOne(id: number): Promise<Skill | null> {
    this.logger.log('Called find single');

    return this.skillModel.findOne({ id }).exec();
  }
}

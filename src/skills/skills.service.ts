import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './schemas/skill.schema';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skill.name) private readonly skillModel: Model<Skill>,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const createdSkill = await this.skillModel.create(createSkillDto);
    return createdSkill;
  }

  async findAll(): Promise<Skill[]> {
    return this.skillModel.find().exec();
  }

  async findOne(id: number): Promise<Skill | null> {
    return this.skillModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateSkillDto: UpdateSkillDto,
  ): Promise<Skill | null> {
    return this.skillModel
      .findByIdAndUpdate({ id }, updateSkillDto, { new: true })
      .exec();
  }

  async delete(id: number): Promise<Skill | null> {
    const deletedSkill = await this.skillModel.findByIdAndDelete({ id }).exec();
    return deletedSkill;
  }
}

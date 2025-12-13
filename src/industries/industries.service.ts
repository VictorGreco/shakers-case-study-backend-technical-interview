import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIndustrieDto } from './dto/create-industrie.dto';
import { UpdateIndustrieDto } from './dto/update-industrie.dto';
import { Industrie } from './schemas/industrie.schema';

@Injectable()
export class IndustriesService {
  constructor(
    @InjectModel(Industrie.name)
    private readonly industrieModel: Model<Industrie>,
  ) {}

  async create(createIndustrieDto: CreateIndustrieDto): Promise<Industrie> {
    const createdIndustrie =
      await this.industrieModel.create(createIndustrieDto);
    return createdIndustrie;
  }

  async findAll(): Promise<Industrie[]> {
    return this.industrieModel.find().exec();
  }

  async findOne(id: number): Promise<Industrie | null> {
    return this.industrieModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateIndustrieDto: UpdateIndustrieDto,
  ): Promise<Industrie | null> {
    return this.industrieModel
      .findByIdAndUpdate({ id }, updateIndustrieDto, { new: true })
      .exec();
  }

  async delete(id: number): Promise<Industrie | null> {
    const deletedIndustrie = await this.industrieModel
      .findByIdAndDelete({ id })
      .exec();
    return deletedIndustrie;
  }
}

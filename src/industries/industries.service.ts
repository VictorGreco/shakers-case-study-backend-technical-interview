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

  async findOne(id: string): Promise<Industrie | null> {
    return this.industrieModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateIndustrieDto: UpdateIndustrieDto,
  ): Promise<Industrie | null> {
    return this.industrieModel
      .findByIdAndUpdate({ _id: id }, updateIndustrieDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Industrie | null> {
    const deletedIndustrie = await this.industrieModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedIndustrie;
  }
}

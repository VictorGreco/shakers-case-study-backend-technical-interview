import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecialtieDto } from './dto/create-specialtie.dto';
import { UpdateSpecialtieDto } from './dto/update-specialtie.dto';
import { Specialtie } from './schemas/specialtie.schema';

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectModel(Specialtie.name)
    private readonly specialtieModel: Model<Specialtie>,
  ) {}

  async create(createSpecialtieDto: CreateSpecialtieDto): Promise<Specialtie> {
    const createdSpecialtie =
      await this.specialtieModel.create(createSpecialtieDto);
    return createdSpecialtie;
  }

  async findAll(): Promise<Specialtie[]> {
    return this.specialtieModel.find().exec();
  }

  async findOne(id: number): Promise<Specialtie | null> {
    return this.specialtieModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateSpecialtieDto: UpdateSpecialtieDto,
  ): Promise<Specialtie | null> {
    return this.specialtieModel
      .findByIdAndUpdate({ id }, updateSpecialtieDto, { new: true })
      .exec();
  }

  async delete(id: number): Promise<Specialtie | null> {
    const deletedSpecialtie = await this.specialtieModel
      .findByIdAndDelete({ id })
      .exec();
    return deletedSpecialtie;
  }
}

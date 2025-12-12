import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpecialtieDocument = HydratedDocument<Specialtie>;

@Schema()
export class Specialtie {
  @Prop()
  id: number;

  @Prop()
  name: string;
}

export const SpecialtieSchema = SchemaFactory.createForClass(Specialtie);

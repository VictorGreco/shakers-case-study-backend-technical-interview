import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubcategorieDocument = HydratedDocument<Subcategorie>;

@Schema()
export class Subcategorie {
  @Prop()
  id: number;

  @Prop()
  name: string;
}

export const SubcategorieSchema = SchemaFactory.createForClass(Subcategorie);

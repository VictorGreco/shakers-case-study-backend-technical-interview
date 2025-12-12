import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrganizationDocument = HydratedDocument<Organization>;

@Schema()
export class Organization {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  logo: string;

  @Prop()
  industrie: number;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

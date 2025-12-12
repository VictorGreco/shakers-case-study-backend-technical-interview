import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectLeaderDocument = HydratedDocument<ProjectLeader>;

@Schema()
export class ProjectLeader {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  lastName: string;
}

export const ProjectLeaderSchema = SchemaFactory.createForClass(ProjectLeader);

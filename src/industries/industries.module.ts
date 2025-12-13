import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustriesControllerV1 } from './industries.controller';
import { IndustriesService } from './industries.service';
import { Industrie, IndustrieSchema } from './schemas/industrie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Industrie.name, schema: IndustrieSchema },
    ]),
  ],
  controllers: [IndustriesControllerV1],
  providers: [IndustriesService],
})
export class IndustriesModule {}

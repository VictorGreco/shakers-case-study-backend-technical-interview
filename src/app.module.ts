import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsModule } from './skills/skills.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { IndustriesModule } from './industries/industries.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { ProjectLeadersModule } from './projectLeaders/projectLeaders.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log('process.env.MONGODB_CONNECTION_STRING');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING || ''),
    SkillsModule,
    SpecialtiesModule,
    CategoriesModule,
    SubcategoriesModule,
    IndustriesModule,
    OrganizationsModule,
    ProjectLeadersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

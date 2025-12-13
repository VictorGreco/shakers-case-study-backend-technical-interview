import { HttpStatus, INestApplication, VersioningType } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { database, imports } from './constants';
import { ProjectsModule } from '../src/projects/projects.module';

beforeAll(async () => {
  await mongoose.connect(database);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('ProjectsModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...imports, ProjectsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    await app.init();
  });

  it('Get all', () => {
    return request(app.getHttpServer())
      .get('/v1/projects')
      .expect(({ body }) => {
        expect(body).toHaveLength(40);
      })
      .expect(HttpStatus.OK);
  });

  it('Get one', () => {
    return request(app.getHttpServer())
      .get('/v1/projects/1')
      .expect(HttpStatus.OK);
  });
});

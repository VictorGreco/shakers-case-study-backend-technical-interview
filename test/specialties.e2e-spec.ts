import { HttpStatus, INestApplication, VersioningType } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { database, imports } from './constants';
import { SpecialtiesModule } from '../src/specialties/specialties.module';

beforeAll(async () => {
  await mongoose.connect(database);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('SpecialtiesModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...imports, SpecialtiesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    await app.init();
  });

  it('Get all', () => {
    return request(app.getHttpServer())
      .get('/v1/specialties')
      .expect(({ body }) => {
        expect(body).toHaveLength(60);
      })
      .expect(HttpStatus.OK);
  });

  it('Get one', () => {
    return request(app.getHttpServer())
      .get('/v1/specialties/1')
      .expect(({ body }) => {
        expect(body).toMatchObject({
          _id: '693c0d65f4d7ef84cd6a7167',
          id: 1,
          name: 'Full Stack Developer',
        });
      })
      .expect(HttpStatus.OK);
  });
});

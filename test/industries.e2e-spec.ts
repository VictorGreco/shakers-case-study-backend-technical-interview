import { HttpStatus, INestApplication, VersioningType } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { database, imports } from './constants';
import { IndustriesModule } from '../src/industries/industries.module';

beforeAll(async () => {
  await mongoose.connect(database);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('INdustries (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...imports, IndustriesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    await app.init();
  });

  it('Get all', () => {
    return request(app.getHttpServer())
      .get('/v1/industries')
      .expect(({ body }) => {
        expect(body).toHaveLength(60);
      })
      .expect(HttpStatus.OK);
  });

  it('Get one', () => {
    return request(app.getHttpServer())
      .get('/v1/industries/1')
      .expect(({ body }) => {
        expect(body).toMatchObject({
          _id: '693c0d7bf4d7ef84cd6a71a5',
          id: 1,
          name: 'Software Development',
        });
      })
      .expect(HttpStatus.OK);
  });
});

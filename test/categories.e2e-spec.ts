import { HttpStatus, INestApplication, VersioningType } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { database, imports } from './constants';
import { CategoriesModule } from '../src/categories/categories.module';

beforeAll(async () => {
  await mongoose.connect(database);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('CategoriesModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...imports, CategoriesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    await app.init();
  });

  it('Get all', () => {
    return request(app.getHttpServer())
      .get('/v1/categories')
      .expect(({ body }) => {
        expect(body).toHaveLength(15);
      })
      .expect(HttpStatus.OK);
  });

  it('Get one', () => {
    return request(app.getHttpServer())
      .get('/v1/categories/1')
      .expect(({ body }) => {
        expect(body).toMatchObject({
          _id: '693c0d8df4d7ef84cd6a71e3',
          id: 1,
          name: 'Software Development',
        });
      })
      .expect(HttpStatus.OK);
  });
});

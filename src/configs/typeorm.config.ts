import { TypeOrmModule } from '@nestjs/typeorm';
import { createConnection, Connection } from 'typeorm';

export const typeOrmConfig = (): TypeOrmModule => {
  if (process.env.NODE_ENV === 'development') require('dotenv/config');
  return {
    type: 'postgres',
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
    synchronize: false,
    logging: process.env.NODE_ENV === 'development' ? true : false,
    autoLoadEntities: true,
  } as TypeOrmModule
};

export const createTestConnection = (): Promise<Connection> => {
  if (process.env.NODE_ENV === 'development') require('dotenv/config');

  if (process.env.NODE_ENV === 'production')
    throw new Error('Only in development')

  return createConnection({
    type: 'postgres',
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_SCHEMA}`,
    entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
    dropSchema: false,
    synchronize: false,
    logging: true,
  })
};

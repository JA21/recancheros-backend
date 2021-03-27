import { registerAs } from "@nestjs/config";

export default registerAs('typeorm', () => {


  const {
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE, } = process.env

  console.log(
    "DB_TYPE: ", DB_TYPE,
    "DB_HOST: ", DB_HOST,
    "DB_PORT: ", DB_PORT,
    "DB_USERNAME: ", DB_USERNAME,
    "DB_PASSWORD: ", DB_PASSWORD,
    "DB_DATABASE: ", DB_DATABASE,
  )

  const configDefault = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['dist/entities/**/*.entity.js']
  }

  return {
    user: {
      ...configDefault,
    }
  }
})
import {config} from 'dotenv';
config();


export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const DB_NAME = process.env.DB_NAME;
export const USER = process.env.USER;
export const PASSWORD = process.env.PASSWORD;
export const DB_PORT = process.env.DB_PORT;
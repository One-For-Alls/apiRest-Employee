import { createPool } from 'mysql2/promise';
import { HOST, USER, PASSWORD, DB_PORT, DB_NAME} from './config.js';

export const pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: DB_PORT,
    database: DB_NAME
});

import { Pool } from 'pg';
import { config } from 'dotenv';
config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
});

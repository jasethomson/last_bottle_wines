import dotenv from 'dotenv';
dotenv.config();

import app from './app/index.js';

(async () => await app())();
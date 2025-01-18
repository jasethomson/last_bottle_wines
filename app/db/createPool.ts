import pg from 'pg';

const createPool = (): pg.Pool => (new pg.Pool({
        host: process.env.DB_HOST,
        database: process.env.DB,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT)
}));

export default createPool;
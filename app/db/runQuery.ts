import { createPool } from '.';
import pg from 'pg';

interface RunQuery {
    query: string;
}

const runQuery = async ({ query }: RunQuery): Promise<pg.QueryResult> => {
    try {
        const pool = createPool();
        const queryResult = await pool.query(query);
        return queryResult;
    } catch (err) {
        throw new Error(`Error: ${err}, while running query: ${query}`);
    }
}

export default runQuery;
import { QueryResult } from 'pg';
import { logTool } from '../utils';
import { pool } from '.';

interface Query {
  queryText: string;
}

export const query = async ({ queryText }: Query): Promise<QueryResult> => {
  try {
    const start = Date.now();
    const res = await pool.query(queryText);
    const duration = Date.now() - start;
    logTool({ msg: ['Query - executed query', { queryText, duration, rows: res.rowCount }] });
    return res;
  } catch (err) {
    logTool({ msg: ['Query - error executing query', { err: err.message, queryText }] });
    throw err;
  }
};

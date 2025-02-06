import { QueryResult } from 'pg';
import { logTool } from '../utils';
import { pool } from '.';

interface Query {
  queryText: string;
  variables?: (string | number)[];
}

export const query = async ({ queryText, variables = [] }: Query): Promise<QueryResult> => {
  if (!queryText) {
    logTool({ msg: ['query - Invalid arguments received.', queryText] });
    throw new Error('query - Invalid arguments received.');
  }
  try {
    const start = Date.now();
    const res = await pool.query(queryText, variables);
    const duration = Date.now() - start;
    logTool({ msg: ['Query - executed query', { queryText, duration, rows: res.rowCount }] });
    return res;
  } catch (err) {
    logTool({ msg: ['Query - error executing query', { err: err.message, queryText }] });
    throw err;
  }
};

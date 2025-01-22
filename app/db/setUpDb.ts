import { Client } from 'pg';
import { logTool } from '../utils';
import { createDbTables } from '.';

const getClient = async () => {
  return new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
};

interface DbClient {
  client: Client;
}

const connectCLient = async ({ client }: DbClient) => {
  await client.connect();
};

const closeClient = async ({ client }: DbClient) => {
  await client.end();
};

export const createDb = async ({ client }: DbClient) => {
  if (!process.env.DB) {
    throw new Error('createDb - no db found in env.');
  }
  try {
    await clientQuery({
      client,
      queryText: `CREATE DATABASE ${process.env.DB};`,
    });
  } catch (err) {
    logTool({ msg: ['createDb - Error creating db.', err.message] });
    throw err;
  }
};

interface ClientQuery {
  client: Client;
  queryText: string;
  variables?: (string | number)[];
}

export const clientQuery = async ({ client, queryText, variables }: ClientQuery) => {
  if (!client || !queryText) {
    logTool({ msg: ['clientQuery - Invalid arguments received.', client, queryText] });
    throw new Error('clientQuery - Invalid arguments received.');
  }
  try {
    const start = Date.now();
    const res = await client.query(queryText, variables);
    const duration = Date.now() - start;
    logTool({ msg: ['clientQuery - executed query', { queryText, duration, rows: res.rowCount }] });
    return res;
  } catch (err) {
    logTool({ msg: [`clientQuery - Error querying ${queryText} with error:`, err.message] });
    throw err;
  }
};

export const verifyDbExists = async () => {
  const client = await getClient();
  await connectCLient({ client });
  try {
    const { rowCount } = await clientQuery({
      client,
      queryText: 'SELECT datname FROM pg_database WHERE datname = $1;',
      variables: [process.env.DB],
    });
    const shouldSetUpDb = rowCount === 0;
    if (shouldSetUpDb) {
      await createDb({ client });
      await closeClient({ client });
      await createDbTables();
    } else {
      await closeClient({ client });
    }
  } catch (err) {
    await closeClient({ client });
    logTool({ msg: ['lookUpDb- Error looking up db.', err.message] });
    throw err;
  }
};

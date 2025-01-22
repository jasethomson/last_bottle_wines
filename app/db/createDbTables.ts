// import { Client } from 'pg';
import { logTool } from '../utils';
import { query } from '.';
// interface CreateDbTables {
//   client: Client;
// }

export const createBottleTracker = async (): Promise<void> => {
  try {
    await query({
      queryText: `
                CREATE TABLE bottle_tracker (
                    id BIGSERIAL PRIMARY KEY,
                    name varchar(750) NOT NULL,
                    description text,
                    created timestamptz default NULL,
                    updated timestamptz default NULL
                );
            `,
    });
  } catch (err) {
    logTool({ msg: ['createBottleTracker - Error creating bottle_tracker.', err.message] });
    throw err;
  }
};

export const createBottleDetails = async (): Promise<void> => {
  try {
    await query({
      queryText: `
        CREATE TABLE bottle_details (
            id BIGSERIAL PRIMARY KEY,
            bottle_tracker_id BIGINT REFERENCES bottle_tracker NOT NULL,
            rating varchar(100),
            country varchar(250),
            appellation varchar(100),
            alcohol varchar(100),
            aging_cooperage varchar(500),
            ta varchar(100),
            farming varchar(500),
            vineyard varchar(250),
            region varchar(250),
            varietal varchar(100),
            wine_maker varchar(250),
            ph varchar(100),
            blend varchar(255),
            harvest_date varchar(255),
            production varchar(100),
            created timestamptz default NULL,
            updated timestamptz default NULL
        );
    `,
    });
  } catch (err) {
    logTool({ msg: ['createBottleDetails - Error creating bottle_details.', err.message] });
    throw err;
  }
};

export const createBottlePricing = async (): Promise<void> => {
  try {
    await query({
      queryText: `
            CREATE TABLE bottle_pricing (
                id BIGSERIAL PRIMARY KEY,
                bottle_tracker_id BIGINT REFERENCES bottle_tracker NOT NULL,
                price integer,
                retail_price integer,
                web_price integer,
                created timestamptz default NULL,
                updated timestamptz default NULL
            );
      `,
    });
  } catch (err) {
    logTool({ msg: ['createBottlePricing - Error creating bottle_tracker.', err.message] });
    throw err;
  }
};

export const createDbTables = async (): Promise<void> => {
  try {
    await createBottleTracker();
    await createBottleDetails();
    await createBottlePricing();
  } catch (err) {
    logTool({ msg: ['Error creating db tables.', err.message] });
    throw err;
  }
};

export default createDbTables;

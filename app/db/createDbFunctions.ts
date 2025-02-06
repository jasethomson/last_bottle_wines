import { logTool } from '../utils';
import { query } from '.';

export const createUpdateTimestampCol = async (): Promise<void> => {
  try {
    await query({
      queryText: `
        CREATE FUNCTION update_timestamp_col()
        RETURNS TRIGGER AS $$
        BEGIN 
          NEW.updated = now(); 
          RETURN NEW; 
        END; 
        $$ language 'plpgsql';
      `,
    });
  } catch (err) {
    logTool({ msg: ['createUpdateTimestampCol - Error creating update_timestamp_col.', err.message] });
    throw err;
  }
};

export const createDbFunctions = async (): Promise<void> => {
  try {
    await createUpdateTimestampCol();
  } catch (err) {
    logTool({ msg: ['Error creating db functions.', err.message] });
    throw err;
  }
};

import fs from 'fs';
import path from 'path';

import { BottleTrackerJsonRow } from '../../types';
import { logTool } from '../utils';
import { read } from '.';

interface Write {
  dbName?: string;
  data: Omit<BottleTrackerJsonRow, 'id'>;
}

const write = async ({ data, dbName = process.env.JSON_DB_FILE_NAME }: Write): Promise<number> => {
  if (!data) {
    logTool({ color: 'yellow', msg: ['No data found '] });
    throw new Error('json_db.write - No data to write');
  }
  try {
    let currentData: BottleTrackerJsonRow[] = [];
    try {
      currentData = await read({ dbName: dbName });
    } catch (err) {
      if (err.message.includes('no such file')) {
        logTool({ color: 'yellow', msg: ['No db file found, creating new db file.'] });
      } else {
        throw err;
      }
    }
    const latestId = currentData?.[currentData.length - 1]?.id || 0;
    const dataRowToStore = {
      id: latestId,
      ...data,
    };
    const dataToStore = [...currentData, dataRowToStore];
    fs.writeFileSync(path.resolve(__dirname, dbName), JSON.stringify(dataToStore));
    logTool({ color: 'magenta', msg: ['Data Saved'] });
    return dataRowToStore.id;
  } catch (err) {
    logTool({ color: 'red', msg: ['Failed to write data:', err] });
    throw err;
  }
};

export default write;

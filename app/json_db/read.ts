import fs from'fs';
import path from 'path';

import { logTool } from "../utils";
import { BottleTrackerJsonRow } from '../../types';

interface Read {
    dbName?: string;
}

const read = async ({ dbName = process.env.JSON_DB_FILE_NAME }: Read): Promise<BottleTrackerJsonRow[]> => {
    try {
        const data = fs.readFileSync(path.resolve(__dirname, dbName), 'utf8');
        return JSON.parse(data);
    } catch (err) {
        logTool({ color: 'red', msg: ["Failed to read data:", err]});
        throw err;
    }
};

export default read;
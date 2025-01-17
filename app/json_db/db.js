import fs from'fs';
import path from 'path';

import { logTool } from '../utils';



export const readDB = async (dbName = process.env.JSON_DB_FILE_NAME) => {
    try {
        const data = fs.readFileSync(path.resolve(__dirname, dbName), 'utf8');
        return JSON.parse(data);
    } catch (err) {
        logTool({ color: 'red', msg: ["Failed to read data:", err]});
        throw err;
    }
}

export const writeDB = async (data, dbName = process.env.JSON_DB_FILE_NAME) => {
    if (!data) return logTool({ color: 'yellow', msg: ["No data found "]});
    try {
        let currentData = [];
        try {
            currentData = await readDB();
        } catch (err) {
            if (err.message.includes('no such file')) {
                logTool({ color: 'yellow', msg: ['No db file found, creating new db file.']});
            } else {
                throw err;
            }
        }
        const latestId = currentData?.[currentData.length - 1]?.id || 0;
        data.id = latestId + 1;
        const dataToStore = [
            ...currentData,
            data
        ];
        fs.writeFileSync(path.resolve(__dirname, dbName), JSON.stringify(dataToStore));
        logTool({ color: 'magenta', msg: ["Data Saved"]});
    } catch (err) {
        logTool({ color: 'red', msg: ["Failed to write data:", err]});
        throw err;
    }
}
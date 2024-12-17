import fs from'fs';


export const readDB = async (nameDB = process.env.JSON_DB_FILE_NAME) => {
    try {
        const data = fs.readFileSync(nameDB, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Failed to read data:", err);
        throw err;
    }
}

export const writeDB = async (data, nameDB = process.env.JSON_DB_FILE_NAME) => {
    if (!data) return console.log('No data Found');
    try {
        const currentData = await readDB();
        const latestId = currentData?.[currentData.length - 1]?.id || 0;
        data.id = latestId + 1;
        const dataToStore = [
            ...currentData,
            data
        ];
        fs.writeFileSync(nameDB, JSON.stringify(dataToStore));
        console.log("Data Saved");
    } catch (err) {
        console.error("Failed to write data:", err);
        throw err;
    }
}
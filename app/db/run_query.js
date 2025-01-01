import { createPool } from "./connect_pool.js";

export const runQuery = async (query) => {
    try {
        const pool = createPool();
        const queryResult = await pool.query(query);
        return queryResult.rows;
    } catch (err) {
        throw new Error(`Error: ${err}, while running query: ${query}`);
    }
}
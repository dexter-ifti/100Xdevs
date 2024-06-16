import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertQuery = 'INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *';

    const res = await client.query(insertQuery, [username, password, name]);

    return res.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const selectQuery = 'SELECT * FROM users WHERE id = $1';

    const res = await client.query(selectQuery, [userId]);

    return res.rows[0];
}

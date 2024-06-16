import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const insertQuery = `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`;

    const res = await client.query(insertQuery, [userId, title, description]);

    return res.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updateQuery = `UPDATE todos SET done = true WHERE id = $1 RETURNING *`;

    const res = await client.query(updateQuery, [todoId]);

    return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const selectQuery = `SELECT * FROM todos WHERE user_id = $1`;

    const res = await client.query(selectQuery, [userId]);

    return res.rows;
}
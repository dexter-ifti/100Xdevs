import {Client} from 'pg';

const client = new Client({
  connectionString:
    "postgresql://archonbumper:BsXcAg5LP1Zm@ep-dawn-mouse-49725939.us-east-2.aws.neon.tech/ifti?sslmode=require",
});


async function getUserWithAddress(userId: string){
    await client.connect();
    
    try {
        const query = `SELECT userId.id, u.username, u.email, a.city, a.country, a.street, a.pincode
        FROM users u
        JOIN addresses a ON u.id = a.user_id
        WHERE u.id = $1`;

        const res = await client.query(query, [userId]);

        if(res.rows.length > 0) {
            console.log(`User and Address found: ${res.rows[0]}`);
            return res.rows[0];
        }else {
            console.log(`User and Address not found`);
            return null;
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        throw error;
    } finally {
        await client.end();
    }
}

getUserWithAddress('1');
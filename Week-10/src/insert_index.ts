import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://archonbumper:BsXcAg5LP1Zm@ep-dawn-mouse-49725939.us-east-2.aws.neon.tech/ifti?sslmode=require",
});

 async function insertData(username: string, email: string, password: string) {
   try {
     await client.connect(); // Ensure client connection is established
     // Use parameterized query to prevent SQL injection
     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
     const values = [username, email, password];
     const res = await client.query(insertQuery, values);
     console.log("Insertion success:", res); // Output insertion result
   } catch (err) {
     console.error("Error during the insertion:", err);
   } finally {
     await client.end(); // Close the client connection
   }
 }

 // Example usage
 insertData("username5", "user5@example.com", "user_password").catch(console.error);